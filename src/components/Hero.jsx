import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

const MotionLink = motion(Link)

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorBlink, setCursorBlink] = useState(true)
  const canvasRef = useRef(null)
  const gridRef = useRef(null)

  const rotatingTexts = [
    "FULL-STACK DEVELOPER",
    "CLOUD & AI SPECIALIST", 
    "TECH INNOVATOR",
    "PROBLEM SOLVER",
    "CODE ARCHITECT"
  ]

  // Typewriter effect
  useEffect(() => {
    const current = rotatingTexts[currentText]
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && typedText.length === 0) {
        setIsDeleting(false)
        setCurrentText((prev) => (prev + 1) % rotatingTexts.length)
      } else {
        setTypedText(isDeleting ? current.substring(0, typedText.length - 1) : current.substring(0, typedText.length + 1))
      }
    }, isDeleting ? 30 : 60)

    return () => clearTimeout(timeout)
  }, [typedText, isDeleting, currentText, rotatingTexts])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorBlink(prev => !prev)
    }, 400)
    return () => clearInterval(cursorInterval)
  }, [])

  // Cyber Grid Effect
  useEffect(() => {
    const canvas = gridRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const gridSize = 40
    const cols = Math.floor(canvas.width / gridSize)
    const rows = Math.floor(canvas.height / gridSize)
    const nodes = []

    // Create grid nodes
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        nodes.push({
          x: x * gridSize,
          y: y * gridSize,
          connections: []
        })
      }
    }

    function draw() {
      ctx.fillStyle = 'rgba(6, 6, 16, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.1)'
      ctx.lineWidth = 0.5

      nodes.forEach(node => {
        nodes.forEach(otherNode => {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          )
          if (distance < 100 && Math.random() > 0.7) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      ctx.fillStyle = 'rgba(0, 245, 255, 0.3)'
      nodes.forEach(node => {
        if (Math.random() > 0.9) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, 1, 0, Math.PI * 2)
          ctx.fill()
        }
      })
    }

    const interval = setInterval(draw, 100)
    return () => clearInterval(interval)
  }, [])

  // Matrix Code Effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const binary = "0101010101101110Samuel Raymond 11010010111010001111001"
    const fontSize = 12
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(-fontSize)

    function draw() {
      ctx.fillStyle = 'rgba(6, 6, 16, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#00f5ff'
      ctx.font = `bold ${fontSize}px 'Courier New', monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: '3.8', label: 'GPA SCORE', suffix: '/3.5', icon: '▧' },
    { number: '25+', label: 'PROJECTS BUILT', icon: '◈' },
    { number: '15K+', label: 'LINES OF CODE', icon: '◷' },
    { number: '15+', label: 'TECH STACKS', icon: '◰' }
  ]

  const quickFacts = [
    { icon: '◉', text: 'B.S. COMPUTER SCIENCE', subtext: 'SOUTHERN NEW HAMPSHIRE UNIVERSITY' },
    { icon: '◉', text: 'BASED IN', subtext: 'MANCHESTER, NH' },
    { icon: '◉', text: 'SPECIALIZING IN', subtext: 'CLOUD & AI TECHNOLOGIES' },
    { icon: '◉', text: 'CURRENTLY', subtext: 'SEEKING INTERNSHIP 2024' }
  ]

  const techStack = [
    { name: 'REACT/NEXT.JS', level: 90, color: '#00f5ff' },
    { name: 'PYTHON/AI', level: 85, color: '#00ff88' },
    { name: 'AWS CLOUD', level: 80, color: '#ff0088' },
    { name: 'NODE.JS', level: 75, color: '#ffaa00' },
  ]

  const systemMetrics = [
    { label: 'SYSTEM LOAD', value: '87%', color: '#00f5ff' },
    { label: 'CODE EFFICIENCY', value: '92%', color: '#00ff88' },
    { label: 'CLOUD READY', value: '95%', color: '#ff0088' },
    { label: 'AI INTEGRATION', value: '78%', color: '#ffaa00' }
  ]

  const commandLines = [
    { command: '> INITIATE_PORTFOLIO_SYSTEM', status: 'COMPLETE' },
    { command: '> LOAD_TECH_STACK_DATA', status: 'COMPLETE' },
    { command: '> CONNECT_CLOUD_SERVICES', status: 'RUNNING' },
    { command: '> DEPLOY_AI_MODULES', status: 'PENDING' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden relative">
      {/* Cyber Grid Background */}
      <canvas
        ref={gridRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />
      
      {/* Animated Scan Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse pointer-events-none" />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-400/50" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-cyan-400/50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-cyan-400/50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-400/50" />

      {/* Navigation */}
      <nav className="relative z-50 py-6 px-4 sm:px-6 lg:px-8 border-b border-cyan-400/20 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-cyan-400 font-mono tracking-widest"
          >
            SAMUEL.PRO
          </motion.div>
          
         
          <motion.a
            href="/resume.pdf"
            className="px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-400/50 rounded-none font-mono text-sm tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             {'>'} DOWNLOAD_CV
          </motion.a>
        </div>
      </nav>

      {/* Main Hero Section */}
      <section className="relative pt-12 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* System Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-black/40 border border-cyan-400/30 mb-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-400/10 animate-pulse" />
                <div className="text-cyan-400 text-lg font-mono">◊</div>
                <div>
                  <div className="text-cyan-400 text-sm font-mono tracking-widest">
                    SYSTEM_STATUS: ON CAMPUS
                  </div>
                  <div className="text-cyan-300/70 text-xs font-mono">
                    COMPUTER_SCIENCE_STUDENT AT SNHU
                  </div>
                </div>
              </motion.div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight font-mono">
                {'>'} HEY, I'M SAMUEL KWIBE{' '}
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  SAMUEL
                </motion.span>
              </h1>

              {/* Typewriter */}
              <div className="mt-6 h-16 flex items-center">
                <div className="text-xl md:text-2xl font-mono text-cyan-400 bg-black/40 border border-cyan-400/30 px-6 py-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-400/5 animate-pulse" />
                  {typedText}
                  <span className={`ml-1 ${cursorBlink ? 'opacity-100' : 'opacity-0'}`}>▊</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-8 text-lg text-cyan-200/80 leading-relaxed max-w-2xl font-mono border-l-4 border-cyan-400/50 pl-4 bg-black/20 py-4">
              {'>'} PASSIONATE COMPUTER SCIENCE STUDENT SPECIALIZING IN{' '}
                <span className="text-cyan-400 font-bold">CLOUD COMPUTING</span>,{' '}
                <span className="text-green-400 font-bold">AI/ML</span>, AND{' '}
                <span className="text-purple-400 font-bold">FULL-STACK DEVELOPMENT</span>. 
                BUILDING INNOVATIVE SOLUTIONS AND EXPLORING CUTTING-EDGE TECHNOLOGIES.
              </p>

              {/* System Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {systemMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="p-4 bg-black/40 border border-cyan-400/20 relative overflow-hidden"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-cyan-300 text-sm font-mono">{metric.label}</span>
                      <span className="text-cyan-400 font-mono text-lg" style={{ color: metric.color }}>
                        {metric.value}
                      </span>
                    </div>
                    <div className="h-1 bg-cyan-400/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: metric.color }}
                        initial={{ width: 0 }}
                        animate={{ width: metric.value }}
                        transition={{ delay: 1 + index * 0.2, duration: 1.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 gap-3 mt-8">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-black/40 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="text-cyan-400 text-xl font-mono">{fact.icon}</div>
                    <div>
                      <div className="font-mono text-cyan-300 text-sm tracking-widest">{fact.text}</div>
                      <div className="text-cyan-300/60 text-xs font-mono">{fact.subtext}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    className="text-center p-4 bg-black/40 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors duration-300" />
                    <div className="text-2xl mb-2 text-cyan-400 font-mono">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-black text-cyan-400 font-mono">
                      {stat.number}
                      {stat.suffix && <span className="text-sm">{stat.suffix}</span>}
                    </div>
                    <div className="text-xs text-cyan-300/60 mt-1 font-mono tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <motion.a
                  href="/resume.pdf"
                  className="px-8 py-4 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-400 font-mono tracking-widest transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors duration-300" />
                  <span className="text-lg">◊</span>
                  {'>'} DOWNLOAD_RESUME
                </motion.a>
                
                <MotionLink
                  to="/projects"
                  className="px-8 py-4 border border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-mono tracking-widest transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors duration-300" />
                  <span className="text-lg">◈</span>
                  {'>'} VIEW_PROJECTS
                </MotionLink>
              </div>
            </motion.div>

            {/* Right Content - Cyber Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Main Terminal Display */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Terminal Window */}
                <div className="relative bg-black/80 border border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                  {/* Window Header */}
                  <div className="flex items-center justify-between p-4 bg-cyan-400/10 border-b border-cyan-400/20">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-cyan-400 text-sm font-mono tracking-widest">SYSTEM_TERMINAL</div>
                    <div className="w-6"></div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-6 min-h-[500px] relative overflow-hidden">
                    {/* Matrix Background */}
                    <canvas
                      ref={canvasRef}
                      className="absolute inset-0 w-full h-full opacity-30"
                    />
                    
                    {/* Command Lines */}
                    <div className="relative z-10 space-y-3">
                      {commandLines.map((line, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.2 }}
                          className="font-mono text-sm"
                        >
                          <span className="text-green-400">{line.command}</span>
                          <span className="text-cyan-400 ml-2">[{line.status}]</span>
                        </motion.div>
                      ))}
                      
                      {/* Live Output */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="mt-6 p-4 bg-cyan-400/5 border border-cyan-400/20"
                      >
                        <div className="text-cyan-400 text-sm font-mono mb-2">{'>'} SYSTEM_OUTPUT</div>
                        <div className="text-green-300 text-sm font-mono space-y-1">
                          <div>{'>'} INITIALIZING_PORTFOLIO_SYSTEM...</div>
                          <div>{'>'} LOADING_TECHNOLOGY_STACK...</div>
                          <div>{'>'} CONNECTING_CLOUD_SERVICES...</div>
                          <div className="text-cyan-400">{'>'} READY_FOR_INTERACTION</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Blinking Cursor */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
                        <span>USER@SAMUEL.PRO</span>
                        <span className={`${cursorBlink ? 'opacity-100' : 'opacity-0'}`}>▊</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Indicators */}
                <motion.div
                  className="absolute -top-2 -left-2 px-3 py-1 bg-black/80 border border-cyan-400/50 font-mono text-xs text-cyan-400 tracking-widest"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LIVE_FEED
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -right-2 px-3 py-1 bg-black/80 border border-green-400/50 font-mono text-xs text-green-400 tracking-widest"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  SYSTEM_ACTIVE
                </motion.div>
              </motion.div>

              {/* Tech Stack Visualization */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 bg-black/40 border border-cyan-400/20 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-cyan-400 mb-4 font-mono tracking-widest">
                  {'>'} TECH_STACK
                </h3>
                <div className="space-y-4">
                  {techStack.map((tech, index) => (
                    <div key={tech.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-cyan-300 font-mono tracking-widest">{tech.name}</span>
                        <span className="text-cyan-400 text-sm font-mono" style={{ color: tech.color }}>
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-cyan-400/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: tech.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ delay: 1.2 + index * 0.2, duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Scan Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
    </div>
  )
}