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
  Linkedin 
} from "lucide-react";

const icons: Record<string, any> = {
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
    <aside className="hidden md:flex flex-col w-[260px] h-dvh sticky top-0 bg-surface/40 backdrop-blur-2xl border-r border-border p-6 z-50 overflow-hidden">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-accent-dim border border-accent/20 text-accent group cursor-default">
          <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative font-bold text-lg tracking-tighter">AK</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-text leading-tight">{personal.name}</span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Personal Portfolio</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1.5 relative">
        {navItems.map((item) => {
          const isActive = active === item.id;
          const Icon = icons[item.id] || Code2;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "text-accent" 
                  : "text-text-muted hover:text-text hover:bg-white/5"
              }`}
            >
              <Icon size={18} className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
              <span className={`text-sm font-medium transition-all ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}>
                {item.label}
              </span>

              {/* Active Pill Indicator */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-6 bg-accent rounded-r-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Socials & Footer */}
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
          <p className="text-[10px] text-text-faint font-medium tracking-tight">
            © {new Date().getFullYear()} • Handcrafted in Mumbai
          </p>
        </div>
      </div>
    </aside>
  );
}