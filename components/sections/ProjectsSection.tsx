"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Icon } from "@/components/Icons";
import { PROJECTS, type ProjectItem } from "@/data/portfolio";

const categories = [
  "All",
  "Blockchain & Web3",
  "NFT Development",
  "Web Development",
  "Community",
] as const;

const badgeStyles: Record<ProjectItem["category"], string> = {
  "Blockchain & Web3": "border-amber-400/30 bg-amber-400/10 text-amber-200",
  "NFT Development": "border-violet-400/30 bg-violet-400/10 text-violet-200",
  "Web Development": "border-sky-400/30 bg-sky-400/10 text-sky-200",
  Community: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const prefersReduced = useReducedMotion();

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24">
      <SectionHeader
        headingId="projects-heading"
        eyebrow="Selected Work"
        title="Featured Projects"
        description="Selected blockchain, NFT, full-stack web development, and community initiatives reflecting hands-on delivery across decentralized and modern web ecosystems."
        badgeText={`${PROJECTS.length} Featured Projects`}
        accent="amber"
      />

      <div
        className="flex flex-wrap gap-2 mb-6"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition border ${
              filter === cat
                ? "border-sky-400/60 bg-sky-400/15 text-white"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <motion.article
            key={project.title}
            layout={!prefersReduced}
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.04 }}
            className="glass-interactive p-6 flex flex-col justify-between gap-5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${badgeStyles[project.category]}`}
                >
                  {project.category}
                </span>
                <span className="font-mono text-[11px] text-slate-500">
                  PRJ-{String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-0.5 text-xs font-medium text-sky-300">{project.tagline}</p>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
            </div>

            <div className="space-y-4 pt-3 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5" aria-label="Technology stack">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-slate-950/75 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-400">{project.role}</span>
                {project.links && project.links.length > 0 && (
                  <div className="flex items-center gap-3">
                    {project.links.map((link) =>
                      link.external ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                        >
                          <span>{link.label}</span>
                          <Icon name="arrow-up-right" size={13} />
                        </a>
                      ) : (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="inline-flex items-center gap-1 font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                        >
                          <span>{link.label}</span>
                          <Icon name="arrow-right" size={13} />
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
