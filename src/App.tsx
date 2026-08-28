import { lazy, Suspense } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";

const AboutSection = lazy(() => import("./components/sections/AboutSection").then(({ AboutSection }) => ({ default: AboutSection })));
const ExperienceSection = lazy(() => import("./components/sections/ExperienceSection").then(({ ExperienceSection }) => ({ default: ExperienceSection })));
const ServicesSection = lazy(() => import("./components/sections/ServicesSection").then(({ ServicesSection }) => ({ default: ServicesSection })));
const ProjectsSection = lazy(() => import("./components/sections/ProjectsSection").then(({ ProjectsSection }) => ({ default: ProjectsSection })));
const ContactSection = lazy(() => import("./components/sections/ContactSection").then(({ ContactSection }) => ({ default: ContactSection })));

export default function App() {
  return (
    <div className="noise min-h-screen bg-paper">
      <Header />

      <main>
        <HeroSection />
        <Suspense fallback={null}>
          <AboutSection />
          <ExperienceSection />
          <ServicesSection />
          <ProjectsSection />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}