import { useEffect, useState } from 'react'
import Background3D from './components/Background3D'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Publications from './pages/Publications'
import Contact from './pages/Contact'
import { sections } from './config/sections'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.title = 'Urmit Mahida — Data Scientist & GenAI Engineer'

    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' }
      )
      obs.observe(el)
      return obs
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <div className="relative">
      <Background3D
        raysOrigin="top-center"
        raysColor="#93c5fd"
        raysSpeed={0.7}
        lightSpread={1.3}
        rayLength={1.8}
        fadeDistance={0.9}
        mouseInfluence={0.08}
      />
      <div className="gradient-grid fixed inset-0 pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />

        <section id="home"         className="scroll-mt-16"><Home /></section>
        <section id="about"        className="scroll-mt-16"><About /></section>
        <section id="experience"   className="scroll-mt-16"><Experience /></section>
        <section id="projects"     className="scroll-mt-16"><Projects /></section>
        <section id="skills"       className="scroll-mt-16"><Skills /></section>
        <section id="education"    className="scroll-mt-16"><Education /></section>
        <section id="publications" className="scroll-mt-16"><Publications /></section>
        <section id="contact"      className="scroll-mt-16"><Contact /></section>

        <Footer />
      </div>
    </div>
  )
}

export default App
