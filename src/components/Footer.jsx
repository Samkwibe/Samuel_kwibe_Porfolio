import { Terminal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-green-500/20 bg-[#050508] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <div className="flex items-center gap-2 text-green-400 font-bold tracking-widest">
          <Terminal size={16} />
          <span>samuel.kwibe</span>
        </div>
        <div className="text-slate-500 uppercase tracking-widest">
          [SYS.DATE: {new Date().getFullYear()}] All rights reserved
        </div>
        <div className="text-slate-600">
          {'>'} EOF - sys.exit(0)
        </div>
      </div>
    </footer>
  )
}
