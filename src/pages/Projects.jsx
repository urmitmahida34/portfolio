import { Github, ExternalLink, Bot, Film, FileSearch } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'

const projects = [
  {
    title: 'FinSight AI',
    description:
      'AI-powered stock analysis for NSE/BSE listed companies. Enter any ticker and get a full investment research report in under 2 minutes — powered by a 6-agent CrewAI pipeline with live SSE streaming.',
    icon: Bot,
    gradient: 'from-emerald-900/80 via-cyan-900/60 to-gray-900',
    iconColor: 'text-emerald-400',
    github: 'https://github.com/urmitmahida34/finsight-ai-agent',
    live: 'https://finsight-ai-agent-vert.vercel.app',
    tags: ['CrewAI', 'LLaMA 3.3 70B', 'FastAPI', 'React', 'Groq', 'yfinance', 'FAISS'],
  },
  {
    title: 'Movie Recommender',
    description:
      'Movie recommendation web app combining collaborative filtering (Funk SVD) and semantic search using sentence-transformer embeddings on MovieLens 1M, enriched live with TMDB poster art and metadata.',
    icon: Film,
    gradient: 'from-violet-900/80 via-purple-900/60 to-gray-900',
    iconColor: 'text-violet-400',
    github: 'https://github.com/urmitmahida34/movie-recommendation',
    live: 'https://movie-recommendation-manualfilms-watch-history.streamlit.app/',
    tags: ['Python', 'Streamlit', 'Funk SVD', 'Sentence Transformers', 'TMDB API', 'SQLite'],
  },
  {
    title: 'Multimodal PDF RAG',
    description:
      'Production-grade RAG system answering questions about research papers using both text and images. CLIP ViT-B/32 unifies retrieval in the same 512-dim vector space with Qdrant and FAISS backends.',
    icon: FileSearch,
    gradient: 'from-orange-900/80 via-red-900/60 to-gray-900',
    iconColor: 'text-orange-400',
    github: 'https://github.com/urmitmahida34/Multimodal_RAG_PDF_having_Text_Images',
    live: 'https://multimodal-pdf-rag-with-images.streamlit.app/',
    tags: ['CLIP ViT-B/32', 'PyMuPDF', 'Qdrant', 'FAISS', 'LLaMA 4 Vision', 'Streamlit', 'Groq'],
  },
]

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Production-grade AI applications — each with a live demo and full source code.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const Icon = project.icon
          return (
            <ScrollAnimation key={project.title}>
              <div className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm h-full flex flex-col border border-white/5 hover:bg-gray-800/70 transition-all group">
                {/* Project visual header */}
                <div className={`w-full h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <Icon className={`w-16 h-16 ${project.iconColor} opacity-60 group-hover:opacity-80 transition-opacity`} />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
