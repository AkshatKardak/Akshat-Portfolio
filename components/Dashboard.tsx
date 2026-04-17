"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileDown, Github, Layers, Mail, MapPin, Star, Users, Zap } from "lucide-react";
import HeroEnergyPulse from "./HeroEnergyPulse";
import { personal, roles, stats } from "@/lib/data";

type GitHubStats = {
  publicRepos: number;
  followers: number;
  totalStars: number;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

export default function Dashboard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [ghStats, setGhStats] = useState<GitHubStats | null>(null);
  const [count, setCount] = useState({ repos: 0, followers: 0, stars: 0 });

  useEffect(() => {
    fetch("/api/github")
      .then((response) => response.json())
      .then((data) => setGhStats(data))
      .catch(() => null);
  }, []);

  useEffect(() => {
    if (!ghStats) return;

    const targets = {
      repos: ghStats.publicRepos,
      followers: ghStats.followers,
      stars: ghStats.totalStars,
    };
    const duration = 1200;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount({
        repos: Math.round(targets.repos * eased),
        followers: Math.round(targets.followers * eased),
        stars: Math.round(targets.stars * eased),
      });

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [ghStats]);

  useEffect(() => {
    const role = roles[roleIndex];

    if (typing) {
      if (displayed.length < role.length) {
        const timer = window.setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          62
        );
        return () => window.clearTimeout(timer);
      }

      const timer = window.setTimeout(() => setTyping(false), 1900);
      return () => window.clearTimeout(timer);
    }

    if (displayed.length > 0) {
      const timer = window.setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        32
      );
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
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 xl:gap-16 items-start mb-16 min-h-[72vh]">
        <motion.div
          className="xl:col-span-3 flex flex-col gap-7 xl:pr-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {personal.available && (
            <motion.div variants={item} className="inline-flex items-center gap-2 w-fit">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border"
                style={{
                  color: "var(--success)",
                  borderColor: "rgba(34,197,94,0.22)",
                  background: "rgba(34,197,94,0.08)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{
                    background: "var(--success)",
                    boxShadow: "0 0 8px rgba(34,197,94,0.5)",
                  }}
                />
                Open to impactful builds
              </span>
            </motion.div>
          )}

          <motion.div variants={item}>
            <p
              className="text-sm font-mono uppercase tracking-[0.22em] mb-3"
              style={{ color: "var(--text-faint)" }}
            >
              <span style={{ color: "var(--accent)" }}>• </span>
              hello, world
            </p>

            <h1
              className="font-display font-black leading-[1.08] tracking-tight"
              style={{
                fontSize: "clamp(2.6rem, 5vw + 1rem, 5rem)",
                color: "var(--text)",
              }}
            >
              {personal.firstName}{" "}
              <span
                style={{
                  background: "linear-gradient(118deg, var(--accent) 0%, var(--violet) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {personal.lastName}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-sm"
              style={{
                borderColor: "rgba(245,158,11,0.18)",
                background: "rgba(245,158,11,0.06)",
                color: "var(--accent)",
              }}
            >
              <Zap size={13} />
              <span>{displayed}</span>
              <span
                className="animate-blink w-0.5 h-4 rounded-full inline-block"
                style={{ background: "var(--accent)" }}
              />
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="text-base leading-relaxed max-w-lg"
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
          className="xl:col-span-2 flex flex-col gap-5 xl:max-w-[520px] xl:ml-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={slideRight}
            className="hero-portrait-card glass-card relative overflow-hidden"
            style={{ borderRadius: "var(--radius-2xl)" }}
          >
            <HeroEnergyPulse />
            <div className="hero-ambient" />
            <div className="hero-portrait-overlay" />
            <Image
              src={personal.avatar}
              alt={`${personal.firstName} ${personal.lastName}`}
              width={480}
              height={560}
              priority
              className="hero-portrait-image"
            />
            <div className="hero-portrait-copy">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    background: "var(--success)",
                    boxShadow: "0 0 10px rgba(34,197,94,0.6)",
                  }}
                />
                <span
                  className="text-[10px] uppercase tracking-[0.22em] font-bold font-mono"
                  style={{ color: "var(--success)" }}
                >
                  Building · Mumbai
                </span>
              </div>
              <p className="text-xs font-mono" style={{ color: "rgba(254,243,199,0.62)" }}>
                {personal.tagline}
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-3 gap-4">
            {[
              { icon: <Github size={14} />, label: "Repos", value: count.repos, color: "var(--accent)" },
              { icon: <Users size={14} />, label: "Followers", value: count.followers, color: "var(--violet)" },
              { icon: <Star size={14} />, label: "Stars", value: count.stars, color: "var(--warning)" },
            ].map(({ icon, label, value, color }) => (
              <div
                key={label}
                className="stats-card flex flex-col items-center justify-center gap-1.5 py-4 px-2 text-center"
                style={{
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-bold"
                  style={{
                    color,
                    background: `${color}12`,
                    borderColor: `${color}25`,
                  }}
                >
                  {icon}
                </div>
                <div className="text-2xl font-black tracking-normal" style={{ color }}>
                  {value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-text-faint">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="glass-card p-4 border-white/5">
            <p className="text-[10px] uppercase tracking-[0.20em] font-bold font-mono mb-3" style={{ color: "var(--text-faint)" }}>
              <span style={{ color: "var(--accent)" }}>• </span>
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {(personal.techStack ?? []).map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            className="glass-card stats-card p-6 flex flex-col gap-2 hover:border-accent/20"
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <span className="text-xs font-mono inline-flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent mb-2">
              {stat.icon}
            </span>
            <div className="text-3xl font-black text-accent tracking-normal">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-text-muted">
              {stat.label}
            </div>
            {stat.sub && <div className="text-[11px] text-text-faint">{stat.sub}</div>}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
