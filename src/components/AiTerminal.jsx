import { useState, useRef, useEffect, useCallback } from 'react'

const AI_CHAT_API_URLS = Array.from(new Set([
  '/api/chat',
  `${import.meta.env.BASE_URL}api/chat`
]))

const ASCII_BANNER = `
 ╔══════════════════════════════════════════════════════╗
 ║          SAMUEL KWIBE — PORTFOLIO TERMINAL           ║
 ║  AI-powered interface • Type 'help' to get started   ║
 ╚══════════════════════════════════════════════════════╝`

const SUGGESTED_PROMPTS = [
  'What makes Samuel a strong software engineering candidate?',
  'What projects show Samuel has full-stack experience?',
  'Explain REST APIs in simple terms',
  'How can I contact Samuel?'
]

const BUILT_IN_COMMANDS = {
  help: () => `Available commands:
  help       — Show this help message
  projects   — List featured projects
  skills     — Show technical skills
  contact    — Show contact information
  about      — Quick bio
  clear      — Clear terminal history
  
Or just type any question and the AI will answer!
Examples:
  "What ML projects has Samuel built?"
  "Tell me about his cloud experience"
  "What's his tech stack?"
  "Explain REST APIs in simple terms"`,

  about: () => `Samuel Kwibe
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Computer Science Student • Full-Stack Developer • ML Enthusiast
SNHU | GPA: 3.226/4.0 | Manchester, NH

Building reliable cloud apps, clean UIs, and practical AI.
25+ projects spanning web, mobile, ML, graphics, and DevOps.

Type a question to learn more, or try 'projects' / 'skills'.`,

  contact: () => `Contact Information
━━━━━━━━━━━━━━━━━━━━━━━━━━━
  EMAIL     Samuelkwibe@snhu.edu
  PHONE     (603) 670-6761
  GITHUB    github.com/Samkwibe
  LINKEDIN  linkedin.com/in/samuel-kwibe`,

  skills: () => `Technical Skills
━━━━━━━━━━━━━━━━━━━━━━━━━━━
  LANGUAGES    Python, JavaScript/TypeScript, Java, C++, C#, Kotlin, SQL
  FRONTEND     React, Next.js, SvelteKit, React Native, Tailwind CSS
  BACKEND      Node.js, Express, Spring Boot, Firebase, Prisma
  DATABASES    PostgreSQL, MongoDB, MySQL, Firestore
  CLOUD/DEVOPS AWS, Docker, GitHub Actions, CI/CD
  ML/AI        scikit-learn, pandas, NumPy, Matplotlib
  TOOLS        Git, Android Studio, OpenGL, OWASP`,

  projects: () => `Featured Projects
━━━━━━━━━━━━━━━━━━━━━━━━━━━
  01  LegacyLift           AI code modernization (Senior Capstone)
  02  Ziganya              Enterprise fintech platform
  03  SkillRise            Next.js AI learning platform
  04  Beacon-NH            React refugee resource platform
  05  CS-330 Graphics      OpenGL 3D office building
  06  Food Waste Inventory React + Node barcode scanner
  07  Artemis Financial    Spring Boot security assessment
  08  Family Housing Hub   React + Firebase multilingual
  09  Employee Attrition   ML prediction model (85% acc)
  10  Real-Time Chatroom   SvelteKit + Prisma + Docker
  11  Quick Food Finder    Android Kotlin + Google Maps
  12  SNHU Food Waste      Firebase + Chart.js dashboard

Type "tell me about [project name]" for details on any project.`
}

function TerminalLine({ entry }) {
  if (entry.type === 'banner') {
    return (
      <pre className="text-green-400 text-[10px] sm:text-xs leading-tight text-glow select-none">
        {entry.text}
      </pre>
    )
  }

  if (entry.type === 'system') {
    return (
      <div className="text-slate-500 text-xs py-1 italic">
        {entry.text}
      </div>
    )
  }

  if (entry.type === 'user') {
    return (
      <div className="flex gap-2 py-1">
        <span className="text-green-400 shrink-0 font-bold">visitor@samuel ~$</span>
        <span className="text-green-300">{entry.text}</span>
      </div>
    )
  }

  if (entry.type === 'ai' || entry.type === 'builtin') {
    return (
      <div className="py-2 pl-2 border-l-2 border-green-500/20 ml-1">
        <pre className="text-slate-300 text-sm whitespace-pre-wrap font-mono leading-relaxed">
          {entry.text}
          {entry.streaming && (
            <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-0.5 align-middle" />
          )}
        </pre>
      </div>
    )
  }

  if (entry.type === 'error') {
    return (
      <div className="py-1 text-red-400 text-sm">
        ⚠ {entry.text}
      </div>
    )
  }

  return null
}

