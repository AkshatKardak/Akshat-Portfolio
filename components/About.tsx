"use client";

import { motion } from "framer-motion";
import { aboutMe } from "@/lib/data";
import { MapPin, GraduationCap, Code2, Zap } from "lucide-react";

const highlights = [
  { icon: <Code2 size={15} />, text: "Building full-stack web & mobile products that solve real problems" },
  { icon: <Zap size={15} />, text: "From NGO platforms to AI-integrated rental systems — shipped, not just built" },
  { icon: <GraduationCap size={15} />, text: "Engineering student at Datta Meghe College of Engineering, Mumbai" },
  { icon: <MapPin size={15} />, text: "Mumbai-based, open to freelance, internships & collaborations" },
];

export default function About() {
  return (
    <section className="section w-full">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black tracking-normal">About Me</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start">

        {/* Image card — 2 cols, non-circular editorial format */}
        <motion.div
          className="lg:col-span-2 glass-card rounded-2xl border border-white/5 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Photo — rectangular, top of card */}
          <div className="w-full aspect-[4/5] overflow-hidden">
            <img
              src="/Akshat.png"
              alt="Akshat Kardak"
              width={400}
              height={500}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* Name + role below photo */}
          <div className="p-5 flex flex-col gap-1 border-t border-white/5">
            <h3 className="text-lg font-bold text-text">Akshat Kardak</h3>
            <p className="text-sm text-text-muted font-mono">Full Stack Developer</p>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-text-faint">
              <MapPin size={12} />
              <span>Mumbai, India</span>
            </div>
          </div>
        </motion.div>

        {/* Bio — 3 cols */}
        <motion.div
          className="lg:col-span-3 glass-card rounded-2xl border border-white/5 p-6 flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <p className="text-base text-text-muted leading-relaxed">
            I'm a full-stack developer who builds{" "}
            <span className="text-text font-semibold">production-grade web and mobile applications</span>{" "}
            — not just prototypes. From a real-money NGO donation platform to an AI-powered car rental
            system, I care about products that actually work in the hands of real users.
          </p>

          <p className="text-base text-text-muted leading-relaxed">
            Currently studying engineering at{" "}
            <span className="text-text font-semibold">Datta Meghe College of Engineering, Mumbai</span>,
            while shipping side projects, competing in hackathons, and pushing my stack deeper into
            AI/ML integration, DevOps, and system design.
          </p>

          <p className="text-base text-text-muted leading-relaxed">
            I reach for{" "}
            <span className="text-text font-semibold">Next.js, React, Node.js, Flutter, and FastAPI</span>{" "}
            to build things — and I deploy them on Vercel, Render, and Firebase. I write code that ships,
            not code that sits in a GitHub draft.
          </p>

          {/* Highlights */}
          <ul className="flex flex-col gap-3 pt-4 border-t border-white/6">
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-sm text-text-muted"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 + i * 0.06 }}
              >
                <span className="mt-0.5 text-accent shrink-0">{h.icon}</span>
                <span>{h.text}</span>
              </motion.li>
            ))}
          </ul>

          {/* Resume CTA */}
          <a
            href="/Akshat_Kardak_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-fit flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold
                       border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "rgba(245,158,11,0.1)",
              borderColor: "rgba(245,158,11,0.25)",
              color: "#f59e0b",
            }}
          >
            Download Résumé
          </a>
        </motion.div>

      </div>
    </section>
  );
}