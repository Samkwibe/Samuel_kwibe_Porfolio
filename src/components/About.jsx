// About.jsx — Enhanced with progress tracking and learning roadmap
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function About() {
  const [codeLines, setCodeLines] = useState([])
  const [activeProgressTab, setActiveProgressTab] = useState('skills')

  // Generate animated code lines for background
  useEffect(() => {
    const programmingSnippets = [
      'const cloud = new AWS.EC2();',
      'async function deployApp() {',
      'docker-compose up -d',
      'from sklearn import ensemble',
      'useEffect(() => { ... }, []);',
      'git push origin main',
      'kubectl apply -f deployment.yaml',
      'def train_model(X, y):',
      '<div className="grid grid-cols-1">',
      'const api = await fetch("/data");',
      'terraform apply -auto-approve',
      'model.fit(X_train, y_train)',
      'export default function App() {',
      'nginx -s reload',
      'pip install -r requirements.txt',
      'docker build -t app .',
      'aws s3 sync ./dist s3://bucket',
      'python manage.py migrate',
      'const [state, setState] = useState();',
      'kubectl get pods',
      'git commit -m "feat: add new feature"',
      'npm run build',
      'from fastapi import FastAPI',
      'cd /var/www && npm start',
      'const response = await axios.get()',
      'ls -la && pwd',
      'print("Hello, World!")',
      'mongodb://localhost:27017',
      'psql -U user -d database',
      'chmod +x deploy.sh',
      'echo $PATH',
      'vim /etc/nginx/nginx.conf',
      'ssh user@server',
      'curl -X GET https://api.example.com',
      'npm install react react-dom',
      'python -m pip install --upgrade pip',
      'jest --coverage',
      'webpack --mode production',
      'rails server -p 3000',
      'java -jar app.jar',
      'go build main.go',
      'rustc main.rs',
      'php artisan serve',
      'node server.js',
      'redis-cli ping',
      'mongod --dbpath /data/db'
    ]

    const generateCodeLine = () => {
      const snippet = programmingSnippets[Math.floor(Math.random() * programmingSnippets.length)]
      return {
        id: Math.random(),
        text: snippet,
        left: Math.random() * 100,
        speed: 20 + Math.random() * 40,
        opacity: 0.1 + Math.random() * 0.3,
        fontSize: 12 + Math.random() * 6
      }
    }

    const initialLines = Array.from({ length: 15 }, generateCodeLine)
    setCodeLines(initialLines)

    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev, generateCodeLine()]
        return newLines.slice(-25)
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { label: 'Projects', value: '20+', icon: '🚀' },
    { label: 'Technologies', value: '15+', icon: '💻' },
    { label: 'Experience', value: '2+ Years', icon: '📈' },
    { label: 'Status', value: 'Available', icon: '✅' },
  ]

  const highlights = [
    { icon: '⚡', text: 'Hands-on with React, Tailwind, Docker, GitHub Actions' },
    { icon: '🤖', text: 'ML projects (LDA, KNN) using scikit-learn, Pandas, NumPy' },
    { icon: '☁️', text: 'Cloud interest across AWS • GCP • Azure' },
    { icon: '📝', text: 'Strong communicator; published writer' },
  ]

  // Enhanced Progress Tracking Data
  const skillProgress = [
    { name: 'React & Next.js', level: 85, status: 'Advanced', projects: 8, icon: '⚛️' },
    { name: 'Python & Data Science', level: 80, status: 'Advanced', projects: 6, icon: '🐍' },
    { name: 'AWS Cloud Services', level: 65, status: 'Intermediate', projects: 4, icon: '☁️' },
    { name: 'Docker & Containers', level: 75, status: 'Intermediate', projects: 5, icon: '🐳' },
    { name: 'Node.js & Express', level: 70, status: 'Intermediate', projects: 5, icon: '🟢' },
    { name: 'TypeScript', level: 60, status: 'Learning', projects: 3, icon: '📘' },
    { name: 'Kubernetes', level: 40, status: 'Learning', projects: 2, icon: '⚓' },
    { name: 'TensorFlow/PyTorch', level: 55, status: 'Intermediate', projects: 3, icon: '🧠' },
  ]

  const certificationProgress = [
    { 
      name: 'AWS Cloud Practitioner', 
      issuer: 'Amazon Web Services',
      progress: 85, 
      status: 'in-progress',
      deadline: '2024-12-31',
      icon: '☁️',
      studyHours: 25
    },
    { 
      name: 'Google Cloud Fundamentals', 
      issuer: 'Google Cloud',
      progress: 100, 
      status: 'completed',
      completedDate: '2024-06-15',
      icon: '🔧',
      studyHours: 40
    },
    { 
      name: 'React Development', 
      issuer: 'Meta',
      progress: 100, 
      status: 'completed',
      completedDate: '2024-03-20',
      icon: '⚛️',
      studyHours: 60
    },
    { 
      name: 'Python for Data Science', 
      issuer: 'University of Michigan',
      progress: 100, 
      status: 'completed',
      completedDate: '2024-01-10',
      icon: '🐍',
      studyHours: 80
    },
    { 
      name: 'Docker Mastery', 
      issuer: 'Docker Inc.',
      progress: 70, 
      status: 'in-progress',
      deadline: '2024-11-30',
      icon: '🐳',
      studyHours: 35
    },
    { 
      name: 'Kubernetes Fundamentals', 
      issuer: 'CNCF',
      progress: 20, 
      status: 'planned',
      deadline: '2025-03-01',
      icon: '⚓',
      studyHours: 0
    }
  ]

  const projectProgress = [
    {
      name: 'AI-Powered Portfolio Platform',
      description: 'Full-stack application with AI integration',
      progress: 90,
      technologies: ['React', 'FastAPI', 'OpenAI', 'PostgreSQL'],
      status: 'near-completion',
      deadline: '2024-10-31'
    },
    {
      name: 'Cloud Resource Manager',
      description: 'AWS cost optimization dashboard',
      progress: 75,
      technologies: ['Next.js', 'AWS SDK', 'Chart.js', 'Docker'],
      status: 'active-development',
      deadline: '2024-11-30'
    },
    {
      name: 'ML Model Deployment Pipeline',
      description: 'Automated machine learning deployment system',
      progress: 60,
      technologies: ['Python', 'Docker', 'FastAPI', 'scikit-learn'],
      status: 'active-development',
      deadline: '2024-12-15'
    },
    {
      name: 'Real-time Chat Application',
      description: 'WebSocket-based messaging platform',
      progress: 100,
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      status: 'completed',
      completedDate: '2024-08-20'
    }
  ]

  const learningGoals = [
    {
      category: 'Short-term (3 months)',
      goals: [
        'Complete AWS Cloud Practitioner certification',
        'Master TypeScript advanced patterns',
        'Build 2 full-stack projects with Docker',
        'Contribute to open-source project'
      ]
    },
    {
      category: 'Medium-term (6 months)',
      goals: [
        'Achieve AWS Solutions Architect certification',
        'Learn Kubernetes in depth',
        'Build microservices architecture project',
        'Master system design principles'
      ]
    },
    {
      category: 'Long-term (1 year)',
      goals: [
        'Become proficient in Go or Rust',
        'Lead a major open-source project',
        'Master advanced ML deployment patterns',
        'Build expertise in cloud security'
      ]
    }
  ]

  // ── TECH EXPERIENCE ───────────────────────────────────────────────
  const techExperience = [
    {
      when: '2022 — Present',
      role: 'IT Assistant',
      org: 'Southern New Hampshire University (SNHU)',
      icon: '🔧',
      bullets: [
        'Support students & staff with SSO/MFA/password resets, device setup, and account issues.',
        'Triage & resolve tickets in ServiceNow; document steps clearly and escalate when needed.',
        'Troubleshoot macOS/Windows, Wi-Fi, printers; assist with AV/livestream setup and teardown.',
        'Collaborate with media and IT teams; focus on reliability, communication, and fast resolution.',
      ],
    },
  ]

  // ── OTHER EXPERIENCE ─────────────────────────────────────
  const otherExperience = [
    {
      when: 'Jun 2023 — Sep 2025',
      role: 'Assembler',
      org: 'Trego',
      icon: '🏭',
      bullets: [
        'Final inspections, inventory handling, met production KPIs.',
        'Improved consistency and throughput with simple checklists.',
      ],
    },
    {
      when: 'Feb 2022 — Aug 2025',
      role: 'Assembler',
      org: 'Hutchinson',
      icon: '⚙️',
      bullets: [
        'Fast-paced line work; safety + quality compliance.',
        'Team problem-solving under tight timelines.',
      ],
    },
    {
      when: 'Jan 2022 — May 2024',
      role: 'Machine Operator / Assembler',
      org: 'Freudenberg Group',
      icon: '🔩',
      bullets: [
        'Operated/maintained machinery; quality checks & documentation.',
        'Built discipline and strong attention to detail.',
      ],
    },
  ]

  // ── EDUCATION ───────────────────────────────────────
  const education = [
    {
      when: '2022 — Present',
      role: 'B.S., Computer Science',
      org: 'Southern New Hampshire University (SNHU)',
      icon: '🎓',
      bullets: ['Focus: Cloud, AI/ML, Web Dev', 'GPA: 3.8/4.0', 'Expected Graduation: 2025'],
    },
  ]

  const tools = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind'] },
    { category: 'Backend', items: ['Python', 'Node.js', 'Express', 'FastAPI', 'REST APIs'] },
    { category: 'Data Science', items: ['Pandas', 'NumPy', 'scikit-learn', 'Jupyter'] },
    { category: 'DevOps', items: ['Docker', 'GitHub Actions', 'Linux', 'VS Code', 'Git'] },
  ]

  // ── UI helpers ────────────────────────────────────────────────────────────────
  const [tab, setTab] = useState('tech')

  const TabButton = ({ id, children, count }) => (
    <button
      onClick={() => setTab(id)}
      className={`px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-300 flex items-center gap-2 ${
        tab === id
          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/25'
          : 'border-white/15 hover:bg-white/5 hover:border-white/30 hover:scale-105'
      }`}
      aria-current={tab === id ? 'page' : undefined}
    >
      {children}
      <span className={`px-2 py-1 rounded-full text-xs ${
        tab === id ? 'bg-white/20' : 'bg-white/10'
      }`}>
        {count}
      </span>
    </button>
  )

  const ProgressTabButton = ({ id, children }) => (
    <button
      onClick={() => setActiveProgressTab(id)}
      className={`px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-300 flex items-center gap-2 ${
        activeProgressTab === id
          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/25'
          : 'border-white/15 hover:bg-white/5 hover:border-white/30 hover:scale-105'
      }`}
    >
      {children}
    </button>
  )

  const ProgressBar = ({ progress, color = 'from-cyan-400 to-blue-500' }) => (
    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
      <div 
        className={`h-3 rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      'completed': { color: 'bg-green-500/20 text-green-400 border-green-400/30', text: 'Completed' },
      'in-progress': { color: 'bg-blue-500/20 text-blue-400 border-blue-400/30', text: 'In Progress' },
      'planned': { color: 'bg-gray-500/20 text-gray-400 border-gray-400/30', text: 'Planned' },
      'advanced': { color: 'bg-purple-500/20 text-purple-400 border-purple-400/30', text: 'Advanced' },
      'intermediate': { color: 'bg-cyan-500/20 text-cyan-400 border-cyan-400/30', text: 'Intermediate' },
      'learning': { color: 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30', text: 'Learning' },
      'active-development': { color: 'bg-blue-500/20 text-blue-400 border-blue-400/30', text: 'Active Development' },
      'near-completion': { color: 'bg-green-500/20 text-green-400 border-green-400/30', text: 'Near Completion' }
    }
    
    const config = statusConfig[status] || statusConfig.planned
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        {config.text}
      </span>
    )
  }

  const Timeline = ({ items }) => (
    <div className="relative pl-8">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-blue-500/50" />
      <div className="space-y-6">
        {items.map((t, i) => (
          <article key={i} className="card p-6 relative group hover:scale-[1.02] transition-all duration-300">
            <div className="absolute -left-10 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm shadow-lg">
              {t.icon}
            </div>
            <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
              <div className="flex-1">
                <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {t.role}
                </h4>
                <p className="opacity-80 font-medium">{t.org}</p>
              </div>
              <span className="text-sm opacity-70 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {t.when}
              </span>
            </div>
            {!!t.bullets?.length && (
              <ul className="space-y-2">
                {t.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm opacity-90">
                    <span className="text-cyan-400 mt-1">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/10 overflow-hidden">
      {/* Animated Code Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {codeLines.map((line) => (
          <div
            key={line.id}
            className="absolute font-mono text-cyan-400/30 whitespace-nowrap pointer-events-none"
            style={{
              left: `${line.left}%`,
              bottom: '-2em',
              fontSize: `${line.fontSize}px`,
              opacity: line.opacity,
              animation: `floatUp ${line.speed}s linear forwards`
            }}
          >
            {line.text}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
        }
      `}</style>

      <Navbar />
      
      <main className="flex-1 relative z-10">
        <div className="container mx-auto px-4 py-12">
          {/* Page Header */}
          <header className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <p className="text-sm font-semibold text-cyan-400/80 tracking-wider">ABOUT ME</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafting Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed font-light">
              Computer Science student passionate about <span className="font-semibold text-cyan-400">Cloud Architecture</span>, 
              <span className="font-semibold text-blue-400"> AI/ML</span>, and building 
              <span className="font-semibold text-purple-400"> scalable web applications</span> that solve real-world problems.
            </p>
          </header>

          {/* Profile + Stats */}
          <section className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="card p-8 bg-gradient-to-br from-gray-900/80 to-blue-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
                <div className="text-center">
                  <div className="relative mx-auto w-32 h-32 rounded-full p-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
                      SR
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mt-6">Samuel Ray</h2>
                  <p className="opacity-70 mt-2">Full-Stack Developer & Cloud Engineer</p>
                  
                  <div className="flex gap-3 justify-center mt-6">
                    <a href="/resume.pdf" className="btn-primary px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg">
                      Download CV
                    </a>
                    <a href="/contact" className="btn-outline px-6 py-3 rounded-xl border-2 border-white/15 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      Contact Me
                    </a>
                  </div>
                </div>

                <hr className="my-6 border-white/10" />

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                      <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{stat.icon}</div>
                      <div className="text-lg font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-xs opacity-70 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Card */}
            <div className="lg:col-span-2">
              <div className="card p-8 bg-gradient-to-br from-gray-900/80 to-purple-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm h-full">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Current Focus & Expertise
                </h3>
                
                <div className="grid gap-4 mb-8">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{highlight.icon}</span>
                      <span className="opacity-90">{highlight.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bridge Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 p-6 hover:border-cyan-400/40 transition-all duration-300">
                    <h4 className="font-bold text-cyan-400 mb-3 flex items-center gap-2">
                      <span>🔄</span>
                      Transferable Skills
                    </h4>
                    <p className="opacity-80 text-sm leading-relaxed">
                      Manufacturing sharpened my attention to detail, documentation habits, and reliability. 
                      These same principles drive my approach to clean code, thorough testing, and reliable deployments.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 p-6 hover:border-purple-400/40 transition-all duration-300">
                    <h4 className="font-bold text-purple-400 mb-3 flex items-center gap-2">
                      <span>🎯</span>
                      Career Goals
                    </h4>
                    <p className="opacity-80 text-sm leading-relaxed">
                      Seeking internship or junior roles in Cloud/DevOps or AI-powered web applications 
                      where I can contribute immediately while accelerating my learning curve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Progress Tracking Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Learning Journey & Progress
              </h2>
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                Tracking my growth across technologies, certifications, and projects
              </p>
            </div>

            {/* Progress Tabs */}
            <div className="flex gap-4 mb-8 flex-wrap justify-center">
              <ProgressTabButton id="skills">
                🛠️ Technical Skills
              </ProgressTabButton>
              <ProgressTabButton id="certifications">
                📜 Certifications
              </ProgressTabButton>
              <ProgressTabButton id="projects">
                🚀 Active Projects
              </ProgressTabButton>
              <ProgressTabButton id="goals">
                🎯 Learning Goals
              </ProgressTabButton>
            </div>

            {/* Progress Content */}
            <div className="card p-8 bg-gradient-to-br from-gray-900/80 to-blue-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
              {/* Skills Progress */}
              {activeProgressTab === 'skills' && (
                <div className="space-y-6">
                  {skillProgress.map((skill, index) => (
                    <div key={index} className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl">{skill.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white">{skill.name}</h4>
                          <div className="flex items-center gap-3">
                            <StatusBadge status={skill.status} />
                            <span className="text-sm opacity-70">{skill.projects} projects</span>
                          </div>
                        </div>
                        <ProgressBar progress={skill.level} />
                        <div className="flex justify-between text-xs opacity-70 mt-1">
                          <span>Beginner</span>
                          <span className="font-semibold text-cyan-400">{skill.level}%</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Certifications Progress */}
              {activeProgressTab === 'certifications' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {certificationProgress.map((cert, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-2xl">{cert.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{cert.name}</h4>
                          <p className="text-sm opacity-70">{cert.issuer}</p>
                        </div>
                        <StatusBadge status={cert.status} />
                      </div>
                      
                      <ProgressBar 
                        progress={cert.progress} 
                        color={cert.status === 'completed' ? 'from-green-400 to-emerald-500' : 'from-cyan-400 to-blue-500'}
                      />
                      
                      <div className="flex justify-between items-center mt-3 text-sm">
                        <span className="opacity-70">
                          {cert.studyHours > 0 ? `${cert.studyHours}h studied` : 'Not started'}
                        </span>
                        <span className="font-semibold text-cyan-400">
                          {cert.progress}%
                        </span>
                      </div>

                      {cert.deadline && (
                        <div className="mt-2 text-xs opacity-60">
                          Target: {new Date(cert.deadline).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Projects Progress */}
              {activeProgressTab === 'projects' && (
                <div className="space-y-6">
                  {projectProgress.map((project, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-white text-lg">{project.name}</h4>
                          <p className="text-sm opacity-70 mt-1">{project.description}</p>
                        </div>
                        <StatusBadge status={project.status} />
                      </div>

                      <ProgressBar 
                        progress={project.progress}
                        color={project.status === 'completed' ? 'from-green-400 to-emerald-500' : 'from-cyan-400 to-blue-500'}
                      />
                      
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 rounded-lg bg-white/5 text-xs border border-white/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="font-semibold text-cyan-400 text-sm">
                          {project.progress}%
                        </span>
                      </div>

                      {project.deadline && (
                        <div className="mt-2 text-xs opacity-60">
                          Deadline: {new Date(project.deadline).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Learning Goals */}
              {activeProgressTab === 'goals' && (
                <div className="grid md:grid-cols-3 gap-6">
                  {learningGoals.map((timeframe, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-purple-900/20 border border-white/10">
                      <h4 className="font-semibold text-purple-400 mb-4 text-lg">{timeframe.category}</h4>
                      <ul className="space-y-3">
                        {timeframe.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start gap-3 text-sm opacity-90">
                            <span className="text-purple-400 mt-1 text-xs">🎯</span>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Experience Tabs */}
          <section className="mb-16">
            <div className="flex gap-4 mb-8 flex-wrap">
              <TabButton id="tech" count={techExperience.length}>
                💻 Tech Experience
              </TabButton>
              <TabButton id="other" count={otherExperience.length}>
                🏭 Other Experience
              </TabButton>
              <TabButton id="edu" count={education.length}>
                🎓 Education
              </TabButton>
            </div>
            
            <div className="card p-8 bg-gradient-to-br from-gray-900/80 to-blue-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
              {tab === 'tech' && <Timeline items={techExperience} />}
              {tab === 'other' && <Timeline items={otherExperience} />}
              {tab === 'edu' && <Timeline items={education} />}
            </div>
          </section>

          {/* Tools & Technologies */}
          <section className="mb-16">
            <div className="card p-8 bg-gradient-to-br from-gray-900/80 to-purple-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
                <span>🛠️</span>
                Technologies & Tools
              </h3>
              <div className="space-y-6">
                {tools.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-cyan-400 mb-3">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-16">
            <div className="card p-8 bg-gradient-to-br from-gray-900/80 to-cyan-900/20 rounded-3xl border border-cyan-400/20 shadow-2xl shadow-cyan-400/10 backdrop-blur-sm text-center">
              <blockquote className="text-2xl md:text-3xl font-light italic opacity-90 leading-relaxed">
                "Great engineering is a mix of <span className="text-cyan-400 font-semibold">curiosity</span>, 
                <span className="text-blue-400 font-semibold"> clarity</span>, and 
                <span className="text-purple-400 font-semibold"> consistency</span>. 
                I strive to bring all three to every project I touch."
              </blockquote>
              <figcaption className="mt-6 text-lg opacity-70 flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                — Samuel Ray
              </figcaption>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="card p-12 text-center bg-gradient-to-br from-gray-900/80 to-blue-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Background elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
              
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl opacity-75 mb-8 max-w-2xl mx-auto">
                I'm eager to contribute to innovative cloud, ML, and full-stack projects. 
                Let's discuss how we can create exceptional digital experiences together.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a href="/contact" className="btn-primary px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Conversation
                </a>
                <a href="/projects" className="btn-outline px-8 py-4 rounded-xl border-2 border-white/15 hover:bg-white/10 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  View My Work
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}