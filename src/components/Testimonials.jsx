import { testimonials, testimonialStats } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <main className="max-w-7xl mx-auto my-12 sm:my-16 px-4 sm:px-6 flex-1 font-mono w-full">
      <div className="relative overflow-hidden border border-green-500/25 bg-[#050508] p-6 sm:p-10 mb-8 border-glow">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">
          <div className="text-sm mb-6 flex items-center gap-2 text-slate-400">
            <span className="text-green-400">{'>'}</span>
            <span>tail -f testimonials.log</span>
          </div>
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-end">
            <div>
              <p className="text-green-400 uppercase tracking-[0.35em] text-xs mb-4">proof of work</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 text-white tracking-tight">
                Trusted by students, teammates, and collaborators.
              </h1>
              <p className="text-slate-400 max-w-3xl leading-relaxed">
                Feedback focused on Samuel's IT support, academic teamwork, professional reliability,
                and ability to keep improving the final product until it feels polished.
              </p>
            </div>

            <div className="border border-green-500/25 bg-black/40 p-5">
              <div className="text-green-400 text-xs uppercase tracking-widest mb-3">signal summary</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-green-500/10 pb-3">
                  <span className="text-slate-400 text-xs">communication</span>
                  <span className="text-green-400 font-bold">clear</span>
                </div>
                <div className="flex items-center justify-between border-b border-green-500/10 pb-3">
                  <span className="text-slate-400 text-xs">teamwork</span>
                  <span className="text-green-400 font-bold">reliable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">support style</span>
                  <span className="text-green-400 font-bold">patient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {testimonialStats.map((stat) => (
          <div key={stat.label} className="border border-green-500/20 bg-green-400/5 p-5">
            <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">{stat.label}</div>
            <div className="text-3xl font-black text-green-400 text-glow mb-2">{stat.value}</div>
            <p className="text-slate-400 text-sm leading-relaxed">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <article
            key={t.name}
            className={`bg-[#050508] border border-green-500/20 p-6 sm:p-8 relative overflow-hidden group hover:border-green-400/60 hover:bg-green-400/[0.03] transition-colors ${i === 0 ? 'lg:row-span-2' : ''}`}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-green-500/50 group-hover:bg-green-400 transition-colors" />
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-green-400 text-xs uppercase tracking-[0.25em] mb-2">{t.relationship}</div>
                <h2 className="text-xl font-bold text-white">{t.name}</h2>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
              <span className="text-green-400/30 text-6xl leading-none">"</span>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6 text-base sm:text-lg">"{t.quote}"</p>

            <div className="flex flex-wrap gap-2">
              {t.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="border border-green-500/20 bg-black/40 px-3 py-1.5 text-[11px] uppercase tracking-widest text-green-300"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
