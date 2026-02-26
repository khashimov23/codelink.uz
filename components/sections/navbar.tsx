"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { GlowButton } from "@/components/ui/glow-button";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/locale-context";

const NAV_HREFS = [
  { key: "services" as const, href: "#services" },
  { key: "about" as const, href: "#why-us" },
  { key: "process" as const, href: "#process" },
  { key: "portfolio" as const, href: "#portfolio" },
  { key: "tech" as const, href: "#tech" },
  { key: "testimonials" as const, href: "#testimonials" },
];

export function Navbar() {
  const { t, locale, toggleLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/codelink_logo.svg"
            alt="CODELINK"
            width={36}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_HREFS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brand-light/70 transition-colors duration-200 hover:text-white"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        {/* Right side: lang toggle + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-widest text-brand-light/70 backdrop-blur-sm transition-all duration-200 hover:border-brand/30 hover:text-white"
          >
            <span className={locale === "en" ? "text-white" : "text-brand-light/40"}>EN</span>
            <span className="text-brand-light/30">/</span>
            <span className={locale === "uz" ? "text-white" : "text-brand-light/40"}>UZ</span>
          </button>
          <GlowButton href="#contact" variant="primary">
            {t.nav.contact}
          </GlowButton>
        </div>

        {/* Mobile: lang toggle + menu */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold tracking-widest text-brand-light/70"
          >
            <span className={locale === "en" ? "text-white" : "text-brand-light/40"}>EN</span>
            <span className="text-brand-light/30">/</span>
            <span className={locale === "uz" ? "text-white" : "text-brand-light/40"}>UZ</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/95 backdrop-blur-xl md:hidden"
          >
            {NAV_HREFS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl font-medium text-white transition-colors hover:text-brand"
              >
                {t.nav[link.key]}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_HREFS.length * 0.08 }}
            >
              <GlowButton
                href="#contact"
                variant="primary"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.contact}
              </GlowButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
