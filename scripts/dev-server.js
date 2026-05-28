import http from 'node:http'
import { createServer as createViteServer, loadEnv } from 'vite'
import {
  checkRateLimit,
  createOpenRouterResponse,
  getClientId,
  normalizeMessages,
  readResponseText
} from '../server/openrouterProxy.js'

const port = Number(process.env.PORT || 5173)
const host = process.env.HOST || '127.0.0.1'
const env = loadEnv('', process.cwd(), '')

for (const [key, value] of Object.entries(env)) {
  process.env[key] ??= value
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let rawBody = ''

    req.on('data', chunk => {
      rawBody += chunk
    })
    req.on('end', () => {
      try {
        resolve(rawBody ? JSON.parse(rawBody) : {})
      } catch (err) {
        reject(err)
      }
    })
    req.on('error', reject)
  })
}

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'spa'
})

async function handleChatRequest(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405, {
      Allow: 'POST',
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({ error: 'Method not allowed.' }))
    return
  }

  try {
    const clientId = getClientId(req.headers, req.socket?.remoteAddress)
    const rateLimit = checkRateLimit(clientId)

    if (!rateLimit.allowed) {
      res.writeHead(429, {
        'Retry-After': String(rateLimit.retryAfter),
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({ error: 'Too many AI requests. Please try again soon.' }))
      return
    }

    const body = await readJsonBody(req)
    const messages = normalizeMessages(body)
    const { response, model } = await createOpenRouterResponse({
      messages,
      origin: `http://${host}:${port}`
    })
    const streamText = await readResponseText(response)

    res.writeHead(200, {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-AI-Model': model
    })
    res.end(streamText)
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      error: err.message || 'The AI service is unavailable.'
    }))
  }
}

http.createServer((req, res) => {
  if (req.url?.startsWith('/api/chat') || req.url?.startsWith('/Samuel_kwibe_Porfolio/api/chat')) {
    handleChatRequest(req, res)
    return
  }

  vite.middlewares(req, res)
}).listen(port, host, () => {
  console.log(`Portfolio dev server running at http://${host}:${port}/Samuel_kwibe_Porfolio/`)
})
