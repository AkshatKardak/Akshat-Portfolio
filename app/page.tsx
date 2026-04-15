'use client'

import { useEffect, useState } from 'react'
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

  useEffect(() => {
    if (!showContent) return
    let lenis: { destroy: () => void; raf: (time: number) => void } | undefined
    let rafId: number

    const init = async () => {
      await new Promise(r => setTimeout(r, 0))
      const el = document.getElementById('main-scroll')
      if (!el) return
      const { default: Lenis } = await import('@studio-freight/lenis')
      lenis = new Lenis({ wrapper: el, content: el, duration: 1.2, smoothWheel: true })
      const raf = (t: number) => { lenis?.raf(t); rafId = requestAnimationFrame(raf) }
      rafId = requestAnimationFrame(raf)
    }

    init()
    return () => { if (rafId) cancelAnimationFrame(rafId); if (lenis) lenis.destroy() }
  }, [showContent])

  return (
    <>
      {showLoader && (
        <Loader onComplete={() => { setShowLoader(false); setShowContent(true) }} />
      )}

      {showContent && (
        <div className="page-wrapper">
          <Sidebar />
          <main id="main-scroll" className="main-scroll">
            <div className="content-area">
              <section id="dashboard" style={{ marginBottom: '80px' }}><Dashboard /></section>
              <section id="projects" style={{ marginBottom: '80px' }}><Projects /></section>
              <section id="skills" style={{ marginBottom: '80px' }}><Skills /></section>
              <section id="experience" style={{ marginBottom: '80px' }}><Experience /></section>
              <section id="contact"><Contact /></section>
            </div>
          </main>
        </div>
      )}
    </>
  )
}
