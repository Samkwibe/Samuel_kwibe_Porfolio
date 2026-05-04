import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowRight, Download, Award, Code, Briefcase, ChevronRight, GraduationCap } from 'lucide-react'

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const graduationImages = [
    '/graduation/IMG_2835.jpg',
    '/graduation/IMG_2837.jpg',
    '/graduation/IMG_2838.jpg',
    '/graduation/IMG_2839.jpg',
    '/graduation/IMG_2840.jpg',
    '/graduation/IMG_2841.jpg',
    '/graduation/IMG_2842.jpg',
    '/graduation/IMG_2843.jpg',
    '/graduation/IMG_2844.jpg'
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % graduationImages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const techIcons = [
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-slate-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none" />
      
      {/* Container */}
      <div className="max-w-7xl mx-auto relative z-10 pt-8 lg:pt-16 pb-20">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* 1. Main Hero Card (Spans 2 cols, 2 rows) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 md:row-span-2 rounded-3xl bg-white/[0.02] border border-white/[0.05] p-8 lg:p-10 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
                  <img src="/Profile_grad.png" alt="Samuel Kwibe" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Samuel Kwibe</h2>
                  <p className="text-slate-400">Software Engineer & Student</p>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6 text-white">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Excellence</span>
              </h1>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
                I'm a Computer Science student specializing in Software Engineering, Algorithms, and Databases. Passionate about building innovative solutions and turning complex problems into elegant code.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects" className="px-6 py-3 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2">
                View Work <ArrowRight size={18} />
              </Link>
              <a href="/Samuel_Kwibe_Resume_Final.docx" download="Samuel_Kwibe_Resume_Final.docx" className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 border border-white/5 transition-colors flex items-center gap-2">
                <Download size={18} /> Resume
              </a>
            </div>
          </motion.div>

          {/* 2. Photo Carousel Card (Spans 2 cols, 3 rows) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2 md:row-span-2 lg:row-span-3 rounded-3xl overflow-hidden relative border border-white/[0.05] shadow-2xl h-[400px] md:h-auto"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={graduationImages[currentImageIndex]}
                alt="Samuel Graduation"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Expected Graduation</div>
                  <div className="text-blue-300 font-medium">August 2026 • SNHU</div>
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex gap-2">
                {graduationImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Seeking Card (Spans 1 col, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-700 p-8 flex flex-col justify-center relative overflow-hidden group border border-indigo-400/30"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700" />
            <Briefcase className="text-white/80 w-8 h-8 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Open to Work</h3>
            <p className="text-indigo-100 font-medium">
              Currently seeking <span className="text-white font-bold">Internship</span> and <span className="text-white font-bold">Full-time</span> positions for Summer 2026.
            </p>
          </motion.div>

          {/* 4. Stats/Tech Card (Spans 1 col, 1 row) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 rounded-3xl bg-white/[0.02] border border-white/[0.05] p-8 flex flex-col justify-center hover:bg-white/[0.04] transition-colors"
          >
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-3xl font-black text-white flex items-baseline gap-1">
                  3.226 <span className="text-sm text-slate-500 font-normal">/4.0</span>
                </div>
                <div className="text-sm text-slate-400 font-medium flex items-center gap-1 mt-1">
                  <Award size={14} className="text-blue-400" /> Current GPA
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">25+</div>
                <div className="text-sm text-slate-400 font-medium flex items-center gap-1 mt-1">
                  <Code size={14} className="text-purple-400" /> Projects Built
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-6" />

            <div className="flex flex-wrap gap-2">
              {techIcons.map((tech) => (
                <div key={tech.name} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm flex items-center gap-1.5 text-slate-300">
                  <span>{tech.icon}</span> {tech.name}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}