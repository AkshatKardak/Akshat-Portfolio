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
    "Building responsive full-stack apps with React.js, Node.js, Express.js and MongoDB",
    "Integrating AI into real products — Gemini API, Groq API — not just wrappers",
    "Competing in hackathons and deepening system design & REST API architecture knowledge",
  ];

  return (
    <div className="w-full">
      {/* Centered heading */}
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
        {/* LEFT — Akshat.png (formal/portfolio photo) */}
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

        {/* RIGHT — Text card with AKKI.png profile photo + role */}
        <motion.div
          variants={item}
          className="glass-card rounded-2xl border border-white/5 p-7 flex flex-col gap-6"
        >
          {/* Profile photo row — AKKI.png */}
          <div className="flex items-center gap-4">
            <div
              className="rounded-xl overflow-hidden border border-white/10 shrink-0"
              style={{ width: 64, height: 64 }}
            >
              <img
                src="/images/AKKI.png"
                alt="Akshat Kardak casual"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-bold text-text">Akshat Kardak</span>
              <span className="text-xs font-mono" style={{ color: "#f59e0b" }}>Full Stack Developer</span>
              <span className="text-xs text-text-faint">Mumbai, India</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* My Journey — from resume */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-text">My Journey</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              I&apos;m a Computer Science Engineering student at Datta Meghe College of Engineering,
              Navi Mumbai (Mumbai University, 2023–2027, CGPA: 7.47) — skilled in React.js, Node.js,
              Express.js, MongoDB, and MySQL. I build responsive web applications, RESTful APIs, and
              authentication systems end-to-end.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              I&apos;ve shipped a full car rental platform with AI assistance (RentRide), an NGO
              donation system with live Razorpay payments (UnitedImpact), and an AI tweet generator
              (RoastHub) — all live and deployed. I turn real-world problems into working products,
              not just demos.
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
