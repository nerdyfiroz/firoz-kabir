import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { EDUCATION, FORAGE_CERTIFICATION, MICRO1_CERTIFIED_SKILLS, PROFILE } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Md. Firoz Kabir — Mathematics Graduate and M.Sc. Student at the University of Rajshahi, AI Trainer & Evaluator, Data Annotation Specialist, Web Developer, and Web3 Community Manager.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <div id="main" className="container pt-28 pb-16 space-y-8">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-sky-200 transition-colors"
        >
          <span>← Back to Portfolio</span>
        </Link>
      </div>

      <article className="glass card-gradient p-6 sm:p-8 lg:p-10 space-y-8">
        <header className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-white/10">
          <Image
            src="/profile.jpg"
            alt="Portrait of Md. Firoz Kabir"
            width={112}
            height={112}
            priority
            unoptimized
            className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl border border-sky-400/35 object-cover"
          />
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">
              {PROFILE.headline}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
              About {PROFILE.name}
            </h1>
            <p className="text-sm text-slate-300">{PROFILE.location}</p>
          </div>
        </header>

        <div className="space-y-4 text-slate-300 leading-relaxed text-base">
          {PROFILE.aboutParagraphs.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <p>
            This website serves as my central digital profile where I showcase my verified
            credentials, technical portfolio, blog articles, and community involvement — including
            my role as Office Secretary at the{" "}
            <Link href="/gswa" className="text-sky-300 hover:underline">
              Gangachara Students Welfare Association (GSWA)
            </Link>{" "}
            and Community Manager for Stela Network.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 pt-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-5 space-y-3">
            <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <Icon name="graduation" size={18} className="text-violet-300" />
              <span>Education</span>
            </h2>
            <ul className="space-y-3 text-sm text-slate-300">
              {EDUCATION.map((edu) => (
                <li key={edu.degree} className="space-y-0.5">
                  <p className="font-semibold text-white">
                    {edu.degree} —{" "}
                    <span className="text-sky-300">{edu.status}</span>
                  </p>
                  <p className="text-xs text-slate-400">
                    {edu.institution} · Focus: {edu.focus}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-5 space-y-3">
            <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <Icon name="award" size={18} className="text-sky-300" />
              <span>Verified Credentials Summary</span>
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <Icon name="check-circle" size={16} className="text-sky-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white">
                    {MICRO1_CERTIFIED_SKILLS.length} Micro1 Certified Skills
                  </strong>{" "}
                  spanning coding proficiency, software testing, support, conflict management,
                  ticket operations, and remote organization.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check-circle" size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-white">{FORAGE_CERTIFICATION.issuer}:</strong>{" "}
                  {FORAGE_CERTIFICATION.title} covering intent/sentiment classification, PII
                  identification, and Keep / Fix / Flag QA review.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/#micro1-skills" className="button">
            <span>View Micro1 Skills</span>
            <Icon name="arrow-right" size={15} />
          </Link>
          <Link href="/#contact" className="button secondary">
            <span>Contact Me</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
