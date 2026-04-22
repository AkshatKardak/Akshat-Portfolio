"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

const messages = [
  { text: "loading civicpulse...",     color: "#22c55e" },
  { text: "compiling rentride...",     color: "#f59e0b" },
  { text: "wiring up portfolio...",    color: "#6366f1" },
  { text: "ready. let's go ✦",         color: "#f59e0b" },
];

const stack = ["Next.js", "React", "TypeScript", "Node.js", "MongoDB"];

export default function Loader({ loaded }: { loaded: boolean }) {
  const [lines, setLines] = useState<{ text: string; color: string }[]>([]);
  const [done, setDone] = useState(false);
  const linesRef = useRef<HTMLDivElement>(null);

  // Smooth spring progress
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    const unsub = display.on("change", (v) => setDisplayVal(v));
    return unsub;
  }, [display]);

  useEffect(() => {
    // Drive progress to 100
    const timeout = setTimeout(() => raw.set(100), 200);

    // Typed terminal lines
    let i = 0;
    const typing = setInterval(() => {
      if (i < messages.length) {
        setLines((prev) => [...prev, messages[i]]);
        i++;
        setTimeout(() => {
          linesRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
        }, 50);
      } else {
        clearInterval(typing);
        setTimeout(() => setDone(true), 400);
      }
    }, 520);

    return () => {
      clearTimeout(timeout);
      clearInterval(typing);
    };
  }, [raw]);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          className="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="loader-card"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* TOP ROW */}
            <div className="loader-top">
              <div className="loader-logo">
                <div className="loader-logo-ring">
                  <Image src="/images/AK.png" alt="AK" width={22} height={22} />
                </div>
                <div>
                  <p className="loader-logo-title">Akshat Kardak</p>
                  <p className="loader-logo-subtitle">Full Stack Developer</p>
                </div>
              </div>

              {/* Animated % */}
              <motion.span
                className="font-mono text-sm tabular-nums"
                style={{ color: "var(--accent)" }}
              >
                {displayVal}%
              </motion.span>
            </div>

            {/* HERO TEXT */}
            <div className="loader-hero">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                Built different.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Shipping real products, not prototypes.
              </motion.p>
            </div>

            {/* TERMINAL */}
            <div className="loader-terminal">
              <div className="loader-terminal-head">
                <span className="flex items-center gap-2">
                  <span className="loader-dot red" />
                  <span className="loader-dot yellow" />
                  <span className="loader-dot green" />
                </span>
                <span className="text-xs opacity-40 font-mono">akshat@portfolio ~ %</span>
              </div>

              <div className="loader-lines" ref={linesRef}>
                <AnimatePresence>
                  {lines.map((line, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: line.color }}
                    >
                      <span className="opacity-40 mr-1">$</span>
                      {line.text}
                    </motion.p>
                  ))}
                </AnimatePresence>

                {/* Blinking cursor */}
                {!done && (
                  <motion.span
                    className="loader-cursor"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  >
                    ▌
                  </motion.span>
                )}
              </div>
            </div>

            {/* STACK TAGS — staggered entrance */}
            <motion.div
              className="loader-stack"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } },
              }}
            >
              {stack.map((item) => (
                <motion.span
                  key={item}
                  variants={{
                    hidden: { opacity: 0, scale: 0.85, y: 8 },
                    show: { opacity: 1, scale: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            {/* PROGRESS */}
            <div className="loader-progress">
              <div className="loader-progress-meta">
                <span className="font-mono text-xs opacity-50">boot sequence</span>
                <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                  {displayVal}/100
                </span>
              </div>
              <div className="loader-bar">
                <motion.span
                  style={{ width: `${displayVal}%` }}
                  transition={{ type: "spring", stiffness: 40, damping: 15 }}
                />
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}