"use client";

import { GitHubIcon, LinkedInIcon, MailIcon } from "./BrandIcons";

const navItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function Sidebar({
  active,
  setActive,
}: {
  active: string;
  setActive: (s: string) => void;
}) {
  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "var(--sidebar-width)",
        height: "100dvh",
        background: "rgba(11, 15, 25, 0.85)",
        borderRight: "1px solid var(--border)",
        backdropFilter: "blur(16px)",
        display: "flex",
        flexDirection: "column",
        padding: "var(--space-6) var(--space-4)",
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          marginBottom: "var(--space-8)",
          paddingLeft: "var(--space-2)",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="AK">
          <rect width="32" height="32" rx="8" fill="var(--accent-dim)" stroke="var(--accent)" strokeWidth="1" />
          <path d="M9 22L14 10H18L23 22" stroke="var(--accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 18H21" stroke="var(--accent)" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
        <div>
          <div style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2 }}>
            Akshat Kardak
          </div>
          <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
            Full Stack Dev
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
                padding: "var(--space-3) var(--space-3)",
                borderRadius: "var(--radius-lg)",
                fontSize: "var(--text-sm)",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "var(--accent)" : "var(--text-muted)",
                background: isActive ? "var(--accent-dim)" : "transparent",
                border: isActive ? "1px solid rgba(79,156,255,0.2)" : "1px solid transparent",
                transition: "all var(--transition-fast)",
                textAlign: "left",
                cursor: "pointer",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.background = "var(--surface-hover)";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                }
              }}
              aria-current={isActive ? "page" : undefined}
            >
              <span style={{ opacity: isActive ? 1 : 0.7 }}>{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Social Links */}
      <div
        style={{
          display: "flex",
          gap: "var(--space-3)",
          paddingLeft: "var(--space-2)",
          paddingTop: "var(--space-6)",
          borderTop: "1px solid var(--border)",
        }}
      >
        {[
          { href: "https://github.com/AkshatKardak", icon: <GitHubIcon size={18} />, label: "GitHub" },
          { href: "https://www.linkedin.com/in/akshatkardak", icon: <LinkedInIcon size={18} />, label: "LinkedIn" },
          { href: "mailto:kardakakshat@gmail.com", icon: <MailIcon size={18} />, label: "Email" },
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: "var(--radius-lg)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
              transition: "all var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(79,156,255,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-dim)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface)";
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </aside>
  );
}