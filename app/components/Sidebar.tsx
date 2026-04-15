'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Code2,
  Cpu,
  Briefcase,
  Mail,
  Sun,
  Moon
} from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail }
]

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
    }

    const observerOptions = {
      root: document.getElementById('main-content-area'),
      rootMargin: '-50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id)
        }
      })
    }, observerOptions)

    setTimeout(() => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id)
        if (element) observer.observe(element)
      })
    }, 100)

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const scrollToSection = (id: string) => {
    const scroller = document.getElementById('main-content-area')
    const element = document.getElementById(id)
    if (scroller && element) {
      scroller.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* ── Desktop Sidebar — in-flow, NOT fixed ── */}
      <motion.aside
        initial={{ x: -240, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="hidden md:flex h-screen w-60 shrink-0 flex-col p-6 backdrop-blur-xl"
        style={{
          background: 'var(--color-bg)',
          borderRight: '1px solid var(--color-border)',
          position: 'sticky',
          top: 0,
        }}
      >
        {/* Brand */}
        <div className="mb-10 flex items-center gap-2 px-2">
          <div
            className="h-8 w-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
            style={{ background: 'var(--color-accent)' }}
          >
            A
          </div>
          <span className="font-display text-xl font-semibold tracking-tight"
            style={{ color: 'var(--color-text)' }}>
            Akshat.
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.07 }}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all"
              style={{
                background: activeTab === item.id ? 'rgba(79,156,255,0.1)' : 'transparent',
                color: activeTab === item.id ? 'var(--color-accent)' : 'var(--color-text-muted)',
              }}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-0 h-6 w-1 rounded-full"
                  style={{ background: 'var(--color-accent)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon
                size={18}
                style={{
                  color: activeTab === item.id
                    ? 'var(--color-accent)'
                    : 'var(--color-text-muted)'
                }}
              />
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-auto space-y-4 pt-6">
          {/* Available for work */}
          <div className="flex items-center gap-3 px-2">
            <div className="relative h-2 w-2 shrink-0">
              <div className="absolute inset-0 h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <div className="relative h-full w-full rounded-full bg-green-500" />
            </div>
            <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
              Available for work
            </span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-11 w-full items-center justify-between rounded-xl px-4 transition-all"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div className="flex items-center gap-2">
              {theme === 'dark' ? (
                <Moon size={16} style={{ color: 'var(--color-violet)' }} />
              ) : (
                <Sun size={16} className="text-amber-400" />
              )}
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {theme} MODE
              </span>
            </div>
            <motion.div
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
              className="rounded-md p-1"
              style={{ background: 'var(--color-border)' }}
            >
              {theme === 'dark'
                ? <Moon size={12} style={{ color: 'var(--color-text-muted)' }} />
                : <Sun size={12} style={{ color: 'var(--color-text-muted)' }} />
              }
            </motion.div>
          </button>
        </div>
      </motion.aside>

      {/* ── Mobile Bottom Tab Bar — fixed ── */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around pt-2 pb-3 px-2 md:hidden backdrop-blur-xl"
        style={{
          background: 'var(--color-bg)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative flex flex-col items-center justify-center gap-1 p-2 transition-colors"
            style={{
              color: activeTab === item.id
                ? 'var(--color-accent)'
                : 'var(--color-text-muted)'
            }}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
            {activeTab === item.id && (
              <motion.div
                layoutId="mobile-indicator"
                className="absolute -top-0.5 h-0.5 w-8 rounded-b-full"
                style={{ background: 'var(--color-accent)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}

        {/* Mobile Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center justify-center gap-1 p-2 transition-colors"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {theme === 'dark'
            ? <Moon size={20} />
            : <Sun size={20} />
          }
          <span className="text-[10px] font-medium">Theme</span>
        </button>
      </motion.div>
    </>
  )
}