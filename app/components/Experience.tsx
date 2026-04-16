"use client";

const experiences = [
  { role:"Web Development Intern", org:"Employment Express Verband LLP", type:"Internship", period:"Aug 2025 – Oct 2025", duration:"3 months", description:"Completed a 3-month web development internship (InternBoot program). Built and shipped frontend and backend features, gaining hands-on experience in real-world workflows.", tags:["Web Development","HTML","CSS","JavaScript"], color:"var(--accent)", icon:"💼" },
  { role:"Publicity Team Member", org:"Computer Society of India (CSI)", type:"Organization", period:"Aug 2024 – Apr 2025", duration:"9 months", description:"Active member of DMCE CSI chapter. Participated in tech events, workshops, and managed promotional materials for the chapter.", tags:["Event Management","Publicity","Leadership"], color:"var(--violet)", icon:"🏛️" },
  { role:"Quantum Hacks Participant", org:"Hackathon", type:"Hackathon", period:"2025", duration:"", description:"Participated in Quantum Hacks, designing and building a functional project under time constraints, focusing on problem-solving and rapid prototyping.", tags:["Hackathon","Problem Solving","Team Collaboration"], color:"var(--success)", icon:"⚡" },
  { role:"B.E. Computer Engineering", org:"Datta Meghe College of Engineering, Mumbai", type:"Education", period:"2023 – 2027", duration:"4 years", description:"Pursuing Bachelor of Engineering in Computer Science at DMCE, University of Mumbai. Coursework spans algorithms, databases, OS, and software engineering.", tags:["Computer Science","University of Mumbai","B.E."], color:"#f97316", icon:"🎓" },
];

export default function Experience() {
  return (
    <section className="section" style={{ maxWidth:900 }}>
      <div className="section-header"><h2>Experience</h2><p>My professional journey and academic background</p></div>
      <div style={{ position:"relative" }}>
        <div style={{ position:"absolute", left:23, top:0, bottom:0, width:1, background:"linear-gradient(to bottom,var(--accent),var(--violet),transparent)", opacity:0.3 }}/>
        <div style={{ display:"flex", flexDirection:"column", gap:"var(--space-6)" }}>
          {experiences.map((exp, i) => (
            <div key={exp.role} style={{ display:"flex", gap:"var(--space-6)", position:"relative", animation:`fadeUp 0.5s ${i*0.1}s ease both` }}>
              <div style={{ flexShrink:0, width:48, height:48, borderRadius:"var(--radius-xl)", background:`${exp.color}18`, border:`1px solid ${exp.color}35`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.2rem", position:"relative", zIndex:1, boxShadow:`0 0 16px ${exp.color}20` }}>
                {exp.icon}
              </div>
              <div className="glass-card" style={{ flex:1, padding:"var(--space-5)", display:"flex", flexDirection:"column", gap:"var(--space-3)" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:"var(--space-2)" }}>
                  <div>
                    <h3 style={{ fontFamily:"var(--font-display)", fontSize:"var(--text-base)", fontWeight:700, color:"var(--text)", marginBottom:"var(--space-1)" }}>{exp.role}</h3>
                    <div style={{ fontSize:"var(--text-sm)", color:exp.color, fontWeight:500 }}>{exp.org}</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:"var(--text-xs)", color:"var(--text-muted)", fontFamily:"var(--font-mono)" }}>{exp.period}</div>
                    {exp.duration && <div style={{ fontSize:"var(--text-xs)", color:"var(--text-faint)" }}>{exp.duration}</div>}
                  </div>
                </div>
                <p style={{ fontSize:"var(--text-sm)", color:"var(--text-muted)", lineHeight:1.65 }}>{exp.description}</p>
                <div style={{ display:"flex", gap:"var(--space-2)", flexWrap:"wrap" }}>
                  {exp.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}