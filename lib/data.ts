// ============================================
// SINGLE SOURCE OF TRUTH — Edit only this file
// ============================================

export const personal = {
  name: "Akshat Kardak",
  role: "Full Stack Developer",
  tagline: "Building scalable and impactful digital solutions",
  location: "Mumbai, India",
  college: "Datta Meghe College of Engineering, Mumbai",
  email: "kardakakshat@gmail.com",
  github: "https://github.com/AkshatKardak",
  githubUsername: "AkshatKardak",
  linkedin: "https://www.linkedin.com/in/akshatkardak",
  resumeUrl: "/resume.pdf", // Put your resume PDF in /public/resume.pdf
  available: true,
};

export const roles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Engineer",
  "Problem Solver",
];

export const stats = [
  { label: "Projects Built",  value: "8+",  icon: "📦" },
  { label: "Certifications",  value: "5",   icon: "🏅" },
  { label: "Internship",      value: "1",   icon: "💼" },
  { label: "GitHub Repos",    value: "15+", icon: "⭐" },
];

export const codePreview = [
  { num: 1,  text: `const developer = {`,                              color: "var(--text)" },
  { num: 2,  text: `  name: "Akshat Kardak",`,                         color: "var(--accent)" },
  { num: 3,  text: `  role: "Full Stack Developer",`,                  color: "var(--accent)" },
  { num: 4,  text: `  location: "Mumbai, India",`,                     color: "var(--success)" },
  { num: 5,  text: `  projects: {`,                                     color: "var(--text)" },
  { num: 6,  text: `    featured: ["RentRide", "UnitedImpact"],`,      color: "var(--violet)" },
  { num: 7,  text: `    experiments: ["RoastHub"],`,                   color: "var(--violet)" },
  { num: 8,  text: `  },`,                                              color: "var(--text)" },
  { num: 9,  text: `  stack: {`,                                        color: "var(--text)" },
  { num: 10, text: `    frontend: ["React", "Next.js", "Tailwind"],`,  color: "#f97316" },
  { num: 11, text: `    backend:  ["Node.js", "Express"],`,            color: "#f97316" },
  { num: 12, text: `    database: ["MongoDB", "Firebase"],`,           color: "#f97316" },
  { num: 13, text: `  },`,                                              color: "var(--text)" },
  { num: 14, text: `  focus: "Scalable real-world apps"`,             color: "var(--success)" },
  { num: 15, text: `};`,                                                color: "var(--text)" },
  { num: 16, text: ``,                                                  color: "" },
  { num: 17, text: `export default developer;`,                         color: "var(--accent)" },
];

// ============================================
// PROJECTS
// ============================================

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
  badge: string;
  badgeColor: string;
};

