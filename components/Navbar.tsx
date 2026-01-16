"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
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
        <div className="mt-4 flex items-center justify-between glass px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="MK logo" width={40} height={40} className="h-10 w-10 rounded-full" />
            <div>
              <div className="font-semibold">Muhammad Firoz Kabir</div>
              <div className="text-sm text-slate-300">Mathematics • AI • Blockchain</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-3" aria-label="Main">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="relative px-3 py-2 text-sm text-slate-200 hover:text-white">
                {link.label}
                {pathname === link.href ? (
                  <motion.span layoutId="nav-underline" className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[var(--c1)]" />
                ) : null}
              </Link>
            ))}
          </nav>
          <div className="md:hidden text-sm text-slate-200">Menu</div>
        </div>
      </div>
    </header>
  );
}
