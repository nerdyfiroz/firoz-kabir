"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/Icons";
import { PROFILE } from "@/data/portfolio";

const primaryLinks = [
  { href: "/#about", label: "About" },
  { href: "/#micro1-skills", label: "micro1" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/gswa", label: "GSWA" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    const cleanPath = pathname.replace(/\/$/, "") || "/";
    const cleanHref = href.replace(/\/$/, "") || "/";
    return cleanPath === cleanHref || (cleanHref !== "/" && cleanPath.startsWith(cleanHref));
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <div className="container">
        <div
          className={`mt-3 flex items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "border-sky-400/20 bg-slate-950/85 shadow-[0_14px_40px_-16px_rgba(2,6,23,0.9)]"
              : "border-white/10 bg-slate-950/60"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label={`${PROFILE.name} — Home`}
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Md. Firoz Kabir logo"
                width={38}
                height={38}
                unoptimized
                className="h-9 w-9 rounded-full border border-sky-400/40 object-cover transition-transform duration-200 group-hover:scale-105"
              />
              <span
                className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-400"
                aria-hidden="true"
              />
            </div>
            <div className="leading-tight">
              <div className="font-display text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                {PROFILE.name}
              </div>
              <div className="hidden sm:block text-[11px] font-medium text-slate-400">
                Mathematics • AI • Web3 • Full-Stack
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {primaryLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-bar"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-sky-500/20 hover:brightness-110 transition"
            >
              <span>Contact Me</span>
              <Icon name="arrow-right" size={14} />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex lg:hidden items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-slate-200 hover:bg-white/10 hover:text-white transition"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
            >
              <Icon name={mobileOpen ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              id="mobile-nav-drawer"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur-xl shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-2">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      isActive(link.href)
                        ? "bg-sky-500/15 text-sky-200 border border-sky-400/30"
                        : "bg-white/[0.04] text-slate-200 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-medium bg-white/[0.04] text-slate-200 hover:bg-white/10 hover:text-white border border-white/5"
                >
                  Full Bio
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-center bg-gradient-to-r from-sky-500 to-violet-500 text-white"
                >
                  Contact Me
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
