"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState<boolean>(false);

  useGSAP(() => {
    gsap.from(".contact-box", {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact-box",
        start: "top 80%",
      },
    });
  }, { scope: sectionRef });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-10 py-32 px-8 md:px-20"
    >
      {/* Section Label */}
      <p className="font-mono text-[#00fafe] text-xs tracking-[0.3em] mb-3">
        &gt; CONTACT.init()
      </p>

      {/* Heading */}
      <h2 className="font-[family-name:var(--font-cyber)] font-bold text-4xl text-white mb-12">
        GET IN{" "}
        <span
          className="text-[#b366ff]"
          style={{ textShadow: "0 0 10px #b366ff, 0 0 30px #b366ff88" }}
        >
          TOUCH
        </span>
      </h2>

      {/* Form Box */}
      <div
        className="contact-box max-w-xl border border-[#b366ff] p-8 bg-[#111111]"
        style={{ boxShadow: "0 0 10px #b366ff44, inset 0 0 10px #b366ff11" }}
      >
        {sent ? (
          /* Success State */
          <div className="text-center py-10 flex flex-col items-center gap-3">
            <p
              className="font-[family-name:var(--font-cyber)] text-[#00fafe] text-xl"
              style={{ textShadow: "0 0 10px #00fafe" }}
            >
              &gt; MESSAGE SENT ✓
            </p>
            <p className="font-mono text-gray-400 text-sm">
              I&apos;ll get back to you soon!
            </p>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            noValidate={false}
          >
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-mono text-[10px] text-[#b366ff] tracking-widest"
              >
                NAME
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                autoComplete="off"
                placeholder="Your name"
                className="w-full bg-transparent border border-white/10 focus:border-[#b366ff] px-4 py-3 font-mono text-sm text-gray-300 outline-none transition-colors duration-300 placeholder:text-gray-600"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-mono text-[10px] text-[#b366ff] tracking-widest"
              >
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                autoComplete="off"
                placeholder="your@email.com"
                className="w-full bg-transparent border border-white/10 focus:border-[#b366ff] px-4 py-3 font-mono text-sm text-gray-300 outline-none transition-colors duration-300 placeholder:text-gray-600"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-mono text-[10px] text-[#b366ff] tracking-widest"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleTextareaChange}
                required
                rows={5}
                placeholder="Your message..."
                className="w-full bg-transparent border border-white/10 focus:border-[#b366ff] px-4 py-3 font-mono text-sm text-gray-300 outline-none transition-colors duration-300 resize-none placeholder:text-gray-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full font-[family-name:var(--font-cyber)] text-xs px-6 py-3 bg-[#b366ff] text-black font-bold tracking-widest hover:bg-[#00fafe] transition-all duration-300"
              style={{ boxShadow: "0 0 10px #b366ff44" }}
            >
              TRANSMIT MESSAGE →
            </button>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-10">
        {[
          { label: "GITHUB",   href: "https://github.com/AkshatKardak" },
          { label: "LINKEDIN", href: "#" },
          { label: "EMAIL",    href: "mailto:kardakakshat@gmail.com" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-gray-500 hover:text-[#00fafe] tracking-widest transition-colors duration-300"
          >
            {s.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}
