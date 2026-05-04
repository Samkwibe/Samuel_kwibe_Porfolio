import HomePage from './components/HomePage.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

export default function App() {
  return (
    <>
      <HomePage />
      
      {/* Featured Projects Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
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
