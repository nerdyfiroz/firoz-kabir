interface SectionHeaderProps {
  headingId?: string;
  eyebrow: string;
  title: string;
  description?: string;
  badgeText?: string;
  accent?: "cyan" | "violet" | "emerald" | "amber";
}

const accentStyles = {
  cyan: "text-sky-300 border-sky-400/30 bg-sky-400/10",
  violet: "text-violet-300 border-violet-400/30 bg-violet-400/10",
  emerald: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  amber: "text-amber-300 border-amber-400/30 bg-amber-400/10",
};

const dotStyles = {
  cyan: "bg-sky-400",
  violet: "bg-violet-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
};

export default function SectionHeader({
  headingId,
  eyebrow,
  title,
  description,
  badgeText,
  accent = "cyan",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div className="space-y-3 max-w-2xl">
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest ${accentStyles[accent]}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[accent]}`} aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
        <h2 id={headingId} className="section-title">{title}</h2>
        {description && <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{description}</p>}
      </div>
      {badgeText && (
        <div className="inline-flex items-center self-start md:self-end rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300">
          {badgeText}
        </div>
      )}
    </div>
  );
}
