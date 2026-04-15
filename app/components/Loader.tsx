'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsExiting(true), 500)
          return 100
        }
        return prev + 1
      })
    }, 20) // 100 * 20ms = 2000ms

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        onComplete()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isExiting, onComplete])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0f19] text-[#e2e8f0]"
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* SVG Geometric Logo */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              className="mb-4"
            >
              <motion.path
                d="M20 20 L50 80 L80 20"
                fill="none"
                stroke="#4f9cff"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M50 80 L50 20"
                fill="none"
                stroke="#4f9cff"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </svg>

            {/* Typewriter Text */}
            <div className="w-[200px] text-center">
              <p className="typewriter font-mono text-sm uppercase tracking-[0.2em] text-[#4f9cff]">
                initializing portfolio...
              </p>
            </div>

            {/* Progress Section */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-[2px] w-[240px] overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-[#4f9cff]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <span className="font-mono text-xs tabular-nums text-[#64748b]">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
