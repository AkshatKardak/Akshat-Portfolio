'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, Code2, Cpu, Briefcase, Mail, Sun, Moon } from 'lucide-react'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'projects',  label: 'Projects',  icon: Code2 },
  { id: 'skills',    label: 'Skills',    icon: Cpu },
  { id: 'experience',label: 'Experience',icon: Briefcase },
  { id: 'contact',   label: 'Contact',   icon: Mail },
]

export default function Sidebar() {
  const [active, setActive] = useState('dashboard')
  const [theme, setTheme] = useState<'dark'|'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark'|'light'|null
    const initial = saved ?? (window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark')
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  useEffect(() => {
    const scroller = document.getElementById('main-scroll')
    if (!scroller) return

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { root: scroller, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    const timer = setTimeout(() => {
      navItems.forEach(item => {
        const el = document.getElementById(item.id)
        if (el) observer.observe(el)
      })
    }, 200)

    return () => { clearTimeout(timer); observer.disconnect() }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  const scrollTo = (id: string) => {
    const scroller = document.getElementById('main-scroll')
    const el = document.getElementById(id)
    if (scroller && el) scroller.scrollTo({ top: el.offsetTop - 32, behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop */}
      <motion.aside
        className="sidebar"
        initial={{ x: -240, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Brand */}
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:36, padding:'0 4px' }}>
          <div style={{
            width:34, height:34, borderRadius:10,
            background:'var(--accent)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:'var(--font-display)', fontWeight:700, fontSize:16, color:'#fff'
          }}>A</div>
          <span style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:700, color:'var(--text)' }}>
            Akshat.
          </span>
        </div>

        {/* Nav */}
        <nav style={{ flex:1, display:'flex', flexDirection:'column', gap:4 }}>
          {navItems.map((item, i) => {
            const isActive = active === item.id
            return (
              <motion.button
                key={item.id}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.06 }}
              >
                {isActive && (
                  <motion.div className="nav-pill" layoutId="nav-pill"
                    transition={{ type:'spring', stiffness:300, damping:30 }} />
                )}
                <item.icon size={17} />
                {item.label}
              </motion.button>
            )
          })}
        </nav>

        {/* Footer */}
        <div style={{ marginTop:'auto', display:'flex', flexDirection:'column', gap:14 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10, padding:'0 6px' }}>
            <span style={{ position:'relative', width:8, height:8 }}>
              <span style={{
                position:'absolute', inset:0, borderRadius:'50%',
                background:'var(--success)', opacity:0.6,
                animation:'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'
              }} />
              <span style={{ position:'relative', display:'block', width:8, height:8, borderRadius:'50%', background:'var(--success)' }} />
            </span>
            <span style={{ fontSize:12, color:'var(--text-muted)', fontWeight:500 }}>Available for work</span>
          </div>

          <button
            onClick={toggleTheme}
            style={{
              display:'flex', alignItems:'center', justifyContent:'space-between',
              padding:'10px 14px', borderRadius:12, width:'100%',
              background:'var(--surface-2)', border:'1px solid var(--border)',
              cursor:'pointer', transition:'border-color 0.2s'
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hi)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              {theme === 'dark'
                ? <Moon size={15} color="var(--violet)" />
                : <Sun size={15} color="#f59e0b" />
              }
              <span style={{ fontSize:11, fontFamily:'var(--font-mono)', color:'var(--text-muted)', letterSpacing:'0.08em', textTransform:'uppercase' }}>
                {theme} mode
              </span>
            </div>
            <motion.div
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              style={{ padding:4, borderRadius:6, background:'var(--border-hi)', display:'flex' }}
            >
              {theme === 'dark' ? <Moon size={12} color="var(--text-muted)" /> : <Sun size={12} color="var(--text-muted)" />}
            </motion.div>
          </button>
        </div>
      </motion.aside>

      {/* Mobile */}
      <motion.div
        className="mobile-bar"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ display:'none' }}
      >
        {navItems.map(item => (
          <button
            key={item.id}
            className={`mobile-nav-btn ${active === item.id ? 'active' : ''}`}
            onClick={() => scrollTo(item.id)}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
        <button className="mobile-nav-btn" onClick={toggleTheme}>
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          <span>Theme</span>
        </button>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .sidebar { display: none !important; }
          .mobile-bar { display: flex !important; }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </>
  )
}
