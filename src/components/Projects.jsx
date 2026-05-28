import { useMemo, useState } from 'react'
import { ExternalLink, Github, Award, Search, Sparkles, Layers, Code2 } from 'lucide-react'
import { projects } from '../data/projects'
import { fallbackProjectImage, projectImageSource } from '../data/projectImages.js'

function ProjectCard({ p }) {
  const [imageStatus, setImageStatus] = useState('ready')
  const imageSrc = imageStatus === 'ready'
    ? projectImageSource(p, import.meta.env.BASE_URL)
    : fallbackProjectImage(p)
  const visibleHighlights = p.highlights?.slice(0, 2) || []

  return (
    <article className="group relative overflow-hidden bg-[#050508] border border-green-500/20 hover:border-green-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_26px_rgba(74,222,128,0.18)] flex flex-col h-full">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_35%)] pointer-events-none" />

      {/* Featured Badge */}
      {p.featured && (
        <div className="absolute top-4 right-4 z-10 font-mono">
          <div className="flex items-center gap-1 px-2.5 py-1.5 bg-green-400/20 border border-green-400 text-green-400 text-[10px] uppercase tracking-widest font-bold backdrop-blur-sm">
            <Award size={12} />
            [FEATURED]
          </div>
        </div>
      )}

      {/* Year Badge */}
      {p.year && (
        <div className="absolute top-4 left-4 z-10 font-mono">
          <div className="px-2 py-1 bg-black/80 backdrop-blur-sm text-cyan-400 text-[10px] border border-cyan-500/30 tracking-widest">
            {p.year}
          </div>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-black border-b border-green-500/20 grayscale group-hover:grayscale-0 transition-all duration-500">
        {imageStatus === 'failed' ? (
          <div className="w-full h-full flex items-center justify-center text-green-400/50 text-sm font-mono">
            [ERR: IMG_NOT_FOUND]
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            onError={() => setImageStatus(current => current === 'ready' ? 'fallback' : 'failed')}
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050508] to-transparent" />
      </div>

      {/* Project Content */}
      <div className="relative p-6 flex flex-col flex-grow">
        <div className="mb-3 font-mono">
          <span className="text-xs text-cyan-400 tracking-widest uppercase">{'>'} {p.category}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
          {p.name}
        </h3>
        <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
          {p.summary}
        </p>

        {visibleHighlights.length > 0 && (
          <div className="mb-6 space-y-2">
            {visibleHighlights.map((highlight) => (
              <div key={highlight} className="flex gap-2 text-xs text-slate-400">
                <span className="text-green-400 mt-0.5">{'>'}</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 font-mono">
          {p.tech.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-[10px] uppercase tracking-wider bg-black border border-green-500/30 text-green-400"
            >
              {tech}
            </span>
          ))}
          {p.tech.length > 5 && (
            <span className="px-2 py-1 text-[10px] uppercase tracking-wider bg-black border border-green-500/30 text-green-400">
              +{p.tech.length - 5} MORE
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 font-mono mt-auto">
          {p.live && p.live !== "#" && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500 hover:text-black text-cyan-400 text-xs font-bold uppercase tracking-widest transition-all"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {p.code && p.code !== "#" && (
            <a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-600 hover:border-green-400 hover:text-green-400 text-slate-300 text-xs font-bold uppercase tracking-widest transition-all"
            >
              <Github size={14} />
              Code
            </a>
          )}
          {(!p.live || p.live === "#") && (!p.code || p.code === "#") && (
            <div className="w-full px-4 py-2 border border-slate-800 text-slate-500 text-xs font-bold uppercase tracking-widest text-center">
              Repo pending
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects({ featuredOnly = false }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [search, setSearch] = useState('')

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const years = ['All', ...new Set(projects.map(p => p.year).filter(Boolean))]

  const filteredProjects = useMemo(() => {
    let nextProjects = featuredOnly ? projects.filter(p => p.featured) : projects
    const query = search.trim().toLowerCase()

    if (!featuredOnly) {
      if (selectedCategory !== 'All') {
        nextProjects = nextProjects.filter(p => p.category === selectedCategory)
      }
      if (selectedYear !== 'All') {
        nextProjects = nextProjects.filter(p => p.year === selectedYear)
      }
      if (query) {
        nextProjects = nextProjects.filter((p) => [
          p.name,
          p.category,
          p.summary,
          p.description,
          p.year,
          ...(p.tech || []),
          ...(p.highlights || [])
        ].join(' ').toLowerCase().includes(query))
      }
    }

    return [...nextProjects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  }, [featuredOnly, search, selectedCategory, selectedYear])

  const heroProject = projects.find(p => p.id === 'skillrise') || projects.find(p => p.featured) || projects[0]

  const stats = {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    categories: categories.length - 1,
    technologies: new Set(projects.flatMap(p => p.tech)).size
  }

  const content = (
    <div className="w-full bg-[#0a0a0e]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 max-w-7xl mx-auto">
        
        {!featuredOnly && (
          <header className="mb-12 overflow-hidden border border-green-500/25 bg-[#050508] border-glow">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative p-6 sm:p-10 lg:p-12">
                <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-green-400/10 blur-3xl" />
                <div className="relative">
                  <div className="font-mono text-sm mb-6 flex items-center gap-2 text-slate-400">
                    <span className="text-green-400">{'>'}</span>
                    <span>cd /portfolio/projects</span>
                  </div>
                  <div className="inline-flex items-center gap-2 border border-green-500/30 bg-green-400/10 px-3 py-1.5 text-green-300 text-xs uppercase tracking-[0.25em] mb-6 font-mono">
                    <Sparkles size={14} />
                    curated build log
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">
                    Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Projects</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-400 max-w-3xl leading-relaxed">
                    A polished collection of {stats.total} projects across full-stack web, mobile, AI/ML, security, graphics, cloud, and team collaboration.
                  </p>
                </div>
              </div>

              {heroProject && (
                <div className="relative min-h-[360px] border-t lg:border-t-0 lg:border-l border-green-500/20 bg-black">
                  {heroProject.image && (
                    <img
                      src={projectImageSource(heroProject, import.meta.env.BASE_URL)}
                      alt={heroProject.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                      onError={(e) => {
                        e.currentTarget.src = fallbackProjectImage(heroProject)
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/70 to-black/30" />
                  <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-green-400 text-xs uppercase tracking-widest font-mono mb-4">
                      <Award size={14} />
                      Featured project
                    </div>
                    <h2 className="text-3xl font-black text-white mb-3">{heroProject.name}</h2>
                    <p className="text-slate-300 leading-relaxed mb-5">{heroProject.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {heroProject.tech.slice(0, 5).map((tech) => (
                        <span key={tech} className="px-2 py-1 text-[10px] uppercase tracking-wider bg-black/70 border border-green-500/30 text-green-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </header>
        )}

        {/* Stats */}
        {!featuredOnly && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 font-mono">
            <div className="p-6 bg-[#050508] border border-green-500/20 hover:border-green-400/60 transition-colors">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest">
                <Layers size={13} className="text-green-400" />
                total
              </div>
              <div className="text-3xl font-black text-green-400">{stats.total}</div>
            </div>
            <div className="p-6 bg-[#050508] border border-cyan-500/20 hover:border-cyan-400/60 transition-colors">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest">
                <Award size={13} className="text-cyan-400" />
                featured
              </div>
              <div className="text-3xl font-black text-cyan-400">{stats.featured}</div>
            </div>
            <div className="p-6 bg-[#050508] border border-green-500/20 hover:border-green-400/60 transition-colors">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest">
                <Sparkles size={13} className="text-green-400" />
                categories
              </div>
              <div className="text-3xl font-black text-green-400">{stats.categories}</div>
            </div>
            <div className="p-6 bg-[#050508] border border-cyan-500/20 hover:border-cyan-400/60 transition-colors">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 uppercase tracking-widest">
                <Code2 size={13} className="text-cyan-400" />
                tech
              </div>
              <div className="text-3xl font-black text-cyan-400">{stats.technologies}</div>
            </div>
          </div>
        )}

        {/* Filters */}
        {!featuredOnly && (
          <div className="mb-12 space-y-6 font-mono bg-[#050508] border border-slate-800 p-5 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <span className="text-green-400">{'>'}</span> ./filter_projects.sh
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-500">
                showing <span className="text-green-400">{filteredProjects.length}</span> / {stats.total}
              </div>
            </div>

            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-green-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects, tech, category, or highlights..."
                className="w-full bg-black border border-green-500/30 py-4 pl-11 pr-4 text-green-300 placeholder:text-slate-600 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-500 mb-3">--category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-all border ${
                      selectedCategory === category
                        ? 'bg-green-400 text-black border-green-400'
                        : 'bg-black border-slate-700 text-slate-400 hover:border-green-400 hover:text-green-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            {years.length > 1 && (
              <div className="pt-4 border-t border-slate-800 mt-4">
                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-3">--year</label>
                <div className="flex flex-wrap gap-2">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-all border ${
                        selectedYear === year
                          ? 'bg-cyan-400 text-black border-cyan-400'
                          : 'bg-black border-slate-700 text-slate-400 hover:border-cyan-400 hover:text-cyan-400'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} p={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 font-mono bg-[#050508] border border-red-500/30 mt-8">
            <p className="text-lg text-red-400 mb-4">[ERR] 404: NO_PROJECTS_FOUND</p>
            <p className="text-slate-500 text-sm mb-6">Try a broader search or clear the filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSelectedYear('All')
                setSearch('')
              }}
              className="px-6 py-2 border border-slate-600 hover:border-green-400 hover:text-green-400 text-slate-300 transition-colors uppercase tracking-widest text-xs"
            >
              ./clear_filters.sh
            </button>
          </div>
        )}
      </div>
    </div>
  )

  return content
}
