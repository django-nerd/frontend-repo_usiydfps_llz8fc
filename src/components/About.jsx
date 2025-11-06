import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          About Me
        </motion.h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <p className="text-white/80 leading-relaxed">
              I’m Karthik Vana — a data analyst in the making and a GenAI enthusiast. I love transforming raw data into clean narratives that drive action. With experience across data science internships and real-world projects, I combine modern analytics, visualization, and AI techniques to uncover insights and build delightful, useful tools.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              My journey includes hands-on roles as a Data Science & Machine Learning Intern at YBI Foundation, a GenAI Data Analytics Intern with Tata Group, and leadership on an academic power quality project. I thrive in remote and virtual setups and enjoy collaborating across functions to solve meaningful problems.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <ul className="space-y-3 text-white/80">
              <li><span className="text-white/60">Phone:</span> 9398517097</li>
              <li><span className="text-white/60">Email:</span> <a className="text-fuchsia-300 hover:underline" href="mailto:karthikvana236@gmail.com">karthikvana236@gmail.com</a></li>
              <li><span className="text-white/60">Location:</span> Parvathipuram Manyam, Andhra Pradesh, India</li>
              <li><span className="text-white/60">LinkedIn:</span> <a className="text-fuchsia-300 hover:underline" href="https://www.linkedin.com/in/karthik-vana" target="_blank" rel="noreferrer">linkedin.com/in/karthik-vana</a></li>
              <li><span className="text-white/60">GitHub:</span> <a className="text-fuchsia-300 hover:underline" href="https://github.com/karthik-vana" target="_blank" rel="noreferrer">github.com/karthik-vana</a></li>
              <li><span className="text-white/60">HackerRank:</span> <a className="text-fuchsia-300 hover:underline" href="https://www.hackerrank.com/profile/karthikvana236" target="_blank" rel="noreferrer">hackerrank.com/profile/karthikvana236</a></li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'Data Analysis','MS Excel','Python','SQL','Power BI','Machine Learning','NLP, CV','Problem Solving'
              ].map((chip) => (
                <span key={chip} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">{chip}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
