import { motion } from 'framer-motion'

export default function Skills() {
  const groups = [
    { name: "Programming", items: ["Python", "JavaScript", "TypeScript", "React", "HTML", "CSS"], icon: "💻" },
    { name: "Cloud & DevOps", items: ["AWS", "GCP", "Azure", "Docker", "CI/CD", "Kubernetes"], icon: "☁️" },
    { name: "AI & Data", items: ["scikit-learn", "Pandas", "NumPy", "TensorFlow", "PyTorch"], icon: "🧠" },
    { name: "Tools & Systems", items: ["Git", "Linux", "VS Code", "Jupyter", "PostgreSQL"], icon: "⚙️" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 md:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Arsenal</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-neutral-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and platforms I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <motion.div key={i} variants={itemVariants} className="glass-panel p-8 rounded-3xl hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl shadow-inner border border-white/10">
                  {g.icon}
                </div>
                <h3 className="text-2xl font-bold">{g.name}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {g.items.map((s, j) => (
                  <span 
                    key={j} 
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-300 transition-all cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
