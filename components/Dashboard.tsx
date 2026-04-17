"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personal, roles, stats } from "@/lib/data";
import { 
  ExternalLink, 
  FileDown, 
  Star,
  Users,
  Package
} from "lucide-react";

type GitHubStats = {
  publicRepos: number;
  followers: number;
  totalStars: number;
  error?: string;
};

export default function Dashboard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [ghStats, setGhStats] = useState<GitHubStats | null>(null);

  // Fetch real GitHub stats
  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        setGhStats(data);
      })
      .catch(() => null);
  }, []);

  // Typewriter
  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 0);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, typing, roleIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-center mb-16 min-h-[70vh]">
        {/* Left: Identity */}
        <motion.div 
          className="xl:col-span-3 flex flex-col gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {personal.available && (
            <motion.div variants={item} className="inline-flex items-center gap-2 bg-warning/10 border border-warning/20 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-warning w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-warning shadow-[0_0_8px_var(--color-warning)] animate-pulse" />
              Precision Mode
            </motion.div>
          )}

          <motion.div variants={item}>
            <h1 className="text-4xl md:text-6xl font-black text-text tracking-normal leading-[1.05] mb-4">
              {personal.name.split(" ")[0]}<br/>
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, var(--accent), var(--violet))" }}
              >
                {personal.name.split(" ")[1]}
              </span>
            </h1>
          </motion.div>

          <motion.div variants={item} className="font-mono text-lg md:text-xl text-text-muted min-h-[1.5em] flex items-center">
            <span className="text-accent pr-2">&gt;</span>
            {displayed}
            <span className="w-2 h-6 bg-accent ml-1 animate-blink" />
          </motion.div>

          <motion.p variants={item} className="text-base text-text-muted leading-relaxed max-w-lg">
            Developer at <span className="text-text font-medium">{personal.college}</span>.
            I build focused interfaces and scalable systems with an emphasis on
            <span className="text-warning font-medium"> precision</span>, performance, and clarity.
          </motion.p>

          {/* GitHub Quick Stats */}
          {ghStats && (
            <motion.div variants={item} className="flex gap-4 flex-wrap mt-2">
              {[
                { label: "Repos", value: ghStats.publicRepos, Icon: Package },
                { label: "Stars", value: ghStats.totalStars, Icon: Star },
                { label: "Network", value: ghStats.followers, Icon: Users },
              ].map(({ label, value, Icon }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-border rounded-xl">
                  <Icon size={14} className="text-warning" />
                  <span className="font-mono font-bold text-text">{value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-text-faint">{label}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Actions */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mt-4">
            <button className="btn-primary" data-cursor="interactive">
              <ExternalLink size={18} />
              View Projects
            </button>
            <a href={personal.resumeUrl} download className="btn-ghost" data-cursor="interactive">
              <FileDown size={18} />
              Resume.pdf
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div 
          className="xl:col-span-2 relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-ambient group-hover:opacity-[0.12] group-hover:scale-100" />

          <div className="relative overflow-hidden glass-card hero-portrait-card">
            <div className="hero-portrait-overlay" />
            <Image
              src="/images/Akshat.png"
              alt="Akshat Kardak portrait"
              width={960}
              height={1200}
              priority
              className="hero-portrait-image"
            />
            <div className="hero-portrait-copy">
              <span className="tag">Mumbai, India</span>
              <div>
                <p className="text-[0.72rem] font-mono uppercase tracking-[0.28em] text-text-faint">
                  Eagle Vision
                </p>
                <p className="mt-2 text-base font-semibold text-text">
                  Building with precision and high-level system thinking.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Highlights Grid */}
      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {stats.map((stat) => {
          return (
            <motion.div 
              key={stat.label}
              variants={item}
              className="glass-card stats-card p-6 flex flex-col gap-2 hover:border-accent/20"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <span className="text-xs font-mono inline-flex h-9 w-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent mb-2">
                {stat.icon}
              </span>
              <div className="text-3xl font-black text-accent tracking-normal">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-text-muted">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
