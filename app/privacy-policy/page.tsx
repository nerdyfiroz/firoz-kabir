import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the personal portfolio website of Md. Firoz Kabir.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPage() {
  return (
    <div id="main" className="container pt-28 pb-16 space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-sky-200 transition-colors"
      >
        <span>← Back to Portfolio</span>
      </Link>

      <article className="glass p-6 sm:p-8 lg:p-10 space-y-4 text-slate-300 leading-relaxed">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>

        <p>
          This Privacy Policy explains how information is collected and used on{" "}
          <strong className="text-white">mdfirozkabir.xyz</strong>, the personal portfolio website
          of <strong className="text-white">Md. Firoz Kabir</strong>.
        </p>

        <h2 className="pt-4 font-display text-xl font-semibold text-sky-200">
          Information We Collect
        </h2>
        <p>
          This website does not collect personal information such as name, email, or phone number
          unless you voluntarily provide it.
        </p>

        <h2 className="pt-4 font-display text-xl font-semibold text-sky-200">Log Files</h2>
        <p>
          Like many websites, hosting providers may maintain standard log files. These may include
          IP addresses, browser type, ISP, date and time, and referring pages for security and
          reliability diagnostics.
        </p>

        <h2 className="pt-4 font-display text-xl font-semibold text-sky-200">Cookies</h2>
        <p>
          This website may use essential browser features or cookies to enhance user experience. You
          can choose to disable cookies through your browser settings.
        </p>

        <h2 className="pt-4 font-display text-xl font-semibold text-sky-200">
          Third-Party Services
        </h2>
        <p>
          Third-party services such as analytics or advertising platforms may use cookies or scripts
          if enabled in the future.
        </p>

        <h2 className="pt-4 font-display text-xl font-semibold text-sky-200">Consent</h2>
        <p>By using this website, you consent to this Privacy Policy.</p>

        <h2 className="pt-4 font-display text-xl font-semibold text-sky-200">Updates</h2>
        <p>
          This policy may be updated from time to time. Any revisions will be posted on this page.
        </p>
      </article>
    </div>
  );
}
