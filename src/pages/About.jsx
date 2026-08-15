import { ScrollAnimation } from '@/components/ScrollAnimation'
import { MapPin, Briefcase, GraduationCap, Zap } from 'lucide-react'

const highlights = [
  { icon: Briefcase,      label: 'Current Role',  value: 'System Integration Sr. Specialist – Data Scientist' },
  { icon: MapPin,         label: 'Location',       value: 'Bengaluru, India' },
  { icon: GraduationCap, label: 'Education',       value: 'M.Tech CS · Indian Statistical Institute, Kolkata' },
  { icon: Zap,            label: 'Specialization', value: 'GenAI · RAG · LLMs · Predictive Modeling' },
]

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-5xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 gradient-text">
          About Me
        </h2>
      </ScrollAnimation>

      <div className="space-y-8">

        {/* Photo + bio side by side */}
        <ScrollAnimation>
          <div className="bg-gray-800/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/5">
            <div className="flex flex-col sm:flex-row gap-8 items-start">

              {/* Photo */}
              <div className="shrink-0 mx-auto sm:mx-0">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/20 blur-md scale-110" />
                  <img
                    src="/professional_pic_urmit.jpeg"
                    alt="Urmit Mahida"
                    className="relative w-full h-full rounded-full object-cover object-top border-2 border-white/10"
                  />
                </div>
              </div>

              {/* Bio text */}
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
                  I&apos;m a <span className="text-white font-medium">Data Scientist</span> with ~3 years of
                  experience in Machine Learning and Generative AI, focused on building practical,{' '}
                  <span className="text-white font-medium">production-ready AI solutions</span>.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
                  At <span className="text-white font-medium">NTT Data</span>, I worked on GenAI-driven
                  automation — developing RAG pipelines, NLP frameworks, and predictive models using{' '}
                  <span className="text-white font-medium">Azure OpenAI, FastAPI, and Databricks</span> to
                  reduce manual effort and improve operational efficiency.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-4">
                  Earlier at <span className="text-white font-medium">Zee Entertainment</span>, I worked in
                  CX Analytics — conducting RCA for user growth KPIs, automating dashboards, and applying{' '}
                  <span className="text-white font-medium">BERT and LLM-based solutions</span> to improve
                  customer insights and engagement.
                </p>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  With an <span className="text-white font-medium">M.Tech from ISI Kolkata</span>, I bring a
                  strong theoretical foundation combined with hands-on industry experience. I enjoy turning
                  unstructured data into insights that drive real business decisions.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <ScrollAnimation key={item.label}>
              <div className="bg-gray-800/50 rounded-xl p-5 backdrop-blur-sm border border-white/5 flex items-start gap-4 hover:bg-gray-800/70 transition-all">
                <div className="p-2 bg-white/10 rounded-lg shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                  <p className="text-sm text-white font-medium leading-snug">{item.value}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTAs */}
        <ScrollAnimation>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/Urmit_Mahida_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-center text-sm"
            >
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors text-center text-sm"
            >
              View Experience →
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default About
