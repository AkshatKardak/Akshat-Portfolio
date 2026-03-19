"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface FormState { name: string; email: string; message: string; }

const inputBase: React.CSSProperties = {
  background: "rgba(14,14,26,0.9)",
  border: "1px solid rgba(59,130,246,0.25)",
  borderRadius: "8px", padding: "13px 16px",
  color: "#f1f5f9",
  fontFamily: "var(--font-body), Space Grotesk, sans-serif",
  fontSize: "0.95rem", outline: "none", width: "100%",
  transition: "border-color 0.3s, box-shadow 0.3s",
};
const inputFocused: React.CSSProperties = {
  borderColor: "#3b82f6",
  boxShadow: "0 0 0 3px rgba(59,130,246,0.12), 0 0 12px rgba(59,130,246,0.35)",
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef    = useRef<HTMLFormElement>(null);
  const [form, setForm]     = useState<FormState>({ name:"", email:"", message:"" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [focused, setFocused] = useState<string|null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-inner", { opacity:0, y:60, duration:1, scrollTrigger:{ trigger:".contact-inner", start:"top 80%" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
      setForm({ name:"", email:"", message:"" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const links = [
    { icon:"📧", label:"kardakakshat@gmail.com",         href:"mailto:kardakakshat@gmail.com" },
    { icon:"💼", label:"linkedin.com/in/akshatkardak",   href:"https://www.linkedin.com/in/akshatkardak" },
    { icon:"🐙", label:"github.com/AkshatKardak",        href:"https://github.com/AkshatKardak" },
  ];

  return (
    <section id="contact" ref={sectionRef} style={{ padding:"110px 0", position:"relative", zIndex:10 }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 28px" }}>

        <div style={{ display:"flex", alignItems:"center", gap:"10px", fontFamily:"var(--font-mono)", fontSize:"0.78rem", color:"#3b82f6", letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:"14px" }}>
          <span style={{ display:"inline-block", width:"28px", height:"1px", background:"#3b82f6" }} />
          Get In Touch
        </div>

        <h2 style={{ fontFamily:"var(--font-cyber)", fontSize:"clamp(2.4rem,4.5vw,3.8rem)", fontWeight:800, lineHeight:1.1, marginBottom:"60px", background:"linear-gradient(135deg,#fff 0%,#60a5fa 50%,#f97316 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
          Contact Me
        </h2>

        <div className="contact-inner" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px", alignItems:"start" }}>

          <div>
            <h3 style={{ fontFamily:"var(--font-cyber)", fontSize:"1.5rem", fontWeight:700, color:"#f1f5f9", marginBottom:"14px" }}>Let&apos;s Build Something Together</h3>
            <p style={{ fontFamily:"var(--font-body)", fontSize:"1rem", lineHeight:1.75, color:"#94a3b8", marginBottom:"32px" }}>
              I&apos;m currently open to new opportunities. Whether you have a project in mind or just want to connect — my inbox is always open!
            </p>
            {links.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                style={{ display:"flex", alignItems:"center", gap:"14px", padding:"14px 0", borderBottom:"1px solid rgba(59,130,246,0.1)", color:"#94a3b8", fontSize:"0.95rem", textDecoration:"none", transition:"color 0.3s", fontFamily:"var(--font-body)" }}
                onMouseEnter={(e)=>(e.currentTarget.style.color="#60a5fa")}
                onMouseLeave={(e)=>(e.currentTarget.style.color="#94a3b8")}
              >
                <div style={{ width:"40px", height:"40px", background:"rgba(59,130,246,0.08)", border:"1px solid rgba(59,130,246,0.2)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem", flexShrink:0 }}>{item.icon}</div>
                {item.label}
              </a>
            ))}
          </div>

          {status === "sent" ? (
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"14px", padding:"70px 0", background:"rgba(14,14,26,0.85)", border:"1px solid rgba(59,130,246,0.3)", borderRadius:"16px", backdropFilter:"blur(16px)" }}>
              <div style={{ fontSize:"2.5rem" }}>✅</div>
              <p style={{ fontFamily:"var(--font-cyber)", fontSize:"1.4rem", background:"linear-gradient(135deg,#60a5fa,#f97316)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Message Sent!</p>
              <p style={{ color:"#94a3b8", fontFamily:"var(--font-body)", fontSize:"0.9rem" }}>I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"18px" }}>
              {[{name:"name",type:"text",label:"Name",placeholder:"Your name"},{name:"email",type:"email",label:"Email",placeholder:"your@email.com"}].map((field) => (
                <div key={field.name} style={{ display:"flex", flexDirection:"column", gap:"7px" }}>
                  <label style={{ fontFamily:"var(--font-mono)", fontSize:"0.78rem", color:"#3b82f6", letterSpacing:"0.1em", textTransform:"uppercase" }}>{field.label}</label>
                  <input type={field.type} name={field.name} value={form[field.name as keyof FormState]}
                    onChange={(e)=>setForm(p=>({...p,[e.target.name]:e.target.value}))}
                    required autoComplete="off" placeholder={field.placeholder}
                    style={{...inputBase,...(focused===field.name?inputFocused:{})}}
                    onFocus={()=>setFocused(field.name)} onBlur={()=>setFocused(null)}
                  />
                </div>
              ))}
              <div style={{ display:"flex", flexDirection:"column", gap:"7px" }}>
                <label style={{ fontFamily:"var(--font-mono)", fontSize:"0.78rem", color:"#3b82f6", letterSpacing:"0.1em", textTransform:"uppercase" }}>Message</label>
                <textarea name="message" value={form.message}
                  onChange={(e)=>setForm(p=>({...p,message:e.target.value}))}
                  required rows={5} placeholder="Your message..."
                  style={{...inputBase,resize:"vertical",minHeight:"130px",...(focused==="message"?inputFocused:{})}}
                  onFocus={()=>setFocused("message")} onBlur={()=>setFocused(null)}
                />
              </div>
              {status==="error" && <p style={{color:"#ef4444",fontFamily:"var(--font-body)",fontSize:"0.88rem"}}>Something went wrong. Please try again.</p>}
              <button type="submit" disabled={status==="sending"}
                style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"15px 36px", borderRadius:"8px", border:"none", fontFamily:"var(--font-body)", fontSize:"1rem", fontWeight:600, color:"#fff", background:"linear-gradient(135deg,#2563eb,#3b82f6,#f97316)", backgroundSize:"200%", boxShadow:"0 0 20px rgba(59,130,246,0.5)", cursor:status==="sending"?"not-allowed":"pointer", transition:"all 0.3s ease", alignSelf:"flex-start", opacity:status==="sending"?0.7:1 }}
                onMouseEnter={(e)=>{ if(status!=="sending"){ e.currentTarget.style.boxShadow="0 0 35px rgba(59,130,246,0.8), 0 0 60px rgba(249,115,22,0.3)"; e.currentTarget.style.transform="translateY(-2px)"; }}}
                onMouseLeave={(e)=>{ e.currentTarget.style.boxShadow="0 0 20px rgba(59,130,246,0.5)"; e.currentTarget.style.transform="translateY(0)"; }}
              >
                {status==="sending" ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
