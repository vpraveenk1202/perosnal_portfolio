import type { LucideIcon } from "lucide-react";

export interface Project {
  number: string;
  title: string;
  description: string;
  stack: string;
  color: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type SectionId = "home" | "about" | "services" | "projects" | "contact";