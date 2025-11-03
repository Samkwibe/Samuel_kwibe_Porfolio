import Navbar from './Navbar'
import Footer from './Footer'

export default function Skills() {
  const groups = [
    { name: "Programming", items: ["Python", "JavaScript", "React", "HTML", "CSS"] },
    { name: "Cloud & DevOps", items: ["AWS", "GCP", "Azure", "Docker", "CI/CD"] },
    { name: "AI & Data", items: ["scikit-learn", "Pandas", "NumPy", "TensorFlow (basics)"] },
    { name: "Tools", items: ["Git", "Linux", "VS Code", "Jupyter"] },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container my-10 flex-1">
        <h1 className="text-2xl font-semibold mb-6">Skills</h1>
        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <div key={i} className="card p-5">
              <h3 className="text-lg font-semibold">{g.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s, j) => <span key={j} className="px-3 py-1 border border-white/10 rounded-lg text-sm">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
