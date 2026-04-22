"use client";

import { motion } from "framer-motion";
import { aboutMe } from "@/lib/data";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const focused = [
  "Building and shipping full-stack web & mobile apps — RentRide, CivicPulse, CampusDrop",
  "Integrating AI into real products — Gemini API, Groq, scikit-learn, not just wrappers",
  "Competing in hackathons (Quantum Hacks, SIH) and deepening system design knowledge",
];

  return (
    <div className="w-full">
      {/* Centered heading — matches reference */}
      <motion.div
        className="flex flex-col items-center text-center mb-10 gap-2"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-4xl font-black tracking-tight">
          <span style={{ color: "#f59e0b" }}>About</span>{" "}
          <span className="text-text">me</span>
        </h2>
        <p className="text-text-muted text-sm">
  CSE student who builds things that actually ship.
</p>
      </motion.div>

      {/* Two-column layout */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* LEFT — Photo card */}
        <motion.div
          variants={item}
          className="glass-card rounded-2xl border border-white/5 overflow-hidden"
        >
          <img
            src="/images/Akshat.png"
            alt="Akshat Kardak"
            className="w-full h-full object-cover object-top"
            style={{ minHeight: "320px", maxHeight: "480px" }}
          />
        </motion.div>

        {/* RIGHT — Text card */}
        <motion.div
          variants={item}
          className="glass-card rounded-2xl border border-white/5 p-7 flex flex-col gap-6"
        >
          {/* My Journey */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-text">My Journey</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              I&apos;m a third-year CSE student at Datta Meghe College of Engineering, Mumbai —
              but most of what I know, I learned by just building things. Started with Python and
              Java, got obsessed with the web, and haven&apos;t stopped since.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              I&apos;ve shipped a full car rental platform (RentRide — live on Vercel), an NGO
              donation system (UnitedImpact), a campus marketplace in Flutter (CampusDrop), and
              I&apos;m currently building CivicPulse and a Fintech dashboard. I enjoy turning
              real-world problems into working products — not just portfolio pieces.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* What I'm Focused On */}
          <div className="flex flex-col gap-3">
            <h3 className="text-base font-bold text-text">What I&apos;m Focused On</h3>
            <ul className="flex flex-col gap-2.5">
              {focused.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-muted"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  {/* ▶ triangle icon matching reference */}
                  <svg
                    className="mt-0.5 shrink-0"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="#f59e0b"
                  >
                    <polygon points="0,0 12,6 0,12" />
                  </svg>
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resume CTA */}
          <div className="pt-1">
            <a
              href={aboutMe.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "rgba(245,158,11,0.1)",
                borderColor: "rgba(245,158,11,0.25)",
                color: "#f59e0b",
              }}
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}