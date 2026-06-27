import { skillCategories } from '@/data/skills'

const colorMap = {
  cyan: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/25 hover:bg-cyan-400/20',
  purple: 'bg-purple-400/10 text-purple-400 border-purple-400/25 hover:bg-purple-400/20',
  green: 'bg-green-400/10 text-green-400 border-green-400/25 hover:bg-green-400/20',
} as const

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#08111f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-cyan-400/60 text-sm tracking-[0.2em] mb-2">// 02. skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tech Stack</h2>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#0d1b2a] border border-[#1a2940] rounded-xl p-6 hover:border-cyan-400/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl" role="img" aria-label={cat.category}>
                  {cat.icon}
                </span>
                <h3 className="text-white font-semibold">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-lg text-sm font-mono border transition-colors ${colorMap[skill.color]}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
