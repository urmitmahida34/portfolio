import { motion } from 'framer-motion'
import { Briefcase, MapPin, Building2, ArrowRight } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'

const experiences = [
  {
    title: 'System Integration Senior Specialist – Data Scientist',
    company: 'NTT Data Inc.',
    location: 'Bengaluru, India',
    period: 'Jul 2024 – Mar 2026',
    type: 'Full-time',
    logo: '/NTT_logo.png',
    description: [
      'Engineered and productionized a RAG pipeline using FAISS vector indexing, Sentence Transformers (all-MiniLM-L6-v2), and Azure OpenAI GPT-4o — deployed on Azure Databricks with FastAPI, serving real-time triage recommendations at 80% acceptance rate.',
      'Built a Transformation Analytics pipeline leveraging GPT-4o for structured insight extraction from unstructured ITSM data. Applied Topic Modeling and K-Means Clustering, boosting label accuracy by 30% across enterprise accounts.',
      'Developed an ITSM ticket volume forecasting model combining XGBoost and Random Forest with lag, rolling, and seasonal features — achieved 9% MAPE and 4% improvement over ARIMA baseline, tracked via MLflow.',
    ],
  },
  {
    title: 'Associate Data Scientist',
    company: 'Zee Entertainment Enterprises Ltd.',
    location: 'Bengaluru, India',
    period: 'Jul 2023 – Mar 2024',
    type: 'Full-time',
    logo: '/ZEE5_logo.png',
    description: [
      'Conducted RCA for KPIs including Daily Active Users, Registration, and Login success rates; drove feature optimizations improving user engagement metrics.',
      'Built a BERT-based model for user review classification and a Text-to-SQL LLM pipeline using Gemini Pro for natural language querying of OTT databases.',
      'Automated acquisition dashboards and KPI reports on GCP using PySpark, enabling faster data-driven decisions across product teams.',
    ],
  },
]

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <ScrollAnimation key={exp.title}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,260px]">
                {/* Left: content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                      <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-0.5">{exp.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-5 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                    <span>·</span>
                    <span>{exp.period}</span>
                    <span className="px-2 py-0.5 bg-white/10 rounded text-xs">{exp.type}</span>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                        <ArrowRight className="w-4 h-4 mt-0.5 text-gray-500 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: company logo panel */}
                <div className="hidden md:flex bg-gray-900/60 items-center justify-center border-l border-white/5 min-h-[200px]">
                  <motion.img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default Experience
