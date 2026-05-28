import {
  checkRateLimit,
  createOpenRouterResponse,
  getClientId,
  normalizeMessages,
  readResponseText
} from '../../server/openrouterProxy.js'

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: { Allow: 'POST, OPTIONS' },
      body: ''
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST, OPTIONS' },
      body: JSON.stringify({ error: 'Method not allowed.' })
    }
  }

  try {
    const clientId = getClientId(event.headers, event.requestContext?.identity?.sourceIp)
    const rateLimit = checkRateLimit(clientId)

    if (!rateLimit.allowed) {
      return {
        statusCode: 429,
        headers: { 'Retry-After': String(rateLimit.retryAfter) },
        body: JSON.stringify({ error: 'Too many AI requests. Please try again soon.' })
      }
    }

    const body = event.body ? JSON.parse(event.body) : {}
    const messages = normalizeMessages(body)
    const { response, model } = await createOpenRouterResponse({
      messages,
      origin: event.headers.origin || event.headers.referer
    })
    const streamText = await readResponseText(response)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-AI-Model': model
      },
      body: streamText
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: err.message || 'The AI service is unavailable.'
      })
    }
  }
}
