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
    // Initial theme check
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    // eslint-disable-next-line
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
    }

    // Intersection Observer for Active Nav
    const observerOptions = {
      root: document.getElementById('main-content-area'), // Watch the scrollable parent
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

    // Give the DOM a tiny bit of time to render sections
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
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -240, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed left-0 top-0 z-50 hidden h-screen w-60 flex-col border-r border-border bg-bg/80 p-6 backdrop-blur-xl md:flex"
      >
        {/* Brand */}
        <div className="mb-10 flex items-center gap-2 px-2">
          <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center font-bold text-white">
            A
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">Akshat.</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.07 }}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-accent/10 text-accent'
                  : 'text-text-muted hover:bg-surface hover:text-text'
              }`}
            >
              {activeTab === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-0 h-6 w-1 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon size={20} className={activeTab === item.id ? 'text-accent' : 'text-text-muted group-hover:text-text'} />
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Footer / Status */}
        <div className="mt-auto space-y-6 pt-6">
          <div className="flex items-center gap-3 px-2">
            <div className="relative h-2 w-2">
              <div className="absolute inset-0 h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></div>
              <div className="relative h-full w-full rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs font-medium text-text-muted">Available for work</span>
          </div>

          <button
            onClick={toggleTheme}
            className="relative flex h-11 w-full items-center justify-between rounded-xl bg-surface px-4 transition-colors hover:bg-white/10"
          >
            <div className="flex items-center gap-2">
              {theme === 'dark' ? (
                <Moon size={18} className="text-violet" />
              ) : (
                <Sun size={18} className="text-amber-500" />
              )}
              <span className="text-xs font-medium uppercase tracking-wider">
                {theme} MODE
              </span>
            </div>
            <motion.div
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              className="rounded-lg bg-border p-1"
            >
              {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
            </motion.div>
          </button>
        </div>
      </motion.aside>

      {/* Mobile Bottom Tab Bar */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="glass fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t pb-safe pt-2 px-2 md:hidden"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center justify-center space-y-1 p-2 ${
              activeTab === item.id ? 'text-accent' : 'text-text-muted transition-colors hover:text-text'
            }`}
          >
            <item.icon size={20} />
            <span className="text-[10px] font-medium">{item.label}</span>
            {activeTab === item.id && (
              <motion.div
                layoutId="mobile-indicator"
                className="absolute bottom-0 h-0.5 w-8 rounded-t-full bg-accent"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
        
        {/* Mobile Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center justify-center space-y-1 p-2 text-text-muted transition-colors hover:text-text"
        >
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          <span className="text-[10px] font-medium">Theme</span>
        </button>
      </motion.div>
    </>
  )
}
