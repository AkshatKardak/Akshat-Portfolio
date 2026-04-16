"use client";

const certs = [
  {
    title: "Full Stack Developer",
    issuer: "Certification Authority",
    description: "Comprehensive full-stack development certification covering frontend, backend, and database technologies.",
    color: "var(--accent)",
    icon: "🖥️",
    tags: ["Full Stack", "Web Dev"],
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    description: "Completed a software engineering job simulation, working on real-world engineering tasks and workflows.",
    color: "var(--violet)",
    icon: "⚙️",
    tags: ["Software Engineering", "Simulation"],
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    description: "Hands-on data analytics simulation with Deloitte Australia covering data analysis, visualization, and business insights.",
    color: "#f97316",
    icon: "📊",
    tags: ["Data Analytics", "Deloitte"],
  },
  {
    title: "ReactJS for Beginners",
    issuer: "Simplilearn",
    description: "ReactJS fundamentals certification covering components, hooks, state management, and building modern UIs.",
    color: "var(--success)",
    icon: "⚛️",
    tags: ["React.js", "Frontend"],
  },
  {
    title: "Front-End Software Engineering Simulation",
    issuer: "Skyscanner",
    description: "Front-end engineering simulation with Skyscanner covering component design, accessibility, and modern UI engineering.",
    color: "#a78bfa",
    icon: "✈️",
    tags: ["Frontend", "Skyscanner"],
  },
];

export default function Certifications() {
  return (
    <section className="section" style={{ maxWidth: 1000 }}>
      <div className="section-header">
        <h2>Certifications</h2>
        <p>Professional certifications and learning achievements</p>
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
            }}
          >
            {/* Icon + Badge line */}
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "var(--radius-xl)",
                  background: `${cert.color}15`,
                  border: `1px solid ${cert.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  flexShrink: 0,
                }}
              >
                {cert.icon}
              </div>
              <div>
                <div style={{ fontSize: "var(--text-xs)", color: cert.color, fontWeight: 600 }}>
                  {cert.issuer}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 2 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill={cert.color} aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>Verified</span>
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
                lineHeight: 1.3,
              }}
            >
              {cert.title}
            </h3>

            {/* Description */}
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>
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