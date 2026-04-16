"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personal, roles, stats, codePreview } from "@/lib/data";
import { 
  Terminal, 
  ExternalLink, 
  FileDown, 
  Github,
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
  const [visibleLines, setVisibleLines] = useState(0);
  const [ghStats, setGhStats] = useState<GitHubStats | null>(null);
  const [ghLoading, setGhLoading] = useState(true);

  // Fetch real GitHub stats
  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((data) => {
        setGhStats(data);
        setGhLoading(false);
      })
      .catch(() => setGhLoading(false));
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
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  // Stagger code lines
  useEffect(() => {
    if (visibleLines < codePreview.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 80);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

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
            <motion.div variants={item} className="inline-flex items-center gap-2 bg-success/10 border border-success/20 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-success w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_8px_var(--color-success)] animate-pulse" />
              Available for Hire
            </motion.div>
          )}

          <motion.div variants={item}>
            <h1 className="text-4xl md:text-6xl font-black text-text tracking-tighter leading-[0.9] mb-4">
              {personal.name.split(' ')[0]}<br/>
              <span className="text-accent">{personal.name.split(' ')[1]}</span>
            </h1>
          </motion.div>

          <motion.div variants={item} className="font-mono text-lg md:text-xl text-text-muted min-h-[1.5em] flex items-center">
            <span className="text-accent pr-2">&gt;</span>
            {displayed}
            <span className="w-2 h-6 bg-accent ml-1 animate-blink" />
          </motion.div>

          <motion.p variants={item} className="text-base text-text-muted leading-relaxed max-w-lg">
            Forward-thinking developer at <span className="text-text font-medium">{personal.college}</span>. 
            I architect <span className="text-accent font-medium">high-performance</span> digital experiences with a focus on clean code and user-centric design.
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
                  <Icon size={14} className="text-accent" />
                  <span className="font-mono font-bold text-text">{value}</span>
                  <span className="text-[10px] uppercase tracking-wider text-text-faint">{label}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Actions */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-bg font-bold rounded-xl transition-all hover:-translate-y-1 shadow-lg shadow-accent/20">
              <ExternalLink size={18} />
              View Projects
            </button>
            <a href={personal.resumeUrl} download className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-border text-text font-bold rounded-xl transition-all hover:-translate-y-1">
              <FileDown size={18} />
              Resume.pdf
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Code Environment */}
        <motion.div 
          className="xl:col-span-2 relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
          
          <div className="relative glass-card overflow-hidden border-white/10 group-hover:border-accent/30 transition-colors">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-text-faint">
                <Terminal size={12} />
                akshat.ts
              </div>
            </div>

            {/* Editor Content */}
            <div className="p-6 font-mono text-[13px] leading-relaxed overflow-x-hidden">
              {codePreview.slice(0, visibleLines).map((line) => (
                <div key={line.num} className="flex gap-4">
                  <span className="w-5 text-right text-text-faint/50 select-none text-[10px]">{line.num}</span>
                  <span style={{ color: line.color || "var(--color-text)" }} className="whitespace-pre">
                    {line.text}
                  </span>
                </div>
              ))}
              {visibleLines < codePreview.length && (
                <div className="flex gap-4">
                  <span className="w-5 text-right text-text-faint/50 text-[10px]">{visibleLines + 1}</span>
                  <span className="w-1.5 h-4 bg-accent/50 animate-blink" />
                </div>
              )}
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
        {stats.map((stat, i) => {
          const isGH = stat.label === "GitHub Repos";
          const val = (isGH && ghStats) ? ghStats.publicRepos : stat.value;
          
          return (
            <motion.div 
              key={stat.label}
              variants={item}
              className="glass-card p-6 flex flex-col gap-2 hover:border-accent/20"
            >
              <span className="text-2xl mb-2">{stat.icon}</span>
              <div className="text-3xl font-black text-accent tracking-tighter">
                {ghLoading && isGH ? "..." : val}
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