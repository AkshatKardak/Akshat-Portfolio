'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const scrollTo = (id: string) => {
  const s = document.getElementById('main-scroll')
  const el = document.getElementById(id)
  if (s && el) s.scrollTo({ top: el.offsetTop - 32, behavior: 'smooth' })
}

export default function Dashboard() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!nameRef.current) return
    gsap.from(nameRef.current.children, {
      y: 60, opacity: 0, rotationX: -90,
      stagger: 0.06, duration: 0.9,
      ease: 'back.out(1.7)', delay: 0.5
    })
  })

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:16, paddingTop:8 }}>

      {/* Hero Card */}
      <motion.div
        initial={{ opacity:0, y:24 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
        className="card dot-grid"
        style={{ padding:'48px', position:'relative', overflow:'hidden' }}
      >
        {/* Glow blobs */}
        <div style={{
          position:'absolute', top:-80, right:-80,
          width:320, height:320, borderRadius:'50%',
          background:'rgba(79,156,255,0.07)', filter:'blur(80px)',
          pointerEvents:'none'
        }} />
        <div style={{
          position:'absolute', bottom:-60, left:'30%',
          width:240, height:240, borderRadius:'50%',
          background:'rgba(167,139,250,0.05)', filter:'blur(60px)',
          pointerEvents:'none'
        }} />

        <div style={{
          position:'relative', zIndex:1,
          display:'flex', flexWrap:'wrap-reverse',
          alignItems:'center', justifyContent:'space-between', gap:40
        }}>
          {/* Left */}
          <div style={{ flex:1, minWidth:260, display:'flex', flexDirection:'column', gap:24 }}>

            <div>
              <motion.div
                initial={{ opacity:0, x:-16 }}
                animate={{ opacity:1, x:0 }}
                transition={{ delay:0.3 }}
                className="status-badge"
                style={{ marginBottom:16 }}
              >
                <span style={{ position:'relative', display:'inline-flex', width:8, height:8 }}>
                  <span style={{
                    position:'absolute', inset:0, borderRadius:'50%',
                    background:'var(--success)', opacity:0.7,
                    animation:'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'
                  }} />
                  <span style={{ position:'relative', display:'block', width:8, height:8, borderRadius:'50%', background:'var(--success)' }} />
                </span>
                OPEN TO OPPORTUNITIES
              </motion.div>

              <h1
                ref={nameRef}
                style={{
                  fontFamily:'var(--font-display)',
                  fontSize:'clamp(40px, 6vw, 72px)',
                  fontWeight:700,
                  color:'var(--text)',
                  lineHeight:1,
                  display:'flex', flexWrap:'wrap',
                  perspective:'1000px'
                }}
              >
                {'Akshat.'.split('').map((c, i) => (
                  <span key={i} style={{ display:'inline-block' }}>{c}</span>
                ))}
              </h1>

              <motion.div
                initial={{ opacity:0, y:8 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:1.1 }}
                style={{ marginTop:12, display:'flex', alignItems:'center', flexWrap:'wrap', gap:10 }}
              >
                <span style={{ fontFamily:'var(--font-mono)', fontSize:13, fontWeight:600, color:'var(--accent)' }}>
                  Full Stack Developer
                </span>
                <span style={{ color:'var(--border-hi)' }}>·</span>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:13, color:'var(--text-muted)' }}>UI Designer</span>
                <span style={{ color:'var(--border-hi)' }}>·</span>
                <span style={{ display:'flex', alignItems:'center', gap:4, fontFamily:'var(--font-mono)', fontSize:12, color:'var(--text-muted)' }}>
                  <MapPin size={11} /> Mumbai
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:1.15 }}
              style={{ fontSize:15, lineHeight:1.7, color:'var(--text-muted)', maxWidth:480 }}
            >
              Building digital experiences that seamlessly blend sleek aesthetics with
              robust engineering. Currently expanding my horizons at TCET Mumbai.
            </motion.p>

            <motion.div
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:1.25 }}
              style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:12 }}
            >
              <button className="btn-primary" onClick={() => scrollTo('projects')}>
                View Projects <ArrowUpRight size={15} />
              </button>
              <button className="btn-ghost" onClick={() => scrollTo('contact')}>
                Contact Me
              </button>
              <div style={{ display:'flex', gap:8, marginLeft:4 }}>
                {[
                  { href:'https://github.com/AkshatKardak', Icon: GithubIcon },
                  { href:'https://linkedin.com/in/akshatkardak-', Icon: LinkedinIcon },
                  { href:'https://twitter.com/akshatkardak', Icon: TwitterIcon },
                ].map(({ href, Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noreferrer" className="icon-btn">
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity:0, scale:0.8 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ delay:0.5, duration:0.8, type:'spring', stiffness:100 }}
            style={{
              position:'relative', width:160, height:160, flexShrink:0,
              borderRadius:'50%',
              border:'2px solid var(--border-hi)',
              background:'var(--surface)',
              display:'flex', alignItems:'center', justifyContent:'center'
            }}
          >
            <motion.div
              animate={{ rotate:360 }}
              transition={{ duration:14, repeat:Infinity, ease:'linear' }}
              style={{
                position:'absolute', inset:-4, borderRadius:'50%',
                background:'conic-gradient(from 0deg, var(--accent), transparent 55%, var(--accent))'
              }}
            />
            <div style={{
              position:'absolute', inset:2, borderRadius:'50%',
              background:'var(--surface)'
            }} />
            <span style={{
              position:'relative',
              fontFamily:'var(--font-display)', fontSize:42, fontWeight:700, color:'var(--text)'
            }}>AK</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }}>
        {[
          { label:'Projects',  value:24,   suffix:'+', color:'var(--accent)' },
          { label:'Commits',   value:1200, suffix:'+', color:'var(--violet)' },
          { label:'Years Exp', value:3,    suffix:'+', color:'var(--success)' },
        ].map((s, i) => <StatCard key={s.label} {...s} delay={0.7 + i*0.1} />)}
      </div>

      {/* Stack */}
      <motion.div
        initial={{ opacity:0, y:16 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:1.1 }}
        style={{
          background:'var(--surface)', border:'1px solid var(--border)',
          borderRadius:16, padding:'20px 24px'
        }}
      >
        <p style={{
          fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-muted)',
          letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:14
        }}>// tech stack</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
          {['React','Next.js','TypeScript','Node.js','MongoDB','Tailwind CSS','GSAP','Framer Motion','PostgreSQL','Docker']
            .map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </motion.div>

      <style>{`@keyframes ping { 75%,100%{transform:scale(2);opacity:0} }`}</style>
    </div>
  )
}

function StatCard({ label, value, suffix, delay, color }: {
  label:string; value:number; suffix:string; delay:number; color:string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!ref.current) return
    const obj = { val:0 }
    gsap.to(obj, {
      val:value, duration:2.2, ease:'power3.out', delay: delay+0.3,
      onUpdate: () => { if(ref.current) ref.current.textContent = Math.round(obj.val).toString() }
    })
  }, { dependencies:[value, delay] })

  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay }}
      className="card"
      style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'28px 16px', gap:6 }}
    >
      <div style={{ fontFamily:'var(--font-display)', display:'flex', alignItems:'baseline', gap:2, fontSize:'clamp(28px,4vw,44px)', fontWeight:700 }}>
        <span ref={ref} className="stats-glow" style={{ color }}>{0}</span>
        <span style={{ color }}>{suffix}</span>
      </div>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text-muted)', letterSpacing:'0.1em', textTransform:'uppercase' }}>
        {label}
      </span>
    </motion.div>
  )
}
