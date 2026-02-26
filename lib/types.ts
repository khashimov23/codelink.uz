import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface NavLink {
  label: string;
  href: string;
}
