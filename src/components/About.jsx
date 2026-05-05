import { useState } from 'react'

export default function About() {
  const [tab, setTab] = useState('tech')

  const techExperience = [
    {
      when: 'Aug 2022 — Present',
      role: 'IT Front Desk Assistant',
      org: 'Southern New Hampshire University (SNHU)',
      bullets: [
        'Provide comprehensive IT support to 500+ students and faculty.',
        'Document technical issues and resolutions in ServiceNow ticketing system.',
        'Configure and troubleshoot macOS, Windows, and Linux systems.',
      ],
    },
    {
      when: 'Aug 2022 — Present',
      role: 'Media Services Volunteer',
      org: 'Southern New Hampshire University (SNHU)',
      bullets: [
        'Provide technical support for faculty and students on media production tools.',
        'Manage live streaming and video recording for 50+ university events.',
      ],
    },
  ]

  const otherExperience = [
    {
      when: 'Aug 2023 — Apr 2025',
      role: 'Sprint Machine Operator',
      org: 'Own Courning | Keene, NH',
      bullets: ['Set up and calibrated sprint machines for optimal performance.'],
    },
    {
      when: 'May 2021 — Apr 2023',
      role: 'Production Technician',
      org: 'Vibracoustic | Manchester, NH',
      bullets: ['Assembled rubber and plastic automotive components.'],
    },
  ]

  const skills = [
    { name: 'React & Next.js', level: 85 },
    { name: 'Python & Data Science', level: 80 },
    { name: 'AWS Cloud Services', level: 40 },
    { name: 'Docker & Containers', level: 75 },
    { name: 'Node.js & Express', level: 70 },
    { name: 'TypeScript', level: 60 },
  ]

  const coursework = [
    'Full Stack Development I (A)', 
    'Mobile Architecture & Programming (B+)', 
    'Client/Server Development (A)', 
    'Principles of Machine Learning (A-)', 
    'Cybersecurity Foundations (A)'
  ]

  return (
    <main className="max-w-5xl mx-auto my-16 px-4 flex-1 font-mono">
      <div className="text-sm mb-6 flex items-center gap-2 text-slate-400">
        <span className="text-green-400">{'>'}</span> 
        <span>cat about.md</span>
      </div>
      <h1 className="text-5xl font-bold mb-8 text-white tracking-tight">
        Samuel Kwibe
        <span className="animate-pulse text-green-400">_</span>
      </h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Left Col - Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-[#050508] border border-green-500/20 p-6">
            <h2 className="text-green-400 font-bold mb-4">## SYS.INFO</h2>
            <ul className="text-sm space-y-3 text-slate-300">
              <li><span className="text-slate-500">ROLE:</span> Full-Stack Developer</li>
              <li><span className="text-slate-500">LOCATION:</span> Manchester, NH</li>
              <li><span className="text-slate-500">EDU:</span> SNHU (CS, 3.226 GPA)</li>
              <li><span className="text-slate-500">STATUS:</span> Open to Work</li>
            </ul>
          </div>

          <div className="bg-[#050508] border border-cyan-500/20 p-6">
            <h2 className="text-cyan-400 font-bold mb-4">## SKILLS.SH</h2>
            <div className="space-y-4">
              {skills.map(s => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{s.name}</span>
                    <span className="text-cyan-400">{s.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-black border border-cyan-500/30">
                    <div className="h-full bg-cyan-400" style={{width: `${s.level}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col - Experience & Details */}
        <div className="md:col-span-2 space-y-6">
          
          <div className="bg-[#050508] border border-green-500/20 p-6">
            <h2 className="text-green-400 font-bold mb-4 flex gap-2">
              <span className="text-slate-500">{'>'}</span> 
              ./print_bio
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              I am a Computer Science student specializing in Software Engineering, Algorithms, and Databases. Passionate about building innovative solutions and turning complex problems into elegant code.
            </p>
          </div>

          <div className="bg-[#050508] border border-green-500/20 p-6">
            <h2 className="text-green-400 font-bold mb-6 flex gap-2">
              <span className="text-slate-500">{'>'}</span> 
              tail -f experience.log
            </h2>
            
            <div className="flex gap-4 mb-6 border-b border-green-500/20 pb-2">
              <button 
                onClick={() => setTab('tech')}
                className={`text-xs uppercase tracking-widest px-2 py-1 ${tab === 'tech' ? 'bg-green-400 text-black' : 'text-slate-400 hover:text-green-400'}`}
              >
                Tech Roles
              </button>
              <button 
                onClick={() => setTab('other')}
                className={`text-xs uppercase tracking-widest px-2 py-1 ${tab === 'other' ? 'bg-green-400 text-black' : 'text-slate-400 hover:text-green-400'}`}
              >
                Other Roles
              </button>
            </div>

            <div className="space-y-8">
              {(tab === 'tech' ? techExperience : otherExperience).map((exp, i) => (
                <div key={i} className="relative pl-4 border-l border-green-500/30">
                  <div className="absolute top-0 -left-[5px] w-2 h-2 bg-green-400"></div>
                  <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-sm text-cyan-400 mb-3">{exp.org} // {exp.when}</div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-green-400">{'>'}</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#050508] border border-green-500/20 p-6">
            <h2 className="text-green-400 font-bold mb-4 flex gap-2">
              <span className="text-slate-500">{'>'}</span> 
              ls -la ./coursework
            </h2>
            <div className="flex flex-wrap gap-2">
              {coursework.map(c => (
                <span key={c} className="px-2 py-1 bg-black border border-slate-700 text-xs text-slate-300">
                  {c}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}