"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "RentRide",
    desc: "Full-stack MERN car rental platform with AI-powered recommendations, Razorpay payments, real-time booking management, damage reporting, and a comprehensive admin dashboard.",
    tags: ["React","Node.js","MongoDB","Razorpay","Firebase","JWT"],
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(29,78,216,0.08) 100%)",
    topLine: "linear-gradient(90deg, transparent, #3b82f6, transparent)",
    accent: "#3b82f6",
    github: "https://github.com/AkshatKardak/car-rental-mern",
    live: "https://rentridefrontend.vercel.app/",
  },
  {
    number: "02",
    title: "UnitedImpact",
    desc: "MERN NGO platform connecting donors, volunteers & NGOs — Razorpay donations, Firebase auth, real-time Socket.IO messaging, map-based campaign discovery & XP achievement system.",
    tags: ["React","Node.js","MongoDB","Socket.IO","Razorpay","Leaflet"],
    gradient: "linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(234,88,12,0.06) 100%)",
    topLine: "linear-gradient(90deg, transparent, #f97316, transparent)",
    accent: "#f97316",
    github: "https://github.com/AkshatKardak/UnitedImpact",
    live: "https://unitedimpact-app.netlify.app",
  },
  {
    number: "03",
    title: "RoastHub",
    desc: "AI-powered savage tweet generator with authentic Indian desi flavour — Bollywood references, cricket banter, viral rating system (Viral Potential, Savage Level, Brutal Factor).",
    tags: ["React","Node.js","MongoDB","GROQ AI","Framer Motion"],
    gradient: "linear-gradient(135deg, rgba(251,191,36,0.18) 0%, rgba(249,115,22,0.05) 100%)",
    topLine: "linear-gradient(90deg, transparent, #fbbf24, transparent)",
    accent: "#fbbf24",
    github: "https://github.com/AkshatKardak/RoastHub",
    live: "https://roasthubfront.vercel.app",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".proj-card", {
        opacity: 0, y: 70, stagger: 0.2, duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".projects-grid", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={ref} style={{ padding:"110px 0", position:"relative", zIndex:10 }}>
      <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"0 28px" }}>

        <div style={{ display:"flex", alignItems:"center", gap:"10px", fontFamily:"var(--font-mono)", fontSize:"0.78rem", color:"#3b82f6", letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:"14px" }}>
          <span style={{ width:"28px", height:"1px", background:"#3b82f6", display:"inline-block" }} />
          What I&apos;ve Built
        </div>

        <h2 style={{ fontFamily:"var(--font-cyber)", fontSize:"clamp(2.4rem,4.5vw,3.8rem)", fontWeight:800, lineHeight:1.1, marginBottom:"60px", background:"linear-gradient(135deg,#fff 0%,#60a5fa 50%,#f97316 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
          My Projects
        </h2>

        <div className="projects-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"28px" }}>
          {projects.map((project) => (
            <div key={project.title} className="proj-card"
              style={{ background:"rgba(14,14,26,0.85)", backdropFilter:"blur(16px)", border:`1px solid ${project.accent}33`, borderRadius:"18px", overflow:"hidden", display:"flex", flexDirection:"column",
                transition:"transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.4s ease, border-color 0.3s",
                position:"relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform="translateY(-12px) scale(1.02)";
                e.currentTarget.style.boxShadow=`0 20px 60px ${project.accent}44, 0 0 30px ${project.accent}22`;
                e.currentTarget.style.borderColor=`${project.accent}88`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform="translateY(0) scale(1)";
                e.currentTarget.style.boxShadow="none";
                e.currentTarget.style.borderColor=`${project.accent}33`;
              }}
            >
              {/* Animated top accent line */}
              <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:project.topLine, opacity:0.8 }} />

              {/* Card header */}
              <div style={{ height:"155px", background:project.gradient, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"24px 28px", position:"relative", overflow:"hidden" }}>
                <span style={{ fontFamily:"var(--font-cyber)", fontSize:"4.5rem", fontWeight:800, color:project.accent, opacity:0.12, lineHeight:1, userSelect:"none" }}>{project.number}</span>
                <div style={{ display:"flex", gap:"10px" }}>
                  <a href={project.github} target="_blank" rel="noreferrer"
                    style={{ width:"34px", height:"34px", borderRadius:"8px", background:`rgba(14,14,26,0.7)`, border:`1px solid ${project.accent}44`, display:"flex", alignItems:"center", justifyContent:"center", color:project.accent, fontSize:"0.85rem", fontWeight:700, textDecoration:"none", transition:"all 0.25s" }}
                    onMouseEnter={(e)=>{e.currentTarget.style.background=`${project.accent}22`; e.currentTarget.style.borderColor=project.accent;}}
                    onMouseLeave={(e)=>{e.currentTarget.style.background="rgba(14,14,26,0.7)"; e.currentTarget.style.borderColor=`${project.accent}44`;}}>
                    GH
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer"
                    style={{ width:"34px", height:"34px", borderRadius:"8px", background:`${project.accent}22`, border:`1px solid ${project.accent}66`, display:"flex", alignItems:"center", justifyContent:"center", color:project.accent, fontSize:"0.8rem", fontWeight:700, textDecoration:"none", transition:"all 0.25s" }}
                    onMouseEnter={(e)=>{e.currentTarget.style.background=`${project.accent}44`; e.currentTarget.style.boxShadow=`0 0 12px ${project.accent}66`;}}
                    onMouseLeave={(e)=>{e.currentTarget.style.background=`${project.accent}22`; e.currentTarget.style.boxShadow="none";}}>
                    ↗
                  </a>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding:"22px 24px 26px", flex:1, display:"flex", flexDirection:"column" }}>
                <p style={{ fontFamily:"var(--font-mono)", fontSize:"0.72rem", color:project.accent, letterSpacing:"0.15em", marginBottom:"7px", opacity:0.8 }}>Project {project.number}</p>
                <h3 style={{ fontFamily:"var(--font-cyber)", fontSize:"1.3rem", fontWeight:700, color:"#f1f5f9", marginBottom:"11px" }}>{project.title}</h3>
                <p style={{ fontFamily:"var(--font-body)", fontSize:"0.88rem", lineHeight:1.7, color:"#94a3b8", flex:1, marginBottom:"18px" }}>{project.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"7px", marginBottom:"20px" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ padding:"4px 11px", background:`${project.accent}12`, border:`1px solid ${project.accent}33`, borderRadius:"100px", fontFamily:"var(--font-mono)", fontSize:"0.72rem", color:project.accent }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display:"flex", gap:"20px", alignItems:"center" }}>
                  <a href={project.github} target="_blank" rel="noreferrer"
                    style={{ fontFamily:"var(--font-body)", fontSize:"0.85rem", fontWeight:600, color:"#94a3b8", textDecoration:"none", transition:"color 0.3s", display:"flex", alignItems:"center", gap:"5px" }}
                    onMouseEnter={(e)=>(e.currentTarget.style.color=project.accent)}
                    onMouseLeave={(e)=>(e.currentTarget.style.color="#94a3b8")}
                  >GitHub ↗</a>
                  <a href={project.live} target="_blank" rel="noreferrer"
                    style={{ fontFamily:"var(--font-body)", fontSize:"0.85rem", fontWeight:700, color:project.accent, textDecoration:"none", transition:"all 0.3s", display:"flex", alignItems:"center", gap:"5px", padding:"6px 16px", borderRadius:"6px", border:`1px solid ${project.accent}55`, background:`${project.accent}10` }}
                    onMouseEnter={(e)=>{e.currentTarget.style.background=`${project.accent}25`; e.currentTarget.style.boxShadow=`0 0 12px ${project.accent}55`;}}
                    onMouseLeave={(e)=>{e.currentTarget.style.background=`${project.accent}10`; e.currentTarget.style.boxShadow="none";}}
                  >Live Demo ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
