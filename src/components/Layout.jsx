import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden text-slate-50 bg-[#050508] selection:bg-green-500/30 font-mono">
      {/* Global CRT Scanlines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-20 mix-blend-overlay bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      
      {/* Vignette */}
      <div className="fixed inset-0 pointer-events-none z-40 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />

      <Navbar />
      <main className="flex-1 w-full relative z-10 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
