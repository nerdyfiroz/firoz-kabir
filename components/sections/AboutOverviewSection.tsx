import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/MotionWrapper";
import { Icon } from "@/components/Icons";
import { OVERVIEW_PILLARS, PROFILE } from "@/data/portfolio";

const accentMap = {
  cyan: "border-sky-400/25 bg-sky-400/10 text-sky-300",
  violet: "border-violet-400/25 bg-violet-400/10 text-violet-300",
  indigo: "border-indigo-400/25 bg-indigo-400/10 text-indigo-300",
  emerald: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
};

export default function AboutOverviewSection() {
  return (
    <div className="space-y-16">
      {/* About Me */}
      <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
        <Reveal>
          <div className="glass card-gradient p-6 sm:p-8 lg:p-10">
            <SectionHeader
              headingId="about-heading"
              eyebrow="About Me"
              title="Analytical Rigor Meets Modern AI & Web Engineering"
              description="Bridging formal mathematical training with practical AI evaluation, software quality, full-stack development, and global Web3 communities."
              accent="cyan"
            />

            <div className="grid gap-8 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                {PROFILE.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                  >
                    <span>Read full About page</span>
                    <Icon name="arrow-right" size={15} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-5 space-y-3">
                  <h3 className="font-display text-base font-semibold text-white">
                    Core Positioning
                  </h3>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {PROFILE.roles.map((role) => (
                      <li key={role} className="flex items-start gap-2.5">
                        <Icon
                          name="check-circle"
                          size={16}
                          className="text-sky-400 mt-0.5 shrink-0"
                        />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Professional Overview */}
      <section id="overview" aria-labelledby="overview-heading" className="scroll-mt-24">
        <Reveal>
          <SectionHeader
            headingId="overview-heading"
            eyebrow="Professional Overview"
            title="Four Pillars of Value"
            description="A multidisciplinary profile built for international AI training, mathematics evaluation, data annotation, software testing, full-stack web development, and Web3 collaboration."
            accent="violet"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OVERVIEW_PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="glass-interactive p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-4">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${accentMap[pillar.accent]}`}
                  >
                    <Icon name={pillar.icon} size={21} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
