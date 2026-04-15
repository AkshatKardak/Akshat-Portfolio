'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading'|'reveal'>('loading')

  useEffect(() => {
    const steps = [10, 25, 40, 55, 68, 80, 90, 100]
    let i = 0
    const tick = () => {
      if (i < steps.length) {
        setProgress(steps[i])
        i++
        setTimeout(tick, i < 4 ? 120 : i < 7 ? 160 : 300)
      } else {
        setTimeout(() => setPhase('reveal'), 200)
        setTimeout(() => onComplete(), 1000)
      }
    }
    tick()
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        style={{
          position:'fixed', inset:0, zIndex:9999,
          background:'#080c14',
          display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center',
          gap:32
        }}
        animate={phase === 'reveal' ? { y: '-100%' } : {}}
        transition={{ duration:0.6, ease:[0.76,0,0.24,1] }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity:0, y:16 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5 }}
          style={{ textAlign:'center' }}
        >
          <div style={{
            fontFamily:'Clash Display, sans-serif',
            fontSize:52, fontWeight:700,
            color:'#f1f5f9',
            letterSpacing:'-0.02em',
            lineHeight:1
          }}>
            AK
            <span style={{ color:'#4f9cff' }}>.</span>
          </div>
          <p style={{ fontFamily:'JetBrains Mono, monospace', fontSize:11, color:'#64748b', letterSpacing:'0.15em', textTransform:'uppercase', marginTop:8 }}>
            Portfolio v2.0
          </p>
        </motion.div>

        {/* Progress track */}
        <motion.div
          initial={{ opacity:0, scaleX:0 }}
          animate={{ opacity:1, scaleX:1 }}
          transition={{ delay:0.2 }}
          style={{ width:220 }}
        >
          <div style={{
            height:2, background:'rgba(255,255,255,0.06)',
            borderRadius:2, overflow:'hidden'
          }}>
            <motion.div
              animate={{ width:`${progress}%` }}
              transition={{ ease:'easeOut', duration:0.3 }}
              style={{ height:'100%', background:'#4f9cff', borderRadius:2 }}
            />
          </div>
          <div style={{
            display:'flex', justifyContent:'space-between', marginTop:8,
            fontFamily:'JetBrains Mono, monospace', fontSize:10, color:'#64748b'
          }}>
            <span>Initialising</span>
            <span>{progress}%</span>
          </div>
        </motion.div>

        {/* Status lines */}
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.4 }}
          style={{ fontFamily:'JetBrains Mono, monospace', fontSize:10, color:'#1e293b', letterSpacing:'0.05em' }}
        >
          {progress >= 40 && <motion.p initial={{opacity:0}} animate={{opacity:1}}>✔ Dependencies loaded</motion.p>}
          {progress >= 75 && <motion.p initial={{opacity:0}} animate={{opacity:1}} style={{marginTop:4}}>✔ Components ready</motion.p>}
          {progress === 100 && <motion.p initial={{opacity:0}} animate={{opacity:1}} style={{marginTop:4, color:'#4f9cff'}}>✔ Launch sequence complete</motion.p>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
