import HomePage from './components/HomePage.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

export default function App() {
  return (
    <>
      <HomePage />
      
      {/* Featured Projects Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 bg-[#0a0a0e] border-t border-green-500/10">
        <div className="max-w-6xl mx-auto mb-12 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="font-mono text-sm mb-4 flex items-center justify-center lg:justify-start gap-2 text-slate-400">
            <span className="text-cyan-400">{'>'}</span> 
            <span>ls -la ./featured_work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Featured Work
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto lg:mx-0">
            A selection of my best projects spanning web development, mobile apps, and machine learning.
          </p>
        </div>
        <Projects featuredOnly />
      </section>

      {/* Skills Section */}
      <Skills />
    </>
  )
}
