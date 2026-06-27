import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Projects />
      <hr className="section-divider" />
      <Experience />
      <hr className="section-divider" />
      <Certifications />
      <hr className="section-divider" />
      <Contact />
      <Footer />
    </main>
  )
}