export const projects: Project[] = [
  {
    title: "RentRide",
    subtitle: "Car Rental MERN App",
    description:
      "Full-stack car rental platform with admin dashboard, AI chat assistant, damage report system, and Razorpay payment integration. Built end-to-end with the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Razorpay", "AI Chat"],
    github: "https://github.com/AkshatKardak/car-rental-mern",
    live: null,
    badge: "Primary",
    badgeColor: "var(--accent)",
  },
  {
    title: "UnitedImpact",
    subtitle: "NGO Donation Platform",
    description:
      "Real-time NGO donation platform with Firebase authentication, Razorpay payments, interactive mapping, and a responsive React frontend connecting donors with causes.",
    tags: ["React", "Node.js", "MongoDB", "Firebase", "Razorpay", "Maps"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Primary",
    badgeColor: "var(--accent)",
  },
  {
    title: "RoastHub",
    subtitle: "AI Tweet Generator",
    description:
      "AI-powered tweet generator and roast tool using the MERN stack. Integrates a language model API to generate creative, witty content on demand.",
    tags: ["MERN Stack", "AI API", "React", "Node.js"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Experiment",
    badgeColor: "var(--violet)",
  },
  {
    title: "Face Recognition Attendance",
    subtitle: "Academic Project",
    description:
      "Python-based automated attendance system using real-time face recognition. Detects and matches student faces against a database, logging attendance automatically.",
    tags: ["Python", "OpenCV", "Face Recognition", "SQLite"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Academic",
    badgeColor: "var(--success)",
  },
  {
    title: "Game Website",
    subtitle: "Animated Game Portal",
    description:
      "A visually polished game portal website with smooth animations, clean UI, and responsive design. Focus on performance and immersive web experience.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Design",
    badgeColor: "var(--warning)",
  },
  {
    title: "CampusDrop",
    subtitle: "Campus Marketplace App",
    description:
      "Flutter mobile app for campus marketplace with Firebase backend, Cloudinary image hosting, and real-time listings for students to buy and sell items.",
    tags: ["Flutter", "Firebase", "Cloudinary", "Dart"],
    github: "https://github.com/AkshatKardak",
    live: null,
    badge: "Mobile",
    badgeColor: "#f97316",
  },
];

// ============================================
// SKILLS
// ============================================

export type Skill = { name: string; level: number };
export type SkillGroup = {
  category: string;
  color: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    color: "var(--accent)",
    skills: [
      { name: "React.js",     level: 88 },
      { name: "Next.js",      level: 82 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript",   level: 87 },
      { name: "HTML & CSS",   level: 92 },
      { name: "Flutter",      level: 68 },
    ],
  },
  {
    category: "Backend",
    color: "var(--violet)",
    skills: [
      { name: "Node.js",     level: 80 },
      { name: "Express.js",  level: 78 },
      { name: "FastAPI",     level: 60 },
      { name: "REST APIs",   level: 82 },
      { name: "Firebase",    level: 76 },
      { name: "Socket.io",   level: 62 },
    ],
  },
  {
    category: "Database",
    color: "var(--success)",
    skills: [
      { name: "MongoDB",     level: 78 },
      { name: "Firebase DB", level: 74 },
      { name: "Supabase",    level: 55 },
      { name: "Cloudinary",  level: 70 },
    ],
  },
  {
    category: "Languages & Tools",
    color: "#f97316",
    skills: [
      { name: "Python",       level: 78 },
      { name: "Java",         level: 72 },
      { name: "TypeScript",   level: 65 },
      { name: "Git & GitHub", level: 85 },
      { name: "Vercel",       level: 80 },
      { name: "Razorpay",     level: 72 },
    ],
  },
];

// ============================================
// EXPERIENCE
// ============================================

export type Experience = {
  role: string;
  org: string;
  type: string;
  period: string;
  duration: string;
  description: string;
  tags: string[];
  color: string;
  icon: string;
};

export const experiences: Experience[] = [
  {
    role: "Web Development Intern",
    org: "Employment Express Verband LLP",
    type: "Internship",
    period: "Aug 2025 – Oct 2025",
    duration: "3 months",
    description:
      "Completed a 3-month web development internship (InternBoot program). Built and shipped frontend and backend features, gaining hands-on experience in real-world development workflows.",
    tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    color: "var(--accent)",
    icon: "💼",
  },
  {
    role: "Publicity Team Member",
    org: "Computer Society of India (CSI)",
    type: "Organization",
    period: "Aug 2024 – Apr 2025",
    duration: "9 months",
    description:
      "Active member of the Datta Meghe College CSI chapter. Participated in tech events, workshops, and managed social media and promotional materials for the chapter's activities.",
    tags: ["Event Management", "Publicity", "Leadership"],
    color: "var(--violet)",
    icon: "🏛️",
  },
  {
    role: "Quantum Hacks Participant",
    org: "Hackathon",
    type: "Hackathon",
    period: "2025",
    duration: "",
    description:
      "Participated in Quantum Hacks hackathon, designing and building a functional project under time constraints, focusing on problem-solving and rapid prototyping.",
    tags: ["Hackathon", "Problem Solving", "Team Collaboration"],
    color: "var(--success)",
    icon: "⚡",
  },
  {
    role: "B.E. Computer Engineering",
    org: "Datta Meghe College of Engineering, Mumbai",
    type: "Education",
    period: "2023 – 2027",
    duration: "4 years",
    description:
      "Pursuing Bachelor of Engineering in Computer Science at DMCE, University of Mumbai. Coursework spans algorithms, databases, operating systems, and software engineering.",
    tags: ["Computer Science", "University of Mumbai", "B.E."],
    color: "#f97316",
    icon: "🎓",
  },
];

// ============================================
// CERTIFICATIONS
// ============================================

export type Certification = {
  title: string;
  issuer: string;
  description: string;
  color: string;
  icon: string;
  tags: string[];
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Full Stack Developer",
    issuer: "Certification Authority",
    description:
      "Comprehensive full-stack development certification covering frontend, backend, and database technologies.",
    color: "var(--accent)",
    icon: "🖥️",
    tags: ["Full Stack", "Web Dev"],
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Forage",
    description:
      "Completed a software engineering job simulation, working on real-world engineering tasks and workflows.",
    color: "var(--violet)",
    icon: "⚙️",
    tags: ["Software Engineering", "Simulation"],
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    description:
      "Hands-on data analytics simulation with Deloitte Australia covering data analysis, visualization, and business insights.",
    color: "#f97316",
    icon: "📊",
    tags: ["Data Analytics", "Deloitte"],
  },
  {
    title: "ReactJS for Beginners",
    issuer: "Simplilearn",
    description:
      "ReactJS fundamentals certification covering components, hooks, state management, and building modern UIs.",
    color: "var(--success)",
    icon: "⚛️",
    tags: ["React.js", "Frontend"],
  },
  {
    title: "Front-End Software Engineering Simulation",
    issuer: "Skyscanner",
    description:
      "Front-end engineering simulation with Skyscanner covering component design, accessibility, and modern UI engineering.",
    color: "#a78bfa",
    icon: "✈️",
    tags: ["Frontend", "Skyscanner"],
  },
];

// ============================================
// NAV
// ============================================

export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "dashboard",      label: "Dashboard" },
  { id: "projects",       label: "Projects" },
  { id: "skills",         label: "Skills" },
  { id: "experience",     label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact",        label: "Contact" },
];