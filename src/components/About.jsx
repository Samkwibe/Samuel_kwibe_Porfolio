// About.jsx — Enhanced with progress tracking, animations, and modern design
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, Mail, Github, Linkedin, ExternalLink, Award, Code, Cloud, Brain, Rocket, Sparkles, TrendingUp, Target, CheckCircle2 } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import { profile } from '../data/profile'

export default function About() {
  const [activeProgressTab, setActiveProgressTab] = useState('skills')
  const [tab, setTab] = useState('tech')
  const [imageError, setImageError] = useState(false)

  // Refs for scroll animations
  const headerRef = useRef(null)
  const profileRef = useRef(null)
  const statsRef = useRef(null)
  const progressRef = useRef(null)
  const experienceRef = useRef(null)
  const toolsRef = useRef(null)
  const philosophyRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const profileInView = useInView(profileRef, { once: true, margin: "-100px" })
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })
  const progressInView = useInView(progressRef, { once: true, margin: "-100px" })
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" })
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" })
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" })

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const stats = [
    { label: 'Projects', value: '29+', icon: Rocket, color: 'from-cyan-400 to-blue-500' },
    { label: 'GPA', value: '3.22', icon: Award, color: 'from-purple-400 to-pink-500' },
    { label: 'Experience', value: '2+ Years', icon: TrendingUp, color: 'from-green-400 to-emerald-500' },
    { label: 'Status', value: 'Available', icon: CheckCircle2, color: 'from-yellow-400 to-orange-500' },
  ]

  const highlights = [
    { icon: Code, text: 'Full-Stack Developer with expertise in React.js, Node.js, Firebase, and Android development', gradient: 'from-cyan-400 to-blue-500' },
    { icon: Brain, text: 'Machine Learning enthusiast with 85% accuracy models using scikit-learn, pandas, and NumPy', gradient: 'from-purple-400 to-pink-500' },
    { icon: Cloud, text: 'Cloud Computing experience with AWS (EC2, S3, IAM, VPC, RDS, CloudWatch, CloudFormation)', gradient: 'from-blue-400 to-cyan-500' },
    { icon: Rocket, text: 'Cybersecurity expertise with Wireshark, Snort, Kali Linux, and vulnerability assessment', gradient: 'from-green-400 to-emerald-500' },
  ]

  // Enhanced Progress Tracking Data
  const skillProgress = [
    { name: 'React & Next.js', level: 85, status: 'Advanced', projects: 8, icon: '⚛️' },
    { name: 'Python & Data Science', level: 80, status: 'Advanced', projects: 6, icon: '🐍' },
    { name: 'AWS Cloud Services', level: 40, status: 'Learning', projects: 4, icon: '☁️' },
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
      name: 'Family Housing Hub',
      description: 'Full-Stack Web Application - Comprehensive housing assistance platform with multilingual support',
      progress: 100,
      technologies: ['React.js', 'Firebase', 'Firestore', 'Firebase Auth'],
      status: 'completed',
      github: 'github.com/Samkwibe/Family-Housing-Hub',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Quick Food Finder',
      description: 'Android Mobile Application - Location-based restaurant discovery app with GPS integration',
      progress: 100,
      technologies: ['Android Studio', 'Kotlin', 'Google Maps API', 'MongoDB', 'Firebase Auth'],
      status: 'completed',
      github: 'github.com/Samkwibe/Quick-Food-Finder-App',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'SNHU Food Waste Tracking System',
      description: 'Full-Stack Web Application - Sustainability platform with interactive dashboards and real-time tracking',
      progress: 100,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase Realtime Database', 'Chart.js'],
      status: 'completed',
      github: 'github.com/Samkwibe/snhu-foodwaste-backend',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'AI Roadmap Generator',
      description: 'Machine Learning Application - Intelligent learning path generator with personalized recommendations',
      progress: 100,
      technologies: ['Python', 'scikit-learn', 'Machine Learning'],
      status: 'completed',
      github: 'github.com/Samkwibe/AI-Roadmap-Generator',
      color: 'from-orange-400 to-yellow-500'
    },
    {
      name: 'Pathfinder AI',
      description: 'Algorithm Optimization Project - AI-powered pathfinding system with route optimization',
      progress: 100,
      technologies: ['Python', 'NumPy', 'scikit-learn', 'A*', 'Dijkstra'],
      status: 'completed',
      github: 'github.com/Samkwibe/Pathfinder-AI',
      color: 'from-indigo-400 to-purple-500'
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
      when: 'Aug 2022 — Present',
      role: 'IT Front Desk Assistant',
      org: 'Southern New Hampshire University (SNHU)',
      icon: '💻',
      bullets: [
        'Provide comprehensive IT support to 500+ students and faculty, troubleshooting software, network connectivity, and security issues with 95% first-contact resolution rate.',
        'Assist with system upgrades and implement cybersecurity best practices to ensure campus-wide operational efficiency and data protection.',
        'Document technical issues and resolutions in ServiceNow ticketing system, improving knowledge base and reducing recurring problems by 30%.',
        'Configure and troubleshoot macOS, Windows, and Linux systems, ensuring seamless access to digital learning platforms and institutional systems.',
        'Support classroom technology and assist with software installations, hardware maintenance, and user training sessions.',
      ],
    },
    {
      when: 'Aug 2022 — Present',
      role: 'Media Services Volunteer',
      org: 'Southern New Hampshire University (SNHU)',
      icon: '🎥',
      bullets: [
        'Provide technical support for faculty and students on media production tools including cameras, editing software (Adobe Premiere, Final Cut Pro), and streaming platforms (Zoom, OBS).',
        'Manage live streaming and video recording for 50+ university events and lectures annually to enhance accessibility for remote students.',
        'Configure and maintain smart classroom technology including interactive displays, professional audio/video systems, and lecture capture equipment.',
        'Support post-production tasks including video editing, captioning, and digital file management to improve content quality and accessibility.',
      ],
    },
  ]

  // ── OTHER EXPERIENCE ─────────────────────────────────────
  const otherExperience = [
    {
      when: 'Aug 2023 — Apr 2025',
      role: 'Sprint Machine Operator',
      org: 'Own Courning | Keene, NH',
      icon: '🏭',
      bullets: [
        'Set up and calibrated sprint machines for optimal performance, ensuring consistent product quality.',
        'Monitored machine operation to detect malfunctions, performing troubleshooting and adjustments as needed.',
        'Conducted routine maintenance, including lubrication, part replacement, and alignment adjustments.',
        'Inspected finished products for defects and ensured compliance with quality standards.',
        'Documented production data, machine performance, and quality checks for review.',
        'Coordinated with supervisors to optimize workflow and implement process improvements.',
      ],
    },
    {
      when: 'May 2021 — Apr 2023',
      role: 'Production Technician',
      org: 'Vibracoustic | Manchester, NH',
      icon: '⚙️',
      bullets: [
        'Assembled rubber and plastic automotive components using hand tools and precision assembly equipment.',
        'Calibrated and used measuring tools (micrometers, calipers) to ensure component accuracy during assembly.',
        'Performed in-line quality inspections to identify defects and ensure assembled products met strict compliance standards.',
        'Maintained an organized and clean assembly area following 5S lean manufacturing principles.',
        'Assisted in component changeovers and part adjustments to support different assembly requirements.',
        'Worked closely with maintenance personnel to troubleshoot and correct issues affecting the assembly line.',
      ],
    },
    {
      when: 'Jan 2019 — May 2021',
      role: 'Manufacturing Operator',
      org: 'Lindt Chocolate & Springling | One Fine Chocolate Place, Stratham, NH',
      icon: '🍫',
      bullets: [
        'Operated automated chocolate molding, wrapping, and packaging machines, maintaining product consistency.',
        'Monitored machine temperature, speed, and other parameters, making adjustments for quality control.',
        'Conducted routine maintenance on machines, including cleaning, part replacement, and minor repairs.',
        'Inspected chocolate products for appearance, weight, and packaging integrity.',
        'Recorded production data and performed quality audits to ensure compliance with company standards.',
        'Assisted in training new hires on machine operation and safety protocols.',
      ],
    },
  ]

  // ── EDUCATION ───────────────────────────────────────
  const education = [
    {
      when: '2022 — Present',
      role: 'Bachelor of Science in Computer Science',
      org: 'Southern New Hampshire University (SNHU)',
      icon: '🎓',
      bullets: [
        'Expected Graduation: December 2026',
        'GPA: 3.22/4.0',
        'Focus: Full-Stack Development, Machine Learning, Cloud Computing, Cybersecurity',
        'Relevant Coursework: Full Stack Development I (A), Mobile Architecture & Programming (B+), Client/Server Development (A), Principles of Machine Learning (A-), Cybersecurity Foundations (A), Computer Security (B+), Operating Platforms (A)'
      ],
    },
  ]

  // ── RESEARCH & ACHIEVEMENTS ───────────────────────────────────────
  const researchAchievements = [
    {
      when: 'Spring 2023',
      role: 'Inquiry Scholars Research Program',
      org: 'Southern New Hampshire University (SNHU)',
      icon: '🔬',
      bullets: [
        'Conducted independent research on student learning and engagement using design thinking methodology, presenting findings to university stakeholders.',
        'Completed comprehensive AWS cloud infrastructure projects including EC2 deployment, S3 configuration, VPC setup, and CloudFormation infrastructure-as-code templates.',
        'Conducted cybersecurity analysis including network packet capture with Wireshark, intrusion detection with Snort, and vulnerability assessment in virtualized lab environments.',
        'Developed machine learning models for employee attrition prediction using Python, pandas, and scikit-learn with comprehensive data preprocessing, feature engineering, and model evaluation (85% accuracy).',
        'Designed normalized database schemas for SNHU Medical Center healthcare systems, including patient registration and appointment management, with full ERD documentation and SQL implementation.',
      ],
    },
  ]

  // ── RELEVANT COURSEWORK (Detailed) ───────────────────────────────────────
  const coursework = [
    {
      category: 'Advanced Development',
      courses: [
        { name: 'Full Stack Development I', grade: 'A' },
        { name: 'Mobile Architecture & Programming', grade: 'B+' },
        { name: 'Client/Server Development', grade: 'A' },
        { name: 'Principles of Machine Learning', grade: 'A-' }
      ],
      icon: Code
    },
    {
      category: 'Cybersecurity & Systems',
      courses: [
        { name: 'Cybersecurity Foundations', grade: 'A' },
        { name: 'Computer Security', grade: 'B+' },
        { name: 'Operating Platforms', grade: 'A' }
      ],
      icon: Award
    },
    {
      category: 'Software Engineering',
      courses: [
        { name: 'Software Development Lifecycle', grade: 'A' },
        { name: 'Software Testing, Automation & QA', grade: 'B+' },
        { name: 'System Analysis & Design', grade: 'A' }
      ],
      icon: Rocket
    },
    {
      category: 'Computer Science Fundamentals',
      courses: [
        { name: 'Data Structures & Algorithms', grade: 'B+' },
        { name: 'Database Design & Management', grade: 'A' },
        { name: 'Computer Networks', grade: 'A-' }
      ],
      icon: Brain
    },
    {
      category: 'Mathematics & Analytics',
      courses: [
        { name: 'Discrete Mathematics', grade: 'B+' },
        { name: 'Statistics for Data Science', grade: 'A' },
        { name: 'Calculus I', grade: 'B' },
        { name: 'Linear Algebra', grade: 'B+' }
      ],
      icon: TrendingUp
    }
  ]

  const achievements = [
    {
      title: 'Inquiry Scholars Research Program',
      period: 'Spring 2023',
      description: 'Conducted independent research on student learning and engagement using design thinking methodology',
      highlights: [
        'Presented findings to university stakeholders',
        'Developed ML models with 85% accuracy for employee attrition prediction',
        'Designed normalized database schemas for SNHU Medical Center healthcare systems'
      ],
      icon: Award
    },
    {
      title: 'AWS Cloud Infrastructure Projects',
      period: '2023',
      description: 'Completed comprehensive AWS cloud infrastructure projects',
      highlights: [
        'EC2 deployment and configuration',
        'S3 bucket setup and management',
        'VPC network architecture',
        'CloudFormation infrastructure-as-code templates'
      ],
      icon: Cloud
    },
    {
      title: 'Cybersecurity Analysis',
      period: '2023',
      description: 'Conducted comprehensive cybersecurity analysis in virtualized lab environments',
      highlights: [
        'Network packet capture with Wireshark',
        'Intrusion detection with Snort',
        'Vulnerability assessment and reporting'
      ],
      icon: Award
    }
  ]

  const tools = [
    { category: 'Programming Languages', items: ['Python', 'Java', 'JavaScript', 'C++', 'Kotlin', 'SQL', 'Bash/Shell', 'PowerShell'], icon: Code },
    { category: 'Web & Mobile Development', items: ['React.js', 'Node.js', 'HTML5', 'CSS3', 'Bootstrap', 'Firebase (Auth & Firestore)', 'Android Studio', 'REST APIs'], icon: Cloud },
    { category: 'Cloud & DevOps', items: ['AWS (EC2, S3, IAM, VPC, RDS, CloudWatch, CloudFormation)', 'Docker', 'Git/GitHub', 'AWS CLI'], icon: Rocket },
    { category: 'Data & Machine Learning', items: ['NumPy', 'pandas', 'scikit-learn', 'TensorFlow basics', 'MongoDB', 'MySQL', 'PostgreSQL', 'Data Visualization'], icon: Brain },
    { category: 'Cybersecurity & Systems', items: ['Wireshark', 'Snort', 'Kali Linux', 'Ubuntu', 'Windows', 'macOS', 'Vulnerability Testing', 'Network Security Analysis'], icon: Award },
  ]

  // ── UI helpers ────────────────────────────────────────────────────────────────
  const TabButton = ({ id, children, count }) => (
    <motion.button
      onClick={() => setTab(id)}
      className={`px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold border-2 transition-all duration-300 flex items-center gap-2 ${
        tab === id
          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/25'
          : 'border-white/15 hover:bg-white/5 hover:border-white/30'
      }`}
      aria-current={tab === id ? 'page' : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <span className={`px-3 py-1 rounded-full text-xs md:text-sm ${
        tab === id ? 'bg-white/20' : 'bg-white/10'
      }`}>
        {count}
      </span>
    </motion.button>
  )

  const ProgressTabButton = ({ id, children }) => (
    <motion.button
      onClick={() => setActiveProgressTab(id)}
      className={`px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold border-2 transition-all duration-300 flex items-center gap-2 ${
        activeProgressTab === id
          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/25'
          : 'border-white/15 hover:bg-white/5 hover:border-white/30'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/10 overflow-hidden relative">
      {/* Static Code Background - Removed distracting animations */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
      </div>

      <Navbar />
      
      <main className="flex-1 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 md:py-20 lg:py-24">
          {/* Page Header */}
          <motion.header 
            ref={headerRef}
            initial={{ opacity: 0, y: -50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-28 lg:mb-32 text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-8 md:mb-10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <p className="text-sm md:text-base font-semibold text-cyan-400/80 tracking-wider">ABOUT ME</p>
            </motion.div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold mb-10 md:mb-12 leading-tight">
              Crafting Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Excellence
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl opacity-90 max-w-7xl mx-auto leading-relaxed font-light px-4">
              Full-Stack Developer and Machine Learning Enthusiast passionate about <span className="font-semibold text-cyan-400">Cloud Computing</span>, 
              <span className="font-semibold text-blue-400"> AI/ML</span>, and building 
              <span className="font-semibold text-purple-400"> innovative applications</span> that solve real-world problems.
            </p>
          </motion.header>

          {/* Profile + Stats */}
          <motion.section 
            ref={profileRef}
            initial={{ opacity: 0, y: 50 }}
            animate={profileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-20 md:mb-28 lg:mb-32 w-full"
          >
            {/* Profile Card */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={profileInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="card p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-900/80 to-blue-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm">
                <div className="text-center">
                  <motion.div 
                    className="relative mx-auto w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full p-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
                    whileHover={{ scale: 1.05 }}
                  >
                    {imageError ? (
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                        SK
                      </div>
                    ) : (
                      <img 
                        src="/profile.jpg" 
                        alt={profile.name}
                        className="w-full h-full rounded-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    )}
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-8 md:mt-10">{profile.name}</h2>
                  <p className="opacity-70 mt-3 text-lg md:text-xl lg:text-2xl">{profile.title}</p>
                  
                  <div className="flex gap-3 justify-center mt-6">
                    <motion.a 
                      href={profile.resumeUrl} 
                      download
                      className="btn-primary px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download size={18} />
                      Download CV
                    </motion.a>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 justify-center mt-6">
                    <motion.a 
                      href={profile.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Github size={20} className="text-cyan-400" />
                    </motion.a>
                    <motion.a 
                      href={profile.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Linkedin size={20} className="text-cyan-400" />
                    </motion.a>
                    <motion.a 
                      href={`mailto:${profile.email}`}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Mail size={20} className="text-cyan-400" />
                    </motion.a>
                  </div>
                </div>

                <hr className="my-6 border-white/10" />

                {/* Stats */}
                <motion.div 
                  ref={statsRef}
                  className="grid grid-cols-2 gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={statsInView ? "visible" : "hidden"}
                >
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div 
                        key={index} 
                        variants={fadeInUp}
                        className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <Icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <div className={`text-lg md:text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</div>
                        <div className="text-xs md:text-sm opacity-70 mt-1">{stat.label}</div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>
            </motion.div>

            {/* Highlights Card */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={profileInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="card p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-900/80 to-purple-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm h-full">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Current Focus & Expertise
                </h3>
                
                <div className="grid gap-5 md:gap-6 mb-10 md:mb-12">
                  {highlights.map((highlight, index) => {
                    const Icon = highlight.icon
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-5 md:gap-6 p-5 md:p-6 lg:p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={profileInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <Icon className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-cyan-400 group-hover:scale-110 transition-transform bg-gradient-to-r ${highlight.gradient} bg-clip-text text-transparent`} />
                        <span className="opacity-90 text-lg md:text-xl lg:text-2xl leading-relaxed">{highlight.text}</span>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Bridge Cards */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
                  <motion.div 
                    className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 p-6 md:p-8 lg:p-10 hover:border-cyan-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h4 className="font-bold text-cyan-400 mb-4 md:mb-5 flex items-center gap-3 text-xl md:text-2xl lg:text-3xl">
                      <span className="text-2xl md:text-3xl">🔄</span>
                      Transferable Skills
                    </h4>
                    <p className="opacity-80 text-base md:text-lg lg:text-xl leading-relaxed">
                      Manufacturing sharpened my attention to detail, documentation habits, and reliability. 
                      These same principles drive my approach to clean code, thorough testing, and reliable deployments.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 p-6 md:p-8 lg:p-10 hover:border-purple-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <h4 className="font-bold text-purple-400 mb-4 md:mb-5 flex items-center gap-3 text-xl md:text-2xl lg:text-3xl">
                      <span className="text-2xl md:text-3xl">🎯</span>
                      Career Goals
                    </h4>
                    <p className="opacity-80 text-base md:text-lg lg:text-xl leading-relaxed">
                      Seeking internship or junior roles in Cloud/DevOps or AI-powered web applications 
                      where I can contribute immediately while accelerating my learning curve.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Progress Tracking Section */}
          <motion.section 
            ref={progressRef}
            initial={{ opacity: 0, y: 50 }}
            animate={progressInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-28 lg:mb-32"
          >
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Learning Journey & Progress
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl opacity-80 max-w-4xl mx-auto leading-relaxed">
                Tracking my growth across technologies, certifications, and projects
              </p>
            </div>

            {/* Progress Tabs */}
            <div className="flex gap-4 md:gap-6 mb-10 md:mb-12 flex-wrap justify-center">
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
          </motion.section>

          {/* Experience Tabs */}
          <motion.section 
            ref={experienceRef}
            initial={{ opacity: 0, y: 50 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-28 lg:mb-32"
          >
            <div className="flex gap-4 md:gap-6 mb-10 md:mb-12 flex-wrap justify-center">
              <TabButton id="tech" count={techExperience.length}>
                💻 Tech Experience
              </TabButton>
              <TabButton id="other" count={otherExperience.length}>
                🏭 Other Experience
              </TabButton>
              <TabButton id="edu" count={education.length}>
                🎓 Education
              </TabButton>
              <TabButton id="research" count={researchAchievements.length}>
                🔬 Research & Achievements
              </TabButton>
              <TabButton id="coursework" count={coursework.length}>
                📚 Coursework
              </TabButton>
              <TabButton id="achievements" count={achievements.length}>
                🏆 Key Achievements
              </TabButton>
            </div>
            
            <motion.div 
              className="card p-10 md:p-12 lg:p-16 bg-gradient-to-br from-gray-900/80 to-blue-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm w-full"
              initial={{ opacity: 0 }}
              animate={experienceInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {tab === 'tech' && <Timeline items={techExperience} />}
              {tab === 'other' && <Timeline items={otherExperience} />}
              {tab === 'edu' && <Timeline items={education} />}
              {tab === 'research' && <Timeline items={researchAchievements} />}
              {tab === 'coursework' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {coursework.map((category, index) => {
                    const Icon = category.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="card p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Icon size={24} className="text-cyan-400" />
                          <h4 className="text-xl font-bold text-cyan-400">{category.category}</h4>
                        </div>
                        <div className="space-y-3">
                          {category.courses.map((course, courseIndex) => (
                            <div key={courseIndex} className="flex justify-between items-center p-3 rounded-lg bg-white/5">
                              <span className="text-base opacity-90">{course.name}</span>
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                course.grade === 'A' || course.grade === 'A-' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                                course.grade === 'B+' || course.grade === 'B' ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30' :
                                course.grade === 'C+' || course.grade === 'C' || course.grade === 'C-' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' :
                                'bg-gray-500/20 text-gray-400 border border-gray-400/30'
                              }`}>
                                {course.grade}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              )}
              {tab === 'achievements' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="card p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-blue-900/20 border border-white/10"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Icon size={24} className="text-cyan-400" />
                          <div>
                            <h4 className="text-xl font-bold text-cyan-400">{achievement.title}</h4>
                            <p className="text-sm opacity-70">{achievement.period}</p>
                          </div>
                        </div>
                        <p className="text-base opacity-90 mb-4">{achievement.description}</p>
                        <ul className="space-y-2">
                          {achievement.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start gap-2 text-sm opacity-80">
                              <span className="text-cyan-400 mt-1">▸</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </motion.div>
          </motion.section>

          {/* Tools & Technologies */}
          <motion.section 
            ref={toolsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={toolsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-28 lg:mb-32"
          >
            <div className="card p-10 md:p-12 lg:p-16 bg-gradient-to-br from-gray-900/80 to-purple-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm w-full">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-3">
                <span className="text-4xl md:text-5xl">🛠️</span>
                Technologies & Tools
              </h3>
              <div className="space-y-8 md:space-y-10">
                {tools.map((category, index) => {
                  const Icon = category.icon
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={toolsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <Icon size={28} className="text-cyan-400" />
                        <h4 className="font-semibold text-cyan-400 text-xl md:text-2xl lg:text-3xl">{category.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-3 md:gap-4">
                        {category.items.map((tool, toolIndex) => (
                          <motion.span
                            key={toolIndex}
                            className="px-4 py-2 md:px-5 md:py-3 rounded-xl border border-white/10 bg-white/5 text-sm md:text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.section>

          {/* Philosophy */}
          <motion.section 
            ref={philosophyRef}
            initial={{ opacity: 0, y: 50 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-28 lg:mb-32"
          >
            <div className="card p-10 md:p-12 lg:p-16 bg-gradient-to-br from-gray-900/80 to-cyan-900/20 rounded-3xl border border-cyan-400/20 shadow-2xl shadow-cyan-400/10 backdrop-blur-sm text-center w-full">
              <blockquote className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light italic opacity-90 leading-relaxed max-w-6xl mx-auto">
                "Great engineering is a mix of <span className="text-cyan-400 font-semibold">curiosity</span>, 
                <span className="text-blue-400 font-semibold"> clarity</span>, and 
                <span className="text-purple-400 font-semibold"> consistency</span>. 
                I strive to bring all three to every project I touch."
              </blockquote>
              <figcaption className="mt-8 md:mt-10 text-xl md:text-2xl opacity-70 flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                — {profile.name}
              </figcaption>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card p-12 md:p-16 lg:p-20 text-center bg-gradient-to-br from-gray-900/80 to-blue-900/20 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden w-full">
              {/* Background elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-2xl md:text-3xl lg:text-4xl opacity-75 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
                I'm eager to contribute to innovative cloud, ML, and full-stack projects. 
                Let's discuss how we can create exceptional digital experiences together.
              </p>
              <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
                <motion.a 
                  href="/contact" 
                  className="btn-primary px-10 md:px-12 py-5 md:py-6 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-lg md:text-xl font-semibold transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Conversation
                </motion.a>
                <motion.a 
                  href="/projects" 
                  className="btn-outline px-10 md:px-12 py-5 md:py-6 rounded-xl border-2 border-white/15 hover:bg-white/10 text-lg md:text-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}