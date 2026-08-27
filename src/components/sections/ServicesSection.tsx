import { motion } from "framer-motion";
import { Reveal } from "../common/Reveal";
import { SectionLabel } from "../common/SectionLabel";
import { services } from "../../data/portfolio";

export function ServicesSection() {
  return (
    <section id="services" className="bg-black px-5 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel number="03" dark>Services</SectionLabel>
              <h2 className="display-font text-5xl font-bold leading-[.9] tracking-[-.06em] sm:text-7xl">
                WHAT I<br />CAN BUILD.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/45">
              A compact set of development, design, content and growth services for modern brands and businesses.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="card-shine group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.045] p-7 sm:p-9"
              >
                <div className="relative z-10 flex min-h-[270px] flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={25} />
                    </div>
                    <span className="mono-font text-xs text-white/25">{service.number}</span>
                  </div>

                  <div>
                    <h3 className="display-font text-3xl font-bold tracking-tight">{service.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/45">{service.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}