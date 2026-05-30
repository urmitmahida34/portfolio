import { useState } from 'react'
import { Mail, Github, Linkedin, Phone, Copy, Check, ExternalLink } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'urmitmahida34@gmail.com',
    href: 'mailto:urmitmahida34@gmail.com',
    copyable: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/urmitmahida34',
    href: 'https://github.com/urmitmahida34',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/urmit-mahida-95a53b152',
    href: 'https://www.linkedin.com/in/urmit-mahida-95a53b152',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7795091699',
    href: 'tel:+917795091699',
  },
]

const Contact = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text flex items-center gap-3">
          <Mail className="w-8 h-8" />
          Get in Touch
        </h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-xl">
          I&apos;m open to new opportunities, collaborations, and conversations about AI. Reach out anytime.
        </p>
      </ScrollAnimation>

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {contactItems.map((item) => (
          <ScrollAnimation key={item.label}>
            <div className="bg-gray-800/50 rounded-xl p-5 backdrop-blur-sm border border-white/5 hover:bg-gray-800/70 transition-all group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.copyable && (
                    <button
                      onClick={() => handleCopy(item.value)}
                      className="p-1.5 text-gray-400 hover:text-white transition-colors"
                      title="Copy"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-1.5 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation>
        <div className="bg-gray-800/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-white/5 text-center">
          <p className="text-gray-300 text-base sm:text-lg mb-4">
            Prefer a quick conversation? Drop me an email or connect on LinkedIn.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:urmitmahida34@gmail.com"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/urmit-mahida-95a53b152"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Contact
