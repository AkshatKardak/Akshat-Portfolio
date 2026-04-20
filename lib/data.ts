// lib/data.ts

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: string;
  category: "fullstack" | "frontend" | "ai" | "mobile";
  featured: boolean;
}

export const personal = {
  firstName: "Akshat",
  lastName: "Kardak",
  githubUsername: "AkshatKardak",
  name: "Akshat Kardak",
  email: "akshat.kardak@gmail.com",
  github: "https://github.com/AkshatKardak",
  linkedin: "https://linkedin.com/in/akshatkardak",
  location: "Mumbai, India",
  available: true,
  bio: "Full-stack developer focused on building high-performance web applications and AI-driven solutions. I like clear systems, sharp interfaces, and products that feel calm to use.",
  tagline: "Software Engineer · MERN Stack · Android Dev",
  avatar: "/images/Akshat.png",
  resumeUrl: "#",
  techStack: ["React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
};

export const projects: Project[] = [
  {
    id: "unitedimpact",
    title: "UnitedImpact",
    tagline: "NGO donation & volunteer platform",
    description:
      "A full-stack platform bridging donors, volunteers, and verified NGOs. Features Razorpay payments, map-based campaign discovery via Leaflet, real-time updates, and an admin dashboard with analytics.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "Razorpay",
      "Socket.IO",
      "Leaflet",
      "Cloudinary",
    ],
    images: ["https://unitedimpact-app.netlify.app/fav.png"],
    liveUrl: "https://unitedimpact-app.netlify.app",
    githubUrl: "https://github.com/AkshatKardak/UnitedImpact",
    color: "#f59e0b",
    category: "fullstack",
    featured: true,
  },
  {
    id: "rentride",
    title: "RentRide",
    tagline: "Full-stack MERN car rental platform",
    description:
      "A production-grade car rental web app with smart browsing, real-time booking, AI assistant, damage reports, and an admin dashboard. Built with MERN stack and Firebase Auth.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "Razorpay",
      "Tailwind CSS",
      "JWT",
    ],
    images: [
      "https://raw.githubusercontent.com/AkshatKardak/car-rental-mern/ec68e95a2c3564ba1d8c5a0a630b3ae52cbb82ff/screenshots/LandingSection.png",
      "https://raw.githubusercontent.com/AkshatKardak/car-rental-mern/ec68e95a2c3564ba1d8c5a0a630b3ae52cbb82ff/screenshots/BrowseCars.png",
    ],
    liveUrl: "https://rentridefrontend.vercel.app",
    githubUrl: "https://github.com/AkshatKardak/car-rental-mern",
    color: "#f59e0b",
    category: "fullstack",
    featured: true,
  },
  {
    id: "roasthub",
    title: "RoastHub",
    tagline: "AI-powered savage tweet generator",
    description:
      "Generate brutal, no-filter tweets with authentic Indian flavor — Bollywood references, cricket banter, and viral desi slang using GROQ AI.",
    tech: ["React", "Vite", "Framer Motion", "Node.js", "Express", "GROQ API"],
    images: ["https://roasthubfront.vercel.app/favicon.ico"],
    liveUrl: "https://roasthubfront.vercel.app",
    githubUrl: "https://github.com/AkshatKardak/RoastHub",
    color: "#f59e0b",
    category: "ai",
    featured: true,
  },
  {
    id: "galacticsquad",
    title: "Galactic Squad",
    tagline: "Esports gaming org website",
    description:
      "Frontend website for a gaming organization featuring a dynamic hero section, elite teams showcase, and a functional contact form.",
    tech: ["HTML", "CSS", "JavaScript", "EmailJS", "Framer Motion"],
    images: [],
    liveUrl: "https://game-website-final.vercel.app/",
    githubUrl: "https://github.com/AkshatKardak/game-website",
    color: "#f59e0b",
    category: "frontend",
    featured: false,
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    color: "#3b82f6",
    description: "Building responsive and dynamic user interfaces.",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Redux" },
    ],
  },
  {
    category: "Backend",
    color: "#22c55e",
    description: "Designing scalable server-side systems and APIs.",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Socket.IO" },
      { name: "Firebase" },
    ],
  },
  {
    category: "Cloud & DevTools",
    color: "#f59e0b",
    description: "Essential tools for deployment and collaboration.",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "Cloudinary" },
      { name: "VS Code" },
    ],
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    org: "Freelance / Projects",
    period: "2023 — Present",
    duration: "1+ year",
    description: "Building production-grade MERN applications and integrating AI features for various clients and personalized tools.",
    color: "#f59e0b",
    tags: ["React", "Node.js", "MongoDB", "AI"],
  },
  {
    role: "Core Team Member",
    org: "Academic Clubs",
    period: "2022 — 2024",
    description: "Leading technical workshops and managing events focused on software development and emerging technologies.",
    color: "#f59e0b",
    tags: ["Leadership", "Workshops", "Community"],
  },
];

export const certifications = [
  {
    title: "Software Engineering Virtual Experience",
    issuer: "Deloitte Australia",
    year: "2024",
    description: "Completed key modules on software development life cycles, cloud architecture, and data engineering.",
    credentialUrl: "https://www.theforage.com",
    color: "#f59e0b",
    tags: ["Software Engineering", "Cloud", "Business Analysis"],
    image: null,
  },
  {
    title: "Intro to Front-End Development",
    issuer: "Meta via Coursera",
    year: "2023",
    description: "Learned the fundamentals of modern frontend development, including React, HTML/CSS, and responsive design.",
    credentialUrl: "https://www.coursera.org",
    color: "#f59e0b",
    tags: ["React", "HTML", "CSS"],
    image: null,
  },
  {
    title: "Skyscanner Front-End Virtual Experience",
    issuer: "Skyscanner via Forage",
    year: "2024",
    description: "Worked on building car rental and travel search components using React and Skyscanner's design system.",
    credentialUrl: "https://www.theforage.com",
    color: "#f59e0b",
    tags: ["React", "UI/UX", "Travel Tech"],
    image: null,
  },
];

export const roles = ["Software Engineer", "Full Stack Developer", "AI Enthusiast"];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certification" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { label: "Active Projects", value: "10+", icon: "✨", sub: "Production builds" },
  { label: "Hours Coding", value: "2000+", icon: "💻", sub: "Deep learning" },
  { label: "Commits", value: "1200+", icon: "🔨", sub: "GitHub activity" },
  { label: "Coffee", value: "Infinite", icon: "☕", sub: "Fueled by caffeine" },
];
