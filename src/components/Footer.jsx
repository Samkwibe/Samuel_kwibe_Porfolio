export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <span className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs shadow-inner">
            S
          </span>
          Samuel<span className="text-indigo-400">.pro</span>
        </div>
        <div className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Samuel Raymond Kwibe. All rights reserved.
        </div>
        <div className="text-xs text-neutral-500">
          Built with React & Framer Motion
        </div>
      </div>
    </footer>
  )
}
