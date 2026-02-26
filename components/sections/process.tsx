"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, childVariants } from "@/components/motion/stagger-children";
import { PROCESS_STEPS } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export function Process() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="process" className="relative bg-black py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-medium tracking-widest text-brand"
          >
            {t.process.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {t.process.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-light/50"
          >
            {t.process.subtitle}
          </motion.p>
        </div>

        <StaggerChildren className="relative" staggerDelay={0.15}>
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-brand/30 via-brand/10 to-transparent md:left-8" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                variants={childVariants}
                className="group relative flex gap-8 pl-2 md:gap-12"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-black text-sm font-bold text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand/10 md:h-16 md:w-16 md:text-base">
                  {step.step}
                </div>

                <div className="pb-2 pt-1 md:pt-3">
                  <h3 className="mb-2 text-xl font-semibold text-white md:text-2xl">
                    {t.process.steps[index].title}
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-brand-light/50 md:text-base">
                    {t.process.steps[index].description}
                  </p>
                </div>

                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute bottom-0 left-[23px] h-2 w-2 translate-y-6 rounded-full bg-brand/20 md:left-[35px]" />
                )}
              </motion.div>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
