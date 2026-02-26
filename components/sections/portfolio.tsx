"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/motion/section-wrapper";
import { StaggerChildren, childVariants } from "@/components/motion/stagger-children";
import { PROJECTS } from "@/lib/data";
import { useLocale } from "@/lib/locale-context";

export function Portfolio() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="portfolio" className="relative bg-black py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-medium tracking-widest text-brand"
          >
            {t.portfolio.tag}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {t.portfolio.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-light/50"
          >
            {t.portfolio.subtitle}
          </motion.p>
        </div>

        <StaggerChildren className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {PROJECTS.map((project, index) => {
            const Wrapper = project.href ? "a" : "div";
            const linkProps = project.href
              ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div key={project.title} variants={childVariants}>
                <Wrapper
                  {...linkProps}
                  className="group block overflow-hidden rounded-xl border border-white/5 bg-card transition-all duration-300 hover:border-brand/20"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand/5 to-brand/10">
                    <div className="flex h-full items-center justify-center">
                      <span className="text-4xl font-bold text-white/10">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                    {project.href && (
                      <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                        <ExternalLink size={14} />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="mb-2 text-xs font-medium tracking-wider text-brand">
                      {t.portfolio.projects[index].category}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-light/50">
                      {t.portfolio.projects[index].description}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </SectionWrapper>
  );
}
