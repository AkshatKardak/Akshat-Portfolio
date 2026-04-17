
// PERSONAL
export const personal = {
  name:       "Akshat Kardak",
  firstName:  "Akshat",
  lastName:   "Kardak",
  role:       "Full Stack Developer",
  tagline:    "Building with precision",
  bio:
    "Full-stack developer from Mumbai building production-grade web and mobile apps with Next.js, Node.js, Flutter, and Python. I ship real products — from NGO donation platforms to AI-powered tools — with clean architecture and strong UX instincts.",

  location:  "Mumbai, India",
  college:   "Datta Meghe College of Engineering, Mumbai",
  email:     "kardakakshat@gmail.com",

  github:         "https://github.com/AkshatKardak",
  githubUsername: "AkshatKardak",
  linkedin:       "https://www.linkedin.com/in/akshatkardak",

  resumeUrl: "/resume.pdf",
  avatar:    "/images/Akshat.png",

  available: true,

  techStack: [
    "Next.js", "React", "TypeScript",
    "Node.js", "Flutter", "Python",
    "Firebase", "MongoDB", "Tailwind",
  ],
};

// TYPEWRITER ROLES

export const roles: string[] = [
  "Full Stack Developer",
  "Building with precision",
  "Focused on scalable systems",
  "Engineered for performance",
  "High-level product thinking",
];

// ════════════════════════════════════════════════════════════
// HERO STATS
// ════════════════════════════════════════════════════════════

export type Stat = {
  label: string;
  value: string;
  sub?:  string;
  icon:  string;
};

export const stats: Stat[] = [
  {
    label: "Projects Built",
    value: "6",
    sub:   "All production-ready",
    icon:  "PK",
  },
  {
    label: "Technologies",
    value: "12+",
    sub:   "Across full stack",
    icon:  "TS",
  },
  {
    label: "Internship",
    value: "1",
    sub:   "3 months · Employment Express",
    icon:  "IN",
  },
  {
    label: "Certifications",
    value: "5",
    sub:   "Forage · Deloitte · Simplilearn",
    icon:  "CR",
  },
];

// ════════════════════════════════════════════════════════════
// CODE PREVIEW (terminal snippet in hero)
// ════════════════════════════════════════════════════════════

export type CodeLine = {
  num:   number;
  text:  string;
  color: string;
};

export const codePreview: CodeLine[] = [
  { num: 1,  text: "const developer = {",                                   color: "var(--text)"     },
  { num: 2,  text: '  name: "Akshat Kardak",',                              color: "var(--accent)"   },
  { num: 3,  text: '  role: "Full Stack Developer",',                       color: "var(--accent)"   },
  { num: 4,  text: '  location: "Mumbai, India",',                          color: "var(--success)"  },
  { num: 5,  text: "  projects: {",                                         color: "var(--text)"     },
  { num: 6,  text: '    featured: ["RentRide", "UnitedImpact"],',            color: "var(--crimson)"  },
  { num: 7,  text: '    product:  ["CampusDrop"],',                          color: "var(--crimson)"  },
  { num: 8,  text: "  },",                                                  color: "var(--text)"     },
  { num: 9,  text: "  stack: {",                                            color: "var(--text)"     },
  { num: 10, text: '    frontend: ["React", "Next.js", "Tailwind"],',        color: "var(--orange)"   },
  { num: 11, text: '    backend:  ["Node.js", "Express", "FastAPI"],',       color: "var(--orange)"   },
  { num: 12, text: '    database: ["MongoDB", "Firebase"],',                 color: "var(--orange)"   },
  { num: 13, text: "  },",                                                  color: "var(--text)"     },
  { num: 14, text: '  focus: "Scalable real-world apps",',                  color: "var(--success)"  },
  { num: 15, text: "};",                                                    color: "var(--text)"     },
  { num: 16, text: "",                                                       color: ""                },
  { num: 17, text: "export default developer;",                             color: "var(--accent)"   },
];

