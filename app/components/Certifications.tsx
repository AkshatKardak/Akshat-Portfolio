"use client";

const certs = [
  {
    title: "Full Stack Developer",
    issuer: "Udemy",
    description:
      "Comprehensive full-stack development certification covering frontend, backend, and database technologies from fundamentals to deployment.",
    tags: ["Full Stack", "Web Dev", "JavaScript"],
    logoSrc: "https://cdn.simpleicons.org/udemy/A435F0",
    logoAlt: "Udemy",
    logoBg: "rgba(164, 53, 240, 0.12)",
    logoBorder: "rgba(164, 53, 240, 0.25)",
    color: "#A435F0",
    year: "2024",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    description:
      "Completed a software engineering job simulation, working on real-world engineering tasks and workflows used at top tech companies.",
    tags: ["Software Engineering", "Simulation", "Forage"],
    logoSrc: "https://cdn.simpleicons.org/forage/7ED321",
    logoAlt: "Forage",
    logoBg: "rgba(126, 211, 33, 0.10)",
    logoBorder: "rgba(126, 211, 33, 0.22)",
    color: "#7ED321",
    year: "2024",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    description:
      "Hands-on data analytics simulation with Deloitte Australia covering data analysis, visualization, and deriving business insights from complex datasets.",
    tags: ["Data Analytics", "Deloitte", "Business Insights"],
    // Deloitte uses a custom green — use their brand color with a D icon
    logoSrc: null,
    logoSvg: (
      <svg viewBox="0 0 48 48" width="28" height="28" fill="none">
        <rect width="48" height="48" rx="8" fill="#86BC25" fillOpacity="0.15" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="#86BC25">D</text>
      </svg>
    ),
    logoAlt: "Deloitte",
    logoBg: "rgba(134, 188, 37, 0.10)",
    logoBorder: "rgba(134, 188, 37, 0.22)",
    color: "#86BC25",
    year: "2024",
  },
  {
    title: "ReactJS for Beginners",
    issuer: "Simplilearn",
    description:
      "ReactJS fundamentals certification covering components, hooks, state management, and building modern SPAs with best practices.",
    tags: ["React.js", "Frontend", "Hooks"],
    logoSrc: "https://cdn.simpleicons.org/simplilearn/FF7F00",
    logoAlt: "Simplilearn",
    logoBg: "rgba(255, 127, 0, 0.10)",
    logoBorder: "rgba(255, 127, 0, 0.22)",
    color: "#FF7F00",
    year: "2024",
  },
  {
    title: "Front-End Software Engineering Simulation",
    issuer: "Skyscanner",
    description:
      "Front-end engineering job simulation with Skyscanner covering component design, accessibility standards, and modern UI engineering patterns.",
    tags: ["Frontend", "Accessibility", "UI Engineering"],
    logoSrc: "https://cdn.simpleicons.org/skyscanner/0770E3",
    logoAlt: "Skyscanner",
    logoBg: "rgba(7, 112, 227, 0.10)",
    logoBorder: "rgba(7, 112, 227, 0.22)",
    color: "#0770E3",
    year: "2024",
  },
];

export default function Certifications() {
  return (
    <section className="section" style={{ maxWidth: 1000 }}>
      <div className="section-header">
        <h2
          style={{
            background: "var(--grad-text)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Certifications
        </h2>
        <p>Professional certifications and verified learning achievements</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gap: "var(--space-5)",
        }}
      >
        {certs.map((cert, i) => (
          <div
            key={cert.title}
            className="glass-card"
            style={{
              padding: "var(--space-6)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
              animation: `fadeUp 0.5s ${i * 0.08}s ease both`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gradient top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(90deg, ${cert.color}, transparent)`,
              }}
            />

            {/* Logo + Issuer row */}
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--radius-xl)",
                  background: cert.logoBg,
                  border: `1px solid ${cert.logoBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  padding: 10,
                }}
              >
                {cert.logoSrc ? (
                  <img
                    src={cert.logoSrc}
                    alt={cert.logoAlt}
                    width={28}
                    height={28}
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                  />
                ) : (
                  cert.logoSvg
                )}
              </div>

              <div>
                <div
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: 700,
                    color: cert.color,
                    lineHeight: 1.2,
                  }}
                >
                  {cert.issuer}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-1)",
                    marginTop: 3,
                  }}
                >
                  {/* Verified checkmark */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={cert.color} aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke={cert.color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>
                    Verified · {cert.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-base)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.35,
              }}
            >
              {cert.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                flex: 1,
              }}
            >
              {cert.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
              {cert.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}