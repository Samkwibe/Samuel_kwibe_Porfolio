const items = [
  { name: "Teammate", role: "SNHU Project Partner", quote: "Sam delivers. Clear communicator, dependable, and pushes the team to finish strong." },
  { name: "Supervisor", role: "Operations Lead", quote: "Detail-oriented and proactive. He improves processes and maintains quality under pressure." },
]

export default function Testimonials() {
  return (
    <main className="max-w-5xl mx-auto my-16 px-4 flex-1 font-mono">
      <div className="text-sm mb-6 flex items-center gap-2 text-slate-400">
        <span className="text-green-400">{'>'}</span> 
        <span>tail -f testimonials.log</span>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">Testimonials</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((t, i) => (
          <div key={i} className="bg-[#050508] border border-green-500/20 p-8 rounded-none relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500/50 group-hover:bg-green-400 transition-colors" />
            <p className="text-slate-300 leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest">
              <span className="text-green-400 font-bold">{t.name}</span>
              <span className="text-slate-600">//</span>
              <span className="text-slate-400">{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
