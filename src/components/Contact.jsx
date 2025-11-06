import { useState } from 'react'
import { motion } from 'framer-motion'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: null, msg: '' })
    try {
      const res = await fetch(`${BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to submit')
      setStatus({ loading: false, ok: true, msg: 'Message sent successfully!' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message || 'Something went wrong' })
    }
  }

  return (
    <section id="contact" className="relative bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <p className="text-white/80">
              Let’s collaborate on data storytelling, dashboards, or AI experiments. I’m available for internships, freelance, or full-time roles.
            </p>
            <div className="mt-6 space-y-2 text-white/70">
              <p>Phone: 9398517097</p>
              <p>Email: <a className="text-fuchsia-300 hover:underline" href="mailto:karthikvana236@gmail.com">karthikvana236@gmail.com</a></p>
              <p>LinkedIn: <a className="text-fuchsia-300 hover:underline" href="https://www.linkedin.com/in/karthik-vana" target="_blank" rel="noreferrer">linkedin.com/in/karthik-vana</a></p>
              <p>GitHub: <a className="text-fuchsia-300 hover:underline" href="https://github.com/karthik-vana" target="_blank" rel="noreferrer">github.com/karthik-vana</a></p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-white/70">Name</label>
                <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-fuchsia-400/40" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-white/70">Email</label>
                <input name="email" type="email" value={form.email} onChange={onChange} required className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-fuchsia-400/40" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-white/70">Subject</label>
                <input name="subject" value={form.subject} onChange={onChange} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-fuchsia-400/40" placeholder="How can I help?" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-white/70">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={5} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-white/40 focus:border-fuchsia-400/40" placeholder="Write your message..." />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button disabled={status.loading} className="rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/50 disabled:opacity-60">
                {status.loading ? 'Sending...' : 'Send Message'}
              </button>
              {status.ok === true && <span className="text-xs text-emerald-300">{status.msg}</span>}
              {status.ok === false && <span className="text-xs text-rose-300">{status.msg}</span>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
