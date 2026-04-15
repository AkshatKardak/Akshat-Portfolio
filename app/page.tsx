'use client'

import { useEffect, useState, useRef } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Loader from './components/Loader'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!showContent) return

    let lenis: { destroy: () => void; raf: (time: number) => void } | undefined
    let rafId: number

    const initLenis = async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
      const el = document.getElementById('main-content-area')
      if (!el) return

      const { default: Lenis } = await import('@studio-freight/lenis')
      lenis = new Lenis({
        wrapper: el,
        content: el,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      const raf = (time: number) => {
        lenis?.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    }

    initLenis()
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
    }
  }, [showContent])

  return (
    <div
      className="h-screen overflow-hidden"
      style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}
    >
      {showLoader && (
        <Loader
          onComplete={() => {
            setShowLoader(false)
            setShowContent(true)
          }}
        />
      )}

      {showContent && (
        <div className="flex h-full">
          {/* Sidebar takes fixed 240px, in-flow */}
          <div className="hidden md:flex w-60 shrink-0">
            <Sidebar />
          </div>

          {/* Mobile sidebar (fixed, outside flow) */}
          <div className="md:hidden">
            <Sidebar />
          </div>

          {/* Main scroll area */}
          <main
            ref={mainRef}
            id="main-content-area"
            className="flex-1 h-full overflow-y-auto overflow-x-hidden no-scrollbar relative"
            style={{ background: 'var(--color-bg)' }}
          >
            {/* Background Gradient Orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              <div className="absolute -top-[20%] right-0 w-[50%] h-[50%] rounded-full blur-[120px]"
                style={{ background: 'rgba(79,156,255,0.05)' }} />
              <div className="absolute top-[40%] left-0 w-[40%] h-[40%] rounded-full blur-[120px]"
                style={{ background: 'rgba(167,139,250,0.05)' }} />
            </div>

            {/* Sections */}
            <div className="relative z-10 w-full max-w-5xl mx-auto pb-24 md:pb-10">
              <section id="dashboard" className="px-5 md:px-10 min-h-screen pt-20 md:pt-10 mb-10">
                <Dashboard />
              </section>
              <section id="projects" className="px-5 md:px-10 min-h-screen my-10">
                <Projects />
              </section>
              <section id="skills" className="px-5 md:px-10 min-h-screen my-10">
                <Skills />
              </section>
              <section id="experience" className="px-5 md:px-10 min-h-screen my-10">
                <Experience />
              </section>
              <section id="contact" className="px-5 md:px-10 min-h-[80vh] my-10">
                <Contact />
              </section>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}