// ════════════════════════════════════════════════════════════
// PROJECTS
// ════════════════════════════════════════════════════════════

export type Project = {
  title:        string;
  subtitle:     string;
  description:  string;
  tags:         string[];
  github:       string;
  live:         string | null;
  badge:        string;
  badgeColor:   string;
  highlights?:  string[];
  year?:        string;
  featured?:    boolean;
};

export const projects: Project[] = [
  {
    title:       "RentRide",
    subtitle:    "Car Rental Platform · MERN",
    description:
      "Full-stack car rental platform with admin dashboard, AI chat assistant, damage report system, and Razorpay payment processing. Built end-to-end with the MERN stack.",
    tags:        ["MongoDB", "Express", "React", "Node.js", "Razorpay", "AI Chat"],
    github:      "https://github.com/AkshatKardak/car-rental-mern",
    live:        null,
    badge:       "Featured",
    badgeColor:  "var(--accent)",
    highlights: [
      "Admin dashboard with full fleet management",
      "Integrated Razorpay for live payment processing",
      "AI chat assistant for booking guidance",
    ],
    year:     "2024",
    featured: true,
  },
  {
    title:       "UnitedImpact",
    subtitle:    "NGO Donation Platform",
    description:
      "Real-time NGO donation platform with Firebase authentication, Razorpay payments, interactive donor mapping, and a responsive React frontend connecting donors with verified causes.",
    tags:        ["React", "Node.js", "MongoDB", "Firebase", "Razorpay", "Maps"],
    github:      "https://github.com/AkshatKardak",
    live:        null,
    badge:       "Featured",
    badgeColor:  "var(--accent)",
    highlights: [
      "Firebase Auth + Razorpay end-to-end payments",
      "Real-time donor map with campaign tracking",
      "Mobile-responsive React frontend",
    ],
    year:     "2024",
    featured: true,
  },
  {
    title:       "RoastHub",
    subtitle:    "AI Tweet Generator",
    description:
      "AI-powered tweet generator and roast tool built with the MERN stack. Integrates a language model API to produce creative, witty content on demand.",
    tags:        ["MERN Stack", "AI API", "React", "Node.js"],
    github:      "https://github.com/AkshatKardak",
    live:        null,
    badge:       "Experiment",
    badgeColor:  "var(--crimson)",
    year:        "2024",
  },
  {
    title:       "Face Recognition Attendance",
    subtitle:    "Academic · Python",
    description:
      "Automated attendance system using real-time face recognition. Detects and matches student faces against a stored database, logging attendance without manual input.",
    tags:        ["Python", "OpenCV", "Face Recognition", "SQLite"],
    github:      "https://github.com/AkshatKardak",
    live:        null,
    badge:       "Academic",
    badgeColor:  "var(--success)",
    year:        "2024",
  },
  {
    title:       "Game Website",
    subtitle:    "Animated Game Portal",
    description:
      "A visually polished game portal with smooth GSAP animations, clean UI architecture, and strong responsive design focused on performance and immersive browsing.",
    tags:        ["HTML", "CSS", "JavaScript", "GSAP"],
    github:      "https://github.com/AkshatKardak",
    live:        null,
    badge:       "Design",
    badgeColor:  "var(--orange)",
    year:        "2024",
  },
  {
    title:       "CampusDrop",
    subtitle:    "Campus Marketplace · Flutter",
    description:
      "Flutter mobile app for a campus buy-sell marketplace. Firebase Realtime Database backend, Cloudinary image hosting, and real-time listings for student-to-student transactions.",
    tags:        ["Flutter", "Firebase", "Cloudinary", "Dart"],
    github:      "https://github.com/AkshatKardak",
    live:        null,
    badge:       "Mobile",
    badgeColor:  "var(--gold)",
    year:        "2025",
  },
];

// ════════════════════════════════════════════════════════════
// SKILLS
// No fake percentage bars. Uses tier system instead.
// tier: "core" = daily driver | "strong" = solid | "working" = comfortable
// ════════════════════════════════════════════════════════════

