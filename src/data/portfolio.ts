import { Code2, Figma, Film, Search } from "lucide-react";
import type { Project, Service } from "../types/portfolio";

export const roles = [
  "Freelancer",
  "Automation",
  "Full Stack"
];

export const services: Service[] = [
  {
    number: "01",
    title: "Website Development",

    description: "Responsive business websites and full-stack web applications built for real-world use.",
    icon: Code2,
   
  },
  {
    number: "02",
    title: "UI/UX + Figma Design",
    description: "Clean interfaces, landing pages, wireframes and practical design systems.",
    icon: Figma
  },
  {
    number: "03",
    title: "Video Editing",
    description: "Short-form social content, reels and polished promotional edits for digital brands.",
    icon: Film
  },
  {
    number: "04",
    title: "Technical SEO",
    description: "Technical foundations, on-page improvements and search-ready website structure.",
    icon: Search
  }
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Rental Home Management Portal",
    description: "Full-stack rental property management system with an admin dashboard, security and notifications.",
    stack: "React.js • Node.js • Express.js • MySQL",
    color: "#5b78d1",
    image: "/assets/rental-portal.webp"

  },
  {
    number: "02",
    title: "Real Estate Lead Automation",
    description: "Lead extraction and reporting workflow using OCR, Telegram, n8n and Google Sheets.",
    stack: "n8n • OCR • Telegram • Google Sheets",
    color: "#d8d1bd",
    image: "/assets/automate-optimized.jpg"
  },
  {
    number: "03",
    title: "interior Design Website",
    description: "Designed and developed a modern, responsive interior design website using React.js, TypeScript, and Tailwind CSS.",
    stack: "React js •Typescript",
    color: "#b5c989",
    image: "/assets/interior_Design_FrontPage.webp"
  },
  
 
  
];