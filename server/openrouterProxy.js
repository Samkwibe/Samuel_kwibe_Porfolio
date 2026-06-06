import { SYSTEM_PROMPT } from '../src/data/samuelContext.js'

const NVIDIA_API_URL = 'https://integrate.api.nvidia.com/v1/chat/completions'
const DEFAULT_MODEL = process.env.NVIDIA_MODEL || 'meta/llama-3.1-8b-instruct'
const FALLBACK_MODELS = [
  DEFAULT_MODEL,
  'mistralai/mistral-7b-instruct-v0.3',
  'google/gemma-2-2b-it'
].filter((model, index, models) => model && models.indexOf(model) === index)

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 20
const rateLimitStore = new Map()

export function getClientId(headers = {}, fallback = 'unknown') {
  const forwardedFor = headers['x-forwarded-for'] || headers['X-Forwarded-For']
  const firstForwardedIp = Array.isArray(forwardedFor)
    ? forwardedFor[0]
    : forwardedFor?.split(',')[0]?.trim()

  return firstForwardedIp || fallback
}

export function checkRateLimit(clientId) {
  const now = Date.now()
  const bucket = rateLimitStore.get(clientId)

  if (!bucket || now > bucket.resetAt) {
    rateLimitStore.set(clientId, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    })
    return { allowed: true }
  }

  if (bucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.ceil((bucket.resetAt - now) / 1000)
    }
  }

  bucket.count += 1
  return { allowed: true }
}

export function normalizeMessages(body) {
  const messages = Array.isArray(body?.messages) ? body.messages : []

  if (messages.length === 0) {
    throw new Error('A message is required.')
  }

  return messages
    .filter(message => ['user', 'assistant'].includes(message?.role))
    .slice(-12)
    .map(message => ({
      role: message.role,
      content: String(message.content || '').slice(0, 4000)
    }))
    .filter(message => message.content.trim())
}

export async function createNvidiaResponse({ messages }) {
  const apiKey = process.env.NVIDIA_API_KEY

  if (!apiKey) {
    throw new Error('NVIDIA API key is not configured on the server.')
  }

  let lastError

  for (const model of FALLBACK_MODELS) {
    try {
      const response = await fetch(NVIDIA_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages
          ],
          stream: true,
          max_tokens: 1024,
          temperature: 0.7
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error?.message || `NVIDIA API error: ${response.status}`)
      }

      return { response, model }
    } catch (err) {
      lastError = err
    }
  }

  throw new Error(lastError?.message || 'No AI provider was available.')
}

export async function readResponseText(response) {
  if (!response.body) {
    return ''
  }

  if (typeof response.body.getReader === 'function') {
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let text = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      text += decoder.decode(value, { stream: true })
    }

    return text + decoder.decode()
  }

  let text = ''
  for await (const chunk of response.body) {
    text += chunk.toString()
  }
  return text
}
