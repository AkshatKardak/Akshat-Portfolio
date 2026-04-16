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
}"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return <Loader />;

  return (
    <>
      {/* Gradient Mesh Background */}
      <div className="mesh-bg">
        <div className="mesh-blob-3" />
      </div>

      {/* Cursor Glow */}
      <CursorGlow />

      <div
        style={{
          display: "flex",
          minHeight: "100dvh",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Sidebar */}
        <Sidebar active={activeSection} setActive={setActiveSection} />

        {/* Main Content */}
        <main
          style={{
            flex: 1,
            marginLeft: "var(--sidebar-width)",
            overflowY: "auto",
            height: "100dvh",
          }}
          id="main-content"
        >
          {activeSection === "dashboard" && <Dashboard />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "skills" && <Skills />}
          {activeSection === "experience" && <Experience />}
          {activeSection === "certifications" && <Certifications />}
          {activeSection === "contact" && <Contact />}
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav
        style={{
          display: "none",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(11, 15, 25, 0.92)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid var(--border)",
          padding: "var(--space-2) 0",
          zIndex: 100,
        }}
        className="mobile-bottom-nav"
      >
        {["dashboard", "projects", "skills", "experience", "contact"].map((s) => (
          <button
            key={s}
            onClick={() => setActiveSection(s)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "var(--space-1)",
              fontSize: "var(--text-xs)",
              color: activeSection === s ? "var(--accent)" : "var(--text-muted)",
              padding: "var(--space-2)",
              textTransform: "capitalize",
              transition: "color var(--transition-fast)",
            }}
          >
            {s.slice(0, 3)}
          </button>
        ))}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          main { margin-left: 0 !important; padding-bottom: 64px; }
          .mobile-bottom-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}