import { experiences } from '@/data/experience'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#08111f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-cyan-400/60 text-sm tracking-[0.2em] mb-2">
            // 04. experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        <div className="relative max-w-3xl">
          {/* Vertical timeline rail */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-[17px] top-7 w-[9px] h-[9px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] -translate-x-1/2" />

                <div className="bg-[#0d1b2a] border border-[#1a2940] rounded-xl p-6 hover:border-cyan-400/30 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className="w-8 h-8 bg-cyan-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase size={15} className="text-cyan-400" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      </div>
                      <p className="text-cyan-400 text-sm font-medium pl-[42px]">{exp.company}</p>
                      <p className="text-slate-500 text-xs mt-0.5 pl-[42px]">{exp.location}</p>
                    </div>
                    <span className="font-mono text-xs text-slate-400 bg-[#122035] px-3 py-1.5 rounded-full border border-[#1a2940] whitespace-nowrap self-start shrink-0">
                      {exp.start} — {exp.end}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-400 mt-1 flex-shrink-0 text-xs">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-[#122035] text-cyan-400/70 text-xs font-mono rounded border border-[#1a2940]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
