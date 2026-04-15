'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Building2 } from 'lucide-react'

const experiences = [
  {
    role:'Freelance Full Stack Developer', company:'Self Employed', period:'2023 – Present',
    desc:'Developed modern, responsive web applications using React, Next.js, and Node.js. Focused on UI/UX, performance optimization, and scalable architectures.',
    tech:['Next.js','React','Node.js','Tailwind CSS','MongoDB'],
    color:'var(--accent)'
  },
  {
    role:'Frontend Developer Intern', company:'Sparkler', period:'Jun 2023 – Aug 2023',
    desc:'Built dynamic UIs and animated marketing pages. Improved Core Web Vitals by refactoring legacy code and optimizing asset loading pipelines.',
    tech:['React','GSAP','Framer Motion','TypeScript'],
    color:'var(--violet)'
  },
  {
    role:'Technical Team Member', company:'TCET Open Source', period:'2022 – 2023',
    desc:'Contributed to open-source initiatives. Collaborated to build internal tools and managed technical events.',
    tech:['JavaScript','Git','React','Express'],
    color:'var(--success)'
  },
]

export default function Experience() {
  const scrollRef = useRef<HTMLElement|null>(null)
  const [rdy, setRdy] = useState(false)
  useEffect(() => { scrollRef.current = document.getElementById('main-scroll'); setRdy(true) }, [])

  return (
    <div>
      <div className="section-header">
        <h2 className="section-title">Experience.</h2>
        <div className="section-line" />
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
        {experiences.map((exp, i) => (
          <ExpCard key={i} exp={exp} index={i} scrollRef={scrollRef} rdy={rdy} />
        ))}
      </div>
    </div>
  )
}

function ExpCard({ exp, index, scrollRef, rdy }: {
  exp: typeof experiences[0]; index:number;
  scrollRef: React.MutableRefObject<HTMLElement|null>; rdy:boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, root: rdy ? scrollRef : undefined, margin:'-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity:0, y:24 }}
      animate={inView ? { opacity:1, y:0 } : { opacity:0, y:24 }}
      transition={{ duration:0.5, delay:index*0.1 }}
      style={{
        background:'var(--surface)', border:'1px solid var(--border)',
        borderRadius:16, padding:'24px 28px', position:'relative', overflow:'hidden',
        transition:'border-color 0.2s ease'
      }}
      onHoverStart={e => { (e.currentTarget as HTMLElement).style.borderColor = exp.color }}
      onHoverEnd={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)' }}
    >
      {/* Left accent bar */}
      <div style={{
        position:'absolute', left:0, top:0, bottom:0, width:3,
        background:exp.color, borderRadius:'16px 0 0 16px'
      }} />

      <div style={{ paddingLeft:12 }}>
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', gap:8, marginBottom:12 }}>
          <div>
            <h3 style={{ fontSize:17, fontWeight:700, color:'var(--text)', marginBottom:4 }}>{exp.role}</h3>
            <span style={{ display:'flex', alignItems:'center', gap:6, fontFamily:'var(--font-mono)', fontSize:13, fontWeight:600, color:exp.color }}>
              <Building2 size={13} /> {exp.company}
            </span>
          </div>
          <span style={{ display:'flex', alignItems:'center', gap:5, fontFamily:'var(--font-mono)', fontSize:12, color:'var(--text-muted)' }}>
            <Calendar size={12} /> {exp.period}
          </span>
        </div>

        <p style={{ fontSize:14, lineHeight:1.7, color:'var(--text-muted)', marginBottom:16 }}>{exp.desc}</p>

        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {exp.tech.map(t => (
            <span key={t} style={{
              padding:'3px 12px', borderRadius:999,
              fontFamily:'var(--font-mono)', fontSize:11,
              background:`color-mix(in srgb, ${exp.color} 10%, transparent)`,
              color:exp.color,
              border:`1px solid color-mix(in srgb, ${exp.color} 22%, transparent)`
            }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
