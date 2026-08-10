import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Sparkles, Clock, BookOpen, Copy, Check, FileDown, User } from 'lucide-react'
import { useState } from 'react'
import { TechStack } from '@/components/TechStack'

const Home = () => {
  const [copied, setCopied] = useState(false)
  const email = 'urmitmahida34@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const handleEmailClick = (e) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`
      e.preventDefault()
    } else {
      copyEmail()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="text-center relative z-10 max-w-4xl mx-auto w-full">

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-3 tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Urmit Mahida
        </motion.h1>

        {/* Constant subtitle */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 tracking-tight gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Data Scientist &amp; GenAI Engineer
        </motion.h2>

        {/* Typewriter roles */}
        <motion.div
          className="text-base sm:text-lg text-gray-400 mb-5 h-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              'RAG Pipelines & Retrieval Systems', 2200,
              'Multi-Agent LLM Workflows',         2200,
              'Predictive ML Modeling',             2200,
              'Azure & GCP Deployments',            2200,
              'NLP & Transformer Models',           2200,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            className="text-cyan-400 font-medium"
          />
        </motion.div>

        {/* Specialization chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {['RAG Pipelines', 'LLMs & Agents', 'Predictive Modeling', 'Azure & GCP'].map((chip) => (
            <span key={chip} className="tag-sm">{chip}</span>
          ))}
        </motion.div>

        <motion.p
          className="text-sm sm:text-base text-gray-400 mb-8 max-w-2xl mx-auto px-2 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ~3 years building production AI systems at NTT Data &amp; Zee Entertainment —
          RAG pipelines, multi-agent LLMs, and forecasting models deployed on Azure &amp; GCP
          with measurable business impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center gap-3">
            <a
              href="/Urmit_Mahida_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              Download CV
            </a>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-5 sm:px-6 py-2.5 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              About Me
            </button>
          </div>

          {/* Email — terminal style */}
          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 pl-8 pr-4 transition-all cursor-copy sm:cursor-pointer"
          >
            <div className="absolute left-0">
              <span className="text-gray-500 font-mono text-sm">~$</span>
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-mono">
              {email}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
              {copied
                ? <Check className="w-4 h-4 text-green-400" />
                : <Copy className="w-4 h-4 text-gray-500" />
              }
            </div>
          </button>
        </motion.div>

        {/* Impact stats */}
        <motion.div
          className="grid grid-cols-3 justify-items-center gap-2 sm:gap-4 mt-10 max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { icon: Sparkles, id: 'experience',   stat: '✦', label: 'AI in Production' },
            { icon: Clock,    id: 'about',         stat: '~3', label: 'Years in AI / ML' },
            { icon: BookOpen, id: 'publications',  stat: '1',  label: 'IEEE Publication' },
          ].map(({ icon: Icon, id, stat, label }) => (
            <motion.button
              key={label}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center group w-full"
              whileHover={{ y: -2 }}
            >
              <div className="p-3 rounded-xl mb-2 w-full max-w-[140px]">
                <Icon className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors mx-auto" />
              </div>
              <span className="text-base sm:text-lg font-semibold">{stat}</span>
              <span className="text-xs text-gray-400 text-center leading-tight">{label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tech stack logos */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TechStack title="Technologies I work with" animate={false} />
        </motion.div>

      </div>
    </div>
  )
}

export default Home
