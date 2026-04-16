"use client";

import { useState } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./BrandIcons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto as fallback
    const mailto = `mailto:kardakakshat@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    window.open(mailto, "_blank");
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="section" style={{ maxWidth: 800 }}>
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Open to internships, collaborations, and interesting opportunities</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "var(--space-8)",
          alignItems: "start",
        }}
      >
        {/* Left: Social Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          {[
            {
              icon: <MailIcon size={20} />,
              label: "Email",
              value: "kardakakshat@gmail.com",
              href: "mailto:kardakakshat@gmail.com",
              color: "var(--accent)",
            },
            {
              icon: <GitHubIcon size={20} />,
              label: "GitHub",
              value: "AkshatKardak",
              href: "https://github.com/AkshatKardak",
              color: "var(--text)",
            },
            {
              icon: <LinkedInIcon size={20} />,
              label: "LinkedIn",
              value: "akshatkardak",
              href: "https://www.linkedin.com/in/akshatkardak",
              color: "#0a66c2",
            },
          ].map(({ icon, label, value, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: "var(--space-4) var(--space-5)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-4)",
                textDecoration: "none",
                color: "var(--text)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-lg)",
                  background: "var(--surface-active)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: color,
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>
              <div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>{label}</div>
                <div style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="glass-card"
          style={{
            padding: "var(--space-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          {["name", "email"].map((field) => (
            <div key={field} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <label
                htmlFor={field}
                style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--text-muted)", textTransform: "capitalize" }}
              >
                {field}
              </label>
              <input
                id={field}
                type={field === "email" ? "email" : "text"}
                required
                value={form[field as "name" | "email"]}
                onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                placeholder={field === "name" ? "Your name" : "your@email.com"}
                style={{
                  background: "var(--surface-active)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-3) var(--space-4)",
                  fontSize: "var(--text-sm)",
                  color: "var(--text)",
                  outline: "none",
                  transition: "border-color var(--transition-fast)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <label htmlFor="message" style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--text-muted)" }}>
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="What would you like to say?"
              style={{
                background: "var(--surface-active)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-3) var(--space-4)",
                fontSize: "var(--text-sm)",
                color: "var(--text)",
                resize: "vertical",
                outline: "none",
                transition: "border-color var(--transition-fast)",
                fontFamily: "var(--font-body)",
                minHeight: 100,
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            {status === "sent" ? (
              <>✅ Message Sent!</>
            ) : (
              <>
                <MailIcon size={16} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}