import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/MotionWrapper";
import { Icon } from "@/components/Icons";
import { ACHIEVEMENTS, BLOG_POSTS, EDUCATION } from "@/data/portfolio";

export default function EducationAchievementsSection() {
  return (
    <div className="space-y-16">
      {/* Education */}
      <section id="education" aria-labelledby="education-heading" className="scroll-mt-24">
        <Reveal>
          <SectionHeader
            headingId="education-heading"
            eyebrow="Academic Background"
            title="Education"
            description="Formal mathematical education at the University of Rajshahi with an academic focus on Applied Mathematics and Machine Learning."
            accent="violet"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {EDUCATION.map((edu) => {
              const isOngoing = edu.status === "Currently Studying";
              return (
                <article
                  key={edu.degree}
                  className="glass p-6 sm:p-7 flex flex-col justify-between gap-4 border-violet-400/20"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-400/15 text-violet-300">
                        <Icon name="graduation" size={23} />
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                          isOngoing
                            ? "border-sky-400/35 bg-sky-400/10 text-sky-200"
                            : "border-emerald-400/35 bg-emerald-400/10 text-emerald-200"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isOngoing ? "bg-sky-400" : "bg-emerald-400"
                          }`}
                          aria-hidden="true"
                        />
                        <span>{edu.status}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-violet-300">
                        {edu.institution}
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-300">{edu.description}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
                    <Icon name="sigma" size={14} className="text-sky-400 shrink-0" />
                    <span>
                      <strong className="text-white">Academic Focus:</strong> {edu.focus}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Achievements */}
      <section id="achievements" aria-labelledby="achievements-heading" className="scroll-mt-24">
        <Reveal>
          <SectionHeader
            headingId="achievements-heading"
            eyebrow="Milestones & Recognition"
            title="Achievements"
            description="Key verified milestones spanning micro1 skill certifications, Forage Academy data labeling completion, academic progression, and community leadership."
            accent="emerald"
          />

          <div className="grid gap-5 md:grid-cols-2">
            {ACHIEVEMENTS.map((item) => (
              <article
                key={item.title}
                className="glass-interactive p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-emerald-300">
                      {item.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                </div>

                {item.link && (
                  <div className="pt-3 border-t border-white/10 pl-15">
                    <Link
                      href={item.link.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                    >
                      <span>{item.link.label}</span>
                      <Icon name="arrow-right" size={14} />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Preserved Blog Preview Section */}
      <section id="blog" aria-labelledby="blog-heading" className="scroll-mt-24">
        <Reveal>
          <div className="glass p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                  Journal &amp; Articles
                </p>
                <h2 id="blog-heading" className="section-title mt-1">
                  Latest from the Blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 hover:text-sky-200 transition-colors"
              >
                <span>View all articles</span>
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-white/10 bg-slate-950/65 p-5 hover:border-sky-400/40 transition-colors flex flex-col justify-between gap-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-sky-200">
                        {post.tag}
                      </span>
                      <time>{post.date}</time>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-sky-300 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{post.snippet}</p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200 pt-1"
                  >
                    <span>Read article</span>
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
