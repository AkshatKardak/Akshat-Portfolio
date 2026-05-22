"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const bootLines = [
  { prefix: "[SYS]", text: "Initialising runtime environment...", color: "#94a3b8" },
  { prefix: "[NET]", text: "Connecting to portfolio API...",      color: "#38bdf8" },
  { prefix: "[AI] ", text: "Loading project intelligence layer...", color: "#a78bfa" },
  { prefix: "[OK] ", text: "All systems nominal. Ready.",          color: "#22c55e" },
];

function Particle({ delay, x, size }: { delay: number; x: number; size: number }) {
  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: "-10px",
        left: `${x}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(245,158,11,0.55)",
        boxShadow: "0 0 12px 4px rgba(245,158,11,0.35)",
        pointerEvents: "none",
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 0.9, 0], y: -420 }}
      transition={{
        duration: 3.5 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

interface LoaderProps {
  loaded: boolean;
  onEnter?: () => void;
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  delay: i * 0.28,
  x: 5 + (i * 5.5) % 92,
  size: 3 + (i % 4),
}));

export default function Loader({ loaded, onEnter }: LoaderProps) {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const [lines, setLines] = useState<typeof bootLines>([]);
  const linesRef    = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mountedRef  = useRef(true);

  const raw     = useMotionValue(0);
  const spring  = useSpring(raw, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [pct, setPct] = useState(0);

  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);

  useEffect(() => {
    const unsub = display.on("change", (v) => { if (mountedRef.current) setPct(v); });
    return unsub;
  }, [display]);

  useEffect(() => {
    const t = setTimeout(() => { if (mountedRef.current) setPhase(1); }, 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== 1) return;
    const timeout = setTimeout(() => raw.set(100), 200);
    let i = 0;
    intervalRef.current = setInterval(() => {
      if (!mountedRef.current) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }
      if (i < bootLines.length) {
        const line = bootLines[i];
        if (line) setLines((prev) => [...prev, line]);
        i++;
        setTimeout(() => {
          linesRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
        }, 50);
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTimeout(() => { if (mountedRef.current) setPhase(2); }, 480);
      }
    }, 520);
    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase, raw]);

  const handleEnter = () => {
    setPhase(3);
    setTimeout(() => onEnter?.(), 680);
  };

  const isVisible = phase < 3;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(14px)" }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Ambient particles */}
          <div className="loader-particles" aria-hidden="true">
            {PARTICLES.map((p) => (
              <Particle key={p.id} delay={p.delay} x={p.x} size={p.size} />
            ))}
          </div>

          {/* CRT scanlines */}
          <div className="loader-scanlines" aria-hidden="true" />

          {/* Main card */}
          <motion.div
            className="loader-card"
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* LOGO / NAME REVEAL */}
            <div className="loader-hero">

              {/* Profile photo — AK27.png */}
              <motion.div
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2.5px solid rgba(245,158,11,0.55)",
                  boxShadow: "0 0 22px rgba(245,158,11,0.35)",
                  margin: "0 auto 12px",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/AK27.png"
                  alt="Akshat Kardak"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </motion.div>

              <motion.h1
                className="loader-name"
                initial={{ opacity: 0, y: 14, letterSpacing: "0.35em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.12em" }}
                transition={{ delay: 0.22, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                AKSHAT KARDAK
              </motion.h1>

              <motion.p
                className="loader-role"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48, duration: 0.45 }}
              >
                Full&#8209;Stack Developer &middot; AI Enthusiast &middot; Builder
              </motion.p>

              <motion.div
                className="loader-rule"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            {/* TERMINAL (phase ≥ 1) */}
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  className="loader-terminal"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.38 }}
                >
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
                      {lines.filter(Boolean).map((line, idx) => (
                        <motion.p
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.26 }}
                          className="loader-boot-line"
                        >
                          <span className="loader-boot-prefix" style={{ color: line.color }}>
                            {line.prefix}
                          </span>
                          <span className="loader-boot-text">{line.text}</span>
                        </motion.p>
                      ))}
                    </AnimatePresence>
                    {phase === 1 && (
                      <motion.span
                        className="loader-cursor"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.85, repeat: Infinity }}
                      >&#9612;</motion.span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* PROGRESS BAR */}
            {phase >= 1 && (
              <div className="loader-progress">
                <div className="loader-progress-meta">
                  <span className="font-mono text-xs opacity-40">boot sequence</span>
                  <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                    {pct}%
                  </span>
                </div>
                <div className="loader-bar">
                  <motion.span style={{ width: `${pct}%` }} />
                </div>
              </div>
            )}

            {/* GET STARTED CTA (phase 2) */}
            <AnimatePresence>
              {phase === 2 && (
                <motion.div
                  className="loader-enter-wrap"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.button
                    className="loader-enter-btn"
                    onClick={handleEnter}
                    animate={{
                      boxShadow: [
                        "0 0 14px rgba(245,158,11,0.20), 0 0 0 0 rgba(245,158,11,0)",
                        "0 0 34px rgba(245,158,11,0.60), 0 0 0 8px rgba(245,158,11,0.07)",
                        "0 0 14px rgba(245,158,11,0.20), 0 0 0 0 rgba(245,158,11,0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span className="loader-enter-arrow">&#9654;</span>
                    <span>Get Started</span>
                  </motion.button>
                  <p className="loader-enter-hint">Click to enter the portfolio</p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
