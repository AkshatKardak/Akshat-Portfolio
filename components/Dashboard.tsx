"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personal, roles } from "@/lib/data";
import { FileDown, Github, Layers, Mail, MapPin, Zap } from "lucide-react";
import HeroEnergyPulse from "./HeroEnergyPulse";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55 } },
};

export default function Dashboard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];

    if (typing) {
      if (displayed.length < role.length) {
        const timer = window.setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          58
        );
        return () => window.clearTimeout(timer);
      }

      const timer = window.setTimeout(() => setTyping(false), 1600);
      return () => window.clearTimeout(timer);
    }

    if (displayed.length > 0) {
      const timer = window.setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
      setTyping(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [displayed, typing, roleIndex]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-14 xl:gap-20 items-start min-h-[72vh]">
        <motion.div
          className="xl:col-span-3 flex flex-col gap-7 xl:pr-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {personal.available && (
            <motion.div variants={item} className="inline-flex items-center gap-2 w-fit">
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]"
                style={{
                  color: "var(--success)",
                  borderColor: "rgba(34,197,94,0.22)",
                  background: "rgba(34,197,94,0.08)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "var(--success)",
                    boxShadow: "0 0 8px rgba(34,197,94,0.5)",
                  }}
                />
                Available for work
              </span>
            </motion.div>
          )}

          <motion.div variants={item}>
            <p
              className="mb-3 text-sm font-mono uppercase tracking-[0.22em]"
              style={{ color: "var(--text-faint)" }}
            >
              <span style={{ color: "var(--accent)" }}>&gt; </span>
              about me
            </p>

            <h1
              className="font-display font-black leading-[1.05] tracking-tight"
              style={{
                fontSize: "clamp(2.6rem, 5vw + 1rem, 5rem)",
                color: "var(--text)",
              }}
            >
              {personal.firstName}{" "}
              <span
                style={{
                  background: "linear-gradient(118deg, #f59e0b 0%, #fde047 55%, #fbbf24 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 14px rgba(245,158,11,0.40))",
                }}
              >
                {personal.lastName}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <div
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 font-mono text-sm"
              style={{
                borderColor: "rgba(245,158,11,0.18)",
                background: "rgba(245,158,11,0.06)",
                color: "var(--accent)",
              }}
            >
              <Zap size={13} />
              <span>{displayed}</span>
              <span
                className="animate-blink inline-block h-4 w-0.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-lg text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {personal.bio}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 text-sm"
            style={{ color: "var(--text-faint)" }}
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={13} style={{ color: "var(--accent)" }} />
              {personal.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} style={{ color: "var(--accent)" }} />
              {personal.email}
            </span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileDown size={15} />
              Download Resume
            </a>
            <a href="#projects" className="btn-ghost">
              <Layers size={15} />
              View Projects
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={15} />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="xl:col-span-2 flex justify-end"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={slideRight}
            className="hero-portrait-card glass-card relative w-full max-w-[440px] overflow-hidden"
            style={{ borderRadius: "var(--radius-2xl)" }}
          >
            <HeroEnergyPulse />
            <div className="hero-ambient" />
            <div className="hero-portrait-overlay" />
            <Image
              src={personal.avatar}
              alt={`${personal.firstName} ${personal.lastName}`}
              width={420}
              height={520}
              priority
              className="hero-portrait-image object-cover object-top rounded-xl"
              style={{
                maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
              }}
            />
            <div className="hero-portrait-copy">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: "var(--success)",
                    boxShadow: "0 0 10px rgba(34,197,94,0.6)",
                  }}
                />
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: "var(--success)" }}
                >
                  {personal.name}
                </span>
              </div>
              <p
                className="text-xs font-mono"
                style={{ color: "rgba(237,224,192,0.58)" }}
              >
                Mumbai, India · Full Stack Developer
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}