import { ExternalLink, Award, Quote } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { motion } from 'framer-motion'

const publication = {
  title: 'Quantum-Inspired Constraint Optimization with Dynamic Explainable AI for Resilient EV Charging Infrastructure in Smart Cities',
  venue: 'IEEE Global Humanitarian Technology Conference (BHTC), 2026',
  link: 'https://ieeexplore.ieee.org/abstract/document/11502238',
  tags: ['Quantum Computing', 'Explainable AI', 'EV Charging', 'Smart Cities', 'Constraint Optimization'],
}

const Publications = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-5xl mx-auto pb-20">

      {/* Section heading */}
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text flex items-center gap-3">
          <Award className="w-8 h-8" />
          Publications
        </h2>
      </ScrollAnimation>

      {/* Award callout banner */}
      <ScrollAnimation>
        <div className="relative mb-8 rounded-2xl overflow-hidden border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-transparent">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

          <div className="px-6 sm:px-10 py-8 sm:py-10">
            {/* Trophy + award line */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🏆</span>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-yellow-400">
                Best Paper Award
              </span>
            </div>

            {/* Big punchy statement */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug mb-3">
              Recognized at{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                IEEE BHTC 2026
              </span>{' '}
              — out of 200+ submissions.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              Our research on AI-driven EV charging infrastructure was selected as the{' '}
              <span className="text-white font-medium">best paper</span> at the IEEE Global
              Humanitarian Technology Conference — bridging quantum-inspired optimization,
              explainable AI, and real-world smart city challenges.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Paper card */}
      <ScrollAnimation>
        <div className="bg-gray-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/5 hover:bg-gray-800/70 transition-all group">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-semibold bg-yellow-500/15 border border-yellow-500/25 text-yellow-300 rounded-full flex items-center gap-1.5">
              🏆 Best Paper Award
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-orange-500/15 border border-orange-500/25 text-orange-300 rounded-full">
              IEEE BHTC 2026
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-green-500/15 border border-green-500/25 text-green-300 rounded-full">
              Published
            </span>
          </div>

          {/* Paper title */}
          <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
            {publication.title}
          </h3>

          <p className="text-gray-400 text-sm mb-5 flex items-center gap-2">
            <Quote className="w-3.5 h-3.5 shrink-0 text-gray-600" />
            {publication.venue}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {publication.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Link */}
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-300 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Read on IEEE Xplore
          </a>
        </div>
      </ScrollAnimation>

    </div>
  )
}

export default Publications
