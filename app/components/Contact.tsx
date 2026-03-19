"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface FormData { name: string; email: string; message: string; }

const inputStyle: React.CSSProperties = {
  background: "rgba(14,14,26,0.9)",
  border: "1px solid rgba(249,115,22,0.25)",
  borderRadius: "8px", padding: "13px 16px",
  color: "#f1f5f9",
  fontFamily: "var(--font-body), Space Grotesk, sans-serif",
  fontSize: "0.95rem", outline: "none", width: "100%",
  transition: "border-color 0.3s,box-shadow 0.3s",
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-inner", { opacity: 0, y: 60, duration: 1, scrollTrigger: { trigger: ".contact-inner", start: "top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const focusedStyle: React.CSSProperties = {
    borderColor: "#f97316",
    boxShadow: "0 0 0 3px rgba(249,115,22,0.1),0 0 12px rgba(249,115,22,0.4)",
  };

  return (
    <section id="contact" ref={sectionRef} style={{ padding: "110px 0", position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 28px" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#f97316", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "14px" }}>
          <span style={{ display: "inline-block", width: "28px", height: "1px", background: "#f97316" }} />
          Get In Touch
        </div>

        <h2 style={{ fontFamily: "var(--font-cyber)", fontSize: "clamp(2.4rem,4.5vw,3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "60px", background: "linear-gradient(135deg,#fff 30%,#fb923c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Contact Me
        </h2>

        <div className="contact-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>

          <div>
            <h3 style={{ fontFamily: "var(--font-cyber)", fontSize: "1.5rem", fontWeight: 700, color: "#f1f5f9", marginBottom: "14px" }}>Let&apos;s Build Something Together</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.75, color: "#94a3b8", marginBottom: "32px" }}>
              I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to connect — my inbox is always open!
            </p>
            {[
              { icon: "📧", label: "kardakakshat@gmail.com", href: "mailto:kardakakshat@gmail.com" },
              { icon: "🔥", label: "github.com/AkshatKardak",  href: "https://github.com/AkshatKardak" },
              { icon: "💼", label: "LinkedIn", href: "#" },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px 0", borderBottom: "1px solid rgba(249,115,22,0.1)", color: "#94a3b8", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.3s", fontFamily: "var(--font-body)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color="#fb923c")}
                onMouseLeave={(e) => (e.currentTarget.style.color="#94a3b8")}
              >
                <div style={{ width: "40px", height: "40px", background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</div>
                {item.label}
              </a>
            ))}
          </div>

          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", padding: "60px 0", background: "rgba(14,14,26,0.8)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: "16px", backdropFilter: "blur(16px)" }}>
              <p style={{ fontFamily: "var(--font-cyber)", fontSize: "1.4rem", color: "#f97316", textShadow: "0 0 12px #f97316" }}>Message Sent 🔥</p>
              <p style={{ color: "#94a3b8", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>I&apos;ll get back to you soon!</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); setFormData({ name: "", email: "", message: "" }); setTimeout(() => setSent(false), 4000); }} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

              {[{ name: "name", type: "text", label: "Name", placeholder: "Your name" }, { name: "email", type: "email", label: "Email", placeholder: "your@email.com" }].map((field) => (
                <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#f97316", letterSpacing: "0.1em", textTransform: "uppercase" }}>{field.label}</label>
                  <input type={field.type} name={field.name} value={formData[field.name as keyof FormData]}
                    onChange={(e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))}
                    required autoComplete="off" placeholder={field.placeholder}
                    style={{ ...inputStyle, ...(focused === field.name ? focusedStyle : {}) }}
                    onFocus={() => setFocused(field.name)} onBlur={() => setFocused(null)}
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#f97316", letterSpacing: "0.1em", textTransform: "uppercase" }}>Message</label>
                <textarea name="message" value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  required rows={5} placeholder="Your message..."
                  style={{ ...inputStyle, resize: "vertical", minHeight: "130px", ...(focused === "message" ? focusedStyle : {}) }}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                />
              </div>

              <button type="submit"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "15px 36px", borderRadius: "8px", border: "none", fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, color: "#fff", background: "linear-gradient(135deg,#ea580c,#f97316)", boxShadow: "0 0 20px rgba(249,115,22,0.5)", cursor: "pointer", transition: "all 0.3s ease", alignSelf: "flex-start" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow="0 0 35px rgba(249,115,22,0.8),0 0 60px rgba(234,88,12,0.4)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow="0 0 20px rgba(249,115,22,0.5)"; e.currentTarget.style.transform="translateY(0)"; }}
              >
                Send Message 🔥
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
