import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for aura - don't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl/30 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_0_60px_rgba(124,58,237,0.25)]"
        >
          <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium tracking-wide text-white/90 ring-1 ring-white/15">
            Parvathipuram Manyam, Andhra Pradesh, India
          </span>
          <h1 className="text-balance bg-gradient-to-br from-indigo-200 via-white to-fuchsia-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
            Karthik Vana
          </h1>
          <p className="mt-3 text-lg text-white/80 sm:text-xl">
            Aspiring Data Analyst | GenAI & Data Visualization Enthusiast
          </p>

          {/* Typing effect with CSS steps */}
          <div className="mt-5 text-sm text-white/70">
            <span className="font-mono">{`>`} </span>
            <span className="inline-block overflow-hidden whitespace-nowrap align-bottom border-r-2 border-fuchsia-400 pr-1 text-fuchsia-300 will-change-transform animate-[typing_3.5s_steps(30,_end)_infinite,blink_1s_steps(1,_end)_infinite]">
              Turning data into decisions with AI-driven insights
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
            >
              Explore Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-transparent bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes typing { from { width: 0 } to { width: 36ch } }
        @keyframes blink { 50% { border-color: transparent } }
      `}</style>
    </section>
  )
}
