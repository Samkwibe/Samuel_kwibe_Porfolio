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
    <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0b1020]/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="font-semibold tracking-tight">
          Samuel<span className="opacity-60">.pro</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm items-center">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:opacity-100 opacity-80 relative ${pathname === l.to ? 'after:content-[""] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-blue-500' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <a className="ml-2 px-3 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-600 transition-colors text-sm" href="/Samuel_Kwibe_Resume_Final.docx" download="Samuel_Kwibe_Resume_Final.docx">
            Download CV
          </a>
        </nav>
        <button className="md:hidden p-2 border border-white/10 rounded-lg" aria-label="Menu">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
