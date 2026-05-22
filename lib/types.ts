export interface SkillItem {
  name: string;
}

export interface SkillGroup {
  category: string;
  color: string;
  skills: SkillItem[];
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  duration?: string;
  color: string;
  tags: string[];
  bullets: string[];
  impact?: string;
  image?: string;
  certificateUrl?: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface Project {
  title: string;
  date?: string;
  color: string;
  featured: boolean;
  github?: string;
  live?: string;
  image?: string;
  tech: string[];
  bullets: string[];
  impact?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  year?: string;
  color: string;
  link?: string;
  credentialUrl?: string;
  image?: string;
  pdfUrl?: string;
  description?: string;
  tags: string[];
}

export interface AboutMe {
  name: string;
  role: string;
  location: string;
  college: string;
  resumeUrl: string;
  github: string;
  email: string;
}

export interface Personal {
  firstName: string;
  lastName: string;
  name: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  resumeUrl: string;
  avatar: string;
  available: boolean;
}

export interface NavItem {
  id: string;
  label: string;
}
