import {
  FileText,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  index: string;
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Project = {
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ResumeEntry = {
  title: string;
  organization: string;
  organizationType?: string;
  period?: string;
  location?: string;
  details: string[];
};

export const navItems: NavItem[] = [
  { index: "01", label: "Profile", href: "#profile" },
  { index: "02", label: "Selected Work", href: "#work" },
  { index: "03", label: "Skills", href: "#skills" },
  { index: "04", label: "Experience", href: "#experience" },
  { index: "05", label: "Education", href: "#education" },
  { index: "06", label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/JamesAngatia",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/cloneyjay",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:jamesangatia445@gmail.com",
    icon: Mail,
  },
  {
    label: "Resume request",
    href: "mailto:jamesangatia445@gmail.com?subject=Resume%20request",
    icon: FileText,
  },
];

export const projects: Project[] = [
  {
    index: "01",
    category: "Android",
    title: "BitDue Finance App",
    description:
      "Personal finance Android app for tracking transactions, budgets, savings goals, spending reports, biometric access, and chart-based analytics.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Flow", "Firebase"],
    github: "https://github.com/cloneyjay/bitdue",
  },
  {
    index: "02",
    category: "Flutter",
    title: "Looba",
    description:
      "Kenya service marketplace client with onboarding, auth, service discovery, bookings, provider storefronts, dashboards, reviews, Go APIs, and Supabase-backed data.",
    tags: ["Flutter", "Riverpod", "Dio", "Supabase", "Go API"],
    github: "https://github.com/cloneyjay/looba",
  },
  {
    index: "03",
    category: "Product Flow",
    title: "Bus Ticketing App",
    description:
      "Android booking flow covering authentication, route browsing, passenger details, seat selection, checkout screens, and Firebase-backed user data.",
    tags: ["Kotlin", "XML Layouts", "Firebase Auth", "Realtime Database"],
    github: "https://github.com/cloneyjay/busProject",
  },
  {
    index: "04",
    category: "Web Platform",
    title: "Ibafa Africa",
    description:
      "Next.js platform with public pages, member workspace, shop flows, admin inventory/orders/analytics, Supabase auth, Sanity content, and M-Pesa Daraja sandbox work.",
    tags: ["Next.js", "TypeScript", "Supabase", "Sanity", "Daraja"],
    github: "https://github.com/cloneyjay/ibafaafrica",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile",
    items: [
      "Kotlin",
      "Android SDK",
      "Jetpack Compose",
      "XML Layouts",
      "Material Design 3",
      "Flutter",
      "Riverpod",
      "React Native familiarity",
    ],
  },
  {
    title: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "HTMX",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Go",
      "Django",
      "REST APIs",
      "Firebase Auth",
      "Firebase Realtime Database",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    title: "Architecture & Tools",
    items: [
      "MVVM",
      "Repository Pattern",
      "Room",
      "Coroutines",
      "Flow",
      "Git",
      "GitHub",
      "Vitest",
      "Playwright",
    ],
  },
];

export const experience: ResumeEntry[] = [
  {
    title: "Software Developer",
    organization: "IBAFA Africa",
    organizationType: "Full-time",
    period: "May 2024 - Present",
    location: "Remote",
    details: [
      "Build and maintain product-facing web platform features across public pages, member workspace, shop flows, and admin workflows.",
      "Work with Supabase and Sanity-backed data/content flows for authentication, content, inventory, orders, and analytics surfaces.",
      "Support M-Pesa Daraja integration work and API-backed commerce flows.",
    ],
  },
  {
    title: "Computer Science Club Member",
    organization: "Kenyatta University",
    details: [
      "Organized and led workshops on Python automation and Git workflows.",
      "Participated in hackathons with two wins and three top-tier placements.",
      "Collaborated with peers on software projects, code reviews, debugging, and technical learning sessions.",
    ],
  },
  {
    title: "Volunteer Tutor",
    organization: "Kenyatta University Coding Centre",
    details: [
      "Tutored 20+ students in Java, Python, and C programming fundamentals.",
      "Supported students through debugging, hands-on coaching, and code reviews.",
      "Built communication practice by explaining programming concepts to beginners.",
    ],
  },
];

export const honors = [
  "Winner, KU Hackathon 2024 - Best Mobile Solution",
  "Dean's List, Kenyatta University, 2023",
  "Top 10 Finalist, Kenya Code Challenge 2022",
];
