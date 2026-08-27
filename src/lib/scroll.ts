import type { SectionId } from "../types/portfolio";

export function scrollToSection(id: SectionId): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}