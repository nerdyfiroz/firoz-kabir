"use client";

import { useState, type FormEvent } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Reveal } from "@/components/MotionWrapper";
import { Icon } from "@/components/Icons";
import { PROFILE } from "@/data/portfolio";

export default function ContactSection() {
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const topic = String(formData.get("topic") || "General Inquiry").trim();
    setStatusMessage(
      `Thank you, ${name || "there"}! Your ${topic.toLowerCase()} note has been captured locally on this static portfolio. For direct technical collaboration, you can also reach me via GitHub (@nerdyfiroz).`
    );
    e.currentTarget.reset();
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
      <Reveal>
        <div className="glass card-gradient p-6 sm:p-8 lg:p-10">
          <SectionHeader
            headingId="contact-heading"
            eyebrow="Get in Touch"
            title="Contact Me"
            description="Interested in collaborating on AI training, mathematics evaluation, data annotation, software testing, full-stack web development, or Web3 community initiatives? Let's connect."
            accent="cyan"
          />

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-5 space-y-4">
                <h3 className="font-display text-lg font-bold text-white">
                  Collaboration Focus
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {[
                    "AI Training, RLHF & Mathematics Model Evaluation",
                    "Data Annotation, Labeling & QA Review",
                    "Software Testing & Quality Assurance",
                    "React / Next.js Full-Stack Web Development",
                    "Web3 Community Management & Digital Growth",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Icon
                        name="check-circle"
                        size={16}
                        className="text-sky-400 mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-5 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                  Verified Profiles
                </h3>
                <div className="space-y-2.5 text-sm">
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200 hover:border-sky-400/50 hover:text-white transition"
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon name="github" size={18} className="text-sky-300" />
                      <span>GitHub · @nerdyfiroz</span>
                    </span>
                    <Icon name="arrow-up-right" size={15} className="text-slate-400" />
                  </a>

                  <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-slate-300">
                    <Icon name="map-pin" size={16} className="text-emerald-400 shrink-0" />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/10 bg-slate-950/65 p-6 space-y-4"
                aria-label="Contact message form"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-200">
                    <span>Full Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="rounded-xl border border-white/15 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-200">
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="you@organization.com"
                      className="rounded-xl border border-white/15 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-200">
                  <span>Opportunity / Topic</span>
                  <select
                    name="topic"
                    defaultValue="AI Training / Math Evaluation"
                    className="rounded-xl border border-white/15 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white focus:border-sky-400 focus:outline-none"
                  >
                    <option value="AI Training / Math Evaluation">
                      AI Training / Mathematics Evaluation
                    </option>
                    <option value="Data Annotation & QA">Data Annotation &amp; Quality Assurance</option>
                    <option value="Web Development / Full-Stack">
                      Web Development / Full-Stack Project
                    </option>
                    <option value="Blockchain / Web3 Community">
                      Blockchain / Web3 Community Management
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </label>

                <label className="flex flex-col gap-1.5 text-sm font-medium text-slate-200">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Share details about your role, project scope, or collaboration idea..."
                    className="rounded-xl border border-white/15 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none resize-y"
                  />
                </label>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <button type="submit" className="button">
                    <Icon name="mail" size={16} />
                    <span>Send Message</span>
                  </button>
                  <span className="text-xs text-slate-400">
                    Static site interactive preview form
                  </span>
                </div>

                {statusMessage && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
                  >
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
