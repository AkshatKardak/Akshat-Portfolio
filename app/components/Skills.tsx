"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  { title:"Frontend",         icon:"💻", color:"rgba(59,130,246,0.15)",  border:"rgba(59,130,246,0.25)",  glow:"rgba(59,130,246,0.4)",  tag:"#60a5fa",  skills:["React.js","Next.js","TypeScript","Tailwind CSS","GSAP","Framer Motion"] },
  { title:"Backend",          icon:"⚙️", color:"rgba(249,115,22,0.12)",  border:"rgba(249,115,22,0.25)",  glow:"rgba(249,115,22,0.4)",  tag:"#fb923c",  skills:["Node.js","Express.js","REST APIs","Socket.io","JWT Auth"] },
  { title:"Database & Cloud", icon:"🗄️", color:"rgba(251,191,36,0.1)",   border:"rgba(251,191,36,0.22)",  glow:"rgba(251,191,36,0.4)",  tag:"#fbbf24",  skills:["MongoDB","PostgreSQL","Firebase","Vercel","AWS S3"] },
  { title:"Tools & Others",   icon:"🛠️", color:"rgba(96,165,250,0.1)",   border:"rgba(96,165,250,0.22)",  glow:"rgba(96,165,250,0.4)",  tag:"#93c5fd",  skills:["Git","GitHub","Figma","Three.js","Docker","Razorpay"] },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".skill-cat-card", { opacity:0, y:50, stagger:0.15, duration:0.8, ease:"power3.out", scrollTrigger:{ trigger:".skills-grid", start:"top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ padding:"110px 0", position:"relative", zIndex:10 }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 28px" }}>

        <div style={{ display:"flex", alignItems:"center", gap:"10px", fontFamily:"var(--font-mono)", fontSize:"0.78rem", color:"#3b82f6", letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:"14px" }}>
          <span style={{ width:"28px", height:"1px", background:"#3b82f6", display:"inline-block" }} />
          What I Work With
        </div>

        <h2 style={{ fontFamily:"var(--font-cyber)", fontSize:"clamp(2.4rem,4.5vw,3.8rem)", fontWeight:800, lineHeight:1.1, marginBottom:"60px", background:"linear-gradient(135deg,#fff 0%,#60a5fa 50%,#f97316 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
          Tech Stack
        </h2>

        <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"28px" }}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-cat-card"
              style={{ background:"rgba(14,14,26,0.85)", backdropFilter:"blur(16px)", border:`1px solid ${cat.border}`, borderRadius:"16px", padding:"28px",
                transition:"all 0.35s cubic-bezier(0.175,0.885,0.32,1.275)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow=`0 0 30px ${cat.glow}, 0 0 60px ${cat.glow}44`; e.currentTarget.style.transform="translateY(-8px)"; e.currentTarget.style.borderColor=cat.tag; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.borderColor=cat.border; }}
            >
              <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"22px" }}>
                <div style={{ width:"42px", height:"42px", borderRadius:"10px", background:cat.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", border:`1px solid ${cat.border}` }}>{cat.icon}</div>
                <span style={{ fontFamily:"var(--font-cyber)", fontSize:"1rem", fontWeight:700, color:"#f1f5f9" }}>{cat.title}</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"9px" }}>
                {cat.skills.map((skill) => (
                  <span key={skill}
                    style={{ padding:"6px 13px", background:`${cat.tag}14`, border:`1px solid ${cat.tag}33`, borderRadius:"100px", fontFamily:"var(--font-mono)", fontSize:"0.78rem", color:cat.tag, transition:"all 0.25s", cursor:"default" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background=`${cat.tag}28`; e.currentTarget.style.borderColor=cat.tag; e.currentTarget.style.boxShadow=`0 0 10px ${cat.tag}44`; e.currentTarget.style.transform="scale(1.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background=`${cat.tag}14`; e.currentTarget.style.borderColor=`${cat.tag}33`; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="scale(1)"; }}
                  >{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
