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
  bio: "I build full-stack products that actually ship — from NGO platforms handling real donations to AI-powered tools with live APIs. I don't prototype, I deploy.",
  location: "Mumbai, India",
  email: "kardakakshat@gmail.com",
  github: "https://github.com/AkshatKardak",
  githubUsername: "AkshatKardak",
  linkedin: "https://linkedin.com/in/akshatkardak",
  resumeUrl: "/Akshat_Kardak_Resume.pdf",
  avatar: "/images/Akshat.png",
  available: true,
};

export const roles: string[] = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "NodeJs and Express Js Backend Engineer",
  "Open Source Builder",
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    color: "#f59e0b",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    color: "#6366f1",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "Socket.io" },
    ],
  },
  {
    category: "Database & Cloud",
    color: "#ef4444",
    skills: [
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Netlify" },
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
      "Shipped production features end-to-end on client-facing React.js interfaces within a professional dev environment.",
      "Owned complete feature cycles — from design handoff to code review to deployment — under the InternBoot program.",
      "Built and maintained live web interfaces used by real clients, not staging environments.",
    ],
    impact: "First industry exposure — shipped real features in a professional dev environment.",
    image: "/images/Anitech.png",
    certificateUrl: "/images/web development internship certification.pdf",
    liveUrl: "https://akshatkardak.github.io/Employment-Express-Verband-LLP",
    codeUrl: "https://github.com/AkshatKardak/Employment-Express-Verband-LLP",
  },
];

export const projects: Project[] = [
  {
    title: "UnitedImpact",
    date: "2026",
    color: "#f59e0b",
    featured: true,
    github: "https://github.com/AkshatKardak/UnitedImpact",
    live: "https://unitedimpact-app.netlify.app/",
    image: "/images/UnitedImpact.png",
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
    date: "2026",
    color: "#6366f1",
    featured: true,
    github: "https://github.com/AkshatKardak/RentRide",
    live: "https://rentridefrontend.vercel.app/",
    image: "/images/RentRide.png",
    tech: ["React", "Express", "MongoDB", "Gemini API", "Razorpay"],
    bullets: [
      "Full car rental platform with AI chat assistant, admin dashboard, and damage report system.",
      "Gemini API integration helps users find the right car based on trip type and budget.",
    ],
    impact:
      "Production-ready rental platform with AI assistance and complete payment pipeline.",
  },
  {
    title: "RoastHub",
    date: "2025",
    color: "#ef4444",
    featured: true,
    github: "https://github.com/AkshatKardak/RoastHub",
    live: "https://roasthubfront.vercel.app",
    image: "/images/RoastHub.png",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Groq API"],
    bullets: [
      "AI-powered savage tweet generator with authentic Indian flavor — Bollywood refs, cricket banter, desi slang.",
      "Groq API backend generates 10 brutal tweets per topic with viral potential, savage level & brutality ratings.",
    ],
    impact: "Live full-stack AI app with real Groq API integration — shipped and deployed end-to-end.",
  },
  {
    title: "Portfolio",
    date: "2026",
    color: "#a78bfa",
    featured: true,
    github: "https://github.com/AkshatKardak/akshat-portfolio",
    live: "",
    image: "/images/folio.png",
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
    title: "Java Programming",
    issuer: "Vidyalankar Institute of Technology",
    date: "01-01-2026",
    year: "2026",
    color: "#f97316",
    image: "/images/Java.png",
    description:
      "Completed Java programming course at Vidyalankar Institute of Technology covering OOP concepts, data structures, exception handling, and building console-based applications.",
    tags: ["Java", "OOP", "Data Structures", "Exception Handling"],
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2024",
    year: "2024",
    color: "#f59e0b",
    image: "/images/software.png",
    description:
      "Simulated real-world software engineering tasks including debugging, code review, and building features in a professional engineering workflow.",
    tags: ["Software Engineering", "Debugging", "Code Review", "Problem Solving"],
  },
  {
    title: "ReactJS for Beginners",
    issuer: "Simplilearn",
    date: "2024",
    year: "2024",
    color: "#ef4444",
    image: "/images/react.png",
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
    image: "/images/forage frontend .png",
    pdfUrl: "",
    description:
      "Skyscanner's front-end simulation covering component-driven development, accessibility, and building production-quality UI in a real codebase context.",
    tags: ["Frontend", "React", "Accessibility", "UI Engineering"],
  },
];

export const navItems: NavItem[] = [
  { id: "home",           label: "Dashboard"      },
  { id: "about",          label: "About"          },
  { id: "projects",       label: "Projects"       },
  { id: "skills",         label: "Skills"         },
  { id: "experience",     label: "Experience"     },
  { id: "certifications", label: "Certifications" },
  { id: "contact",        label: "Contact"        },
];
