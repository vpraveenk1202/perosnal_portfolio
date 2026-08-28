import type { SectionId } from "../types/portfolio";

export const navigationItems: Array<{ label: string; id: SectionId }> = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" }
];