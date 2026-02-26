"use client";

import { Instagram, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

const SOCIAL_LINKS = [
  { label: "Telegram", href: "https://t.me/codelink_admin", icon: Send },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/codelinkuz", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/codelink.uz/", icon: Instagram },
];

const FOOTER_NAV_HREFS = [
  { key: "services" as const, href: "#services" },
  { key: "about" as const, href: "#why-us" },
  { key: "process" as const, href: "#process" },
  { key: "portfolio" as const, href: "#portfolio" },
  { key: "contact" as const, href: "#contact" },
];

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative bg-black">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-center">
          {/* Brand */}
          <div>
            <a href="#" className="mb-4 flex items-center gap-2.5">
              <Image
                src="/codelink_logo.svg"
                alt="CODELINK"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
            </a>
            <p className="mt-3 max-w-xs text-sm text-brand-light/40">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6">
            {FOOTER_NAV_HREFS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-brand-light/50 transition-colors hover:text-white"
              >
                {t.footer.nav[link.key]}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 text-brand-light/50 transition-all duration-200 hover:border-brand/30 hover:text-brand"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-brand-light/30">
            &copy; {new Date().getFullYear()} Codelink.uz. {t.footer.rights}
          </p>
          <p className="text-xs text-brand-light/30">
            {t.footer.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
