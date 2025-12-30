// Contact.jsx - Ultimate Professional Contact System with AI Assistant
import { useMemo, useState, useRef, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
  // Your complete professional information
  const professionalInfo = {
    name: "Samuel Raymond Kwibe",
    title: "Full-Stack Developer & Cloud Engineer",
    company: "Southen New Hampshire University", 
    email: "kwibesamuel@gmail.com", 
    phone: "+1 (603)603-670-6761", 
    location: "Manchester, NH, USA",
    calendly: "https://calendly.com/yourusername", 
    github: "https://github.com/Samkwibe",
    linkedin: "https://www.linkedin.com/in/samuel-kwibe-371633249/", 
    portfolio: "https://yourportfolio.com", 
    resume: "/Samuel_Kwibe_Resume_Final.docx",
    expertise: [
      "React & Next.js Development",
      "Cloud Architecture (AWS/GCP)",
      "AI/ML Integration",
      "Full-Stack Solutions",
      "DevOps & Containerization"
    ],
    availability: {
      status: "available",
      message: "Accepting new projects and opportunities",
      notice: "2-week notice for current commitments"
    }
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    budget: '',
    message: '',
    agree: false,
    urgency: 'standard',
    timeline: '',
    company: '' // honeypot
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [copiedPayload, setCopiedPayload] = useState(false)
  const [copiedTemplate, setCopiedTemplate] = useState(false)
  const [aiAssistantActive, setAiAssistantActive] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [userInput, setUserInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)
  const inputRef = useRef(null)

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const msgMax = 1500

  // Enhanced AI Knowledge Base
  const aiKnowledge = {
    samuel: {
      background: `**Samuel Kwibe** is a passionate Full-Stack Developer and Cloud Engineer with expertise in modern web technologies and cloud infrastructure. He specializes in building scalable applications and integrating AI solutions.`,
      skills: {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
        backend: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
        database: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
        cloud: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
        ai_ml: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Hugging Face"]
      },
      experience: `Samuel has worked on various projects including SaaS platforms, e-commerce solutions, and AI-powered applications. He's particularly interested in cloud architecture and machine learning integration.`,
      personality: `He's known for his problem-solving approach, attention to detail, and commitment to writing clean, maintainable code. Samuel values clear communication and collaborative development.`
    },
    services: {
      development: `**Custom Development Services:**
• Full-Stack Web Applications
• React/Next.js Frontends
• Node.js/Python Backends
• RESTful & GraphQL APIs
• Real-time Applications`,
      cloud: `**Cloud & DevOps:**
• AWS & GCP Architecture
• Containerization with Docker
• Kubernetes Orchestration
• CI/CD Pipeline Setup
• Infrastructure as Code`,
      ai: `**AI/ML Integration:**
• Custom AI Solutions
• Machine Learning Models
• OpenAI API Integration
• Data Processing Pipelines
• AI-powered Features`,
      consultation: `**Technical Consultation:**
• Architecture Review
• Code Audits
• Performance Optimization
• Technical Planning
• Team Mentoring`
    },
    availability: {
      current: `**Current Availability:**
✅ **Freelance Projects**: Up to 20 hours/week
✅ **Internship Roles**: Starting next semester
✅ **Junior Positions**: 2-week notice period
✅ **Consultation Calls**: 15-30 minute slots`,
      response: `**Response Times:**
• Standard Inquiries: 24-48 hours
• Urgent Matters: 2-4 hours
• Project Discussions: Within 1 business day`,
      engagement: `**Engagement Models:**
• Fixed-price projects
• Time & materials
• Retainer agreements
• Hourly consulting`
    },
    process: {
      workflow: `**Typical Project Workflow:**
1. **Discovery** - Requirements gathering & planning
2. **Proposal** - Detailed scope & timeline
3. **Development** - Iterative builds with feedback
4. **Testing** - Quality assurance & refinement
5. **Deployment** - Launch & monitoring
6. **Support** - Ongoing maintenance & updates`,
      communication: `**Communication:**
• Daily standups for active projects
• Slack/Teams for quick questions
• Weekly progress reports
• Transparent milestone tracking`
    }
  }

  // Enhanced AI response generator
  const generateAiResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    // Greeting patterns
    if (/(hello|hi|hey|greetings|good morning|good afternoon)/i.test(lowerInput)) {
      return `👋 Hello! I'm Samuel's AI assistant. I can help you learn about his services, technical expertise, availability, and how to start a project. What would you like to know?`
    }

    // Samuel background
    if (/(who is|about samuel|background|experience)/i.test(lowerInput)) {
      return `${aiKnowledge.samuel.background}

**Technical Skills:**
• Frontend: ${aiKnowledge.samuel.skills.frontend.join(', ')}
• Backend: ${aiKnowledge.samuel.skills.backend.join(', ')}
• Cloud: ${aiKnowledge.samuel.skills.cloud.join(', ')}
• AI/ML: ${aiKnowledge.samuel.skills.ai_ml.join(', ')}

${aiKnowledge.samuel.experience}`
    }

    // Services
    if (/(service|what can|build|create|develop|project)/i.test(lowerInput)) {
      return `🚀 **Samuel offers comprehensive development services:**

${aiKnowledge.services.development}

${aiKnowledge.services.cloud}

${aiKnowledge.services.ai}

${aiKnowledge.services.consultation}

*Would you like more details about any specific service?*`
    }

    // Availability
    if (/(available|when|start|timeline|schedule)/i.test(lowerInput)) {
      return `📅 **Availability & Engagement:**

${aiKnowledge.availability.current}

${aiKnowledge.availability.response}

${aiKnowledge.availability.engagement}

*You can book a meeting directly using the calendar link in the sidebar!*`
    }

    // Technical skills
    if (/(tech|skill|stack|technology|framework|language)/i.test(lowerInput)) {
      return `💻 **Technical Expertise:**

**Frontend Development:**
${aiKnowledge.samuel.skills.frontend.map(skill => `• ${skill}`).join('\n')}

**Backend Development:**
${aiKnowledge.samuel.skills.backend.map(skill => `• ${skill}`).join('\n')}

**Cloud & DevOps:**
${aiKnowledge.samuel.skills.cloud.map(skill => `• ${skill}`).join('\n')}

**AI/ML Technologies:**
${aiKnowledge.samuel.skills.ai_ml.map(skill => `• ${skill}`).join('\n')}

**Databases:**
${aiKnowledge.samuel.skills.database.map(skill => `• ${skill}`).join('\n')}`
    }

    // Process
    if (/(process|workflow|how.*work|methodology)/i.test(lowerInput)) {
      return `🔄 **Development Process:**

${aiKnowledge.process.workflow}

${aiKnowledge.process.communication}

*Samuel believes in transparent, collaborative development with regular client updates.*`
    }

    // Contact
    if (/(contact|reach|email|phone|call|meet)/i.test(lowerInput)) {
      return `📞 **Contact Information:**

**Direct Contact:**
• Email: ${professionalInfo.email}
• Phone: ${professionalInfo.phone}
• Location: ${professionalInfo.location}

**Online Profiles:**
• Portfolio: ${professionalInfo.portfolio}
• GitHub: ${professionalInfo.github}
• LinkedIn: ${professionalInfo.linkedin}

**Quick Actions:**
• Schedule a meeting: ${professionalInfo.calendly}
• Download resume: ${professionalInfo.resume}
• Send a message: Use the form below!

*For urgent matters, mark your message as "Urgent" in the contact form.*`
    }

    // Pricing/Budget
    if (/(price|cost|budget|rate|how much)/i.test(lowerInput)) {
      return `💰 **Pricing & Budget:**

Samuel offers flexible engagement models:

**Project-Based Pricing:**
• Fixed-price for well-defined scopes
• Detailed proposals with transparent pricing
• Milestone-based payments

**Hourly Rates:**
• Competitive rates based on project complexity
• Time tracking with detailed reports
• Weekly or monthly billing

**Retainer Agreements:**
• Ongoing support and development
• Priority scheduling
• Dedicated communication

*The best way to get accurate pricing is to share your project details through the contact form. Samuel will provide a customized proposal.*`
    }

    // Portfolio/Projects
    if (/(portfolio|project|work|example)/i.test(lowerInput)) {
      return `🎨 **Portfolio & Projects:**

Samuel has worked on various projects including:

**SaaS Platforms:**
• Custom business solutions
• Subscription-based applications
• Multi-tenant architectures

**E-commerce Solutions:**
• Online stores and marketplaces
• Payment integration
• Inventory management

**AI Applications:**
• Machine learning models
• Natural language processing
• Computer vision solutions

**Cloud Infrastructure:**
• AWS/GCP architecture
• Microservices deployment
• Scalable system design

*Check out his portfolio at ${professionalInfo.portfolio} for detailed case studies and live demos.*`
    }

    // Default response
    return `🤔 I understand you're asking about "${input}". While I can provide comprehensive information about Samuel's services, expertise, and availability, for specific project requirements or confidential discussions, I'd recommend:

1. **Using the contact form** below for detailed project discussions
2. **Scheduling a meeting** for real-time conversation
3. **Checking the portfolio** for previous work examples

Is there something specific I can help you with regarding Samuel's services, technical skills, or availability?`
  }

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatMessages])

  useEffect(() => {
    if (aiAssistantActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [aiAssistantActive])

  function update(id, value) {
    setForm(prev => ({ ...prev, [id]: value }))
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }))
    }
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!form.email.trim()) e.email = 'Please enter your email.'
    else if (!emailRx.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.message.trim()) e.message = 'Please describe your project or inquiry.'
    if (form.message.length > msgMax) e.message = `Message exceeds ${msgMax} characters. Please shorten it.`
    if (!form.agree) e.agree = 'Please agree to the contact terms.'
    if (form.company.trim()) e.company = 'Spam detected.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)

    const enhancedPayload = {
      ...payload,
      timestamp: new Date().toISOString(),
      urgency: form.urgency,
      estimatedResponseTime: form.urgency === 'urgent' ? '2-4 hours' : '24-48 hours',
      aiAnalysis: {
        inquiryType: classifyInquiry(form.message),
        complexity: estimateComplexity(form.message),
        potentialValue: estimatePotentialValue(form),
        keywords: extractKeywords(form.message)
      }
    }

    // Simulate API call
    await new Promise(r => setTimeout(r, 2000))

    // In production, you would call your email service here
    await sendNotificationEmail(enhancedPayload)

    setSubmitting(false)
    setSent(true)
    setForm({ 
      name: '', 
      email: '', 
      topic: 'General Inquiry', 
      budget: '', 
      message: '', 
      agree: false, 
      urgency: 'standard', 
      timeline: '',
      company: '' 
    })
    setErrors({})
    setTimeout(() => setSent(false), 6000)
  }

  // Enhanced AI analysis
  function classifyInquiry(message) {
    const msg = message.toLowerCase()
    if (msg.includes('internship') || msg.includes('junior') || msg.includes('hire') || msg.includes('role') || msg.includes('position')) 
      return 'employment'
    if (msg.includes('project') || msg.includes('freelance') || msg.includes('contract') || msg.includes('build') || msg.includes('develop')) 
      return 'project'
    if (msg.includes('consult') || msg.includes('advice') || msg.includes('review') || msg.includes('audit')) 
      return 'consultation'
    if (msg.includes('speak') || msg.includes('talk') || msg.includes('present') || msg.includes('writing')) 
      return 'speaking'
    return 'general'
  }

  function estimateComplexity(message) {
    const techKeywords = ['react', 'next.js', 'aws', 'docker', 'kubernetes', 'machine learning', 'ai', 'database', 'api']
    const matches = techKeywords.filter(keyword => message.toLowerCase().includes(keyword)).length
    if (matches > 3) return 'high'
    if (matches > 1) return 'medium'
    return 'low'
  }

  function estimatePotentialValue(formData) {
    let score = 0
    if (formData.budget && formData.budget !== '') score += 2
    if (formData.topic.includes('Project') || formData.topic.includes('Freelance')) score += 2
    if (formData.urgency === 'urgent') score += 1
    if (formData.timeline && formData.timeline.includes('immediate')) score += 1
    return ['low', 'medium', 'high', 'very high'][Math.min(score, 3)]
  }

  function extractKeywords(message) {
    const keywords = [
      'react', 'next.js', 'aws', 'cloud', 'ai', 'machine learning', 
      'website', 'application', 'mobile', 'desktop', 'api', 'database',
      'ecommerce', 'saas', 'startup', 'enterprise'
    ]
    return keywords.filter(keyword => 
      message.toLowerCase().includes(keyword)
    ).slice(0, 5)
  }

  async function sendNotificationEmail(payload) {
    // Integration point for your email service
    console.log('Sending professional notification:', payload)
    
    // Example implementation:
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      
      if (!response.ok) throw new Error('Failed to send message')
      return await response.json()
    } catch (error) {
      console.error('Email sending failed:', error)
      throw error
    }
    */
  }

  // AI Chat functions
  async function handleAiChatInput() {
    const input = userInput.trim()
    if (!input) return

    const userMessage = { 
      type: 'user', 
      content: input, 
      timestamp: new Date() 
    }
    setChatMessages(prev => [...prev, userMessage])
    setUserInput('')
    setIsTyping(true)

    // Simulate AI processing time
    await new Promise(r => setTimeout(r, 800 + Math.random() * 700))

    const aiResponse = generateAiResponse(input)
    const aiMessage = { 
      type: 'ai', 
      content: aiResponse, 
      timestamp: new Date() 
    }
    
    setChatMessages(prev => [...prev, aiMessage])
    setIsTyping(false)
  }

  function startAiAssistant() {
    setAiAssistantActive(true)
    setChatMessages([{ 
      type: 'ai', 
      content: `👋 Hello! I'm Samuel's AI assistant. I'm here to help you learn about:

• Samuel's technical skills and expertise
• Available services and projects
• Current availability and response times
• Development process and workflow
• Pricing and engagement models
• Portfolio and previous work

What would you like to know about Samuel's professional services?`,
      timestamp: new Date()
    }])
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleAiChatInput()
    }
  }

  // Quick questions for AI chat
  const quickQuestions = [
    "What services do you offer?",
    "What's your tech stack?",
    "Are you available for new projects?",
    "What's your development process?",
    "How much do you charge?",
    "Can I see your portfolio?"
  ]

  // Developer preview
  const payload = useMemo(() => ({
    name: form.name.trim(),
    email: form.email.trim(),
    topic: form.topic,
    budget: form.budget || undefined,
    message: form.message.trim(),
    urgency: form.urgency,
    timeline: form.timeline || undefined,
    company: form.company.trim() || undefined,
    timestamp: new Date().toISOString()
  }), [form])

  const emailTemplate = useMemo(() => {
    return `Subject: ${form.topic} - ${form.name} [${form.urgency.toUpperCase()}]

Hi Samuel,

${form.message}

---
Contact Details:
Name: ${form.name}
Email: ${form.email}
Company: ${form.company || 'Not specified'}
Budget: ${form.budget || 'Not specified'}
Timeline: ${form.timeline || 'Not specified'}
Urgency: ${form.urgency}
Submitted: ${new Date().toLocaleDateString()}`
  }, [form])

  async function copyText(text, setState) {
    try {
      await navigator.clipboard.writeText(text)
      setState(true)
      setTimeout(() => setState(false), 1500)
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setState(true)
      setTimeout(() => setState(false), 1500)
    }
  }

  // Enhanced Field Component
  const Field = ({ id, label, as = 'input', type = 'text', hint, optional = false, ...rest }) => {
    const Comp = as
    const invalid = Boolean(errors[id])
    const inputClasses = `w-full ${as === 'textarea' ? 'min-h-[140px] resize-vertical' : ''} px-4 py-3 rounded-xl bg-white/5 border-2 transition-all duration-300 placeholder-white/30 ${
        invalid 
          ? 'border-red-500/60 bg-red-500/5 focus:border-red-500 focus:bg-red-500/10' 
          : 'border-white/10 hover:border-cyan-400/40 focus:border-cyan-400/60 focus:bg-white/10'
      } focus:outline-none focus:ring-2 focus:ring-cyan-400/40`

    return (
      <div className="relative">
        <label htmlFor={id} className="block text-sm mb-2 font-semibold text-white/90">
          {label} {optional && <span className="text-white/50 text-xs font-normal">(optional)</span>}
        </label>
        <Comp
          id={id}
          name={id}
          type={type}
          value={form[id]}
          onChange={(e) => update(id, type === 'checkbox' ? e.target.checked : e.target.value)}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? `${id}-err` : hint ? `${id}-hint` : undefined}
          className={inputClasses}
          {...rest}
        />
        {hint && !invalid && <p id={`${id}-hint`} className="mt-2 text-xs opacity-70">{hint}</p>}
        {invalid && <p id={`${id}-err`} className="mt-2 text-xs text-red-400 font-medium animate-pulse">{errors[id]}</p>}
      </div>
    )
  }

  const msgCount = `${form.message.length}/${msgMax}`

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/10">
      <Navbar />

      <main className="section flex-1">
        {/* Enhanced Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="kicker text-cyan-400/80 text-sm font-semibold">Available for New Projects</p>
          </div>
          <h1 className="heading-gradient text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Let's Create
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Something Extraordinary
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your vision into reality with cutting-edge development, 
            cloud architecture, and AI solutions tailored to your unique needs.
          </p>
        </header>

        {/* AI Assistant Modal */}
        {aiAssistantActive && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-cyan-400/20 shadow-2xl shadow-cyan-400/10 w-full max-w-4xl max-h-[85vh] flex flex-col transform scale-95 hover:scale-100 transition-transform duration-300">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-t-3xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-lg">🤖</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">Samuel's AI Assistant</h3>
                    <p className="text-sm opacity-70">Ask me about services, expertise, or availability</p>
                  </div>
                </div>
                <button 
                  onClick={() => setAiAssistantActive(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
                >
                  <span className="text-white/60 group-hover:text-white transition-colors">✕</span>
                </button>
              </div>
              
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl p-4 relative ${
                      msg.type === 'user' 
                        ? 'bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-400/30 rounded-br-none' 
                        : 'bg-white/5 border border-white/10 rounded-bl-none'
                    } shadow-lg`}>
                      <div className="flex items-start gap-3">
                        {msg.type === 'ai' && (
                          <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xs mt-1 flex-shrink-0">
                            AI
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                          <p className="text-xs opacity-50 mt-2">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-none p-4">
                      <div className="flex items-center gap-2 text-sm opacity-70">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        Samuel's AI is thinking...
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={chatEndRef} />
              </div>

              {/* Quick Questions */}
              {chatMessages.length === 1 && (
                <div className="px-6 pt-4 border-t border-white/10">
                  <p className="text-xs opacity-70 mb-3 font-semibold">QUICK QUESTIONS:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setUserInput(question)
                          setTimeout(() => handleAiChatInput(), 100)
                        }}
                        className="text-xs px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-200 hover:scale-105"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-white/10 bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-b-3xl">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about services, availability, tech stack, pricing..."
                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/40 transition-all duration-300 placeholder-white/40"
                    disabled={isTyping}
                  />
                  <button 
                    onClick={handleAiChatInput}
                    disabled={!userInput.trim() || isTyping}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:scale-100 shadow-lg"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enhanced Form Section */}
          <section className="lg:col-span-2">
            <div className="card p-8 bg-gradient-to-br from-gray-900/80 to-blue-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
              
              {sent && (
                <div role="status" className="mb-6 rounded-2xl border border-green-500/40 bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-6 text-base font-medium text-green-300 animate-fadeIn shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <strong className="block text-lg">Message Received Successfully!</strong>
                      I've received your inquiry and will get back to you within {form.urgency === 'urgent' ? '2-4 hours' : '24-48 hours'}.
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-8 relative">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Start Your Project
                  </h2>
                  <p className="opacity-70 mt-2">Tell me about your vision and requirements</p>
                </div>
                <button 
                  onClick={startAiAssistant}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-400/30 hover:border-purple-400/50 hover:from-purple-600/30 hover:to-cyan-600/30 transition-all duration-300 group hover:scale-105 shadow-lg"
                >
                  <span className="text-purple-400 group-hover:scale-110 transition-transform">🤖</span>
                  <span className="text-sm font-semibold">AI Assistant</span>
                </button>
              </div>

              <form onSubmit={onSubmit} noValidate className="space-y-8 relative">
                {/* Honeypot */}
                <div className="hidden">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" value={form.company} onChange={(e) => update('company', e.target.value)} />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Field id="name" label="Full Name" placeholder="Your full name" autoComplete="name" />
                  <Field id="email" label="Email Address" type="email" placeholder="you@company.com" autoComplete="email" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="topic" className="block text-sm mb-2 font-semibold">Inquiry Type</label>
                    <select
                      id="topic"
                      value={form.topic}
                      onChange={(e) => update('topic', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/10 transition-all duration-300 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/60"
                    >
                      <option>General Inquiry</option>
                      <option>Internship Opportunity</option>
                      <option>Junior Developer Role</option>
                      <option>Freelance Project</option>
                      <option>Technical Consultation</option>
                      <option>Speaking Engagement</option>
                      <option>Open Source Collaboration</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm mb-2 font-semibold">Urgency Level</label>
                    <select
                      id="urgency"
                      value={form.urgency}
                      onChange={(e) => update('urgency', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border-2 border-white/10 transition-all duration-300 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/60"
                    >
                      <option value="standard">Standard (24-48 hours)</option>
                      <option value="urgent">Urgent (2-4 hours)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Field
                    id="budget"
                    label="Project Budget / Compensation"
                    placeholder="e.g., $2,000–$5,000 or Competitive salary"
                    hint="Helps me understand scope and provide relevant options"
                    optional
                  />
                  <Field
                    id="timeline"
                    label="Project Timeline"
                    placeholder="e.g., 2-3 months or Immediate start"
                    hint="When do you need this completed?"
                    optional
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-sm font-semibold">Project Details & Requirements</label>
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      form.message.length > msgMax 
                        ? 'bg-red-500/20 text-red-400 font-bold' 
                        : form.message.length > msgMax * 0.8
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-white/5 opacity-70'
                    }`}>
                      {msgCount}
                    </span>
                  </div>
                  <Field 
                    id="message" 
                    as="textarea" 
                    placeholder="Describe your project vision, specific requirements, technical challenges, target audience, and any other relevant details..." 
                    maxLength={msgMax}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border-2 border-white/10 hover:border-cyan-400/20 transition-all duration-300">
                    <input
                      id="agree"
                      type="checkbox"
                      checked={form.agree}
                      onChange={(e) => update('agree', e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-white/20 bg-white/5 checked:bg-cyan-600 focus:ring-2 focus:ring-cyan-400/80 transition-all duration-200"
                    />
                    <label htmlFor="agree" className="text-sm cursor-pointer flex-1">
                      I agree to be contacted about my inquiry and understand that Samuel may use this information 
                      to provide relevant services. I've read the <a href="/privacy" className="underline text-cyan-400 hover:text-cyan-300 transition-colors">privacy policy</a>.
                    </label>
                  </div>
                  {errors.agree && <p className="text-xs text-red-400 font-medium ml-8 animate-pulse">{errors.agree}</p>}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="btn-primary px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-400/30 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      'Send Professional Inquiry'
                    )}
                  </button>
                  
                  <a
                    href={`mailto:${professionalInfo.email}?subject=${encodeURIComponent(form.topic + ' - ' + form.name)}&body=${encodeURIComponent(form.message)}`}
                    className="btn-outline px-6 py-4 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] border-2"
                  >
                    Email Directly 📧
                  </a>
                </div>
              </form>

              {/* Enhanced Developer Tools */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                  <span>🛠️</span>
                  Developer Tools & Integration
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="card p-5 bg-gray-900/60 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-cyan-400">API Payload (JSON)</h4>
                      <button 
                        onClick={() => copyText(JSON.stringify({...payload, aiAnalysis: {
                          inquiryType: classifyInquiry(form.message),
                          complexity: estimateComplexity(form.message),
                          potentialValue: estimatePotentialValue(form),
                          keywords: extractKeywords(form.message)
                        }}, null, 2), setCopiedPayload)} 
                        className="btn-ghost text-xs px-3 py-1 rounded-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                      >
                        {copiedPayload ? '📋 Copied!' : 'Copy'}
                      </button>
                    </div>
                    <pre className="text-xs overflow-auto scroll-slim rounded-lg border border-white/10 bg-black/40 p-3 text-green-300/80 h-32 font-mono">
                      {JSON.stringify({
                        ...payload,
                        aiAnalysis: {
                          inquiryType: classifyInquiry(form.message),
                          complexity: estimateComplexity(form.message),
                          potentialValue: estimatePotentialValue(form),
                          keywords: extractKeywords(form.message)
                        }
                      }, null, 2)}
                    </pre>
                  </div>

                  <div className="card p-5 bg-gray-900/60 rounded-xl border border-white/10 shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-cyan-400">Email Template</h4>
                      <button 
                        onClick={() => copyText(emailTemplate, setCopiedTemplate)} 
                        className="btn-ghost text-xs px-3 py-1 rounded-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                      >
                        {copiedTemplate ? '📋 Copied!' : 'Copy'}
                      </button>
                    </div>
                    <pre className="text-xs overflow-auto scroll-slim rounded-lg border border-white/10 bg-black/40 p-3 text-yellow-300/80 h-32 whitespace-pre-wrap font-mono">
                      {emailTemplate}
                    </pre>
                  </div>
                </div>

                {/* AI Analysis Dashboard */}
                <div className="card p-5 bg-gray-900/60 rounded-xl border border-white/10 shadow-lg">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                    <span>🤖</span>
                    AI Analysis Dashboard
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div className="text-center p-3 rounded-lg bg-blue-900/30 border border-blue-500/30 hover:border-blue-400/50 transition-colors">
                      <div className="font-semibold text-blue-300">Inquiry Type</div>
                      <div className="mt-1 text-white/80 font-medium">{classifyInquiry(form.message)}</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-purple-900/30 border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                      <div className="font-semibold text-purple-300">Complexity</div>
                      <div className="mt-1 text-white/80 font-medium">{estimateComplexity(form.message)}</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-green-900/30 border border-green-500/30 hover:border-green-400/50 transition-colors">
                      <div className="font-semibold text-green-300">Potential Value</div>
                      <div className="mt-1 text-white/80 font-medium">{estimatePotentialValue(form)}</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-cyan-900/30 border border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                      <div className="font-semibold text-cyan-300">Keywords</div>
                      <div className="mt-1 text-white/80 font-medium text-xs">
                        {extractKeywords(form.message).slice(0, 3).join(', ') || 'None'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Professional Sidebar */}
          <aside className="card p-8 space-y-8 bg-gradient-to-b from-gray-900/80 to-blue-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
            
            {/* Professional Header */}
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold shadow-2xl shadow-cyan-400/20 border-4 border-white/10">
                SK
              </div>
              <h2 className="text-2xl font-bold text-white">{professionalInfo.name}</h2>
              <p className="text-cyan-400 font-semibold mt-1">{professionalInfo.title}</p>
              <p className="text-sm opacity-70 mt-1">{professionalInfo.company}</p>
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 mt-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs font-semibold">Available for New Projects</span>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span>📞</span>
                Contact Information
              </h3>
              <div className="space-y-3">
                {[
                  { icon: '📧', label: 'Email', value: professionalInfo.email, href: `mailto:${professionalInfo.email}` },
                  { icon: '📱', label: 'Phone', value: professionalInfo.phone },
                  { icon: '📍', label: 'Location', value: professionalInfo.location },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <span className="text-lg opacity-70 group-hover:scale-110 transition-transform">{item.icon}</span>
                      <span className="opacity-70 text-sm">{item.label}:</span>
                    </div>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:text-cyan-400 transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-medium text-sm">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span>⚡</span>
                Quick Actions
              </h3>
              <div className="space-y-3">
                <a href={professionalInfo.calendly} target="_blank" className="btn-primary w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg">
                  <span>🗓️</span>
                  Schedule Meeting
                </a>
                <a href={professionalInfo.resume} download="Samuel_Kwibe_Resume_Final.docx" className="btn-outline w-full text-center py-3 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] border-2">
                  <span>📄</span>
                  Download Resume
                </a>
                <button 
                  onClick={startAiAssistant}
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border-2 border-purple-400/30 hover:border-purple-400/50 hover:from-purple-600/30 hover:to-cyan-600/30 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg"
                >
                  <span>🤖</span>
                  Talk to AI Assistant
                </button>
              </div>
            </div>

            {/* Professional Profiles */}
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span>🌐</span>
                Professional Profiles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'GitHub', href: professionalInfo.github, color: 'bg-gray-800 hover:bg-gray-700' },
                  { name: 'LinkedIn', href: professionalInfo.linkedin, color: 'bg-blue-800 hover:bg-blue-700' },
                  { name: 'Portfolio', href: professionalInfo.portfolio, color: 'bg-purple-800 hover:bg-purple-700' },
                  { name: 'Projects', href: '/projects', color: 'bg-green-800 hover:bg-green-700' },
                ].map((profile, index) => (
                  <a 
                    key={index}
                    href={profile.href} 
                    target="_blank" 
                    className={`rail-btn ${profile.color} transition-all duration-300 hover:scale-105 text-center py-2 text-sm font-semibold shadow-lg`}
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Expertise Highlights */}
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <span>💡</span>
                Core Expertise
              </h3>
              <div className="space-y-2">
                {professionalInfo.expertise.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* vCard Download */}
            <div className="text-center pt-4 border-t border-white/10">
              <a href="/samuel-kwibe.vcf" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 text-sm font-semibold">
                📲 Download vCard
              </a>
            </div>
          </aside>
        </div>

        {/* Enhanced FAQ Section */}
        <section className="mt-20">
          <div className="card p-8 bg-gradient-to-br from-gray-900/80 to-purple-900/20 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
            
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 relative">
              {[
                {
                  question: "What's your typical response time?",
                  answer: "Standard inquiries receive responses within 24-48 hours. Urgent matters marked as such get replies in 2-4 hours. For active collaborations, I'm available via Slack/Teams with daily progress updates and weekly summary reports."
                },
                {
                  question: "Do you work with startups vs enterprises?",
                  answer: "Absolutely! I adapt my approach based on your company's size and needs. Startups benefit from my agile methodology and rapid prototyping, while enterprises appreciate my structured processes and scalability focus. I've successfully delivered for both small startups and Fortune 500 companies."
                },
                {
                  question: "What's your development process?",
                  answer: "I follow a proven agile methodology: 1) Discovery & requirements analysis, 2) Technical planning & architecture, 3) MVP development with iterative feedback, 4) Comprehensive testing & QA, 5) Deployment & monitoring, 6) Ongoing support & optimization. Each phase includes clear deliverables and client review points."
                },
                {
                  question: "Can you work with our existing team?",
                  answer: "Yes, I seamlessly integrate with existing teams. I'm experienced with remote collaboration across time zones and can adapt to your workflows, tools (Jira, Trello, Asana), and communication styles. I believe in transparent, regular communication to ensure alignment with your team's goals."
                },
                {
                  question: "What about project pricing and contracts?",
                  answer: "I offer flexible engagement models: fixed-price for well-defined projects with detailed scope, time-and-materials for evolving requirements, and retainer agreements for ongoing work. All proposals include transparent pricing, clear deliverables, and milestone-based payment schedules. Contracts protect both parties and ensure project success."
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer: "Yes, I offer comprehensive post-launch support packages tailored to your needs. This includes bug fixes, performance optimization, security updates, feature enhancements, and scaling assistance. Support levels range from basic maintenance to dedicated development hours, ensuring your project continues to perform optimally."
                },
                {
                  question: "What technologies do you recommend for my project?",
                  answer: "Technology recommendations depend on your specific requirements, scale needs, and team expertise. I typically suggest React/Next.js for frontend, Node.js/Python for backend, PostgreSQL/MongoDB for data, and AWS/GCP for infrastructure. During our discovery call, I'll provide tailored recommendations based on your project's unique characteristics."
                },
                {
                  question: "How do you handle project communication and updates?",
                  answer: "Communication is key to project success. I provide daily standups for active projects, weekly progress reports with demos, and transparent milestone tracking. We'll use your preferred communication tools (Slack, Teams, email) and schedule regular check-ins to ensure we're always aligned on project goals and progress."
                }
              ].map((faq, index) => (
                <details key={index} className="group rounded-2xl border-2 border-white/10 bg-white/5 p-6 transition-all hover:shadow-cyan-400/20 hover:shadow-lg hover:border-cyan-400/30">
                  <summary className="cursor-pointer text-lg font-semibold hover:text-cyan-400 transition-colors list-none">
                    <div className="flex justify-between items-center">
                      {faq.question}
                      <span className="text-cyan-400 transform group-open:rotate-180 transition-transform duration-300 text-xl">▼</span>
                    </div>
                  </summary>
                  <p className="opacity-80 mt-4 text-base leading-relaxed border-t border-white/10 pt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}