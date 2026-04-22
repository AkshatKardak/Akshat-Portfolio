import type {
  SkillGroup,
  Experience,
  Project,
  Certification,
  AboutMe,
  Personal,
  NavItem,
} from "@/lib/types";

export const aboutMe: AboutMe = {
  name: "Akshat Kardak",
  role: "Full Stack Developer",
  location: "Mumbai, India",
  college: "Datta Meghe College of Engineering",
  resumeUrl: "/Akshat_Kardak_Resume.pdf",
  github: "https://github.com/AkshatKardak",
  email: "kardakakshat@gmail.com",  
};

export const personal: Personal = {
  firstName: "Akshat",
  lastName: "Kardak",
  name: "Akshat Kardak",
  bio: "Full-stack developer building production-grade web and mobile applications — from NGO donation platforms to AI-powered systems. I write code that ships.",
  location: "Mumbai, India",
  email: "kardakakshat@gmail.com",           // ✅ fixed
  github: "https://github.com/AkshatKardak",
  githubUsername: "AkshatKardak",
  linkedin: "https://linkedin.com/in/akshatkardak",  // ✅ fixed
  resumeUrl: "/Akshat_Kardak_Resume.pdf",
  avatar: "/images/Akshat.png",              // ✅ fixed path
  available: true,
};



