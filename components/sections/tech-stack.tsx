"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, childVariants } from "@/components/motion/stagger-children";
import { TECH_STACK } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export function TechStack() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="tech" className="relative bg-black py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-medium tracking-widest text-brand"
          >
            {t.tech.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {t.tech.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-lg text-lg text-brand-light/50"
          >
            {t.tech.subtitle}
          </motion.p>
        </div>

        <StaggerChildren
          className="mx-auto grid max-w-4xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6"
          staggerDelay={0.06}
        >
          {TECH_STACK.map((tech) => (
            <motion.div
              key={tech.name}
              variants={childVariants}
              whileHover={{ scale: 1.08 }}
              className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-card p-5 transition-all duration-300 hover:border-brand/20 hover:shadow-[0_0_20px_rgba(43,190,138,0.08)]"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-xs font-medium text-brand-light/60 transition-colors group-hover:text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
