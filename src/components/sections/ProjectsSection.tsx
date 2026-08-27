import { motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { SectionLabel } from "../common/SectionLabel";
import { projects } from "../../data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-paper px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-end justify-between gap-5">
            <div>
              <SectionLabel number="04">Selected work</SectionLabel>
              <h2 className="display-font text-5xl font-bold leading-[.9] tracking-[-.06em] sm:text-7xl">
                PROJECT<br /><span className="text-black/20">ARCHIVE.</span>
              </h2>
            </div>
            <Layers3 className="hidden text-black/20 sm:block" size={65} strokeWidth={1} />
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -10 }}
              style={{ backgroundColor: project.color }}
              className="group relative flex min-h-[470px] flex-col overflow-hidden rounded-[1.7rem] p-5"
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full bg-white/85 px-3 py-1 text-[10px] font-black">PROJECT</span>
                <ArrowUpRight className="transition group-hover:rotate-45" size={18} />
              </div>

              <div className="relative z-10 mt-10 flex flex-1 items-center">
                <div className="w-full rotate-[-4deg] overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0_rgba(0,0,0,.18)] transition group-hover:rotate-0">
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} preview`} className="h-48 w-full object-cover" />
                  ) : (
                    <div className="p-4">
                      <div className="flex gap-2">
                        <span className="h-2 w-2 rounded-full bg-black/20" />
                        <span className="h-2 w-2 rounded-full bg-black/20" />
                        <span className="h-2 w-2 rounded-full bg-black/20" />
                      </div>
                      <div className="mt-6 h-24 rounded-xl bg-black/5 p-4">
                        <div className="h-3 w-2/3 rounded bg-black/15" />
                        <div className="mt-3 h-2 w-full rounded bg-black/10" />
                        <div className="mt-2 h-2 w-4/5 rounded bg-black/10" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <span className="section-number absolute -bottom-8 -right-2 text-[10rem] font-black leading-none">
                {project.number}  
              </span>

              <div className="relative z-10">
                <h3 className="display-font text-xl font-bold leading-tight">{project.title}</h3>
                <p className="mt-2 text-xs leading-5 text-black/65">{project.description}</p>
                <p className="mono-font mt-3 text-[9px] uppercase tracking-[.08em] text-black/55">{project.stack}</p>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold underline decoration-2 underline-offset-4 transition hover:text-accent">
                    View on GitHub <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}