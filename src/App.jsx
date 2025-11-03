import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section className="container my-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <Projects featuredOnly />
        </section>
      </main>
      <Footer />
    </div>
  )
}
