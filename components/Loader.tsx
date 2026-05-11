"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

const bootLines = [
  { prefix: "[SYS]", text: "Initialising runtime environment...", color: "#94a3b8" },
  { prefix: "[NET]", text: "Connecting to portfolio API...",      color: "#38bdf8" },
  { prefix: "[AI] ", text: "Loading project intelligence layer...", color: "#a78bfa" },
  { prefix: "[OK] ", text: "All systems nominal. Ready.",          color: "#22c55e" },
];

export default function Loader({ loaded }: { loaded: boolean }) {
  const [lines, setLines] = useState<typeof bootLines>([]);
  const [bootDone, setBootDone] = useState(false);
  const [entered, setEntered] = useState(false);
  const linesRef = useRef<HTMLDivElement>(null);

  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    const unsub = display.on("change", (v) => setDisplayVal(v));
    return unsub;
  }, [display]);

  useEffect(() => {
    const timeout = setTimeout(() => raw.set(100), 200);
    let i = 0;
    const typing = setInterval(() => {
      if (i < bootLines.length) {
        setLines((prev) => [...prev, bootLines[i]]);
        i++;
        setTimeout(() => {
          linesRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
        }, 50);
      } else {
        clearInterval(typing);
        setTimeout(() => setBootDone(true), 500);
      }
    }, 560);
    return () => { clearTimeout(timeout); clearInterval(typing); };
  }, [raw]);

  // When user clicks ENTER, trigger exit
  const handleEnter = () => setEntered(true);

  return (
    <AnimatePresence>
      {!loaded && !entered && (
        <motion.div
          className="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* CRT scanlines overlay */}
          <div className="loader-scanlines" aria-hidden="true" />

          <motion.div
            className="loader-card"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* LEVEL UP heading */}
            <div className="loader-levelup">
              <motion.h1
                className="loader-levelup-text"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                LEVEL UP
              </motion.h1>
              <motion.p
                className="loader-levelup-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28, duration: 0.45 }}
              >
                Portfolio v2.0 — Loading
              </motion.p>
            </div>

            {/* BOOT TERMINAL */}
            <div className="loader-terminal">
              <div className="loader-terminal-head">
                <span className="flex items-center gap-2">
                  <span className="loader-dot red" />
                  <span className="loader-dot yellow" />
                  <span className="loader-dot green" />
                </span>
                <span className="text-xs opacity-40 font-mono">akshat@portfolio ~ boot</span>
              </div>

              <div className="loader-lines" ref={linesRef}>
                <AnimatePresence>
                  {lines.map((line, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.28 }}
                      className="loader-boot-line"
                    >
                      <span className="loader-boot-prefix" style={{ color: line.color }}>
                        {line.prefix}
                      </span>
                      <span className="loader-boot-text">{line.text}</span>
                    </motion.p>
                  ))}
                </AnimatePresence>
                {!bootDone && (
                  <motion.span
                    className="loader-cursor"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.85, repeat: Infinity }}
                  >▌</motion.span>
                )}
              </div>
            </div>

            {/* GOLD PROGRESS BAR */}
            <div className="loader-progress">
              <div className="loader-progress-meta">
                <span className="font-mono text-xs opacity-40">boot sequence</span>
                <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                  {displayVal}%
                </span>
              </div>
              <div className="loader-bar">
                <motion.span style={{ width: `${displayVal}%` }} />
              </div>
            </div>

            {/* ENTER BUTTON — appears after boot completes */}
            <AnimatePresence>
              {bootDone && (
                <motion.div
                  className="loader-enter-wrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.button
                    className="loader-enter-btn"
                    onClick={handleEnter}
                    animate={{ boxShadow: [
                      "0 0 12px rgba(245,158,11,0.25)",
                      "0 0 28px rgba(245,158,11,0.55)",
                      "0 0 12px rgba(245,158,11,0.25)",
                    ]}}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    ▶ ENTER PORTFOLIO
                  </motion.button>
                  <p className="loader-enter-hint">Press to begin</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
