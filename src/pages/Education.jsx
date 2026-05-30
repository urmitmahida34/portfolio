import { GraduationCap, MapPin, Calendar } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'

const education = [
  {
    institution: 'Indian Statistical Institute',
    location: 'Kolkata, India',
    degree: 'M.Tech in Computer Science',
    period: '2021 – 2023',
    logo: '/isi-logo_modified.png',
    highlights: ['Specialization in Machine Learning & Statistical Computing', 'Rigorous foundation in algorithms, probability, and statistical theory'],
  },
  {
    institution: 'Ramrao Adik Institute of Technology',
    location: 'Navi Mumbai, India',
    degree: 'B.E. in Information Technology',
    period: '2015 – 2019',
    logo: '/rait_logo.png',
    highlights: ['Foundation in software engineering, data structures, and algorithms', 'Projects in networking, databases, and application development'],
  },
]

const Education = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-5xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text flex items-center gap-3">
          <GraduationCap className="w-8 h-8" />
          Education
        </h2>
      </ScrollAnimation>

      <div className="space-y-8">
        {education.map((edu) => (
          <ScrollAnimation key={edu.institution}>
            <div className="group bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm border border-white/5 hover:bg-gray-800/70 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,200px]">
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-xl">
                      <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold">{edu.institution}</h3>
                      <p className="text-gray-400 text-sm">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-5">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{edu.location}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{edu.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden md:flex bg-gray-900/60 items-center justify-center border-l border-white/5 min-h-[200px]">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-contain p-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
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

export default Education
