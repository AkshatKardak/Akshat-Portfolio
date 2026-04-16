"use client";

import { GitHubIcon, ExternalLinkIcon } from "./BrandIcons";

const projects = [
  {
    title: "RentRide",
    subtitle: "Car Rental MERN App",
    description:
      "Full-stack car rental platform with admin dashboard, AI chat assistant, damage report system, and Razorpay payment integration. Built end-to-end with the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Razorpay", "AI Chat"],
    github: "https://github.com/AkshatKardak/car-rental-mern",
    live: null,
    badge: "Primary",
    badgeColor: "var(--accent)",
  },
  {
    title: "UnitedImpact",
    subtitle: "NGO Donation Platform",
    description:
      "Real-time NGO donation platform with Firebase authentication, Razorpay payments, interactive mapping, and a responsive React frontend connecting donors with causes.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Razorpay", "Maps"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Primary",
    badgeColor: "var(--accent)",
  },
  {
    title: "RoastHub",
    subtitle: "AI Tweet Generator",
    description:
      "AI-powered tweet generator and roast tool using the MERN stack. Integrates a language model API to generate creative, witty content on demand.",
    tags: ["MERN Stack", "AI API", "React", "Node.js"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Experiment",
    badgeColor: "var(--violet)",
  },
  {
    title: "Face Recognition Attendance",
    subtitle: "Academic Project",
    description:
      "Python-based automated attendance system using real-time face recognition. Detects and matches student faces against a database, logging attendance automatically.",
    tags: ["Python", "OpenCV", "Face Recognition", "SQLite"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Academic",
    badgeColor: "var(--success)",
  },
  {
    title: "Game Website",
    subtitle: "Animated Game Portal",
    description:
      "A visually polished game portal website with smooth animations, clean UI, and responsive design. Focus on performance and immersive web experience.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Design",
    badgeColor: "var(--warning)",
  },
  {
    title: "CampusDrop",
    subtitle: "Campus Marketplace App",
    description:
      "Flutter mobile app for campus marketplace with Firebase backend, Cloudinary image hosting, and real-time listings for students to buy and sell items.",
    tags: ["Flutter", "Firebase", "Cloudinary", "Dart"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Mobile",
    badgeColor: "#f97316",
  },
];

export default function Projects() {
  return (
    <section className="section" style={{ maxWidth: 1100 }}>
      <div className="section-header">
        <h2>Projects</h2>
        <p>A collection of real-world applications and experiments</p>
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
            }}
          >
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
                  color: project.badgeColor,
                  background: `${project.badgeColor}18`,
                  border: `1px solid ${project.badgeColor}30`,
                  borderRadius: "var(--radius-full)",
                  padding: "2px 10px",
                  whiteSpace: "nowrap",
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
            <div style={{ display: "flex", gap: "var(--space-3)", paddingTop: "var(--space-2)", borderTop: "1px solid var(--border)" }}>
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
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <GitHubIcon size={14} /> GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    fontSize: "var(--text-xs)",
                    color: "var(--accent)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <ExternalLinkIcon size={13} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}