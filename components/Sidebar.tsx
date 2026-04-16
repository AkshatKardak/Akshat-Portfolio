"use client";

import { motion } from "framer-motion";
import { personal, navItems } from "@/lib/data";
import {
  LayoutDashboard,
  Code2,
  Zap,
  Briefcase,
  Award,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  projects: Code2,
  skills: Zap,
  experience: Briefcase,
  certifications: Award,
  contact: Mail,
};

export default function Sidebar({
  active,
  setActive,
}: {
  active: string;
  setActive: (s: string) => void;
}) {
  return (
    <aside className="hidden md:flex shrink-0 flex-col w-[260px] h-dvh sticky top-0 bg-panel/90 border-r border-border p-6 z-50 overflow-hidden">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-accent-dim border border-accent/20 text-accent cursor-default">
          <span className="relative font-bold text-lg tracking-normal">AK</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-text leading-tight">{personal.name}</span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Personal Portfolio</span>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-1.5 relative">
        {navItems.map((item) => {
          const isActive = active === item.id;
          const Icon = icons[item.id] || Code2;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`sidebar-item group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive ? "text-accent bg-white/5" : "text-text-muted hover:text-text hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-bg"
                  className="sidebar-active-bg"
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                />
              )}
              <Icon size={18} className={`relative z-[1] transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
              <span className={`relative z-[1] text-sm font-medium transition-all ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}>
                {item.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-6 bg-accent rounded-r-full shadow-[0_0_14px_rgba(79,156,255,0.35)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-border flex flex-col gap-6">
        <div className="flex gap-2 justify-between">
          {[
            { Icon: Github, href: personal.github, label: "GitHub" },
            { Icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
            { Icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 hover:-translate-y-1"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="px-2">
          <p className="text-[10px] text-text-faint font-medium tracking-normal">
            Copyright {new Date().getFullYear()} - Handcrafted in Mumbai
          </p>
        </div>
      </div>
    </aside>
  );
}
