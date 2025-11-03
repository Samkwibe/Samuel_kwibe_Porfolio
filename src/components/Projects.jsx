import { projects } from '../data/projects'
import Navbar from './Navbar'
import Footer from './Footer'

function ProjectCard({ p }) {
  return (
    <div className="card p-5 flex flex-col">
      <div className="aspect-video w-full rounded-xl bg-white/5 mb-4 flex items-center justify-center text-sm opacity-80">
        Thumbnail
      </div>
      <h3 className="text-lg font-semibold">{p.name}</h3>
      <p className="opacity-80 text-sm mt-1">{p.summary}</p>
      <div className="flex flex-wrap gap-2 mt-3 text-xs opacity-80">
        {p.tech.map(t => <span key={t} className="px-2 py-1 border border-white/10 rounded-lg">{t}</span>)}
      </div>
      <div className="mt-4 flex gap-3">
        {p.live !== "#" && <a className="px-3 py-2 border border-white/15 rounded-lg text-sm" href={p.live} target="_blank">Live</a>}
        {p.code !== "#" && <a className="px-3 py-2 border border-white/15 rounded-lg text-sm" href={p.code} target="_blank">Code</a>}
      </div>
    </div>
  )
}

export default function Projects({ featuredOnly = false }) {
  const items = featuredOnly ? projects.filter(p => p.featured) : projects
  const standalone = !featuredOnly

  const content = (
    <section className="container my-10">
      {!featuredOnly && <h1 className="text-2xl font-semibold mb-6">Projects</h1>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  )

  if (standalone) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{content}</main>
        <Footer />
      </div>
    )
  }
  return content
}
