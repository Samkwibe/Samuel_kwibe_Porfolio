import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Code, Sparkles, MonitorSmartphone, ShieldCheck } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  }

  const techPills = [
    { name: "React", icon: Code, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "Node.js", icon: MonitorSmartphone, color: "text-green-400", bg: "bg-green-400/10" },
    { name: "AWS", icon: Sparkles, color: "text-orange-400", bg: "bg-orange-400/10" },
    { name: "Cybersecurity", icon: ShieldCheck, color: "text-purple-400", bg: "bg-purple-400/10" }
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full pt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 border-white/10 shadow-lg shadow-black/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-400 tracking-wide">
                Available for Summer 2024 Internships
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="block text-white">Hi, I'm Samuel</span>
            <span className="block mt-2 text-gradient pb-2">
              Building Digital Experiences
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="mt-6 text-xl sm:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            I'm a Computer Science student at SNHU specializing in Full-Stack Development, Cloud Computing, and AI solutions.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mt-10">
            {techPills.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={idx} className={`flex items-center gap-2 px-4 py-2 rounded-xl ${tech.bg} border border-white/5 backdrop-blur-md transition-all hover:scale-105`}>
                  <Icon size={16} className={tech.color} />
                  <span className={`text-sm font-medium ${tech.color}`}>{tech.name}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/projects" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 rounded-2xl hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a href="/Samuel_Kwibe_Resume_Final.docx" download className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-neutral-300 transition-all duration-200 glass-panel rounded-2xl hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20">
              <Download className="mr-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}