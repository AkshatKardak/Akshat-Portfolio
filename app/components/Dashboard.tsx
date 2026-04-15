'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Dashboard() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  
  // Name split for animation
  const nameText = "Akshat."
  const nameChars = nameText.split('')

  useGSAP(() => {
    // Animate name characters
    if (nameRef.current) {
      const chars = nameRef.current.children
      gsap.from(chars, {
        y: 40,
        opacity: 0,
        rotationX: -90,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5
      })
    }
  })

  return (
    <div className="flex flex-col gap-6 pt-10 md:pt-4">
      {/* Hero Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass relative overflow-hidden rounded-3xl p-8 md:p-12"
      >
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[80px]" />
        
        <div className="relative z-10 flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 font-mono text-xs text-text-muted"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
                </span>
                OPEN TO OPPORTUNITIES
              </motion.div>
              
              <h1 ref={nameRef} className="font-display flex text-5xl font-semibold tracking-tight text-text md:text-7xl" style={{ perspective: "1000px" }}>
                {nameChars.map((char, i) => (
                  <span key={i} className="inline-block transform-style-3d">
                    {char}
                  </span>
                ))}
              </h1>
              
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-3 text-xl font-medium text-accent md:text-2xl"
              >
                Full Stack Developer & UI Designer
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="max-w-xl text-text-muted leading-relaxed"
            >
              Building digital experiences that seamlessly blend sleek aesthetics with robust engineering. Currently expanding my horizons at TCET Mumbai.
            </motion.p>
            
            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 rounded-xl bg-text px-6 py-3 font-medium text-bg transition-transform hover:scale-105"
              >
                View Work
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
              
              <div className="flex items-center gap-3">
                <a href="https://github.com/AkshatKardak" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-text-muted transition-colors hover:bg-white/10 hover:text-text">
                  <GithubIcon size={20} />
                </a>
                <a href="https://linkedin.com/in/akshatkardak-" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-text-muted transition-colors hover:bg-white/10 hover:text-text">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://twitter.com/akshatkardak" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-text-muted transition-colors hover:bg-white/10 hover:text-text">
                  <TwitterIcon size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Avatar Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
            className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-border bg-surface shadow-2xl md:h-48 md:w-48"
          >
            <div className="absolute inset-0 rounded-full border border-accent/30 animate-[spin_10s_linear_infinite]" />
            <span className="font-display text-4xl font-bold text-text-muted md:text-6xl">AK</span>
          </motion.div>
          
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Projects" value={24} suffix="+" delay={0.6} />
        <StatCard label="Commits" value={1200} suffix="+" delay={0.7} />
        <StatCard label="Years Exp" value={3} suffix="+" delay={0.8} />
      </div>
    </div>
  )
}

function StatCard({ label, value, suffix, delay }: { label: string, value: number, suffix: string, delay: number }) {
  const counterRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!counterRef.current) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      delay: delay + 0.5,
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent =
            Math.round(obj.val).toString()
        }
      }
    })
  }, { dependencies: [value, delay] })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass flex flex-col items-center justify-center rounded-2xl p-6 md:p-8"
    >
      <div className="font-display flex items-baseline gap-1 text-3xl font-bold text-text md:text-5xl">
        <span ref={counterRef} className="stats-glow">0</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <span className="mt-1 font-mono text-xs uppercase tracking-wider text-text-muted md:text-sm">
        {label}
      </span>
    </motion.div>
  )
}
