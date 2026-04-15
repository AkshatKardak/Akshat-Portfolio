'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [focused, setFocused] = useState<string | null>(null)
  const scrollRef = useRef<HTMLElement | null>(null)
  const [rootReady, setRootReady] = useState(false)

  useEffect(() => {
    scrollRef.current = document.getElementById('main-content-area')
    setRootReady(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const inputStyle = (name: string) => ({
    width: '100%',
    background: 'var(--color-surface)',
    border: `1px solid ${focused === name ? 'var(--color-accent)' : 'var(--color-border)'}`,
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '14px',
    color: 'var(--color-text)',
    outline: 'none',
    boxShadow: focused === name ? '0 0 0 3px rgba(79,156,255,0.12)' : 'none',
    transition: 'all 0.2s ease',
  } as React.CSSProperties)

  return (
    <div className="py-20 md:py-28">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-display text-3xl font-bold md:text-5xl"
          style={{ color: 'var(--color-text)' }}>Contact.</h2>
        <div className="section-line" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">

        {/* Left info panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, root: rootReady ? scrollRef : undefined }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 flex flex-col gap-5"
        >
          <div className="rounded-2xl p-6"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <h3 className="mb-2 text-xl font-bold" style={{ color: 'var(--color-text)' }}>
              Let's build something
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Have a project in mind? Looking to collaborate or just want to say hi? My inbox is always open.
            </p>
          </div>

          {[
            { icon: Mail, label: 'Email', value: 'akshatkardak@gmail.com', href: 'mailto:akshatkardak@gmail.com', color: 'var(--color-accent)' },
            { icon: Github, label: 'GitHub', value: 'AkshatKardak', href: 'https://github.com/AkshatKardak', color: 'var(--color-violet)' },
            { icon: Linkedin, label: 'LinkedIn', value: 'akshatkardak-', href: 'https://linkedin.com/in/akshatkardak-', color: 'var(--color-success)' },
          ].map(({ icon: Icon, label, value, href, color }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl p-4 transition-all duration-200"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = color
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
              }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: `${color}14`, color }}>
                <Icon size={18} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--color-text-muted)' }}>{label}</p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, root: rootReady ? scrollRef : undefined }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 rounded-2xl p-6 md:p-8"
          style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
        >
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 gap-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: 'rgba(52,211,153,0.12)', color: 'var(--color-success)' }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                Message sent!
              </h3>
              <p className="text-sm text-center" style={{ color: 'var(--color-text-muted)' }}>
                I'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: 'var(--color-text-muted)' }}>Name</label>
                  <input
                    type="text" required placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('name')}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: 'var(--color-text-muted)' }}>Email</label>
                  <input
                    type="email" required placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('email')}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: 'var(--color-text-muted)' }}>Message</label>
                <textarea
                  required rows={6} placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  style={{ ...inputStyle('message'), resize: 'none' } as React.CSSProperties}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm" style={{ color: '#f87171' }}>
                  <AlertCircle size={16} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-60"
                style={{ background: 'var(--color-accent)', color: '#fff' }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'rgba(255,255,255,0.08)' }} />
                <Send size={16} className={`transition-transform ${status !== 'sending' ? 'group-hover:translate-x-1 group-hover:-translate-y-0.5' : ''}`} />
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}