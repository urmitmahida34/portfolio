import { Brain, Cpu, Database, Cloud, Code2, Activity, Server } from 'lucide-react'
import {
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn, SiFastapi,
  SiStreamlit, SiGooglecloud, SiPandas, SiNumpy,
} from 'react-icons/si'
import { ScrollAnimation } from '@/components/ScrollAnimation'

const FaissIcon = () => (
  <span className="text-xs font-bold text-cyan-400 leading-none">F</span>
)
const LangChainIcon = () => (
  <span className="text-xs font-bold text-green-400 leading-none">LC</span>
)
const QdrantIcon = () => (
  <span className="text-xs font-bold text-red-400 leading-none">Q</span>
)

const skills = [
  {
    category: 'Generative AI & LLMs',
    icon: <Brain className="w-5 h-5" />,
    items: [
      { name: 'LangChain',         icon: <LangChainIcon /> },
      { name: 'Azure OpenAI GPT-4o', icon: <Cloud className="w-4 h-4 text-blue-400" /> },
      { name: 'Gemini Pro',         icon: <SiGooglecloud className="w-4 h-4 text-yellow-400" /> },
      { name: 'Ollama',             icon: <Brain className="w-4 h-4 text-gray-400" /> },
      { name: 'CrewAI',             icon: <Brain className="w-4 h-4 text-violet-400" /> },
      { name: 'RAG Pipelines',      icon: <FaissIcon /> },
      { name: 'Prompt Engineering', icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    ],
  },
  {
    category: 'ML & Deep Learning',
    icon: <Cpu className="w-5 h-5" />,
    items: [
      { name: 'PyTorch',            icon: <SiPytorch className="w-4 h-4 text-red-400" /> },
      { name: 'TensorFlow',         icon: <SiTensorflow className="w-4 h-4 text-orange-400" /> },
      { name: 'Scikit-Learn',       icon: <SiScikitlearn className="w-4 h-4 text-yellow-400" /> },
      { name: 'XGBoost',            icon: <Activity className="w-4 h-4 text-green-400" /> },
      { name: 'BERT',               icon: <Brain className="w-4 h-4 text-blue-400" /> },
      { name: 'CLIP',               icon: <Brain className="w-4 h-4 text-purple-400" /> },
      { name: 'Sentence Transformers', icon: <Brain className="w-4 h-4 text-cyan-400" /> },
      { name: 'NLTK',               icon: <Code2 className="w-4 h-4 text-gray-400" /> },
    ],
  },
  {
    category: 'MLOps & Data Engineering',
    icon: <Activity className="w-5 h-5" />,
    items: [
      { name: 'FastAPI',   icon: <SiFastapi className="w-4 h-4 text-emerald-400" /> },
      { name: 'Streamlit', icon: <SiStreamlit className="w-4 h-4 text-red-400" /> },
      { name: 'MLflow',    icon: <Activity className="w-4 h-4 text-blue-400" /> },
      { name: 'PySpark',   icon: <Activity className="w-4 h-4 text-orange-400" /> },
      { name: 'Pandas',    icon: <SiPandas className="w-4 h-4 text-violet-400" /> },
      { name: 'NumPy',     icon: <SiNumpy className="w-4 h-4 text-blue-300" /> },
    ],
  },
  {
    category: 'Vector Stores & Databases',
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: 'FAISS',    icon: <FaissIcon /> },
      { name: 'Qdrant',   icon: <QdrantIcon /> },
      { name: 'MySQL',    icon: <Database className="w-4 h-4 text-blue-400" /> },
      { name: 'BigQuery', icon: <SiGooglecloud className="w-4 h-4 text-blue-300" /> },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: <Cloud className="w-5 h-5" />,
    items: [
      { name: 'Azure Databricks', icon: <Cloud className="w-4 h-4 text-blue-400" /> },
      { name: 'GCP',              icon: <SiGooglecloud className="w-4 h-4 text-yellow-400" /> },
      { name: 'Vertex AI',        icon: <SiGooglecloud className="w-4 h-4 text-green-400" /> },
    ],
  },
  {
    category: 'Programming Languages',
    icon: <Code2 className="w-5 h-5" />,
    items: [
      { name: 'Python', icon: <SiPython className="w-4 h-4 text-blue-400" /> },
      { name: 'SQL',    icon: <Database className="w-4 h-4 text-cyan-400" /> },
      { name: 'C',      icon: <Code2 className="w-4 h-4 text-gray-400" /> },
    ],
  },
]

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise and the tools I work with.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <ScrollAnimation key={group.category}>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg shrink-0 text-cyan-400">
                  {group.icon}
                </div>
                <h3 className="text-sm font-semibold">{group.category}</h3>
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-gray-700/50 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-all group"
                  >
                    <span className="shrink-0">{skill.icon}</span>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-xs leading-snug">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default Skills
