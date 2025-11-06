import { motion } from 'framer-motion'

const skills = [
  { name: 'Data Analysis', level: 90 },
  { name: 'MS Excel', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'SQL', level: 80 },
  { name: 'Power BI', level: 75 },
  { name: 'Machine Learning', level: 70 },
  { name: 'NLP & CV', level: 65 },
  { name: 'Problem Solving', level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-white/80">{s.name}</span>
                <span className="text-xs text-fuchsia-300">{s.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(192,132,252,0.45)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
