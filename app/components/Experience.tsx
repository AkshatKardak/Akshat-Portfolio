'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Building2 } from 'lucide-react'

const experiences = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self Employed',
    period: '2023 – Present',
    description: 'Developed modern, responsive web applications using React, Next.js, and Node.js. Focused on UI/UX, performance optimization, and scalable architectures.',
    tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    color: 'var(--color-accent)',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Sparkler',
    period: 'Jun 2023 – Aug 2023',
    description: 'Built dynamic UIs and animated marketing pages. Improved Core Web Vitals by refactoring legacy code and optimizing asset loading pipelines.',
    tech: ['React', 'GSAP', 'Framer Motion', 'TypeScript'],
    color: 'var(--color-violet)',
  },
  {
    role: 'Technical Team Member',
    company: 'TCET Open Source',
    period: '2022 – 2023',
    description: 'Contributed to college open-source initiatives. Collaborated to build internal tools and managed technical events.',
    tech: ['JavaScript', 'Git', 'React', 'Express'],
    color: 'var(--color-success)',
  },
]

export default function Experience() {
  const scrollRef = useRef<HTMLElement | null>(null)
  const [rootReady, setRootReady] = useState(false)

  useEffect(() => {
    scrollRef.current = document.getElementById('main-content-area')
    setRootReady(true)
  }, [])

  return (
    <div className="py-20 md:py-28">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-display text-3xl font-bold md:text-5xl"
          style={{ color: 'var(--color-text)' }}>Experience.</h2>
        <div className="section-line" />
      </div>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            index={index}
            scrollRef={scrollRef}
            rootReady={rootReady}
          />
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ experience, index, scrollRef, rootReady }: {
  experience: typeof experiences[0]
  index: number
  scrollRef: React.MutableRefObject<HTMLElement | null>
  rootReady: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    root: rootReady ? scrollRef : undefined,
    margin: '-60px'
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = experience.color
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)'
      }}
    >
      {/* Left color accent */}
      <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: experience.color }} />

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          {/* Role */}
          <h3 className="mb-1 text-lg font-bold" style={{ color: 'var(--color-text)' }}>
            {experience.role}
          </h3>

          {/* Company + Period */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-sm font-medium"
              style={{ color: experience.color }}>
              <Building2 size={13} />
              {experience.company}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-xs"
              style={{ color: 'var(--color-text-muted)' }}>
              <Calendar size={12} />
              {experience.period}
            </span>
          </div>

          <p className="mb-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            {experience.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {experience.tech.map(t => (
              <span key={t}
                className="rounded-full px-3 py-0.5 font-mono text-xs"
                style={{
                  background: `${experience.color}12`,
                  color: experience.color,
                  border: `1px solid ${experience.color}28`
                }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}