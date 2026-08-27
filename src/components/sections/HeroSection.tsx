import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { Typewriter } from "../common/Typewriter";
import { roles } from "../../data/portfolio";
import { scrollToSection } from "../../lib/scroll";

export function HeroSection() {
  return (
    <section id="home" className="paper-grid relative flex min-h-screen items-center overflow-hidden bg-white px-5 pb-16 pt-28 sm:px-8 lg:pt-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div className="relative z-10">
          <Reveal>
            <div className="editorial-font text-2xl text-black/50 sm:text-3xl">
              I am
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="condensed-font mt-2 min-h-[.86em] text-[24vw] leading-[.82] text-black sm:text-[18vw] lg:text-[10rem]">
              <Typewriter words={roles} />
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-7 text-black/75 sm:text-lg sm:leading-8">
              I’m Praveen Kumar, turning ideas into high-performance digital products — from modern websites and web applications to intelligent automation systems that help businesses work smarter.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
  <div className="mt-9 flex flex-wrap gap-3">
    <a
      href="/assets/praveenresumes.pdf"
      download="Praveenkumarv_resume.pdf"
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#4b392f] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-[5px_5px_0_#111]"
    >
      <span className="relative z-10">Download Resume</span>
      <span className="relative z-10 flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white/15">
        <Download size={15} className="transition-transform duration-300 group-hover:translate-y-8" />
        <Download size={15} className="absolute -translate-y-8 transition-transform duration-300 group-hover:translate-y-0" />
      </span>
    </a>
  </div>
</Reveal>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[430px]"
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2rem] border-[8px] border-black bg-black shadow-[0_18px_0_rgba(17,17,17,.12)]"
          >
            <img
              src="/assets/hero-scene.png"
              alt="Praveen Kumar V"
              className="h-auto w-full object-cover"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-7 -left-5 rounded-[1.5rem] border border-black/10 bg-white p-3 shadow-lg sm:-left-8"
          >
            <div className="rounded-xl bg-[#f7e4cf] px-5 py-4">
              <p className="mono-font text-lg leading-8 tracking-[.22em] text-black/50">design</p>
              <p className="mono-font text-lg leading-8 tracking-[.22em] text-black/50">code</p>
              <p className="mono-font text-lg leading-8 tracking-[.22em] text-black/50">create</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-[.25em] text-black/40 sm:flex"
      >
        Scroll to explore <ArrowDown size={13} />
      </button>
    </section>
  );
}