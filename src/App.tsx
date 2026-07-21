import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { LanguageProvider } from '@/i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
