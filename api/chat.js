import {
  checkRateLimit,
  createOpenRouterResponse,
  getClientId,
  normalizeMessages,
  readResponseText
} from '../server/openrouterProxy.js'

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body)
  }

  let rawBody = ''
  for await (const chunk of req) {
    rawBody += chunk
  }

  return rawBody ? JSON.parse(rawBody) : {}
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS')
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    res.status(405).json({ error: 'Method not allowed.' })
    return
  }

  try {
    const clientId = getClientId(req.headers, req.socket?.remoteAddress)
    const rateLimit = checkRateLimit(clientId)

    if (!rateLimit.allowed) {
      res.setHeader('Retry-After', String(rateLimit.retryAfter))
      res.status(429).json({ error: 'Too many AI requests. Please try again soon.' })
      return
    }

    const body = await readJsonBody(req)
    const messages = normalizeMessages(body)
    const { response, model } = await createOpenRouterResponse({
      messages,
      origin: req.headers.origin || req.headers.referer
    })
    const streamText = await readResponseText(response)

    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8')
    res.setHeader('Cache-Control', 'no-store')
    res.setHeader('X-AI-Model', model)
    res.status(200).send(streamText)
  } catch (err) {
    res.status(500).json({
      error: err.message || 'The AI service is unavailable.'
    })
  }
}
