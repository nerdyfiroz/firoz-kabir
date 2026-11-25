"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Icon } from "@/components/Icons";
import { MICRO1_CERTIFIED_SKILLS } from "@/data/portfolio";

export default function Micro1SkillsSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="micro1-skills" aria-labelledby="micro1-heading" className="scroll-mt-24">
      <div className="glass p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
          aria-hidden="true"
        />

        <SectionHeader
          headingId="micro1-heading"
          eyebrow="Verified Assessment Credentials"
          title="Micro1 Certified Skills"
          description="Seven distinct competencies individually certified through micro1 assessments, covering engineering proficiency, software testing, remote execution, and client support."
          badgeText="7 of 7 Certified by micro1"
          accent="cyan"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MICRO1_CERTIFIED_SKILLS.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={prefersReduced ? undefined : { y: -4 }}
              className={`group relative rounded-2xl border border-sky-400/20 bg-slate-950/65 p-5 transition-colors hover:border-sky-400/50 hover:bg-slate-900/80 flex flex-col justify-between gap-4 ${
                index === 6 ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-gradient-to-br from-sky-400/20 to-indigo-500/15 text-sky-300 group-hover:scale-105 transition-transform">
                    <Icon name={skill.icon} size={21} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/35 bg-sky-400/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-sky-200">
                    <Icon name="check-circle" size={12} className="text-sky-300" />
                    <span>{skill.badge}</span>
                  </span>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                    0{skill.id} · {skill.category}
                  </p>
                  <h3 className="mt-1 font-display text-base sm:text-lg font-semibold text-white leading-snug group-hover:text-sky-200 transition-colors">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-300">
                  {skill.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-white/[0.07] flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-sky-300/90">micro1 Verified Skill</span>
                <span aria-hidden="true" className="text-slate-500 font-mono">
                  #{String(skill.id).padStart(2, "0")}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
