import Link from "next/link";

const posts = [
  {
    slug: "first-post",
    title: "How I Started My Journey in Web Development",
    description:
      "Muhammad Firoz Kabir shares his journey of learning web development, challenges, and building projects step by step.",
    date: "15 December 2025",
  },
  {
    slug: "ru-convocation",
    title: "Rajshahi University’s 12th Convocation",
    description: "A celebration of knowledge, resilience, and academic excellence.",
    date: "18 December 2025",
  },
];

export const metadata = {
  title: "Blog | Muhammad Firoz Kabir",
  description: "Thoughts on Web Development, AI, Blockchain & Community by Muhammad Firoz Kabir",
};

export default function BlogIndex() {
  return (
    <div className="container pt-28 pb-16">
      <header className="mb-6">
        <h1 className="section-title">Blog</h1>
        <p className="lead">Thoughts on Web Development, AI, Blockchain & Community</p>
        <Link href="/" className="text-sm text-sky-200 hover:text-white">← Back to Home</Link>
      </header>

      <main className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="glass p-5 border border-white/10">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold text-sky-200 hover:text-white">
              {post.title}
            </Link>
            <p className="text-slate-300 mt-2">{post.description}</p>
            <div className="text-sm text-slate-400 mt-2">Published on: {post.date}</div>
          </article>
        ))}
      </main>

      <footer className="text-center text-slate-400 mt-10">© Muhammad Firoz Kabir</footer>
    </div>
  );
}
