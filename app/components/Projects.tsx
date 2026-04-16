"use client";

import { GitHubIcon, ExternalLinkIcon } from "./BrandIcons";

const projects = [
  {
    title: "RentRide",
    subtitle: "Car Rental MERN App",
    description:
      "Full-stack car rental platform with admin dashboard, AI chat assistant, damage report system, and Razorpay payment integration. Built end-to-end with the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Razorpay", "Firebase"],
    github: "https://github.com/AkshatKardak/car-rental-mern",
    live: "https://rentridefrontend.vercel.app/",
    admin: "https://rentrideadmin.vercel.app/",
    badge: "Primary",
    badgeGrad: "linear-gradient(135deg, #818cf8, #c084fc)",
  },
  {
    title: "UnitedImpact",
    subtitle: "NGO Donation Platform",
    description:
      "Real-time NGO donation platform with Firebase authentication, Razorpay payments, interactive mapping, and a responsive React frontend connecting donors with causes.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Razorpay", "Maps"],
    github: "https://github.com/AkshatKardak",
    live: null,
    admin: null,
    badge: "Primary",
    badgeGrad: "linear-gradient(135deg, #818cf8, #c084fc)",
  },
  {
    title: "RoastHub",
    subtitle: "AI Tweet Generator",
    description:
      "AI-powered tweet generator and roast tool using the MERN stack. Integrates a language model API to generate creative, witty content on demand.",
    tags: ["MERN Stack", "AI API", "React", "Node.js"],
    github: "https://github.com/AkshatKardak",
    live: null,
    admin: null,
    badge: "Experiment",
    badgeGrad: "linear-gradient(135deg, #c084fc, #fb7185)",
  },
  {
    title: "Face Recognition Attendance",
    subtitle: "Python + OpenCV",
    description:
      "Automated attendance system using real-time face recognition. Detects and matches student faces against a database, logging attendance automatically.",
    tags: ["Python", "OpenCV", "Face Recognition", "SQLite"],
    github: "https://github.com/AkshatKardak",
    live: null,
    admin: null,
    badge: "Academic",
    badgeGrad: "linear-gradient(135deg, #34d399, #38bdf8)",
  },
  {
    title: "Game Website",
    subtitle: "Animated Game Portal",
    description:
      "A visually polished game portal with smooth animations, clean UI, and responsive design. Focus on performance and immersive web experience.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/AkshatKardak",
    live: null,
    admin: null,
    badge: "Design",
    badgeGrad: "linear-gradient(135deg, #fbbf24, #fb7185)",
  },
  {
    title: "CampusDrop",
    subtitle: "Flutter Campus Marketplace",
    description:
      "Flutter mobile app for campus marketplace with Firebase backend, Cloudinary image hosting, and real-time listings for students to buy and sell items.",
    tags: ["Flutter", "Firebase", "Cloudinary", "Dart"],
    github: "https://github.com/AkshatKardak",
    live: null,
    admin: null,
    badge: "Mobile",
    badgeGrad: "linear-gradient(135deg, #38bdf8, #818cf8)",
  },
];

export default function Projects() {
  return (
    <section className="section" style={{ maxWidth: 1100 }}>
      <div className="section-header">
        <h2
          style={{
            background: "var(--grad-text)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Projects
        </h2>
        <p>Real-world applications and experiments built from scratch</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
          gap: "var(--space-5)",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="glass-card"
            style={{
              padding: "var(--space-6)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
              animation: `fadeUp 0.5s ${i * 0.07}s ease both`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle gradient top line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: project.badgeGrad,
                borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
              }}
            />

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "var(--space-1)",
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {project.subtitle}
                </span>
              </div>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  color: "#fff",
                  background: project.badgeGrad,
                  borderRadius: "var(--radius-full)",
                  padding: "3px 10px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {project.badge}
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.65, flex: 1 }}>
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                gap: "var(--space-3)",
                paddingTop: "var(--space-3)",
                borderTop: "1px solid var(--border)",
                flexWrap: "wrap",
              }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  fontSize: "var(--text-xs)",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color var(--transition-fast)",
                  fontWeight: 500,
                  padding: "var(--space-1) 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <GitHubIcon size={14} /> GitHub
              </a>

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "var(--space-1) var(--space-3)",
                    borderRadius: "var(--radius-full)",
                    background: "var(--accent-dim)",
                    color: "var(--accent)",
                    border: "1px solid rgba(129,140,248,0.25)",
                    transition: "all var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-dim)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
                  }}
                >
                  <ExternalLinkIcon size={12} /> Live Demo
                </a>
              ) : (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    fontSize: "var(--text-xs)",
                    color: "var(--text-faint)",
                    padding: "var(--space-1) var(--space-3)",
                    borderRadius: "var(--radius-full)",
                    background: "var(--surface-active)",
                    border: "1px solid var(--border)",
                  }}
                >
                  🔒 Private / WIP
                </span>
              )}

              {/* Admin link for RentRide */}
              {project.admin && (
                <a
                  href={project.admin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 500,
                    textDecoration: "none",
                    padding: "var(--space-1) var(--space-3)",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(192,132,252,0.1)",
                    color: "var(--violet)",
                    border: "1px solid rgba(192,132,252,0.2)",
                  }}
                >
                  <ExternalLinkIcon size={12} /> Admin Panel
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}