import { useState } from 'react'
import { profile } from '../data/profile.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  
  const handleSend = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const Field = ({ id, type="text", as="input", placeholder }) => {
    const Comp = as
    return (
      <div className="mb-6">
        <Comp 
          id={id}
          name={id}
          aria-label={placeholder}
          value={form[id]}
          onChange={e => setForm(f => ({...f, [id]: e.target.value}))}
          type={type}
          placeholder={placeholder}
          className={`w-full bg-black border border-green-500/30 p-4 text-green-400 placeholder-green-700/50 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors font-mono text-sm ${as === 'textarea' ? 'min-h-[150px] resize-y' : ''}`}
          required
        />
      </div>
    )
  }

  return (
    <main className="max-w-6xl mx-auto my-16 px-4 flex-1 font-mono w-full">
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="flex-1 w-full flex flex-col gap-10 lg:pt-8">
          <div>
            <h2 className="text-xl font-bold text-green-400 mb-8 flex items-center gap-2">
              <span className="text-slate-500">{'/*'}</span>
              Direct Contact
              <span className="text-slate-500">{'*/'}</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-green-500/20 pb-4 hover:border-green-400/50 transition-colors group">
                <span className="text-slate-500 w-24 group-hover:text-green-400 transition-colors">$ email</span>
                <a href={`mailto:${profile.email}`} className="text-green-400 hover:text-white transition-colors">{profile.email}</a>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-green-500/20 pb-4 hover:border-green-400/50 transition-colors group">
                <span className="text-slate-500 w-24 group-hover:text-green-400 transition-colors">$ phone</span>
                <span className="text-green-400">+1 (603) 670-6761</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-green-500/20 pb-4 hover:border-green-400/50 transition-colors group">
                <span className="text-slate-500 w-24 group-hover:text-green-400 transition-colors">$ location</span>
                <span className="text-green-400">Manchester, NH, USA</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-400 mb-8 flex items-center gap-2">
              <span className="text-slate-500">{'/*'}</span>
              Social Links
              <span className="text-slate-500">{'*/'}</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-green-500/20 pb-4 hover:border-green-400/50 transition-colors group">
                <span className="text-slate-500 w-24 group-hover:text-green-400 transition-colors">$ github</span>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white transition-colors">github.com/Samkwibe</a>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 border-b border-green-500/20 pb-4 hover:border-green-400/50 transition-colors group">
                <span className="text-slate-500 w-24 group-hover:text-green-400 transition-colors">$ linkedin</span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white transition-colors">linkedin.com/in/samuel-kwibe</a>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 border border-green-500/30 bg-green-500/5 inline-block self-start shadow-[0_0_15px_rgba(74,222,128,0.1)] border-glow">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
              <span className="text-green-400 font-bold uppercase tracking-widest text-xs text-glow">Available for Summer 2026</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form with Dotted Border */}
        <div className="w-full lg:w-[450px] shrink-0 border-2 border-dashed border-green-500/50 p-6 sm:p-8 lg:p-10 bg-[#050508] relative hover:border-green-400 transition-colors duration-500 border-glow group shadow-[0_0_30px_rgba(74,222,128,0.05)]">
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400 -translate-x-[2px] -translate-y-[2px]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-400 translate-x-[2px] -translate-y-[2px]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-400 -translate-x-[2px] translate-y-[2px]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400 translate-x-[2px] translate-y-[2px]" />

          <h2 className="text-4xl font-bold text-green-400 mb-8 text-glow tracking-tight">Say hello!</h2>
          
          {sent ? (
            <div className="h-full min-h-[350px] flex flex-col items-center justify-center text-center">
              <div className="text-green-400 text-6xl mb-6 text-glow">✓</div>
              <div className="text-green-400 uppercase tracking-widest text-sm font-bold text-glow">
                [MESSAGE TRANSMITTED]
              </div>
              <p className="text-slate-400 mt-4 text-xs">
                Your email app should open with the message ready to send.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSend}>
              <Field id="name" placeholder="Name" />
              <Field id="email" type="email" placeholder="Email Address" />
              <Field id="message" as="textarea" placeholder="Enter your Message Here" />
              
              <button className="w-full py-4 bg-green-400 hover:bg-green-300 text-black font-bold uppercase tracking-widest transition-all mt-4 shadow-[0_0_15px_rgba(74,222,128,0.4)] hover:shadow-[0_0_25px_rgba(74,222,128,0.8)]">
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  )
}