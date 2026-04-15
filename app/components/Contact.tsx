'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const scrollRef = useRef<HTMLElement|null>(null)
  const [rdy, setRdy] = useState(false)
  useEffect(() => { scrollRef.current = document.getElementById('main-scroll'); setRdy(true) }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name:'', email:'', message:'' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">Contact.</h2>
        <div className="section-line" />
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:16 }}>

        {/* Info */}
        <motion.div
          initial={{ opacity:0, x:-20 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true, root: rdy ? scrollRef : undefined }}
          transition={{ duration:0.5 }}
          style={{ display:'flex', flexDirection:'column', gap:12 }}
        >
          <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, padding:24 }}>
            <h3 style={{ fontSize:18, fontWeight:700, color:'var(--text)', marginBottom:8 }}>Let's build something</h3>
            <p style={{ fontSize:13, lineHeight:1.7, color:'var(--text-muted)' }}>
              Have a project in mind? Looking to collaborate or just want to say hi? My inbox is always open.
            </p>
          </div>

          {[
            { Icon:Mail, label:'Email', value:'akshatkardak@gmail.com', href:'mailto:akshatkardak@gmail.com', color:'var(--accent)' },
            { Icon:Github, label:'GitHub', value:'AkshatKardak', href:'https://github.com/AkshatKardak', color:'var(--violet)' },
            { Icon:Linkedin, label:'LinkedIn', value:'akshatkardak-', href:'https://linkedin.com/in/akshatkardak-', color:'var(--success)' },
          ].map(({ Icon, label, value, href, color }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{
                display:'flex', alignItems:'center', gap:14,
                background:'var(--surface)', border:'1px solid var(--border)',
                borderRadius:14, padding:'14px 18px',
                textDecoration:'none', transition:'border-color 0.2s'
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = color)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{
                width:38, height:38, borderRadius:10, flexShrink:0,
                display:'flex', alignItems:'center', justifyContent:'center',
                background:`color-mix(in srgb, ${color} 12%, transparent)`, color
              }}><Icon size={17} /></div>
              <div>
                <p style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:2 }}>{label}</p>
                <p style={{ fontSize:13, fontWeight:500, color:'var(--text)' }}>{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity:0, x:20 }}
          whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true, root: rdy ? scrollRef : undefined }}
          transition={{ duration:0.5, delay:0.1 }}
          style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, padding:28 }}
        >
          {status === 'sent' ? (
            <motion.div
              initial={{ opacity:0, scale:0.95 }}
              animate={{ opacity:1, scale:1 }}
              style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'60px 0', gap:14 }}
            >
              <div style={{
                width:64, height:64, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                background:'var(--success-dim)', color:'var(--success)'
              }}><CheckCircle2 size={32} /></div>
              <h3 style={{ fontSize:18, fontWeight:700, color:'var(--text)' }}>Message sent!</h3>
              <p style={{ fontSize:13, color:'var(--text-muted)', textAlign:'center' }}>I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={submit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
                {[{k:'name',ph:'John Doe',t:'text'},{k:'email',ph:'john@example.com',t:'email'}].map(({k,ph,t}) => (
                  <div key={k}>
                    <label style={{ display:'block', fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:6 }}>{k}</label>
                    <input
                      type={t} required placeholder={ph}
                      value={form[k as 'name'|'email']}
                      onChange={e => setForm(f => ({ ...f, [k]:e.target.value }))}
                      className="form-input"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display:'block', fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text-muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:6 }}>message</label>
                <textarea
                  required rows={5} placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message:e.target.value }))}
                  className="form-input"
                  style={{ resize:'none' }}
                />
              </div>
              {status === 'error' && (
                <div style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'#f87171' }}>
                  <AlertCircle size={15} /> Something went wrong. Please try again.
                </div>
              )}
              <button type="submit" className="btn-primary" disabled={status==='sending'}
                style={{ width:'100%', justifyContent:'center', opacity: status==='sending' ? 0.65 : 1 }}>
                <Send size={15} />
                {status==='sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`@media(max-width:640px){ .contact-grid{grid-template-columns:1fr !important} }`}</style>
    </div>
  )
}
