import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/MotionWrapper";
import { Icon } from "@/components/Icons";
import { FORAGE_CERTIFICATION } from "@/data/portfolio";

export default function CertificationsSection() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="scroll-mt-24">
      <Reveal>
        <div className="glass p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
            aria-hidden="true"
          />

          <SectionHeader
            headingId="certifications-heading"
            eyebrow="Industry Job Simulation"
            title="Professional Certifications"
            description="Independent professional credential issued by Forage Academy — maintained separately from micro1 certified skills."
            badgeText={`Issued by ${FORAGE_CERTIFICATION.issuer}`}
            accent="emerald"
          />

          <div className="rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/[0.08] via-slate-950/75 to-slate-950/85 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/35 bg-emerald-400/15 text-emerald-300 shadow-glow-emerald">
                  <Icon name="award" size={28} />
                </div>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3 py-0.5 text-xs font-semibold text-emerald-200">
                      Issued by {FORAGE_CERTIFICATION.issuer}
                    </span>
                    <span className="text-xs text-slate-400">
                      {FORAGE_CERTIFICATION.credentialType}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {FORAGE_CERTIFICATION.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                    {FORAGE_CERTIFICATION.summary}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-4">
                Demonstrated Competencies ({FORAGE_CERTIFICATION.competencies.length})
              </h4>
              <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                {FORAGE_CERTIFICATION.competencies.map((comp, idx) => (
                  <div
                    key={comp.name}
                    className={`rounded-xl border border-white/10 bg-slate-950/70 p-4 hover:border-emerald-400/40 transition-colors ${
                      idx === 4 ? "sm:col-span-2 lg:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <Icon
                        name="check-circle"
                        size={17}
                        className="text-emerald-400 mt-0.5 shrink-0"
                      />
                      <div className="space-y-1">
                        <p className="font-semibold text-sm text-white">{comp.name}</p>
                        <p className="text-xs leading-relaxed text-slate-300">{comp.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
