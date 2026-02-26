"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export function GlowButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: GlowButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-brand text-black hover:bg-brand-hover glow-green",
    outline:
      "border border-white/10 text-brand-light hover:border-brand/40 hover:text-white bg-transparent",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(baseClasses, variants[variant], className)}
    >
      {children}
    </Component>
  );
}
