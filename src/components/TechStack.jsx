import { motion } from 'framer-motion'
import {
  SiPython, SiPytorch, SiTensorflow, SiFastapi, SiStreamlit,
  SiGooglecloud, SiJupyter, SiPandas, SiGit, SiScikitlearn,
} from 'react-icons/si'
import { Brain, Cloud, Zap, Cpu } from 'lucide-react'

const techItems = [
  { name: 'Python',       Icon: SiPython,       color: '#3b82f6' },
  { name: 'PyTorch',      Icon: SiPytorch,       color: '#ef4444' },
  { name: 'TensorFlow',   Icon: SiTensorflow,    color: '#f97316' },
  { name: 'Scikit-Learn', Icon: SiScikitlearn,   color: '#f59e0b' },
  { name: 'LangChain',    Icon: Brain,           color: '#10b981' },
  { name: 'CrewAI',       Icon: Cpu,             color: '#a78bfa' },
  { name: 'FastAPI',      Icon: SiFastapi,       color: '#34d399' },
  { name: 'Streamlit',    Icon: SiStreamlit,     color: '#ef4444' },
  { name: 'Azure',        Icon: Cloud,           color: '#60a5fa' },
  { name: 'GCP',          Icon: SiGooglecloud,   color: '#34d399' },
  { name: 'Pandas',       Icon: SiPandas,        color: '#8b5cf6' },
  { name: 'Groq',         Icon: Zap,             color: '#fbbf24' },
]

export const TechStack = ({ title = 'Technologies I work with', animate = true }) => {
  return (
    <div>
      {title && (
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 text-center">{title}</p>
      )}
      <div className="flex flex-wrap justify-center gap-3">
        {techItems.map((tech, i) => {
          const { Icon } = tech
          return (
            <motion.div
              key={tech.name}
              initial={animate ? { opacity: 0, y: 10 } : { opacity: 1 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: animate ? i * 0.04 : 0 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/60 border border-white/5 rounded-lg hover:border-white/15 hover:bg-gray-700/50 transition-all group cursor-default"
            >
              <Icon
                className="w-4 h-4 flex-shrink-0"
                style={{ color: tech.color }}
              />
              <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
