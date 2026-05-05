export default function Experience() {
  const items = [
    { org: "Freudenberg Group", role: "Machine Operator / Assembler", period: "Jan 2022 — May 2024", bullets: ["Operated and maintained production machinery", "Quality checks, packaging, and documentation"] },
    { org: "Hutchinson", role: "Assembler", period: "Feb 2022 — Aug 2025", bullets: ["Collaborated in fast-paced manufacturing lines", "Met daily production goals and safety standards"] },
    { org: "Trego", role: "Assembler", period: "Jun 2023 — Sep 2025", bullets: ["Handled inventory and final product inspections", "Supported continuous improvement initiatives"] },
    { org: "Park Vany Elementary School", role: "Teacher", period: "Dec 2024 — Present", bullets: ["Delivered curriculum and supported student growth"] },
  ]

  return (
    <main className="max-w-4xl mx-auto my-16 px-4 flex-1 font-mono">
      <div className="text-sm mb-6 flex items-center gap-2 text-slate-400">
        <span className="text-green-400">{'>'}</span> 
        <span>cat experience.txt</span>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">Experience</h1>
      <div className="space-y-6">
        {items.map((x, i) => (
          <div key={i} className="bg-[#050508] border border-green-500/20 p-6 rounded-none hover:border-green-400 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-cyan-400">{x.role}</h3>
                <p className="text-slate-400">{x.org}</p>
              </div>
              <span className="text-xs px-2 py-1 bg-black border border-green-500/30 text-cyan-400 tracking-widest uppercase">{x.period}</span>
            </div>
            <ul className="mt-4 list-none space-y-2 text-sm">
              {x.bullets.map((b, j) => (
                <li key={j} className="text-slate-300 flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">{'>'}</span> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
