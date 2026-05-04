import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Award } from 'lucide-react'
import { projects } from '../data/projects'

function ProjectCard({ p, index }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl glass-panel hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]"
      whileHover={{ y: -5 }}
    >
      {/* Featured Badge */}
      {p.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold">
            <Award size={12} />
            Featured
          </div>
        </div>
      )}

      {/* Year Badge */}
      {p.year && (
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium border border-white/20">
            {p.year}
          </div>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center text-cyan-400/50 text-sm">
            Image not available
          </div>
        ) : (
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-cyan-400/70 font-medium">{p.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
          {p.name}
        </h3>
        <p className="text-sm text-gray-300/80 mb-4 line-clamp-2">{p.summary}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {p.tech.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300"
            >
              {tech}
            </span>
          ))}
          {p.tech.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300">
              +{p.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {p.live && p.live !== "#" && (
            <motion.a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              Live
            </motion.a>
          )}
          {p.code && p.code !== "#" && (
            <motion.a
              href={p.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-white text-sm font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
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
    <div className="w-full">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <p className="text-sm font-semibold text-cyan-400/80 tracking-wider">PORTFOLIO</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
            A collection of {stats.total} projects showcasing my journey in software development, from web applications to machine learning and cloud infrastructure.
          </p>
        </motion.header>

        {/* Stats */}
        {!featuredOnly && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stats.total}</div>
              <div className="text-sm opacity-70">Total Projects</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stats.featured}</div>
              <div className="text-sm opacity-70">Featured</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stats.categories}</div>
              <div className="text-sm opacity-70">Categories</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stats.technologies}</div>
              <div className="text-sm opacity-70">Technologies</div>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        {!featuredOnly && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 space-y-4"
          >
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Filter by Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                        : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            {years.length > 1 && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Filter by Year</label>
                <div className="flex flex-wrap gap-2">
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedYear === year
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                          : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} p={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No projects found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('All')
                setSelectedYear('All')
              }}
              className="mt-4 px-6 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )

  if (featuredOnly) {
    return content
  }

  return content
}
