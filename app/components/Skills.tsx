'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Layout, Server, Wrench } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'var(--color-accent)',
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'GSAP / Framer Motion', level: 80 },
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'var(--color-violet)',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'PostgreSQL', level: 75 },
    ]
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'var(--color-success)',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Vercel / Firebase', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Docker', level: 65 },
    ]
  }
]

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    const scroller = document.getElementById('main-content-area')
    if (!scroller) return

    const bars = gsap.utils.toArray('.skill-bar') as HTMLElement[]
    bars.forEach(bar => {
      const w = bar.getAttribute('data-width')
      if (!w) return
      gsap.fromTo(bar, { width: 0 }, {
        width: w, duration: 1.4, ease: 'power3.out',
        scrollTrigger: {
          trigger: bar, scroller,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      })
    })
  }, { scope: containerRef })

  return (
    <div className="py-20 md:py-28" ref={containerRef}>
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-display text-3xl font-bold md:text-5xl"
          style={{ color: 'var(--color-text)' }}>Skills.</h2>
        <div className="section-line" />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${cat.color}14`, color: cat.color }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: 'var(--color-text)' }}>{cat.title}</h3>
                  <p className="font-mono text-[10px]"
                    style={{ color: 'var(--color-text-muted)' }}>
                    {cat.skills.length} technologies
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex justify-between">
                      <span className="text-sm font-medium"
                        style={{ color: 'var(--color-text-muted)' }}>{skill.name}</span>
                      <span className="font-mono text-xs font-bold"
                        style={{ color: cat.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full"
                      style={{ background: 'var(--color-border-hover)' }}>
                      <div
                        className="skill-bar h-full rounded-full"
                        data-width={`${skill.level}%`}
                        style={{
                          width: 0,
                          background: `linear-gradient(to right, ${cat.color}80, ${cat.color})`
                        }}
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