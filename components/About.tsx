"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Zap } from "lucide-react";

const highlights = [
  { icon: <Code2 size={15} />, text: "Building full-stack web & mobile products that solve real problems" },
  { icon: <Zap size={15} />, text: "From NGO platforms to AI-integrated rental systems — shipped, not just built" },
  { icon: <GraduationCap size={15} />, text: "Engineering student at Datta Meghe College of Engineering, Mumbai" },
  { icon: <MapPin size={15} />, text: "Mumbai-based, open to freelance, internships & collaborations" },
];

export default function About() {
  return (
    <div className=" w-full">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-black tracking-normal">About Me</h2>
        <p className="text-text-muted max-w-2xl">
          Mumbai-based full-stack developer building real products, not just demos.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.12 } },
        }}
      >

        {/* Card 1: Photo + Identity */}
        <motion.article
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          className="glass-card rounded-2xl border border-white/5 overflow-hidden"
        >
          <div className="p-6 flex flex-col gap-4">

            {/* Row 1: Name + location top-right */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-text leading-tight">
                Akshat Kardak
              </h3>
              <div className="flex items-center gap-1.5 shrink-0 text-text-faint text-xs font-mono whitespace-nowrap">
                <MapPin size={13} />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Row 2: Colored role */}
            <p className="text-sm font-bold -mt-2" style={{ color: "#f59e0b" }}>
              Full Stack Developer
            </p>

            {/* Row 3: Photo */}
            <div className="rounded-xl overflow-hidden border border-white/5 w-full aspect-[16/7]">
              <img
                src="/images/Akshat.png"
                alt="Akshat Kardak"
                width={800}
                height={350}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Row 4: Highlights as bullets */}
            <ul className="flex flex-col gap-2.5">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-muted leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[#f59e0b]" />
                  {h.text}
                </motion.li>
              ))}
            </ul>

            {/* Row 5: Key Impact box */}
            <div
              className="rounded-xl p-4 border mt-1"
              style={{ background: "#f59e0b08", borderColor: "#f59e0b25" }}
            >
              <p
                className="text-xs font-bold mb-1.5 uppercase tracking-wider"
                style={{ color: "#f59e0b" }}
              >
                Currently
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Studying engineering at Datta Meghe College of Engineering, Mumbai — while building
                production-grade projects, competing in hackathons, and deepening expertise in AI/ML,
                DevOps, and system design.
              </p>
            </div>

            {/* Resume CTA */}
            <a
              href="/Akshat_Kardak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-fit flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold border transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "rgba(245,158,11,0.1)",
                borderColor: "rgba(245,158,11,0.25)",
                color: "#f59e0b",
              }}
            >
              Download Résumé
            </a>

          </div>
        </motion.article>

      </motion.div>
      </div>
  );
}