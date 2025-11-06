import { motion } from 'framer-motion'

const projects = [
  { title: 'Project Placeholder 1', description: 'Add your project details here soon. Use this slot to showcase your best analytics, dashboards, or ML work.', tags: ['Data', 'Visualization'] },
  { title: 'Project Placeholder 2', description: 'Add a GenAI experiment, notebook, or application here. Include metrics, insights, and outcomes.', tags: ['GenAI', 'NLP'] },
  { title: 'Project Placeholder 3', description: 'Show a Power BI dashboard or Excel automation story here, focused on business value.', tags: ['Power BI', 'Excel'] },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white/90">{p.title}</h3>
                <span className="rounded-full bg-fuchsia-500/20 px-2 py-1 text-[10px] text-fuchsia-200 ring-1 ring-fuchsia-400/30">Soon</span>
              </div>
              <p className="mt-3 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/70 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
              <button className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition group-hover:bg-white/10">
                View Case Study
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