export const roles: string[] = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "Flutter Mobile Developer",
  "FastAPI Backend Engineer",
  "Open Source Builder",
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    color: "#f59e0b",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Three.js" },
      { name: "GSAP" },
    ],
  },
  {
    category: "Backend",
    color: "#6366f1",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "FastAPI" },
      { name: "Python" },
      { name: "REST APIs" },
      { name: "Socket.io" },
    ],
  },
  {
    category: "Mobile",
    color: "#10b981",
    skills: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "React Native" },
      { name: "Expo" },
    ],
  },
  {
    category: "Database & Cloud",
    color: "#ef4444",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Firebase" },
      { name: "Supabase" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Netlify" },
      { name: "Cloudinary" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Web Development Intern",
    org: "Employment Express Verband LLP",
    period: "Aug 2025 – Oct 2025",
    duration: "3 months",
    color: "#f59e0b",
    tags: ["React.js", "Node.js", "JavaScript", "HTML", "CSS"],
    bullets: [
      "Completed a 3-month web development internship under the InternBoot program at Employment Express.",
      "Built and maintained web interfaces using React.js with a focus on clean UI and solid functionality.",
      "Worked on real client-facing projects, shipping features end-to-end within a professional team environment.",
    ],
    impact: "First industry exposure — shipped real features in a professional dev environment.",
  },
  {
    role: "Publicity Team Member",
    org: "Computer Society of India — DMCE Chapter",
    period: "Aug 2024 – Apr 2025",
    duration: "9 months",
    color: "#6366f1",
    tags: ["Community", "Events", "Tech Society", "Publicity"],
    bullets: [
      "Active member of the CSI chapter at DMCE for 9 months, participating in technical events and workshops.",
      "Worked as a Publicity Team Member — handled event promotion, social media coordination, and outreach.",
      "Collaborated with peers on organizing college-level tech activities and community initiatives.",
    ],
    impact: "Contributed to growing the college tech community through event management and publicity work.",
  },
];

export const projects: Project[] = [
  {
    title: "UnitedImpact",
    date: "2024",
    color: "#f59e0b",
    featured: true,
    github: "https://github.com/AkshatKardak/UnitedImpact",
    live: "",
    image: "",
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    bullets: [
      "NGO donation platform with real-time geo-mapping, live campaign tracking, and admin dashboards.",
      "End-to-end Razorpay integration with Firebase Auth for secure donor flows.",
    ],
    impact:
      "Enabled real-money donations to verified NGOs with a scalable MERN-stack platform.",
  },
  {
    title: "RentRide",
    date: "2024",
    color: "#6366f1",
    featured: true,
    github: "https://github.com/AkshatKardak/RentRide",
    live: "",
    image: "",
    tech: ["React", "Express", "MongoDB", "Gemini API", "Razorpay"],
    bullets: [
      "Full car rental platform with AI chat assistant, admin dashboard, and damage report system.",
      "Gemini API integration helps users find the right car based on trip type and budget.",
    ],
    impact:
      "Production-ready rental platform with AI assistance and complete payment pipeline.",
  },
  {
    title: "CivicPulse",
    date: "2025 – Present",
    color: "#f59e0b",
    featured: true,
    github: "https://github.com/AkshatKardak/CivicPulse", // update if different
    live: "",
    image: "",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Maps API"],
    bullets: [
      "Civic engagement platform connecting citizens to local issues with real-time geo-tagged reporting.",
      "Real-time updates via Socket.io with an interactive map for ward-level issue tracking.",
      "Admin panel for municipal officers to triage, assign, and resolve reported civic complaints.",
    ],
    impact: "🚧 Currently building — full-stack civic tech platform targeting hyperlocal urban problem-solving.",
  },
  {
    title: "Fintech Platform",
    date: "2025 – Present",
    color: "#6366f1",
    featured: true,
    github: "", // add when ready
    live: "",
    image: "",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Razorpay", "Plaid API"],
    bullets: [
      "Personal finance dashboard with expense categorization, budget tracking, and spending insights.",
      "FastAPI backend with JWT auth, PostgreSQL schema, and Razorpay payment flow integration.",
      "Data visualization layer with monthly trend charts and anomaly detection for unusual spending.",
    ],
    impact: "🚧 Currently building — production-grade fintech app with real payment flows and financial analytics.",
  },
  {
    title: "Portfolio",
    date: "2025",
    color: "#a78bfa",
    featured: false,
    github: "https://github.com/AkshatKardak/akshat-portfolio",
    live: "",
    image: "",
    tech: ["Next.js", "Three.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    bullets: [
      "Personal portfolio with Three.js background, GSAP animations, and Lenis smooth scrolling.",
      "Midnight Gold design system with cinematic micro-interactions and full dark mode.",
    ],
    impact:
      "Cinematic portfolio that reflects real engineering depth — not a template.",
  },
];

export const certifications: Certification[] = [
  {
    title: "Full Stack Developer",
    issuer: "Coursera / Meta",
    date: "2024",
    year: "2024",
    color: "#6366f1",
    link: "",
    credentialUrl: "",
    image: "",
    description:
      "Completed Meta's professional full-stack certificate covering React, Node.js, databases, and REST API design through structured, project-based modules.",
    tags: ["React", "Node.js", "REST APIs", "MongoDB", "Full Stack"],
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2024",
    year: "2024",
    color: "#f59e0b",
    link: "",
    credentialUrl: "",
    image: "",
    description:
      "Simulated real-world software engineering tasks including debugging, code review, and building features in a professional engineering workflow.",
    tags: ["Software Engineering", "Debugging", "Code Review", "Problem Solving"],
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    date: "2024",
    year: "2024",
    color: "#10b981",
    link: "",
    credentialUrl: "",
    image: "",
    description:
      "Completed Deloitte Australia's data analytics simulation covering data interpretation, forensic analysis, and presenting insights from real-world datasets.",
    tags: ["Data Analytics", "Excel", "Forensic Analysis", "Deloitte"],
  },
  {
    title: "ReactJS for Beginners",
    issuer: "Simplilearn",
    date: "2024",
    year: "2024",
    color: "#ef4444",
    link: "",
    credentialUrl: "",
    image: "",
    description:
      "Foundational React.js course covering components, hooks, state management, and building interactive UIs from scratch.",
    tags: ["React.js", "React Hooks", "JavaScript", "Frontend"],
  },
  {
    title: "Front-End Software Engineering Job Simulation",
    issuer: "Skyscanner (Forage)",
    date: "2024",
    year: "2024",
    color: "#a78bfa",
    link: "",
    credentialUrl: "",
    image: "",
    description:
      "Skyscanner's front-end simulation covering component-driven development, accessibility, and building production-quality UI in a real codebase context.",
    tags: ["Frontend", "React", "Accessibility", "UI Engineering"],
  },
];

export const navItems: NavItem[] = [
  { id: "home",           label: "Dashboard"      },
  { id: "about",          label: "About"          },  // ← ADD THIS
  { id: "projects",       label: "Projects"       },
  { id: "skills",         label: "Skills"         },
  { id: "experience",     label: "Experience"     },
  { id: "certifications", label: "Certifications" },
  { id: "contact",        label: "Contact"        },
];