export type SkillTier = "core" | "strong" | "working";

export type Skill = {
  name: string;
  tier: SkillTier;
};

export type SkillGroup = {
  category:    string;
  description: string;
  color:       string;
  skills:      Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category:    "Frontend",
    description: "UI, animations, responsive design",
    color:       "var(--accent)",
    skills: [
      { name: "React.js",     tier: "core"    },
      { name: "Next.js",      tier: "core"    },
      { name: "Tailwind CSS", tier: "core"    },
      { name: "JavaScript",   tier: "core"    },
      { name: "TypeScript",   tier: "strong"  },
      { name: "HTML & CSS",   tier: "core"    },
      { name: "Flutter",      tier: "strong"  },
      { name: "GSAP",         tier: "working" },
    ],
  },
  {
    category:    "Backend",
    description: "APIs, auth, real-time systems",
    color:       "var(--crimson)",
    skills: [
      { name: "Node.js",    tier: "core"    },
      { name: "Express.js", tier: "core"    },
      { name: "FastAPI",    tier: "strong"  },
      { name: "REST APIs",  tier: "core"    },
      { name: "Firebase",   tier: "core"    },
      { name: "Socket.io",  tier: "working" },
    ],
  },
  {
    category:    "Database & Storage",
    description: "Data modelling, cloud storage",
    color:       "var(--success)",
    skills: [
      { name: "MongoDB",     tier: "core"    },
      { name: "Firebase DB", tier: "core"    },
      { name: "Supabase",    tier: "working" },
      { name: "Cloudinary",  tier: "strong"  },
      { name: "Razorpay",    tier: "strong"  },
    ],
  },
  {
    category:    "Languages & Tools",
    description: "Dev workflow and infrastructure",
    color:       "var(--orange)",
    skills: [
      { name: "Python",       tier: "core"    },
      { name: "Java",         tier: "strong"  },
      { name: "Dart",         tier: "strong"  },
      { name: "Git & GitHub", tier: "core"    },
      { name: "Vercel",       tier: "core"    },
      { name: "Netlify",      tier: "strong"  },
      { name: "Docker",       tier: "working" },
    ],
  },
];

// Tier label map — used for badge display in Skills.tsx
export const tierLabel: Record<SkillTier, string> = {
  core:    "Core",
  strong:  "Strong",
  working: "Working",
};

// Tier color map — Forge palette
export const tierColor: Record<SkillTier, string> = {
  core:    "var(--accent)",
  strong:  "var(--orange)",
  working: "var(--text-faint)",
};

// ════════════════════════════════════════════════════════════
// EXPERIENCE
// ════════════════════════════════════════════════════════════

export type ExperienceType =
  | "Internship"
  | "Organization"
  | "Hackathon"
  | "Education";

export type Experience = {
  role:        string;
  org:         string;
  type:        ExperienceType;
  typeLabel:   string;   // human-readable node label shown in timeline
  period:      string;
  duration:    string;
  description: string;
  tags:        string[];
  color:       string;
  icon:        string;
};

