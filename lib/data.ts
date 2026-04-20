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
  email: "akshat@example.com",
};

export const personal: Personal = {
  firstName: "Akshat",
  lastName: "Kardak",
  name: "Akshat Kardak",
  bio: "Full-stack developer building production-grade web and mobile applications — from NGO donation platforms to AI-powered systems. I write code that ships.",
  location: "Mumbai, India",
  email: "akshat@example.com",
  github: "https://github.com/AkshatKardak",
  githubUsername: "AkshatKardak",
  linkedin: "https://linkedin.com/in/akshat-kardak",
  resumeUrl: "/Akshat_Kardak_Resume.pdf",
  avatar: "/akshat.jpg",
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
    role: "Full Stack Developer",
    org: "UnitedImpact",
    period: "2024 – Present",
    duration: "Ongoing",
    color: "#f59e0b",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Razorpay"],
    bullets: [
      "Built an NGO donation platform with real-time mapping using Leaflet.js and live donor tracking across campaigns.",
      "Integrated Razorpay payment gateway with Firebase Auth for secure, end-to-end donation flows.",
      "Designed an admin dashboard for NGO managers to track donations, manage campaigns, and export reports.",
    ],
    impact:
      "Enabled real-money donations to verified NGOs with a scalable, secure platform built from scratch.",
  },
  {
    role: "Full Stack Developer",
    org: "RentRide",
    period: "2024",
    duration: "3 months",
    color: "#f59e0b",
    tags: ["React", "Express", "MongoDB", "Gemini API", "Razorpay"],
    bullets: [
      "Developed a full car rental platform with vehicle listing, availability calendar, and booking management.",
      "Integrated Gemini API as an AI chat assistant to help users find the right car based on trip requirements.",
      "Built a damage report system with image upload and admin review pipeline for post-rental disputes.",
    ],
    impact:
      "Shipped a production-ready rental platform with AI assistance and end-to-end payment processing.",
  },
  {
    role: "Mobile Developer",
    org: "CampusDrop",
    period: "2024",
    duration: "2 months",
    color: "#10b981",
    tags: ["Flutter", "Dart", "Firebase", "Cloudinary"],
    bullets: [
      "Built a Flutter-based campus marketplace for peer-to-peer buying and selling of academic resources.",
      "Implemented Cloudinary for optimized image hosting and Firebase for real-time listing updates.",
      "Added secure student authentication and in-app chat for buyer-seller communication.",
    ],
    impact:
      "Created a functional marketplace used by real students on campus with live listings and secure auth.",
  },
  {
    role: "Security Engineer",
    org: "Defend — Zombie API",
    period: "2023 – 2024",
    duration: "Hackathon + Build",
    color: "#ef4444",
    tags: ["Python", "FastAPI", "Machine Learning", "Anomaly Detection"],
    bullets: [
      "Built a cybersecurity threat detection system using Python FastAPI with ML-based network traffic analysis.",
      "Implemented anomaly detection algorithms to flag unusual API request patterns in real time.",
      "Designed a dashboard to visualize threat scores and blocked request logs for security review.",
    ],
    impact:
      "Delivered a working threat detection engine capable of flagging anomalous API traffic patterns in real time.",
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
    title: "CampusDrop",
    date: "2024",
    color: "#10b981",
    featured: false,
    github: "https://github.com/AkshatKardak/CampusDrop",
    live: "",
    image: "",
    tech: ["Flutter", "Dart", "Firebase", "Cloudinary"],
    bullets: [
      "Campus marketplace Flutter app for peer-to-peer buying and selling among students.",
      "Firebase real-time backend with Cloudinary image hosting and in-app buyer-seller chat.",
    ],
    impact:
      "Live marketplace used by real students with secure auth and real-time listing updates.",
  },
  {
    title: "Defend — Zombie API",
    date: "2023 – 2024",
    color: "#ef4444",
    featured: false,
    github: "https://github.com/AkshatKardak/Defend",
    live: "",
    image: "",
    tech: ["Python", "FastAPI", "Machine Learning", "Anomaly Detection"],
    bullets: [
      "ML-powered network threat detection system with FastAPI backend and real-time anomaly scoring.",
      "Dashboard for visualizing threat logs, blocked requests, and risk score trends.",
    ],
    impact:
      "Real-time threat detection engine that flags anomalous API traffic patterns with ML scoring.",
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
    title: "Full Stack Web Development",
    issuer: "Coursera",
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
    title: "Flutter & Dart — The Complete Bootcamp",
    issuer: "Udemy",
    date: "2024",
    year: "2024",
    color: "#10b981",
    link: "",
    credentialUrl: "",
    image: "",
    description:
      "Mastered Flutter and Dart through 28+ hours of hands-on instruction covering state management, Firebase integration, animations, and app deployment.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile Development"],
  },
  {
    title: "Python for Data Science & AI",
    issuer: "IBM",
    date: "2023",
    year: "2023",
    color: "#f59e0b",
    link: "",
    credentialUrl: "",
    image: "",
    description:
      "IBM-backed Coursera program covering Python fundamentals, NumPy, Pandas, data visualization, and introductory machine learning concepts.",
    tags: ["Python", "Pandas", "NumPy", "Machine Learning", "Data Science"],
  },
  {
    title: "MongoDB for JavaScript Developers",
    issuer: "MongoDB University",
    date: "2024",
    year: "2024",
    color: "#ef4444",
    link: "",
    credentialUrl: "",
    image: "",
    description:
      "Official MongoDB University course on schema design, aggregation pipelines, indexing strategies, and integrating MongoDB with Node.js applications.",
    tags: ["MongoDB", "Node.js", "Aggregation", "Schema Design", "Databases"],
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