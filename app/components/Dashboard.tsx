'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const scrollTo = (id: string) => {
  const scroller = document.getElementById('main-content-area')
  const el = document.getElementById(id)
  if (scroller && el) scroller.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
}

export default function Dashboard() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!nameRef.current) return
    gsap.from(nameRef.current.children, {
      y: 60, opacity: 0, rotationX: -90,
      stagger: 0.06, duration: 0.9,
      ease: 'back.out(1.7)', delay: 0.6
    })
  })

  return (
    <div className="flex flex-col gap-5 pt-6 md:pt-4">

      {/* ── Hero Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl p-8 md:p-12 dot-grid"
        style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
      >
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px]"
          style={{ background: 'rgba(79,156,255,0.08)' }} />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full blur-[80px]"
          style={{ background: 'rgba(167,139,250,0.06)' }} />

        <div className="relative z-10 flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">

          {/* Left */}
          <div className="flex-1 space-y-7">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs tracking-widest"
              style={{
                background: 'rgba(52,211,153,0.08)',
                border: '1px solid rgba(52,211,153,0.2)',
                color: 'var(--color-success)'
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ background: 'var(--color-success)' }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: 'var(--color-success)' }} />
              </span>
              OPEN TO OPPORTUNITIES
            </motion.div>

            {/* Name */}
            <div>
              <h1
                ref={nameRef}
                className="font-display flex flex-wrap text-5xl font-bold tracking-tight md:text-7xl"
                style={{ perspective: '1000px', color: 'var(--color-text)' }}
              >
                {'Akshat.'.split('').map((c, i) => (
                  <span key={i} className="inline-block">{c}</span>
                ))}
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-3 flex items-center gap-3"
              >
                <span className="font-mono text-sm font-medium"
                  style={{ color: 'var(--color-accent)' }}>
                  Full Stack Developer
                </span>
                <span style={{ color: 'var(--color-border-hover)' }}>·</span>
                <span className="font-mono text-sm"
                  style={{ color: 'var(--color-text-muted)' }}>
                  UI Designer
                </span>
                <span style={{ color: 'var(--color-border-hover)' }}>·</span>
                <span className="flex items-center gap-1 font-mono text-xs"
                  style={{ color: 'var(--color-text-muted)' }}>
                  <MapPin size={11} /> Mumbai
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="max-w-lg text-base leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Building digital experiences that seamlessly blend sleek aesthetics
              with robust engineering. Currently expanding my horizons at TCET Mumbai.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="group flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:scale-105 accent-glow"
                style={{ background: 'var(--color-accent)', color: '#fff' }}
              >
                View Projects
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all hover:scale-105"
                style={{
                  border: '1px solid var(--color-border-hover)',
                  background: 'var(--color-surface-2, #111827)',
                  color: 'var(--color-text)'
                }}
              >
                Contact Me
              </button>

              <div className="flex items-center gap-2 ml-1">
                {[
                  { href: 'https://github.com/AkshatKardak', Icon: GithubIcon },
                  { href: 'https://linkedin.com/in/akshatkardak-', Icon: LinkedinIcon },
                  { href: 'https://twitter.com/akshatkardak', Icon: TwitterIcon },
                ].map(({ href, Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-110"
                    style={{
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text-muted)'
                    }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full md:h-52 md:w-52"
            style={{ border: '2px solid var(--color-border-hover)', background: 'var(--color-surface)' }}
          >
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-6px] rounded-full"
              style={{
                background: `conic-gradient(from 0deg, var(--color-accent), transparent 60%, var(--color-accent))`
              }}
            />
            <div className="absolute inset-[2px] rounded-full" style={{ background: 'var(--color-surface)' }} />
            <span className="relative font-display text-4xl font-bold md:text-6xl"
              style={{ color: 'var(--color-text)' }}>AK</span>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Projects', value: 24, suffix: '+', color: 'var(--color-accent)' },
          { label: 'Commits', value: 1200, suffix: '+', color: 'var(--color-violet)' },
          { label: 'Years Exp', value: 3, suffix: '+', color: 'var(--color-success)' },
        ].map((s, i) => (
          <StatCard key={s.label} {...s} delay={0.6 + i * 0.1} />
        ))}
      </div>

      {/* ── Tech Stack strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="rounded-2xl p-5"
        style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-widest"
          style={{ color: 'var(--color-text-muted)' }}>
          // tech stack
        </p>
        <div className="flex flex-wrap gap-2">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'PostgreSQL', 'Docker'].map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </motion.div>

    </div>
  )
}

function StatCard({ label, value, suffix, delay, color }: {
  label: string, value: number, suffix: string, delay: number, color: string
}) {
  const counterRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!counterRef.current) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: value, duration: 2.2, ease: 'power3.out', delay: delay + 0.3,
      onUpdate: () => {
        if (counterRef.current)
          counterRef.current.textContent = Math.round(obj.val).toString()
      }
    })
  }, { dependencies: [value, delay] })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass glass-hover flex flex-col items-center justify-center rounded-2xl p-6 md:p-8"
    >
      <div className="font-display flex items-baseline gap-0.5 text-3xl font-bold md:text-5xl">
        <span ref={counterRef} className="stats-glow" style={{ color }}>0</span>
        <span style={{ color }}>{suffix}</span>
      </div>
      <span className="mt-2 font-mono text-[10px] uppercase tracking-widest md:text-xs"
        style={{ color: 'var(--color-text-muted)' }}>
        {label}
      </span>
    </motion.div>
  )
}