export const experiences: Experience[] = [
  {
    role:      "Web Development Intern",
    org:       "Employment Express Verband LLP",
    type:      "Internship",
    typeLabel: "Internship",
    period:    "Aug 2025 – Oct 2025",
    duration:  "3 months",
    description:
      "Completed a 3-month web development internship shipping frontend and backend features within a real product workflow. Worked across HTML, CSS, and JavaScript in a production codebase with direct client-facing impact.",
    tags:  ["Web Development", "HTML", "CSS", "JavaScript"],
    color: "var(--accent)",
    icon:  "WEB",
  },
  {
    role:      "Publicity Team Member",
    org:       "Computer Society of India — DMCE Chapter",
    type:      "Organization",
    typeLabel: "Campus Organisation",
    period:    "Aug 2024 – Apr 2025",
    duration:  "9 months",
    description:
      "Led promotional outreach for technical events, workshops, and campus seminars under the CSI DMCE chapter. Helped grow event visibility and participation — a side of engineering that's easy to overlook but matters.",
    tags:  ["Event Management", "Publicity", "Leadership", "CSI"],
    color: "var(--crimson)",
    icon:  "CSI",
  },
  {
    role:      "Quantum Hacks Participant",
    org:       "Hackathon",
    type:      "Hackathon",
    typeLabel: "Hackathon",
    period:    "2025",
    duration:  "",
    description:
      "Designed and shipped a working product under time pressure at Quantum Hacks. Demonstrated rapid prototyping, team coordination, and the ability to deliver under constraints — the real test of a developer.",
    tags:  ["Rapid Prototyping", "Team Work", "Problem Solving"],
    color: "var(--success)",
    icon:  "QH",
  },
  {
    role:      "B.E. Computer Engineering",
    org:       "Datta Meghe College of Engineering · University of Mumbai",
    type:      "Education",
    typeLabel: "Education",
    period:    "2023 – 2027",
    duration:  "4 years",
    description:
      "Pursuing a B.E. in Computer Engineering with coursework in data structures, algorithms, databases, OS, and software engineering. Actively shipping projects alongside academics — treating the degree as a foundation, not the ceiling.",
    tags:  ["Computer Science", "University of Mumbai", "B.E.", "Engineering"],
    color: "var(--orange)",
    icon:  "BE",
  },
];

// ════════════════════════════════════════════════════════════
// CERTIFICATIONS
// ════════════════════════════════════════════════════════════

export type Certification = {
  title:          string;
  issuer:         string;
  description:    string;
  color:          string;
  icon:           string;
  tags:           string[];
  credentialUrl?: string;
  year?:          string;
};

export const certifications: Certification[] = [
  {
    title:       "Full Stack Developer",
    issuer:      "Certification Authority",
    description:
      "Comprehensive full-stack certification covering React, Node.js, Express, MongoDB, and Firebase across a structured frontend-to-backend curriculum.",
    color: "var(--accent)",
    icon:  "FS",
    tags:  ["Full Stack", "React", "Node.js"],
    year:  "2024",
  },
  {
    title:       "Software Engineering Job Simulation",
    issuer:      "Forage",
    description:
      "Completed Forage's software engineering simulation covering real engineering tasks, code reviews, and professional dev workflows.",
    color:          "var(--crimson)",
    icon:           "SE",
    tags:           ["Software Engineering", "Forage"],
    credentialUrl:  "https://forage.com",
    year:           "2024",
  },
  {
    title:       "Data Analytics Job Simulation",
    issuer:      "Deloitte Australia",
    description:
      "Hands-on analytics simulation covering data cleaning, visualisation, and business insight generation using industry-standard tooling.",
    color:         "var(--orange)",
    icon:          "DA",
    tags:          ["Data Analytics", "Deloitte"],
    credentialUrl: "https://forage.com",
    year:          "2024",
  },
  {
    title:       "ReactJS for Beginners",
    issuer:      "Simplilearn",
    description:
      "React fundamentals: components, hooks, state management, lifecycle methods, and modern UI patterns.",
    color: "var(--success)",
    icon:  "RJ",
    tags:  ["React.js", "Frontend", "Simplilearn"],
    year:  "2024",
  },
  {
    title:       "Front-End Software Engineering Simulation",
    issuer:      "Skyscanner via Forage",
    description:
      "Front-end engineering simulation from Skyscanner covering component design, accessibility, and production-quality UI engineering.",
    color:         "var(--gold)",
    icon:          "FE",
    tags:          ["Frontend", "Skyscanner", "Accessibility"],
    credentialUrl: "https://forage.com",
    year:          "2024",
  },
];

// ════════════════════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════════════════════

export type NavItem = {
  id:    string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "dashboard",      label: "Dashboard"      },
  { id: "projects",       label: "Projects"       },
  { id: "skills",         label: "Skills"         },
  { id: "experience",     label: "Experience"     },
  { id: "certifications", label: "Certifications" },
  { id: "contact",        label: "Contact"        },
];