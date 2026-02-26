import {
  Smartphone,
  Globe,
  Server,
  Palette,
  Cloud,
  Lightbulb,
} from "lucide-react";
import type {
  Service,
  Stat,
  ProcessStep,
  Project,
  TechItem,
  Testimonial,
} from "./types";

export const SERVICES: Service[] = [
  {
    icon: Smartphone,
    title: "Native iOS & Android",
    description:
      "High-performance native apps built with Swift and Kotlin. Pixel-perfect UI, smooth animations, and rock-solid stability.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern web applications using Next.js, React, and TypeScript. Fast, accessible, and optimized for conversion.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Scalable backend systems with Node.js, Go, and PostgreSQL. Microservices, APIs, and real-time infrastructure.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Research-driven design that converts. Wireframes, prototypes, and design systems that users love.",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure on AWS and GCP. Zero-downtime deployments.",
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description:
      "From idea validation to market fit. We help you define scope, prioritize features, and ship what matters.",
  },
];

export const STATS: Stat[] = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Team Members" },
  { value: 5, suffix: "+", label: "Years of Experience" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We dig deep into your goals, users, and market. No assumptions — just data-driven clarity.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes, prototypes, and UI design validated with real user feedback before a single line of code.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Agile sprints with weekly demos. Clean code, thorough reviews, and transparent progress tracking.",
  },
  {
    step: "04",
    title: "Testing & QA",
    description:
      "Automated tests, manual QA, performance audits, and security checks. We ship with confidence.",
  },
  {
    step: "05",
    title: "Launch & Scale",
    description:
      "Smooth deployment, monitoring, and ongoing optimization. We stay with you post-launch.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Joymee.uz",
    category: "Full-Stack Platform",
    description:
      "Complete delivery platform — web, iOS, Android, and admin dashboard. Built for scale and speed.",
    image: "/projects/joymee.jpg",
    href: "https://joymee.uz",
  },
  {
    title: "FinTech Mobile App",
    category: "Mobile Banking",
    description:
      "Secure mobile banking application with biometric auth, real-time transactions, and analytics dashboard.",
    image: "/projects/fintech.jpg",
  },
  {
    title: "Enterprise Portal",
    category: "Web Application",
    description:
      "Corporate management system with role-based access, reporting, and real-time collaboration features.",
    image: "/projects/portal.jpg",
  },
];

export const TECH_STACK: TechItem[] = [
  { name: "Swift", icon: "🍎" },
  { name: "SwiftUI", icon: "⚡️" },
  { name: "Kotlin", icon: "🤖" },
  { name: "Compose", icon: "🟢" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "🐍" },
  { name: "Go", icon: "🔵" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🎨" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Codelink delivered our entire platform — web, iOS, Android, and admin dashboard — on time and with exceptional quality. They're our go-to team.",
    author: "Joymee.uz Team",
    role: "Product Team",
    company: "Joymee.uz",
  },
  {
    quote:
      "Professional communication, clean code, and they actually understand product thinking. Rare combination in this market.",
    author: "Aziz K.",
    role: "Founder",
    company: "FinTech Startup",
  },
  {
    quote:
      "We needed a team that could move fast without cutting corners. Codelink exceeded every expectation we had.",
    author: "Dmitry R.",
    role: "CTO",
    company: "Enterprise Client",
  },
];
