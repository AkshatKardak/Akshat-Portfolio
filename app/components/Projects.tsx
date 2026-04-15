'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

const projects = [
  {
    number:'01', title:'RentRide',
    desc:'Full-stack MERN car rental platform with AI-powered recommendations, Razorpay payments, real-time booking management, and a comprehensive admin dashboard.',
    tags:['React','Node.js','MongoDB','Razorpay','Firebase','JWT'],
    github:'https://github.com/AkshatKardak/car-rental-mern',
    live:'https://rentridefrontend.vercel.app/',
    color:'var(--accent)'
  },
  {
    number:'02', title:'UnitedImpact',
    desc:'MERN NGO platform connecting donors, volunteers & NGOs — Razorpay donations, Firebase auth, real-time Socket.IO messaging, and map-based campaign discovery.',
    tags:['React','Node.js','MongoDB','Socket.IO','Razorpay','Leaflet'],
    github:'https://github.com/AkshatKardak/UnitedImpact',
    live:'https://unitedimpact-app.netlify.app',
    color:'var(--violet)'
  },
  {
    number:'03', title:'RoastHub',
    desc:'AI-powered savage tweet generator with authentic Indian desi flavour — Bollywood references, cricket banter, and viral rating system.',
    tags:['React','Node.js','MongoDB','GROQ AI','Framer Motion'],
    github:'https://github.com/AkshatKardak/RoastHub',
    live:'https://roasthubfront.vercel.app',
    color:'var(--success)'
  },
]

export default function Projects() {
  const scrollRef = useRef<HTMLElement|null>(null)
  const [rdy, setRdy] = useState(false)
  useEffect(() => { scrollRef.current = document.getElementById('main-scroll'); setRdy(true) }, [])

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">Projects.</h2>
        <div className="section-line" />
        <span className="section-meta">{projects.length} works</span>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:16 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, root: rdy ? scrollRef : undefined, margin:'-60px' }}
            transition={{ duration:0.5, delay: i*0.1 }}
            style={{
              background:'var(--surface)', border:'1px solid var(--border)',
              borderRadius:16, padding:24, display:'flex', flexDirection:'column',
              transition:'border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
              cursor:'default'
            }}
            whileHover={{ y:-4 }}
            onHoverStart={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = p.color
              el.style.boxShadow = `0 20px 60px -12px rgba(0,0,0,0.6)`
            }}
            onHoverEnd={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border)'
              el.style.boxShadow = 'none'
            }}
          >
            {/* Top bar */}
            <div style={{ height:3, borderRadius:3, marginBottom:20, background:`linear-gradient(to right, ${p.color}, transparent)` }} />

            {/* Number + Links */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
              <span style={{ fontFamily:'var(--font-display)', fontSize:40, fontWeight:700, color:p.color, opacity:0.15, lineHeight:1 }}>
                {p.number}
              </span>
              <div style={{ display:'flex', gap:8 }}>
                <a href={p.github} target="_blank" rel="noreferrer" className="icon-btn" style={{ width:32, height:32 }}>
                  <GithubIcon size={14} />
                </a>
                <a href={p.live} target="_blank" rel="noreferrer" className="icon-btn" style={{ width:32, height:32 }}>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <h3 style={{ fontSize:18, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{p.title}</h3>
            <p style={{ fontSize:13, lineHeight:1.65, color:'var(--text-muted)', flex:1, marginBottom:16 }}>{p.desc}</p>

            <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  padding:'3px 9px', borderRadius:999,
                  fontFamily:'var(--font-mono)', fontSize:10, fontWeight:500,
                  background: `color-mix(in srgb, ${p.color} 12%, transparent)`,
                  color: p.color,
                  border: `1px solid color-mix(in srgb, ${p.color} 25%, transparent)`
                }}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
