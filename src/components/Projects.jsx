import { useState } from 'react'
import { ExternalLink, Github, Award } from 'lucide-react'
import { projects } from '../data/projects'

function ProjectCard({ p }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="group relative overflow-hidden bg-[#050508] border border-green-500/20 hover:border-green-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] flex flex-col h-full rounded-none">
      
      {/* Featured Badge */}
      {p.featured && (
        <div className="absolute top-4 right-4 z-10 font-mono">
          <div className="flex items-center gap-1 px-2 py-1 bg-green-400/20 border border-green-400 text-green-400 text-[10px] uppercase tracking-widest font-bold">
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
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center text-green-400/50 text-sm font-mono">
            [ERR: IMG_NOT_FOUND]
          </div>
        ) : (
          <img
            src={`${import.meta.env.BASE_URL}${p.image.replace(/^\\//, '')}`}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 font-mono">
          <span className="text-xs text-cyan-400 tracking-widest uppercase">{'>'} {p.category}</span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
          {p.name}
        </h3>
        <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
          {p.summary}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 font-mono">
          {p.tech.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-[10px] uppercase tracking-wider bg-black border border-green-500/30 text-green-400"
            >
              {tech}
            </span>
          ))}
          {p.tech.length > 4 && (
            <span className="px-2 py-1 text-[10px] uppercase tracking-wider bg-black border border-green-500/30 text-green-400">
              +{p.tech.length - 4} MORE
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
        </div>
      </div>
    </div>
  )
}

export default function Projects({ featuredOnly = false }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')

  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const years = ['All', ...new Set(projects.map(p => p.year).filter(Boolean))]

  let filteredProjects = featuredOnly ? projects.filter(p => p.featured) : projects

  if (!featuredOnly) {
    if (selectedCategory !== 'All') {
      filteredProjects = filteredProjects.filter(p => p.category === selectedCategory)
    }
    if (selectedYear !== 'All') {
      filteredProjects = filteredProjects.filter(p => p.year === selectedYear)
    }
  }

  const stats = {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    categories: categories.length - 1,
    technologies: new Set(projects.flatMap(p => p.tech)).size
  }

  const content = (
    <div className="w-full bg-[#0a0a0e]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 max-w-7xl mx-auto">
        
        {/* Header (Only show if NOT featuredOnly, since App.jsx handles featured headers) */}
        {!featuredOnly && (
          <header className="mb-16 border-b border-green-500/20 pb-12">
            <div className="font-mono text-sm mb-6 flex items-center gap-2 text-slate-400">
              <span className="text-green-400">{'>'}</span> 
              <span>cd /portfolio/projects</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Projects</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
              A collection of {stats.total} projects showcasing my journey in software development, from web applications to machine learning and cloud infrastructure.
            </p>
          </header>
        )}

        {/* Stats */}
        {!featuredOnly && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 font-mono">
            <div className="p-6 bg-[#050508] border border-green-500/20">
              <div className="text-xs text-slate-500 mb-2 uppercase tracking-widest">{'>'} count --total</div>
              <div className="text-3xl font-bold text-green-400">{stats.total}</div>
            </div>
            <div className="p-6 bg-[#050508] border border-cyan-500/20">
              <div className="text-xs text-slate-500 mb-2 uppercase tracking-widest">{'>'} count --featured</div>
              <div className="text-3xl font-bold text-cyan-400">{stats.featured}</div>
            </div>
            <div className="p-6 bg-[#050508] border border-green-500/20">
              <div className="text-xs text-slate-500 mb-2 uppercase tracking-widest">{'>'} count --categories</div>
              <div className="text-3xl font-bold text-green-400">{stats.categories}</div>
            </div>
            <div className="p-6 bg-[#050508] border border-cyan-500/20">
              <div className="text-xs text-slate-500 mb-2 uppercase tracking-widest">{'>'} count --tech</div>
              <div className="text-3xl font-bold text-cyan-400">{stats.technologies}</div>
            </div>
          </div>
        )}

        {/* Filters */}
        {!featuredOnly && (
          <div className="mb-12 space-y-6 font-mono bg-[#050508] border border-slate-800 p-6">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
              <span className="text-green-400">{'>'}</span> ./filter_projects.sh
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
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSelectedYear('All')
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
