import { motion } from "framer-motion";
import { Reveal } from "../common/Reveal";
import { SectionLabel } from "../common/SectionLabel";

const skillCards = [
  ["01", "Frontend", "React.js • TypeScript • React Native"],
  ["02", "Backend", "Node.js • Express.js • REST APIs"],
  ["03", "Data + Cloud", "MySQL • MongoDB • Firebase • Docker"]
];

export function AboutSection() {
  return (
    <section id="about" className="paper-grid relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <motion.div
                whileHover={{ rotate: 0, y: -8 }}
                className="relative rotate-[-3deg] rounded-[2rem] border-2 border-black bg-white p-4 shadow-[18px_18px_0_#111]"
              >
                <img
                  src="/assets/paperclips.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute -right-7 -top-10 z-10 h-24 w-24"
                />

                {/* <div className="mb-4 flex items-center justify-between">
                  <span className="mono-font text-[10px] font-bold uppercase tracking-[.2em]">Developer ID</span>
                  <Sparkles size={16} />
                </div> */}

                <div className="overflow-hidden rounded-2xl bg-[#e8e2d7]">
                  <img
                    src="/assets/portrait-cutout.png"
                    alt="Praveen Kumar V"
                    className="h-[330px] w-full object-cover object-top"
                  />
                </div>

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h3 className="display-font text-xl font-bold">PRAVEEN KUMAR V</h3>
                    <p className="mono-font mt-1 text-[9px] uppercase tracking-[.16em] text-black/50">Full Stack Developer</p>
                  </div>
                  <span className="text-2xl font-black text-accent">PK</span>
                </div>

                {/* <div className="mt-4 overflow-hidden rounded-xl border border-black/10">
                  <img src="/assets/id-card-lanyard.png" alt="" className="h-24 w-full object-cover object-[50%_58%] opacity-80" />
                </div> */}
              </motion.div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel number="02">About me</SectionLabel>
              <h2 className="display-font max-w-4xl text-5xl font-bold leading-[.9] tracking-[-.06em] sm:text-7xl">
                BUILDING USEFUL
                <span className="block text-black/20">DIGITAL THINGS.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
               I am engaged in a wide range of activities in the field of frontend, backend, databases, API, and deployments in 
               order to combine the development with automations, SEO, and digital marketing to solve real business problems.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {skillCards.map(([number, title, text]) => (
                  <motion.div
                    key={number}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur"
                  >
                    <span className="mono-font text-xs text-black/30">{number}</span>
                    <h3 className="display-font mt-6 font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/50">{text}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}