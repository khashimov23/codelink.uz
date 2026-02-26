"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, childVariants } from "@/components/motion/stagger-children";
import { TESTIMONIALS } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export function Testimonials() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="testimonials" className="relative bg-black py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-medium tracking-widest text-brand"
          >
            {t.testimonials.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {t.testimonials.title}
          </motion.h2>
        </div>

        <StaggerChildren className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="relative rounded-xl border border-white/5 bg-card p-8"
            >
              <Quote size={24} className="mb-4 text-brand/30" />
              <p className="mb-6 text-sm leading-relaxed text-brand-light/70">
                &ldquo;{t.testimonials.items[index].quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="text-xs text-brand-light/40">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
