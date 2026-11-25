"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/MotionWrapper";
import { Icon } from "@/components/Icons";
import { CORE_SKILL_CATEGORIES } from "@/data/portfolio";

const accentBorder: Record<string, string> = {
  cyan: "border-sky-400/25 hover:border-sky-400/50",
  violet: "border-violet-400/25 hover:border-violet-400/50",
  indigo: "border-indigo-400/25 hover:border-indigo-400/50",
  amber: "border-amber-400/25 hover:border-amber-400/50",
  emerald: "border-emerald-400/25 hover:border-emerald-400/50",
};

const accentIcon: Record<string, string> = {
  cyan: "bg-sky-400/15 text-sky-300 border-sky-400/30",
  violet: "bg-violet-400/15 text-violet-300 border-violet-400/30",
  indigo: "bg-indigo-400/15 text-indigo-300 border-indigo-400/30",
  amber: "bg-amber-400/15 text-amber-300 border-amber-400/30",
  emerald: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
};

const accentPill: Record<string, string> = {
  cyan: "hover:border-sky-400/45 hover:bg-sky-400/10 hover:text-sky-100",
  violet: "hover:border-violet-400/45 hover:bg-violet-400/10 hover:text-violet-100",
  indigo: "hover:border-indigo-400/45 hover:bg-indigo-400/10 hover:text-indigo-100",
  amber: "hover:border-amber-400/45 hover:bg-amber-400/10 hover:text-amber-100",
  emerald: "hover:border-emerald-400/45 hover:bg-emerald-400/10 hover:text-emerald-100",
};

export default function TechnicalSkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const visibleCategories =
    selectedCategory === "all"
      ? CORE_SKILL_CATEGORIES
      : CORE_SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  const totalSkills = CORE_SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24">
      <Reveal>
        <SectionHeader
          headingId="skills-heading"
          eyebrow="Core Professional Skills"
          title="Technical & Domain Expertise"
          description="Hands-on skills spanning Artificial Intelligence & Data, Mathematics, Full-Stack Web Development, Blockchain & Web3, and Professional Operations. Verified certifications are listed separately above."
          badgeText={`${totalSkills} Core Capabilities · 5 Domains`}
          accent="violet"
        />

        {/* Interactive filter bar */}
        <div
          className="flex flex-wrap gap-2 mb-6"
          role="tablist"
          aria-label="Filter skills by domain"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition border ${
              selectedCategory === "all"
                ? "border-sky-400/60 bg-sky-400/15 text-white shadow-sm shadow-sky-500/20"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            All Domains ({CORE_SKILL_CATEGORIES.length})
          </button>
          {CORE_SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition border ${
                selectedCategory === category.id
                  ? "border-sky-400/60 bg-sky-400/15 text-white shadow-sm shadow-sky-500/20"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.shortName}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleCategories.map((category, idx) => (
            <article
              key={category.id}
              className={`glass p-6 transition-colors ${accentBorder[category.accent]} ${
                visibleCategories.length === 5 && idx === 4 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${accentIcon[category.accent]}`}
                  >
                    <Icon name={category.icon} size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.skills.length} capabilities
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {category.description}
              </p>

              <ul className="flex flex-wrap gap-2" aria-label={`${category.name} skills`}>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`rounded-lg border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs sm:text-[13px] font-medium text-slate-200 transition-colors ${accentPill[category.accent]}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Note: Core technical and professional skills reflect academic background and applied project experience. Independently verified credentials are presented strictly under{" "}
          <a href="#micro1-skills" className="text-sky-300 hover:underline">
            Micro1 Certified Skills
          </a>{" "}
          and{" "}
          <a href="#certifications" className="text-emerald-300 hover:underline">
            Professional Certifications (Forage Academy)
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
