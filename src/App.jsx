import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0b0b12]">
      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-b-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
        <a href="#home" className="bg-gradient-to-r from-indigo-200 via-white to-fuchsia-200 bg-clip-text text-sm font-semibold text-transparent">Karthik Vana</a>
        <nav className="hidden items-center gap-5 text-xs text-white/70 sm:flex">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#skills">Skills</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/50">Let’s Talk</a>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/30 py-8 text-center text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a className="hover:text-white" href="https://www.linkedin.com/in/karthik-vana" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white" href="https://github.com/karthik-vana" target="_blank" rel="noreferrer">GitHub</a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white" href="https://www.hackerrank.com/profile/karthikvana236" target="_blank" rel="noreferrer">HackerRank</a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white" href="mailto:karthikvana236@gmail.com">Email</a>
          </div>
          <p className="mt-3 text-xs">© {new Date().getFullYear()} Karthik Vana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
