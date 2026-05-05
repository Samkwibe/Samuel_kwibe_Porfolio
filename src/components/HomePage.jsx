import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowRight, Download, Terminal, GraduationCap } from 'lucide-react'

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % graduationImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((v) => !v)
    }, 530)
    return () => clearInterval(cursorTimer)
  }, [])

  const techIcons = ['React', 'Python', 'AWS', 'Node.js', 'MongoDB', 'SQL', 'Git']

  const asciiLogo = `
   _____                            __ 
  / ___/____ _____ ___  __  _____  / / 
  \\__ \\/ __ \`/ __ \`__ \\/ / / / _ \\/ /  
 ___/ / /_/ / / / / / / /_/ /  __/ /   
/____/\\__,_/_/ /_/ /_/\\__,_/\\___/_/    
  `

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center bg-[#0a0a0e] px-4 py-8 lg:py-16">
      
      {/* Main Content Container - adjusted to be more responsive */}
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center mt-4">
        
        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-16">
          
          {/* Left Column: Text & CTA */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* ASCII Art Logo */}
            <pre className="text-green-400 font-mono text-[10px] sm:text-xs md:text-sm leading-tight mb-8 text-glow hidden sm:block">
              {asciiLogo}
            </pre>

            <div className="font-mono text-sm mb-4 flex items-center gap-2 text-slate-400">
              <span className="text-green-400">{'>'}</span> 
              <span>whoami</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-tight flex items-center justify-center lg:justify-start flex-wrap gap-x-4">
              <span>Hi, I'm</span> 
              <span className="text-green-400 text-glow whitespace-nowrap">Samuel Kwibe</span>
              <span className={`inline-block w-[0.5em] h-[1em] bg-green-400 text-glow align-middle ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-mono">
              Software Engineer & Student specializing in Algorithms, Databases, and Cloud Architecture. Turning complex problems into elegant, scalable code.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto font-mono">
              <Link to="/projects" className="w-full sm:w-auto px-8 py-4 border border-green-400 bg-green-400/10 text-green-400 font-bold text-sm hover:bg-green-400 hover:text-black transition-all flex items-center justify-center gap-2 border-glow">
                ./execute_projects.sh <ArrowRight size={16} />
              </Link>
              <a href="/Samuel_Kwibe_Resume_Final.docx" download="Samuel_Kwibe_Resume_Final.docx" className="w-full sm:w-auto px-8 py-4 border border-slate-600 bg-black text-slate-300 font-bold text-sm hover:border-green-400 hover:text-green-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                <Download size={16} /> wget resume.docx
              </a>
            </div>
          </div>

          {/* Right Column: Large Framed Image */}
          <div className="w-full max-w-sm lg:max-w-md shrink-0 relative group">
            <div className="aspect-[4/5] w-full relative border border-green-500/50 bg-[#000] p-3 shadow-[0_0_30px_rgba(74,222,128,0.1)] border-glow">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-400 -translate-x-[2px] -translate-y-[2px]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-400 translate-x-[2px] -translate-y-[2px]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-400 -translate-x-[2px] translate-y-[2px]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-400 translate-x-[2px] translate-y-[2px]" />

              <div className="w-full h-full relative overflow-hidden grayscale contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={graduationImages[currentImageIndex]}
                  alt="Samuel Graduation"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000]/90 via-[#000]/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 font-mono">
                    <div className="p-2 bg-black/60 border border-green-500/50 backdrop-blur-md text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <div className="text-green-400 text-xs font-bold text-glow">SYS.DATE: 2026.08</div>
                      <div className="text-slate-400 text-[10px] uppercase tracking-widest mt-0.5">SNHU GRADUATION</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Simple Dots outside the image */}
            <div className="flex justify-center gap-2 mt-6">
              {graduationImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1.5 rounded-none transition-all duration-300 ${
                    idx === currentImageIndex ? 'w-8 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Horizontal Stats & Tech Bar */}
        <div className="w-full bg-[#050508] border border-green-500/30 p-6 lg:p-10 relative overflow-hidden font-mono shadow-[0_0_20px_rgba(74,222,128,0.05)] border-glow mt-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-green-500/20 relative z-10">
            
            {/* GPA Stat */}
            <div className="flex flex-col items-center md:items-start md:px-8 first:px-0">
              <div className="flex items-center gap-2 text-slate-400 mb-3 text-xs uppercase tracking-widest">
                <span className="text-green-400">{'>'}</span> cat gpa.txt
              </div>
              <div className="text-4xl lg:text-5xl font-black text-green-400 tracking-tight text-glow">
                3.226 <span className="text-xl text-slate-600 font-medium">/ 4.0</span>
              </div>
            </div>

            {/* Projects Stat */}
            <div className="flex flex-col items-center md:items-start pt-6 md:pt-0 md:px-8">
              <div className="flex items-center gap-2 text-slate-400 mb-3 text-xs uppercase tracking-widest">
                <span className="text-cyan-400">{'>'}</span> ls -l projects/
              </div>
              <div className="text-4xl lg:text-5xl font-black text-cyan-400 tracking-tight text-glow-cyan">
                25<span className="text-3xl">+</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col items-center md:items-start pt-6 md:pt-0 md:px-8">
              <div className="flex items-center gap-2 text-slate-400 mb-4 text-xs uppercase tracking-widest">
                <span className="text-green-400">{'>'}</span> source env.sh
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {techIcons.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-black border border-green-500/50 text-[10px] sm:text-xs text-green-400 font-bold hover:bg-green-400 hover:text-black transition-colors shadow-[0_0_5px_rgba(74,222,128,0.2)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}