"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/Icons";
import { PROFILE } from "@/data/portfolio";

const verifiedHighlights = [
  {
    value: "7 Skills",
    label: "Certified by micro1",
    href: "#micro1-skills",
    accent: "text-sky-300",
  },
  {
    value: "Forage",
    label: "Data Labeling Simulation",
    href: "#certifications",
    accent: "text-emerald-300",
  },
  {
    value: "M.Sc. Math",
    label: "University of Rajshahi",
    href: "#education",
    accent: "text-violet-300",
  },
  {
    value: "Remote",
    label: "AI • Math • Web3 Ready",
    href: "#contact",
    accent: "text-indigo-300",
  },
];

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36"
    >
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <motion.div
          className="lg:col-span-7 space-y-6"
          initial={prefersReduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-3.5 py-1.5 text-xs font-medium text-sky-200">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>Open to International Remote AI, Mathematics, QA &amp; Web3 Opportunities</span>
          </div>

          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/90">
              {PROFILE.headline}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
              <span className="text-gradient">{PROFILE.name}</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
            {PROFILE.heroSummary}
          </p>

          <div className="flex flex-wrap gap-2" aria-label="Professional positioning roles">
            {PROFILE.roles.map((role) => (
              <span
                key={role}
                className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="#micro1-skills" className="button">
              <Icon name="award" size={17} />
              <span>View Certified Skills</span>
            </Link>
            <Link href="#projects" className="button secondary">
              <span>Explore Projects</span>
              <Icon name="arrow-right" size={16} />
            </Link>
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
              aria-label="GitHub profile of Md. Firoz Kabir"
            >
              <Icon name="github" size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="absolute -inset-1 rounded-[26px] bg-gradient-to-tr from-sky-500/35 via-violet-500/25 to-emerald-400/30 blur-xl opacity-75"
              aria-hidden="true"
            />
            <div className="relative glass p-6 sm:p-7 space-y-6">
              <div className="flex items-center gap-5">
                <div className="relative shrink-0">
                  <div
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-500 opacity-75 blur-[2px]"
                    aria-hidden="true"
                  />
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of Md. Firoz Kabir"
                    width={116}
                    height={116}
                    priority
                    unoptimized
                    className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl object-cover border border-white/20"
                  />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                    Academic &amp; Technical Profile
                  </p>
                  <p className="font-display text-lg sm:text-xl font-bold text-white truncate">
                    {PROFILE.name}
                  </p>
                  <p className="text-xs text-slate-300 flex items-center gap-1.5">
                    <Icon name="map-pin" size={14} className="text-sky-400 shrink-0" />
                    <span>University of Rajshahi · Remote Worldwide</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {verifiedHighlights.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group rounded-xl border border-white/10 bg-slate-950/60 p-3.5 hover:border-sky-400/40 hover:bg-slate-900/80 transition"
                  >
                    <div className={`font-display text-base sm:text-lg font-bold ${item.accent}`}>
                      {item.value}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-300 group-hover:text-white transition-colors">
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center justify-between gap-3 text-xs text-slate-300">
                <span className="flex items-center gap-2">
                  <Icon name="sigma" size={15} className="text-violet-300 shrink-0" />
                  <span>Focus: Applied Mathematics &amp; Machine Learning</span>
                </span>
                <Link
                  href="#contact"
                  className="font-semibold text-sky-300 hover:text-sky-200 shrink-0"
                >
                  Connect →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
