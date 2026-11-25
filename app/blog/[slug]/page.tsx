import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PROFILE } from "@/data/portfolio";

export function generateStaticParams() {
  return [{ slug: "first-post" }, { slug: "ru-convocation" }];
}

const posts = {
  "first-post": {
    title: "How I Started My Journey in Web Development",
    description:
      "Md. Firoz Kabir shares his journey of learning web development, challenges, and building projects step by step.",
    date: "15 December 2025",
    tag: "Web Development",
    body: (
      <>
        <nav
          aria-label="Table of contents"
          className="rounded-2xl border border-white/10 bg-slate-950/75 p-4 text-sm"
        >
          <strong className="text-white">Contents</strong>
          <ul className="mt-2 space-y-1 text-sky-300 list-disc pl-5">
            <li>
              <a href="#learning" className="hover:underline">
                Learning by Building
              </a>
            </li>
            <li>
              <a href="#community" className="hover:underline">
                Community and Growth
              </a>
            </li>
          </ul>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-6 mb-3">
          How I Started My Journey in Web Development
        </h1>
        <div className="text-sm text-slate-400 mb-6">
          By <strong className="text-slate-200">{PROFILE.name}</strong> · 15 December 2025
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>
            Web development is one of the most powerful skills in today’s digital world. My journey
            started as a student with curiosity about how websites work.
          </p>
          <p>
            At first, I learned the basics of HTML and CSS. It was challenging, but seeing my first
            webpage come alive gave me motivation to continue.
          </p>

          <h2 id="learning" className="font-display text-2xl font-semibold text-white pt-4">
            Learning by Building
          </h2>
          <p>
            Instead of only watching tutorials, I focused on building small projects. This helped me
            understand real-world problems and solutions.
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>Started with simple static pages</li>
            <li>Practiced CSS layouts and responsiveness</li>
            <li>Learned JavaScript for interactivity</li>
          </ul>

          <h2 id="community" className="font-display text-2xl font-semibold text-white pt-4">
            Community and Growth
          </h2>
          <p>
            Being part of tech and student communities like GSWA helped me grow faster. Sharing
            knowledge and learning from others made a big difference.
          </p>
          <p>
            Through this blog, I share my experiences, tutorials, and thoughts on web development,
            AI, blockchain, and community work.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 mt-8">
          <Image
            src="/blog/images/first-post.jpg"
            alt="Journey of learning web development"
            width={1200}
            height={720}
            unoptimized
            className="w-full h-auto object-cover"
          />
        </div>
      </>
    ),
  },
  "ru-convocation": {
    title: "Rajshahi University’s 12th Convocation",
    description:
      "Highlights of the 12th Convocation of Rajshahi University, celebrating academic excellence, graduates, and memorable moments.",
    date: "18 December 2025",
    tag: "Academic Milestone",
    body: (
      <>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
          Rajshahi University 12th Convocation
        </h1>
        <p className="text-slate-300 mb-6">
          A celebration of knowledge, resilience, and academic excellence
        </p>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-white">Overview</h2>
            <p>
              Rajshahi University proudly hosted its 12th Convocation, marking a historic moment for
              graduates and their families. The ceremony symbolized dedication, academic achievement,
              and future promise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-white">Inspiring Messages</h2>
            <p>
              Speakers emphasized ethical leadership, social responsibility, and applying knowledge
              for national development. Graduates were encouraged to lead with integrity and
              innovation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-white">Convocation Moments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {["ru1", "ru2", "ru3", "ru4", "ru5"].map((img) => (
                <Image
                  key={img}
                  src={`/blog/images/${img}.jpg`}
                  alt={`Rajshahi University 12th Convocation moment ${img}`}
                  width={640}
                  height={360}
                  unoptimized
                  className="w-full h-48 object-cover rounded-xl border border-white/10"
                />
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-white">Final Thoughts</h2>
            <p>
              The 12th Convocation of Rajshahi University was more than a ceremony — it was a
              celebration of perseverance, dreams fulfilled, and journeys ahead.
            </p>
          </section>
        </div>
      </>
    ),
  },
} as const;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${params.slug}/` },
    openGraph: {
      title: `${post.title} | ${PROFILE.name}`,
      description: post.description,
      type: "article",
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return notFound();

  return (
    <div id="main" className="container pt-28 pb-16 space-y-6">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-sky-200 transition-colors"
      >
        <span>← Back to Blog</span>
      </Link>

      <article className="glass p-6 sm:p-8 lg:p-10">
        <header className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-0.5 font-semibold text-sky-200">
            {post.tag}
          </span>
          <span>Published on: {post.date}</span>
        </header>
        {post.body}
      </article>
    </div>
  );
}
