import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { sections } from '../config/sections'

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const col1 = sections.slice(0, 3)
  const col2 = sections.slice(3, 6)
  const col3 = sections.slice(6, 9)

  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
          <div className="space-y-4">
            <button onClick={() => scrollTo('home')} className="group">
              <div className="relative w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-cyan-400/10 blur-sm group-hover:bg-cyan-400/20 transition-all duration-300" />
                <span className="relative text-sm font-black text-white tracking-tight">UM</span>
              </div>
            </button>
            <p className="text-sm text-gray-400 leading-relaxed">
              Data Scientist building production-grade GenAI & ML systems. Based in Bengaluru, India.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:urmitmahida34@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  urmitmahida34@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917795091699" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 7795091699
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
              <div>{col1.map(s => <button key={s.id} onClick={() => scrollTo(s.id)} className="block text-sm text-gray-400 hover:text-white transition-colors mb-2 text-left">{s.label}</button>)}</div>
              <div>{col2.map(s => <button key={s.id} onClick={() => scrollTo(s.id)} className="block text-sm text-gray-400 hover:text-white transition-colors mb-2 text-left">{s.label}</button>)}</div>
              <div>{col3.map(s => <button key={s.id} onClick={() => scrollTo(s.id)} className="block text-sm text-gray-400 hover:text-white transition-colors mb-2 text-left">{s.label}</button>)}</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Social</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/urmitmahida34" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/urmit-mahida-95a53b152" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:urmitmahida34@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Urmit Mahida. All rights reserved.</p>
          <p className="text-sm text-gray-400">Data Scientist & GenAI Engineer · Bengaluru, India</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
