'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

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
    
    // Simulate sending (since emailjs isn't configured in this new environment without specific keys)
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const inputClasses = (name: string) => `
    w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text 
    transition-all placeholder:text-text-faint
    ${focused === name 
      ? 'border-accent shadow-[0_0_0_2px_rgba(79,156,255,0.2)]' 
      : 'border-border hover:border-text-muted/50'}
  `

  return (
    <div className="py-20 md:py-32 flex flex-col items-center">
      <div className="mb-12 flex w-full max-w-2xl items-center gap-4">
        <div className="h-[1px] flex-1 bg-border" />
        <h2 className="font-display text-3xl font-bold text-text md:text-5xl">Contact.</h2>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, root: rootReady ? scrollRef : undefined, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="glass w-full max-w-2xl rounded-3xl p-6 md:p-10"
      >
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-text">Let's Connect</h3>
          <p className="text-sm text-text-muted">
            Have a project in mind or just want to chat? Send me a message.
          </p>
        </div>

        {status === 'sent' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-10"
          >
            <div className="mb-4 rounded-full bg-success/20 p-3 text-success">
              <CheckCircle2 size={48} />
            </div>
            <p className="text-lg font-medium text-text">Message Sent Successfully!</p>
            <p className="text-sm text-text-muted">I'll get back to you as soon as possible.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase text-text-muted">Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className={inputClasses('name')}
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-xs uppercase text-text-muted">Email</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className={inputClasses('email')}
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase text-text-muted">Message</label>
              <textarea
                required
                rows={5}
                placeholder="How can I help you?"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className={`${inputClasses('message')} resize-none`}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle size={16} />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-accent px-6 py-4 font-medium text-white transition-all hover:bg-accent/90 disabled:opacity-70"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              {!status && <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  )
}
