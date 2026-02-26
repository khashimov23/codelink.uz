"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { GlowButton } from "@/components/ui/glow-button";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { t } = useLocale();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      {/* Grid background */}
      <div className="grid-bg absolute inset-0" />

      {/* Floating glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 80, 0],
            y: [0, 60, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-brand/8 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 40, -60, 0],
            y: [0, -80, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-brand/3 blur-[80px]"
        />
      </div>

      {/* Cursor glow follower */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[80px] transition-all duration-700 ease-out"
      />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wider text-brand-light/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {t.hero.title1}
          <br />
          {t.hero.title2}{" "}
          <span className="gradient-text">{t.hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-brand-light/60 md:text-xl"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GlowButton href="#contact" variant="primary">
            {t.hero.cta1}
            <ArrowRight size={16} />
          </GlowButton>
          <GlowButton href="#services" variant="outline">
            {t.hero.cta2}
          </GlowButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <motion.a
            href="#services"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-2 text-xs tracking-widest text-brand-light/30 transition-colors hover:text-brand-light/60"
          >
            {t.hero.scroll}
            <ChevronDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
