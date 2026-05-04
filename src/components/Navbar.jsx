import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Portfolio' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-4 md:py-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto glass-panel rounded-2xl px-6 py-4 flex items-center justify-between shadow-lg shadow-black/20">
        <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-inner">
            S
          </span>
          Samuel<span className="text-indigo-400">.pro</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          {links.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-1 py-2 transition-colors ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                )}
              </Link>
            )
          })}
          <a 
            className="ml-4 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-sm font-semibold flex items-center gap-2 text-white" 
            href="/Samuel_Kwibe_Resume_Final.docx" 
            download="Samuel_Kwibe_Resume_Final.docx"
          >
            Resume
          </a>
        </nav>
        <button className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors" aria-label="Menu">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}
