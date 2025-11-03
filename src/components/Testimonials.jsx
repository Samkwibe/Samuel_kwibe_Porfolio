import Navbar from './Navbar'
import Footer from './Footer'

const items = [
  { name: "Teammate", role: "SNHU Project Partner", quote: "Sam delivers. Clear communicator, dependable, and pushes the team to finish strong." },
  { name: "Supervisor", role: "Operations Lead", quote: "Detail-oriented and proactive. He improves processes and maintains quality under pressure." },
]

export default function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container my-12 flex-1">
        <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((t, i) => (
            <div key={i} className="card p-6">
              <p className="text-neutral-200/90">“{t.quote}”</p>
              <p className="mt-4 text-sm opacity-70">— {t.name}, {t.role}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
