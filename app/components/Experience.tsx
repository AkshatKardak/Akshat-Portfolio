'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self Employed",
    period: "2023 - Present",
    description: "Developed modern, responsive web applications using React, Next.js, and Node.js for client projects. Focused on UI/UX, performance optimization, and scalable architectures.",
    tech: ["Next.js", "React", "Node.js", "Tailwind CSS", "MongoDB"]
  },
  {
    role: "Frontend Developer Intern",
    company: "Sparkler",
    period: "Jun 2023 - Aug 2023",
    description: "Built dynamic user interfaces and animated marketing pages. Improved Core Web Vitals score by refactoring legacy code and optimizing asset loading.",
    tech: ["React", "GSAP", "Framer Motion", "TypeScript"]
  },
  {
    role: "Technical Team Member",
    company: "TCET Open Source",
    period: "2022 - 2023",
    description: "Contributed to college open-source initiatives. Collaborated with peers to build internal tools and manage technical events.",
    tech: ["JavaScript", "Git", "React", "Express"]
  }
]

export default function Experience() {
  const scrollRef = useRef<HTMLElement | null>(null)
  const [rootReady, setRootReady] = useState(false)

  useEffect(() => {
    scrollRef.current = document.getElementById('main-content-area')
    setRootReady(true)
  }, [])
  return (
    <div className="py-20 md:py-32">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-display text-3xl font-bold text-text md:text-5xl">Experience.</h2>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      <div className="relative border-l border-border pl-6 md:pl-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} scrollRef={scrollRef} rootReady={rootReady} />
        ))}
      </div>
    </div>
  )
}

interface ExperienceData {
  role: string
  company: string
  period: string
  description: string
  tech: string[]
}

function ExperienceCard({ experience, index, scrollRef, rootReady }: { experience: ExperienceData, index: number, scrollRef: { current: HTMLElement | null }, rootReady: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, root: rootReady ? scrollRef : undefined, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-12 relative"
    >
      {/* Timeline Node */}
      <div className="absolute -left-[35px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-bg outline outline-8 outline-bg md:-left-[43px]">
        <div className="h-2 w-2 rounded-full bg-accent" />
      </div>

      <div className="glass glass-hover rounded-2xl p-6 md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-text">{experience.role}</h3>
            <p className="font-medium text-accent">{experience.company}</p>
          </div>
          <span className="font-mono text-sm text-text-muted">{experience.period}</span>
        </div>
        
        <p className="mb-6 text-text-muted leading-relaxed">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech: string, i: number) => (
            <span 
              key={i} 
              className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
