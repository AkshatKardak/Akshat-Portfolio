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
    title: "Frontend Development", 
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "GSAP / Framer Motion", level: 80 }
    ]
  },
  { 
    title: "Backend Development", 
    icon: Server,
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "PostgreSQL", level: 75 }
    ]
  },
  { 
    title: "Tools & Technologies", 
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel / Firebase", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Docker", level: 65 }
    ]
  }
]

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Wait for scroller element to exist
    const scroller = document.getElementById('main-content-area')
    if (!scroller) return

    const progressBars = gsap.utils.toArray(
      '.skill-progress-bar'
    ) as HTMLElement[]

    progressBars.forEach((bar) => {
      const width = bar.getAttribute('data-width')
      if (!width) return

      gsap.fromTo(
        bar,
        { width: 0 },
        {
          width: width,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            scroller: scroller,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, { scope: containerRef })

  return (
    <div className="py-20 md:py-32" ref={containerRef}>
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-display text-3xl font-bold text-text md:text-5xl">Skills.</h2>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-text">{cat.title}</h3>
              </div>
              
              <div className="space-y-5">
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-text-muted">{skill.name}</span>
                      <span className="font-mono text-xs text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
                      <div 
                        className="skill-progress-bar h-full bg-gradient-to-r from-accent/50 to-accent" 
                        data-width={`${skill.level}%`}
                        style={{ width: 0 }}
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
