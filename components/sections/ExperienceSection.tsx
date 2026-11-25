import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/MotionWrapper";
import { Icon } from "@/components/Icons";
import { EXPERIENCES } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24">
      <Reveal>
        <SectionHeader
          headingId="experience-heading"
          eyebrow="Track Record"
          title="Professional Experience"
          description="Applied contributions across Web3 community management, AI training and data annotation, NFT and blockchain development, web engineering, digital marketing, and student welfare leadership."
          accent="cyan"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {EXPERIENCES.map((exp, idx) => (
            <article
              key={`${exp.role}-${exp.organization}`}
              className="glass-interactive p-6 flex flex-col justify-between gap-5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="inline-block rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-200">
                      {exp.category}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white pt-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-violet-300">{exp.organization}</p>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-300">{exp.summary}</p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.link && (
                <div className="pt-3 border-t border-white/10">
                  {exp.link.external ? (
                    <a
                      href={exp.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                    >
                      <span>{exp.link.label}</span>
                      <Icon name="arrow-up-right" size={14} />
                    </a>
                  ) : (
                    <Link
                      href={exp.link.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                    >
                      <span>{exp.link.label}</span>
                      <Icon name="arrow-right" size={14} />
                    </Link>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
