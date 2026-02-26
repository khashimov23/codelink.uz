"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { useLocale } from "@/lib/locale-context";

export function CTA() {
  const { t } = useLocale();

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-brand/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-sm font-medium tracking-widest text-brand"
        >
          {t.cta.tag}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {t.cta.title1}
          <br />
          {t.cta.title2} <span className="gradient-text">{t.cta.titleAccent}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-lg text-lg text-brand-light/50"
        >
          {t.cta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GlowButton href="https://t.me/codelink_admin" variant="primary">
            {t.cta.cta1}
            <ArrowRight size={16} />
          </GlowButton>
          <GlowButton href="mailto:codelinkuz@gmail.com" variant="outline">
            {t.cta.cta2}
          </GlowButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xs text-brand-light/30"
        >
          {t.cta.note}
        </motion.p>
      </div>
    </section>
  );
}
