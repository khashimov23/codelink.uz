"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, HeartHandshake } from "lucide-react";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, childVariants } from "@/components/motion/stagger-children";
import { Counter } from "@/components/motion/counter";
import { STATS } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

const FEATURE_ICONS = [Zap, Shield, Users, HeartHandshake];

export function WhyUs() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="why-us" className="relative bg-black py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-medium tracking-widest text-brand"
          >
            {t.whyUs.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {t.whyUs.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-light/50"
          >
            {t.whyUs.subtitle}
          </motion.p>
        </div>

        {/* Stats */}
        <StaggerChildren className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div key={index} variants={childVariants} className="text-center">
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-brand-light/50">{t.whyUs.stats[index].label}</p>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Features */}
        <StaggerChildren className="grid gap-6 sm:grid-cols-2" staggerDelay={0.12}>
          {t.whyUs.features.map((feature: { title: string; description: string }, index: number) => {
            const Icon = FEATURE_ICONS[index];
            return (
              <motion.div
                key={index}
                variants={childVariants}
                className="group rounded-xl border border-white/5 bg-card p-8 transition-all duration-300 hover:border-brand/20"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-light/50">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