export default function AiTerminal() {
  const [history, setHistory] = useState([
    { type: 'banner', text: ASCII_BANNER },
    { type: 'system', text: 'Terminal initialized. Connected to AI backend via NVIDIA.' },
    { type: 'system', text: 'Type "help" for available commands, or ask any question.' },
  ])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [conversationMessages, setConversationMessages] = useState([])
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus()
  }, [isStreaming])

  const addEntry = useCallback((entry) => {
    setHistory(prev => [...prev, entry])
  }, [])

  const updateLastEntry = useCallback((updater) => {
    setHistory(prev => {
      const next = [...prev]
      const last = next[next.length - 1]
      next[next.length - 1] = typeof updater === 'function' ? updater(last) : { ...last, ...updater }
      return next
    })
  }, [])

  const handleStreamingResponse = useCallback(async (userMessage) => {
    const newMessages = [
      ...conversationMessages,
      { role: 'user', content: userMessage }
    ]

    // Add a placeholder AI entry
    addEntry({ type: 'ai', text: '', streaming: true })
    setIsStreaming(true)

    try {
      const requestBody = JSON.stringify({ messages: newMessages })
      let response
      let lastError

      for (const apiUrl of AI_CHAT_API_URLS) {
        try {
          const candidateResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: requestBody
          })

          if (!candidateResponse.ok) {
            const errorData = await candidateResponse.json().catch(() => ({}))
            throw new Error(errorData.error || `AI backend error: ${candidateResponse.status}`)
          }

          response = candidateResponse
          break
        } catch (err) {
          lastError = err
        }
      }

      if (!response) {
        throw lastError || new Error('The AI backend is unavailable.')
      }

      if (!response.body) {
        throw new Error('The AI backend did not return a response stream.')
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n').filter(line => line.startsWith('data: '))

        for (const line of lines) {
          const data = line.slice(6).trim()
          if (data === '[DONE]') continue

          try {
            const parsed = JSON.parse(data)

            if (parsed.error) {
              throw new Error(parsed.error.message || 'The AI provider returned a stream error.')
            }

            const delta = parsed.choices?.[0]?.delta?.content
            if (delta) {
              fullText += delta
              updateLastEntry({ text: fullText, streaming: true })
            }
          } catch (err) {
            if (err instanceof SyntaxError) {
              continue
            }

            throw err
          }
        }
      }

      if (!fullText.trim()) {
        throw new Error('The AI provider did not return a response. Please try again.')
      }

      // Finalize
      updateLastEntry({ text: fullText, streaming: false })
      setConversationMessages([
        ...newMessages,
        { role: 'assistant', content: fullText }
      ])
    } catch (err) {
      const message = err.message?.includes('Failed to fetch')
        ? 'The AI backend is not available. Deploy with /api/chat support and set NVIDIA_API_KEY on the server.'
        : err.message

      updateLastEntry({ type: 'error', text: message, streaming: false })
    } finally {
      setIsStreaming(false)
    }
  }, [conversationMessages, addEntry, updateLastEntry])

  const submitPrompt = useCallback((value) => {
    const trimmed = value.trim()
    if (!trimmed || isStreaming) return

    setInput('')

    // Add user input to history
    addEntry({ type: 'user', text: trimmed })

    const cmd = trimmed.toLowerCase()

    // Handle clear
    if (cmd === 'clear') {
      setHistory([
        { type: 'banner', text: ASCII_BANNER },
        { type: 'system', text: 'Terminal cleared.' },
      ])
      setConversationMessages([])
      return
    }

    // Handle built-in commands
    if (BUILT_IN_COMMANDS[cmd]) {
      addEntry({ type: 'builtin', text: BUILT_IN_COMMANDS[cmd]() })
      return
    }

    // Send to AI
    handleStreamingResponse(trimmed)
  }, [isStreaming, addEntry, handleStreamingResponse])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    submitPrompt(input)
  }, [input, submitPrompt])

  return (
    <div
      className="flex-1 flex flex-col w-full max-w-5xl mx-auto px-4 py-6 lg:py-10"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Window */}
      <div className="flex-1 flex flex-col bg-[#030306] border border-green-500/30 rounded-none overflow-hidden shadow-[0_0_40px_rgba(74,222,128,0.08)] border-glow min-h-0">

        {/* Title Bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-[#0a0a0e] border-b border-green-500/20 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center text-xs text-slate-500 uppercase tracking-[0.3em]">
            samuel@portfolio — ai-terminal
          </div>
          <div className="text-[10px] text-green-500/60 font-mono">
            {isStreaming ? '● STREAMING' : '● READY'}
          </div>
        </div>

        {/* Terminal Output */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 lg:p-6 font-mono text-sm space-y-1 min-h-0"
          style={{ scrollBehavior: 'smooth' }}
        >
          {history.map((entry, i) => (
            <TerminalLine key={i} entry={entry} />
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="shrink-0 border-t border-green-500/20 bg-[#050508] px-4 py-3 flex items-center gap-2"
        >
          <span className="text-green-400 font-bold text-sm shrink-0">visitor@samuel ~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isStreaming}
            placeholder={isStreaming ? 'Waiting for response...' : 'Type a command or question...'}
            className="flex-1 bg-transparent border-none outline-none text-green-300 text-sm placeholder:text-slate-600 caret-green-400 font-mono disabled:opacity-50"
            autoComplete="off"
            spellCheck="false"
            id="ai-terminal-input"
          />
          {isStreaming && (
            <div className="w-2 h-4 bg-green-400 animate-pulse shrink-0" />
          )}
        </form>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            disabled={isStreaming}
            onClick={(e) => {
              e.stopPropagation()
              submitPrompt(prompt)
            }}
            className="border border-green-500/30 bg-green-400/5 px-3 py-2 text-[11px] text-green-300 font-mono hover:bg-green-400 hover:text-black hover:border-green-300 disabled:opacity-40 disabled:hover:bg-green-400/5 disabled:hover:text-green-300 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Footer hint */}
      <div className="text-center text-[10px] text-slate-600 mt-3 font-mono">
        Powered by NVIDIA AI • Responses are generated and may not be 100% accurate
      </div>
    </div>
  )
}
