export default function Education() {
  const items = [
    { school: "Southern New Hampshire University (SNHU)", degree: "B.S., Computer Science", period: "2024 — Present", details: ["Focus: Cloud, AI/ML, Web Dev"] },
    { school: "Institut des Techniques Sociales et Administratives (STCO)", degree: "Pedagogy", period: "2002 — 2005", details: ["Teacher training"] },
  ]

  return (
    <main className="max-w-4xl mx-auto my-16 px-4 flex-1 font-mono">
      <div className="text-sm mb-6 flex items-center gap-2 text-slate-400">
        <span className="text-green-400">{'>'}</span> 
        <span>cat education.txt</span>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">Education</h1>
      <div className="space-y-6">
        {items.map((x, i) => (
          <div key={i} className="bg-[#050508] border border-green-500/20 p-6 rounded-none hover:border-green-400 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-green-400">{x.degree}</h3>
                <p className="text-slate-400">{x.school}</p>
              </div>
              <span className="text-xs px-2 py-1 bg-black border border-green-500/30 text-green-400 tracking-widest uppercase">{x.period}</span>
            </div>
            <ul className="mt-4 list-none space-y-2 text-sm">
              {x.details.map((d, j) => (
                <li key={j} className="text-slate-300 flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">{'>'}</span> {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
