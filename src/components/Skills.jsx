export default function Skills() {
  const groups = [
    { name: "Programming", items: ["Python", "JavaScript", "TypeScript", "React", "HTML", "CSS"], icon: "sys.lang" },
    { name: "Cloud & DevOps", items: ["AWS", "GCP", "Azure", "Docker", "CI/CD", "Kubernetes"], icon: "sys.cloud" },
    { name: "AI & Data", items: ["scikit-learn", "Pandas", "NumPy", "TensorFlow", "PyTorch"], icon: "sys.ai" },
    { name: "Tools & Systems", items: ["Git", "Linux", "VS Code", "Jupyter", "PostgreSQL"], icon: "sys.tools" },
  ]

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 md:py-20 bg-[#0a0a0e] border-t border-green-500/10 font-mono">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-12 border-b border-green-500/20 pb-8">
          <div className="text-sm mb-4 flex items-center gap-2 text-slate-400">
            <span className="text-green-400">{'>'}</span> 
            <span>source skills.sh</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A comprehensive overview of my technical skills, tools, and platforms I use to bring ideas to life.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <div key={i} className="bg-[#050508] border border-green-500/20 p-8 hover:border-green-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] rounded-none">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-2 py-1 bg-black border border-green-500/30 text-xs text-green-400 tracking-widest uppercase">
                  [{g.icon}]
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400">{g.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s, j) => (
                  <span 
                    key={j} 
                    className="px-2 py-1 text-xs uppercase tracking-wider bg-black border border-green-500/30 text-green-400 hover:bg-green-400 hover:text-black transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
