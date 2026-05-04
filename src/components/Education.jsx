

export default function Education() {
  const items = [
    { school: "Southern New Hampshire University (SNHU)", degree: "B.S., Computer Science", period: "2024 — Present", details: ["Focus: Cloud, AI/ML, Web Dev"] },
    { school: "Institut des Techniques Sociales et Administratives (STCO)", degree: "Pedagogy", period: "2002 — 2005", details: ["Teacher training"] },
  ]

  return (
    <main className="container my-10 flex-1">
      <h1 className="text-2xl font-semibold mb-6">Education</h1>
      <div className="space-y-5">
        {items.map((x, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-lg font-semibold">{x.degree}</h3>
                <p className="opacity-80">{x.school}</p>
              </div>
              <span className="text-sm opacity-70">{x.period}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 opacity-90 text-sm">
              {x.details.map((d, j) => <li key={j}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
