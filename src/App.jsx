import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Calendar, MessageCircle, Award, TrendingUp, Users, Code, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'

function RecruiterImpactSection() {
  const valueProps = [
    {
      icon: Code,
      title: "29+ Production Projects",
      description: "From full-stack web apps to ML models, each project demonstrates real-world problem-solving",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "3.22 GPA | Dean's List",
      description: "Consistent academic excellence while building real-world applications",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Users,
      title: "Team Leadership Experience",
      description: "Led 3-student team to deliver Android app with MongoDB integration",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Cloud & AI Enthusiast",
      description: "Currently learning AWS Cloud (40% proficiency), ML enthusiast actively expanding skills",
      color: "from-orange-400 to-yellow-500"
    }
  ]

  const achievements = [
    "Built multilingual housing platform supporting 100+ concurrent users",
    "Developed location-based Android app with real-time GPS integration",
    "Created ML classification models achieving high accuracy rates",
    "Implemented CI/CD pipelines with Docker and AWS",
    "Led collaborative development with version control best practices"
  ]

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-6"
          >
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400/80 tracking-wider">WHY SAMUEL?</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Ready to Make
            </span>
            <br />
            <span className="text-white">An Impact</span>
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm not just looking for a job—I'm seeking an opportunity to <span className="text-cyan-400 font-semibold">contribute</span>, 
            <span className="text-blue-400 font-semibold"> learn</span>, and <span className="text-purple-400 font-semibold">grow</span> while delivering exceptional results.
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${prop.color} bg-opacity-20 mb-4`}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{prop.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{prop.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-gray-900/90 to-blue-900/30 border border-white/10 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Recent Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="p-10 md:p-16 lg:p-20 rounded-3xl bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 border-2 border-cyan-400/30 backdrop-blur-sm relative overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-50 animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
                Let's Build Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Extraordinary Together
                </span>
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                I'm actively seeking <span className="text-cyan-400 font-semibold">internship opportunities</span> and 
                <span className="text-blue-400 font-semibold"> junior roles</span> where I can bring my passion for 
                <span className="text-purple-400 font-semibold"> cloud computing</span>, 
                <span className="text-green-400 font-semibold"> AI/ML</span>, and 
                <span className="text-yellow-400 font-semibold"> full-stack development</span> to your team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                <motion.a
                  href="/contact"
                  className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg md:text-xl rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg shadow-cyan-500/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Let's Connect
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/Samuel_Kwibe_Resume_Final.docx"
                  download="Samuel_Kwibe_Resume_Final.docx"
                  className="group px-8 md:px-12 py-4 md:py-6 border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 text-cyan-400 font-bold text-lg md:text-xl rounded-xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6" />
                  Download Resume
                </motion.a>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm md:text-base">Available for interviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm md:text-base">Ready to start immediately</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm md:text-base">Eager to learn & grow</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 md:py-20 lg:py-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <Projects featuredOnly />
        </section>

        {/* Recruiter Impact Section */}
        <RecruiterImpactSection />
      </main>
      <Footer />
    </div>
  )
}
