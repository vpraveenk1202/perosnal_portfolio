import { motion } from "framer-motion";
import { BriefcaseBusiness, Dot, LaptopMinimal, Megaphone, Plus, Radio } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionLabel } from "../common/SectionLabel";

const experiences = [
  {
    number: "01",
    period: "2025 - 2026",
    title: "Full Stack Developer",
    company: "PINR Info Tech",
    description: "Designed and developed multiple practical web products. Created front-end, back-end, databases, API, and deployment processes.",
    accent: false,
    icon: BriefcaseBusiness
  },
  {
    number: "02",
    period: "Present",
    title: "Digital Marketing Associate",
    company: "A2O Healthcare Management Services",
    description: "Increased the digital footprint through content creation and optimization, SEO, analytics, and marketing campaigns.",
    accent: true,
    icon: Megaphone
  },
  {
    number: "03",
    period: "Ongoing",
    title: "Freelancing",
    company: "Independent projects",
    description: "Collaborated with clients on various sites, digital marketing strategies, and automated solutions.",
    accent: false,
    icon: LaptopMinimal
  }
];

function TimelineNode({ accent = false, icon: Icon }: { accent?: boolean; icon: typeof BriefcaseBusiness }) {
  return (
    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-1 rounded-full border border-[#183b63]/35 border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-3 rounded-full border border-[#183b63]/45"
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ef9d32]" />
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#183b63]" />
      </motion.div>
      <span className={`absolute h-8 w-8 rounded-full border-4 ${accent ? "border-[#ef9d32] bg-transparent" : "border-[#183b63] bg-[#f8f4ea]"}`} />
      <span className={`relative flex h-10 w-10 items-center justify-center rounded-full ${accent ? "border-2 border-[#ef9d32]/75 bg-transparent text-[#ef9d32]" : "bg-[#f8f4ea] text-[#183b63]"}`}>
        <Icon size={21} strokeWidth={1.8} />
      </span>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#f8f4ea] px-5 py-24 text-[#183b63] sm:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(24,59,99,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(24,59,99,.07)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-start justify-between gap-8">
          <Reveal>
            <SectionLabel number="03">Career timeline</SectionLabel>
            <h2 className="display-font max-w-3xl text-5xl font-bold leading-[.88] tracking-[-.06em] sm:text-7xl lg:text-8xl">
              EXPERIENCE
              <span className="block font-normal text-[#183b63]/35">JOURNEY</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-[#183b63]/65 sm:text-base">
              A timeline of professional growth, impact, and continuous learning.
            </p>
          </Reveal>

          <div className="hidden items-center gap-3 pt-6 text-[9px] uppercase tracking-[.18em] text-[#183b63]/60 sm:flex">
            <div className="space-y-3">
              <p className="flex items-center gap-2"><Radio size={13} /> Main experience</p>
              <p className="flex items-center gap-2"><Plus size={13} /> Parallel experience</p>
            </div>
          </div>
        </div>

        <div className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-3 lg:gap-0">
          {experiences.map((experience, index) => (
            <Reveal key={experience.number} delay={index * 0.08}>
              <article className="relative flex gap-5 lg:block lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <div className="relative z-10 lg:mb-7"><TimelineNode accent={experience.accent} icon={experience.icon} /></div>
                <div className="flex-1 pb-2 lg:pb-0">
                  <div className="mb-4 flex items-center gap-4"><span className="mono-font text-sm font-bold">{experience.number}</span><span className="h-px w-24 bg-[#183b63]/30" /></div>
                  <p className="mono-font text-xs uppercase tracking-[.12em] text-[#183b63]/55">{experience.period}</p>
                  <h3 className="display-font mt-4 whitespace-pre-line text-2xl font-bold leading-[1.05] sm:text-3xl">{experience.title}</h3>
                  <p className={`mt-3 text-lg font-medium ${experience.accent ? "text-[#ef9d32]" : "text-[#183b63]/70"}`}>{experience.company}</p>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#183b63]/60">{experience.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 max-w-xs border border-[#183b63]/35 p-5 sm:mt-20">
            <p className="mono-font flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em]"> Skills & expertise</p>
            <div className="mt-5 space-y-3 text-xs text-[#183b63]/70">
              <p className="flex items-center gap-2"><Dot size={18} /> Fullstack - React js, Typescript, Nodejs, MySql,     python </p>
              <p className="flex items-center gap-2"><Dot size={18} /> Digital Marketing - Meta ads, SEO, </p>
              <p className="flex items-center gap-2"><Dot size={18} /> Automation - n8ncloud, make </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
