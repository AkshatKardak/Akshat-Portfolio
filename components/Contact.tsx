"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, "_blank");
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "kardakakshat@gmail.com",
      href: `mailto:${personal.email}`,
      color: "#f59e0b",
    },
    {
      icon: GitHubIcon,
      label: "GitHub",
      value: "github.com/AkshatKardak",
      href: personal.github,
      color: "var(--text)",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/akshatkardak",
      href: personal.linkedin,
      color: "#0a66c2",
    },
  ];

  return (
    <div className="w-full">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black tracking-normal flex items-center gap-3">
          <Mail className="text-accent" />
          Get In Touch
        </h2>
        <p className="text-text-muted">
          Open to internship opportunities, freelance work, and interesting collabs.
          Drop a message and I&apos;ll get back to you.
        </p>

        {/* Availability badge */}
        <div className="flex items-center gap-2 mt-2">
          <span
            className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border"
            style={{
              background: "rgba(34,197,94,0.08)",
              borderColor: "rgba(34,197,94,0.25)",
              color: "#22c55e",
            }}
          >
            <CheckCircle size={12} />
            Available for internships &amp; freelance
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Left — contact links */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {contacts.map(({ icon: Icon, label, value, href, color }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card stack-card min-w-0 group hover:border-accent/35 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ color }}
                >
                  <Icon size={20} />
                </div>
                <div className="stack-card-meta">{label}</div>
              </div>
              <p className="stack-card-body break-all sm:break-normal">{value}</p>
            </motion.a>
          ))}
        </div>

        {/* Right — form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass-card stack-card min-w-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="floating-field">
              <input
                id="name"
                type="text"
                required
                placeholder=" "
                value={form.name}
                onChange={(e) => setForm((c) => ({ ...c, name: e.target.value }))}
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="floating-field">
              <input
                id="email"
                type="email"
                required
                placeholder=" "
                value={form.email}
                onChange={(e) => setForm((c) => ({ ...c, email: e.target.value }))}
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>

          <div className="floating-field">
            <textarea
              id="message"
              required
              placeholder=" "
              value={form.message}
              onChange={(e) => setForm((c) => ({ ...c, message: e.target.value }))}
            />
            <label htmlFor="message">Message</label>
          </div>

          <button
            type="submit"
            disabled={status === "sent"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            style={{
              background: status === "sent" ? "var(--success)" : "var(--accent)",
              color: "#130d04",
              boxShadow:
                status === "sent"
                  ? "0 12px 28px rgba(34, 197, 94, 0.18)"
                  : "0 12px 28px rgba(245, 158, 11, 0.22)",
            }}
          >
            {status === "sent" ? (
              <>Message Ready ✓</>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </div>
  );
}