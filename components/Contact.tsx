"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";
import { Mail, Github, Linkedin, Send, User, AtSign, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    window.open(mailto, "_blank");
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}`, color: "#3b82f6" },
    { icon: Github, label: "GitHub", value: "AkshatKardak", href: personal.github, color: "#f0f4f8" },
    { icon: Linkedin, label: "LinkedIn", value: "akshatkardak", href: personal.linkedin, color: "#0a66c2" },
  ];

  return (
    <section className="section max-w-[1000px]">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
          <Mail className="text-accent" />
          Get In Touch
        </h2>
        <p className="text-text-muted mt-2">Interested in working together or just want to say hi? My inbox is always open.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Contact Links */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {contacts.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-4 flex items-center gap-4 group hover:border-accent/40 transition-all duration-300"
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

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass-card p-6 md:p-8 flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                <User size={12} /> Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="John Doe"
                className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-text outline-none focus:border-accent transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
                <AtSign size={12} /> Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="john@example.com"
                className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-text outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-text-muted flex items-center gap-2">
              <MessageSquare size={12} /> Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="How can I help you?"
              className="bg-white/5 border border-border rounded-xl px-4 py-3 text-sm text-text outline-none focus:border-accent transition-colors resize-none min-h-[120px]"
            />
          </div>

          <button 
            type="submit" 
            disabled={status === "sent"}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-1 ${
              status === "sent" 
                ? "bg-success text-bg" 
                : "bg-accent hover:bg-accent-hover text-bg shadow-lg shadow-accent/20"
            }`}
          >
            {status === "sent" ? (
              <>Success!</>
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