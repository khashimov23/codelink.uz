"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, childVariants } from "@/components/motion/stagger-children";
import { SERVICES } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export function Services() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="services" className="relative bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-medium tracking-widest text-brand"
          >
            {t.services.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-light/50"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={childVariants}
              whileHover={{ y: -4 }}
              className="gradient-border group rounded-xl border border-white/5 bg-card p-8 transition-all duration-300 hover:border-brand/20"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
                <service.icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {t.services.items[index].title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-light/50">
                {t.services.items[index].description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
