

export default function Experience() {
  const items = [
    { org: "Freudenberg Group", role: "Machine Operator / Assembler", period: "Jan 2022 — May 2024", bullets: ["Operated and maintained production machinery", "Quality checks, packaging, and documentation"] },
    { org: "Hutchinson", role: "Assembler", period: "Feb 2022 — Aug 2025", bullets: ["Collaborated in fast-paced manufacturing lines", "Met daily production goals and safety standards"] },
    { org: "Trego", role: "Assembler", period: "Jun 2023 — Sep 2025", bullets: ["Handled inventory and final product inspections", "Supported continuous improvement initiatives"] },
    { org: "Park Vany Elementary School", role: "Teacher", period: "Dec 2024 — Present", bullets: ["Delivered curriculum and supported student growth"] },
  ]

  return (
    <main className="container my-10 flex-1">
      <h1 className="text-2xl font-semibold mb-6">Experience</h1>
      <div className="space-y-5">
        {items.map((x, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold">{x.role}</h3>
                <p className="opacity-80">{x.org}</p>
              </div>
              <span className="text-sm opacity-70">{x.period}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 opacity-90 text-sm">
              {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
