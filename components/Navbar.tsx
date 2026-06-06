"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#works", label: "Works" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
  { href: "/gswa", label: "GSWA" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    const baseHref = href.split("#")[0];
    return pathname === baseHref;
  };

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <a
        href="#main"
        className="skip-link"
        style={{ position: "absolute", left: "-999px", top: "-999px" }}
        onFocus={(e: React.FocusEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.left = "12px";
          e.currentTarget.style.top = "12px";
        }}
        onBlur={(e: React.FocusEvent<HTMLAnchorElement>) => {
          e.currentTarget.style.left = "-999px";
          e.currentTarget.style.top = "-999px";
        }}
      >
        Skip to content
      </a>
      <div className="container">
        <div className="mt-4 flex flex-col glass px-4 py-3 transition-all duration-300">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/logo.png" alt="MK logo" width={40} height={40} unoptimized className="h-10 w-10 rounded-full" />
              <div>
                <div className="font-semibold text-sm sm:text-base whitespace-nowrap">Muhammad Firoz Kabir</div>
                <div className="text-xs text-slate-300 hidden sm:block">Mathematics • AI • Blockchain</div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-3" aria-label="Main">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    isActive(link.href) ? "text-white" : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-sky-400 via-violet-400 to-orange-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="md:hidden flex flex-col gap-1 mt-3 pt-3 border-t border-white/10 overflow-hidden"
                aria-label="Mobile"
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                      isActive(link.href) ? "bg-white/10 text-white font-semibold" : "text-slate-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
