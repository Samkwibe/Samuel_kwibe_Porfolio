import { Link, useLocation } from 'react-router-dom'
import { Menu, Terminal, Cpu, HardDrive, Wifi } from 'lucide-react'
import { useState, useEffect } from 'react'

const links = [
  { to: '/', label: './home' },
  { to: '/about', label: './about' },
  { to: '/projects', label: './portfolio' },
  { to: '/testimonials', label: './testimonials' },
  { to: '/contact', label: './contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }))

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="sticky top-0 w-full z-30 px-4 py-2 md:py-4 bg-[#050508]/90 backdrop-blur-md border-b border-green-500/30 font-mono shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-glow">
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        {/* Top Status Bar */}
        <div className="hidden md:flex justify-between items-center text-[10px] text-green-400/70 border-b border-green-500/20 pb-2 mb-2 uppercase tracking-widest">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Cpu size={12}/> CPU: {Math.floor(Math.random() * 20 + 10)}%</span>
            <span className="flex items-center gap-1"><HardDrive size={12}/> MEM: OPTIMAL</span>
            <span className="flex items-center gap-1"><Wifi size={12}/> NET: SECURE</span>
          </div>
          <div>SYS.TIME: {time}</div>
        </div>

        {/* Main Nav */}
        <div className="flex items-center justify-between">
          <Link to="/" className="text-base sm:text-lg font-bold tracking-widest text-green-400 flex items-center gap-1 sm:gap-2">
            <span className="text-slate-500 hidden sm:inline">root@</span>
            <span className="text-glow">samuel</span>
            <span className="text-cyan-400 text-glow-cyan">.pro</span>
            <span className="animate-pulse text-green-400 text-glow">_</span>
          </Link>
          
          <nav className="hidden md:flex gap-6 text-sm items-center">
            {links.map((l) => {
              const isActive = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-2 py-1 transition-colors uppercase tracking-widest text-xs ${isActive ? 'text-green-400 bg-green-400/10 border border-green-400/50 text-glow border-glow' : 'text-slate-500 hover:text-green-400 hover:text-glow'}`}
                >
                  {l.label}
                </Link>
              )
            })}
            <a 
              className="ml-4 px-4 py-1.5 border border-green-500/50 text-green-400 hover:bg-green-400 hover:text-black transition-all text-xs uppercase tracking-widest flex items-center gap-2 font-bold shadow-[0_0_10px_rgba(74,222,128,0.2)] hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]" 
              href="/Samuel_Kwibe_Resume_Final.docx" 
              download="Samuel_Kwibe_Resume_Final.docx"
            >
              wget resume
            </a>
          </nav>
          <button className="md:hidden p-2 text-green-400 hover:text-white transition-colors border border-green-500/50 bg-black shadow-[0_0_10px_rgba(74,222,128,0.2)]" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
