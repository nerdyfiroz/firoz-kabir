import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { BLOG_POSTS } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and reflections on Web Development, Mathematics, AI, Blockchain & Community by Md. Firoz Kabir.",
  alternates: { canonical: "/blog/" },
};

export default function BlogIndex() {
  return (
    <div id="main" className="container pt-28 pb-16 space-y-8">
      <header className="glass card-gradient p-6 sm:p-8 space-y-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-sky-300 hover:text-sky-200 transition-colors"
        >
          <span>← Back to Portfolio</span>
        </Link>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">Blog &amp; Writing</h1>
        <p className="lead max-w-2xl text-sm sm:text-base">
          Reflections on Web Development, Mathematics, AI, Blockchain, academic milestones, and
          community growth.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="glass-interactive p-6 flex flex-col justify-between gap-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-0.5 font-semibold text-sky-200">
                  {post.tag}
                </span>
                <time>{post.date}</time>
              </div>
              <h2 className="font-display text-xl font-bold text-white">
                <Link href={`/blog/${post.slug}`} className="hover:text-sky-300 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">{post.snippet}</p>
            </div>

            <div className="pt-3 border-t border-white/10">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-sky-200"
              >
                <span>Read full article</span>
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
