'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

const projects = [
  {
    number: "01",
    title: "RentRide",
    desc: "Full-stack MERN car rental platform with AI-powered recommendations, Razorpay payments, real-time booking management, damage reporting, and a comprehensive admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay", "Firebase", "JWT"],
    github: "https://github.com/AkshatKardak/car-rental-mern",
    live: "https://rentridefrontend.vercel.app/",
  },
  {
    number: "02",
    title: "UnitedImpact",
    desc: "MERN NGO platform connecting donors, volunteers & NGOs — Razorpay donations, Firebase auth, real-time Socket.IO messaging, map-based campaign discovery & XP achievement system.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "Razorpay", "Leaflet"],
    github: "https://github.com/AkshatKardak/UnitedImpact",
    live: "https://unitedimpact-app.netlify.app",
  },
  {
    number: "03",
    title: "RoastHub",
    desc: "AI-powered savage tweet generator with authentic Indian desi flavour — Bollywood references, cricket banter, viral rating system (Viral Potential, Savage Level, Brutal Factor).",
    tags: ["React", "Node.js", "MongoDB", "GROQ AI", "Framer Motion"],
    github: "https://github.com/AkshatKardak/RoastHub",
    live: "https://roasthubfront.vercel.app",
  },
]

export default function Projects() {
  const scrollRef = useRef<HTMLElement | null>(null)
  const [rootReady, setRootReady] = useState(false)

  useEffect(() => {
    scrollRef.current = document.getElementById('main-content-area')
    setRootReady(true)
  }, [])

  return (
    <div className="py-20 md:py-32">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="font-display text-3xl font-bold md:text-5xl"
          style={{ color: 'var(--color-text)' }}>Projects.</h2>
        <div className="h-[1px] flex-1" style={{ background: 'var(--color-border)' }} />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, root: rootReady ? scrollRef : undefined, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass glass-hover group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-colors"
          >
            {/* Top Accent Line */}
            <div className="absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity group-hover:opacity-100"
              style={{ background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)' }} />

            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-4xl font-bold opacity-10"
                  style={{ color: 'var(--color-text)' }}>
                  {project.number}
                </span>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="transition-colors"
                    style={{ color: 'var(--color-text-muted)' }}>
                    <GithubIcon size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer"
                    className="transition-colors"
                    style={{ color: 'var(--color-text-muted)' }}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-accent"
                style={{ color: 'var(--color-text)' }}>
                {project.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}>
                {project.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {project.tags.map(tag => (
                <span key={tag}
                  className="rounded-md px-2 py-1 font-mono text-[10px]"
                  style={{
                    background: 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                    color: 'var(--color-accent)'
                  }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}