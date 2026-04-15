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
      // Wait for next tick to ensure 
      // mainRef is attached to DOM
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
    <div className="flex h-screen overflow-hidden bg-bg text-text transition-colors duration-300">
      {showLoader && (
        <Loader 
          onComplete={() => {
            setShowLoader(false)
            setShowContent(true)
          }} 
        />
      )}
      
      {showContent && (
        <div className="flex w-full h-full relative">
          <Sidebar />
          <main 
            ref={mainRef} 
            id="main-content-area" 
            className="w-full md:w-[calc(100%-15rem)] h-full overflow-y-auto overflow-x-hidden md:ml-60 no-scrollbar relative scroll-smooth bg-bg"
          >
            {/* Background Gradient Orbs */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden md:ml-60">
              <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]" />
              <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-violet/5 blur-[120px]" />
            </div>

            {/* Sections */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto pb-24 md:pb-10">
              <section id="dashboard" className="px-5 md:px-10 min-h-screen pt-20 md:pt-10 mb-10"><Dashboard /></section>
              <section id="projects" className="px-5 md:px-10 min-h-screen my-10"><Projects /></section>
              <section id="skills" className="px-5 md:px-10 min-h-screen my-10"><Skills /></section>
              <section id="experience" className="px-5 md:px-10 min-h-screen my-10"><Experience /></section>
              <section id="contact" className="px-5 md:px-10 min-h-[80vh] my-10"><Contact /></section>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}
