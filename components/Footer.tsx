import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icons";
import { PROFILE } from "@/data/portfolio";

const portfolioLinks = [
  { label: "About Me", href: "/#about" },
  { label: "Micro1 Certified Skills", href: "/#micro1-skills" },
  { label: "Professional Certifications", href: "/#certifications" },
  { label: "Technical Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Featured Projects", href: "/#projects" },
];

const resourceLinks = [
  { label: "Education & Achievements", href: "/#education" },
  { label: "About Page", href: "/about" },
  { label: "Blog & Articles", href: "/blog" },
  { label: "GSWA Community", href: "/gswa" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact Me", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Md. Firoz Kabir logo"
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 rounded-full border border-sky-400/40 object-cover"
              />
              <div>
                <p className="font-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  {PROFILE.name}
                </p>
                <p className="text-xs text-slate-400">{PROFILE.headline}</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              Mathematics graduate and M.Sc. student at the University of Rajshahi focused on
              Applied Mathematics, Machine Learning, AI Evaluation, Data Annotation, Full-Stack Web
              Development, Web3, and Community Leadership.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-200 hover:border-sky-400/50 hover:text-white transition"
              >
                <Icon name="github" size={15} />
                <span>github.com/nerdyfiroz</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-sky-300">
              Portfolio
            </h2>
            <ul className="space-y-2 text-sm text-slate-400">
              {portfolioLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-sky-300 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-300">
              Pages & Links
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-400">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-sky-300 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/[0.06] px-3.5 py-2.5 text-xs text-emerald-200 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" aria-hidden="true" />
                <span>Open to global remote AI training, math evaluation, QA &amp; Web3 roles.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p className="text-slate-500">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
