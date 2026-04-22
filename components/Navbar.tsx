"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personal, navItems } from "@/lib/data";
import {
  LayoutDashboard,
  UserRound,
  Code2,
  Zap,
  Briefcase,
  Award,
  Mail,
  Linkedin,
} from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  home: LayoutDashboard,
  about: UserRound,
  projects: Code2,
  skills: Zap,
  experience: Briefcase,
  certifications: Award,
  contact: Mail,
};

export default function Navbar({
  active,
  setActive,
}: {
  active: string;
  setActive: (s: string) => void;
}) {
  return (
    <header className="top-navbar">
      <div className="top-navbar-inner">
        <button
          type="button"
          onClick={() => setActive("home")}
          className="top-navbar-brand"
          aria-label="Go to home"
        >
          <div className="top-navbar-mark">
            <Image
              src="/images/AK27.png"
              alt="AK logo"
              width={44}
              height={44}
              className="top-navbar-mark-image"
            />
            </div>
        </button>

        <nav className="top-navbar-nav" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = active === item.id;
            const Icon = icons[item.id] || Code2;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}   
                className={`sidebar-item top-navbar-link ${isActive ? "top-navbar-link-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-bg"
                    className="sidebar-active-bg"
                    transition={{ type: "spring", stiffness: 280, damping: 30 }}
                  />
                )}
                <Icon size={16} className="relative z-[1] shrink-0" />
                <span className="relative z-[1] whitespace-nowrap text-[0.82rem] font-semibold">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="top-navbar-socials">
          {[
            { Icon: GitHubIcon, href: personal.github, label: "GitHub" },
            { Icon: Linkedin,   href: personal.linkedin, label: "LinkedIn" },
            { Icon: Mail,       href: `mailto:${personal.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="top-navbar-social"
              aria-label={label}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}