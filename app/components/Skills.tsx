'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Layout, Server, Wrench } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const cats = [
  {
    title:'Frontend', icon:Layout, color:'var(--accent)',
    skills:[{n:'React / Next.js',l:90},{n:'TypeScript',l:85},{n:'Tailwind CSS',l:95},{n:'GSAP / Framer Motion',l:80}]
  },
  {
    title:'Backend', icon:Server, color:'var(--violet)',
    skills:[{n:'Node.js / Express',l:85},{n:'MongoDB',l:80},{n:'REST APIs',l:90},{n:'PostgreSQL',l:75}]
  },
  {
    title:'Tools', icon:Wrench, color:'var(--success)',
    skills:[{n:'Git / GitHub',l:90},{n:'Vercel / Firebase',l:85},{n:'Figma',l:80},{n:'Docker',l:65}]
  },
]

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    const scroller = document.getElementById('main-scroll')
    if (!scroller) return

    ;(gsap.utils.toArray('.skill-bar') as HTMLElement[]).forEach(bar => {
      const w = bar.getAttribute('data-width')
      if (!w) return
      gsap.fromTo(bar, { width:0 }, {
        width:w, duration:1.4, ease:'power3.out',
        scrollTrigger: { trigger:bar, scroller, start:'top 90%', toggleActions:'play none none reverse' }
      })
    })
  }, { scope:containerRef })

  return (
    <div ref={containerRef}>
      <div className="section-header">
        <h2 className="section-title">Skills.</h2>
        <div className="section-line" />
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:16 }}>
        {cats.map((cat, i) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:'-60px' }}
              transition={{ duration:0.5, delay:i*0.1 }}
              style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:16, padding:24 }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
                <div style={{
                  width:40, height:40, borderRadius:10, display:'flex',
                  alignItems:'center', justifyContent:'center',
                  background:`color-mix(in srgb, ${cat.color} 12%, transparent)`,
                  color:cat.color
                }}>
                  <Icon size={18} />
                </div>
                <div>
                  <p style={{ fontSize:13, fontWeight:700, color:'var(--text)', textTransform:'uppercase', letterSpacing:'0.06em' }}>{cat.title}</p>
                  <p style={{ fontSize:11, fontFamily:'var(--font-mono)', color:'var(--text-muted)' }}>{cat.skills.length} technologies</p>
                </div>
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {cat.skills.map(skill => (
                  <div key={skill.n}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                      <span style={{ fontSize:13, color:'var(--text-muted)' }}>{skill.n}</span>
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:11, fontWeight:700, color:cat.color }}>{skill.l}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-bar"
                        data-width={`${skill.l}%`}
                        style={{ background:`linear-gradient(to right, color-mix(in srgb, ${cat.color} 60%, transparent), ${cat.color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
