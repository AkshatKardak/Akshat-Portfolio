"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { Mail, Github, Linkedin, Send } from "lucide-react";

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
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}`, color: "var(--accent)" },
    { icon: Github, label: "GitHub", value: "AkshatKardak", href: personal.github, color: "var(--text)" },
    { icon: Linkedin, label: "LinkedIn", value: "akshatkardak", href: personal.linkedin, color: "#0a66c2" },
  ];

  return (
    <section className="section w-full">
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
          Interested in working together or just want to say hi? My inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
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
              className="glass-card p-4 flex items-center gap-4 group hover:border-accent/35 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ color }}
              >
                <Icon size={20} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-text-faint">{label}</div>
                <div className="text-sm font-bold text-text truncate max-w-[180px]">{value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass-card p-6 md:p-8 flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="floating-field">
              <input
                id="name"
                type="text"
                required
                placeholder=" "
                value={form.name}
                onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="floating-field">
              <input
                id="email"
                type="email"
                required
                placeholder=" "
                value={form.email}
                onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="floating-field">
            <textarea
              id="message"
              required
              placeholder=" "
              value={form.message}
              onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
            />
            <label htmlFor="message">Message</label>
          </div>

          <button
            type="submit"
            disabled={status === "sent"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold text-[#08111d] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            style={{
              background: status === "sent"
                ? "linear-gradient(135deg, var(--success), #7be0bf)"
                : "linear-gradient(135deg, var(--accent), var(--violet))",
              boxShadow: "0 12px 28px rgba(79, 156, 255, 0.22)",
            }}
          >
            {status === "sent" ? (
              <>Message Ready</>
            ) : (
              <>
                <Send size={18} />
                Launch Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
