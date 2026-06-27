import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Github, CheckCircle } from 'lucide-react'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} | Taurai Paris Baiwa`,
    description: project.description,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors font-mono text-sm mb-10"
        >
          <ArrowLeft size={15} />
          Back to projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-cyan-400/60 text-sm tracking-[0.2em] mb-3">// case study</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {project.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-cyan-400/10 text-cyan-400 text-sm font-mono rounded-lg border border-cyan-400/20"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1a2940] text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Github size={15} />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {/* Problem */}
          <div className="bg-[#0d1b2a] border border-[#1a2940] rounded-xl p-6">
            <h2 className="text-base font-semibold text-cyan-400 font-mono mb-3">
              // Problem &amp; Context
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">{project.problem}</p>
          </div>

          {/* Constraints */}
          <div className="bg-[#0d1b2a] border border-[#1a2940] rounded-xl p-6">
            <h2 className="text-base font-semibold text-cyan-400 font-mono mb-3">
              // Constraints &amp; Tradeoffs
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm">{project.constraints}</p>
          </div>

          {/* Architecture */}
          <div className="bg-[#0d1b2a] border border-[#1a2940] rounded-xl p-6">
            <h2 className="text-base font-semibold text-cyan-400 font-mono mb-3">
              // Architecture
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm mb-5">{project.architecture}</p>
            <div className="bg-[#060d1a] border border-[#1a2940] rounded-lg p-8 text-center font-mono">
              <p className="text-slate-500 text-sm">[ Architecture / Data-flow diagram ]</p>
              <p className="text-slate-700 text-xs mt-1">Add an image or diagram tool here</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-[#0d1b2a] border border-[#1a2940] rounded-xl p-6">
            <h2 className="text-base font-semibold text-cyan-400 font-mono mb-4">
              // Implementation Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0 text-xs">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="bg-[#0d1b2a] border border-[#1a2940] rounded-xl p-6">
            <h2 className="text-base font-semibold text-cyan-400 font-mono mb-4">
              // Results &amp; Lessons Learned
            </h2>
            <ul className="space-y-3">
              {project.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
