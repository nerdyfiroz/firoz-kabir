"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const typingText =
  "I’m Muhammad Firoz Kabir, a web developer and mathematics student at the University of Rajshahi, working with artificial intelligence, blockchain, and digital platforms.";

const projects = [
  {
    title: "Web3 Testing",
    desc: "Testing blockchain platforms and decentralized applications.",
  },
  {
    title: "Community Manager",
    desc: "Managing Web3 and tech communities.",
  },
];

const works = [
  { title: "GSWA – Office Secretary", href: "/gswa" },
];

const blogPosts = [
  {
    title: "How I Started My Journey in Web Development",
    href: "/blog/first-post",
    snippet:
      "A personal story about learning web development, challenges, and building projects with modern tools.",
    date: "15 Dec 2025",
  },
  {
    title: "Rajshahi University’s 12th Convocation",
    href: "/blog/ru-convocation",
    snippet: "🎓 Celebrating Achievement",
    date: "18 Dec 2025",
  },
];

export default function HomePage() {
  return (
    <div id="main" className="container pt-28 pb-16 space-y-16">
      <section className="text-center space-y-6">
        <Image
          src="/profile.jpg"
          alt="Portrait of Muhammad Firoz Kabir"
          width={144}
          height={144}
          priority
          unoptimized
          className="mx-auto h-36 w-36 rounded-full border border-white/20 shadow-glow object-cover"
        />
        <div>
          <p className="text-sm text-slate-300">Mathematics • AI • Blockchain • Digital Marketing</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Muhammad Firoz Kabir</h1>
        </div>
        <motion.p
          className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-200"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {typingText}
        </motion.p>
        <div className="flex items-center justify-center gap-3">
          <Link href="#projects" className="button">Explore Projects</Link>
          <Link href="#contact" className="button secondary">Contact</Link>
        </div>
      </section>

      <motion.section
        id="projects"
        className="glass card-gradient p-6 md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="grid-2 mt-4">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="glass p-4 border border-white/10"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-sky-200">{p.title}</h3>
              <p className="text-slate-200">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="works"
        className="glass p-6 md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="section-title">Works</h2>
        </div>
        <div className="grid-2 mt-4">
          {works.map((w) => (
            <motion.div
              key={w.title}
              className="glass p-4 border border-white/10"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <Link href={w.href} className="text-xl font-semibold text-sky-200 hover:text-white">
                {w.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="blog"
        className="glass p-6 md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="section-title">Blog</h2>
          <Link href="/blog" className="text-sm text-sky-200 hover:text-white">View all →</Link>
        </div>
        <div className="grid-2 mt-4">
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              className="glass p-4 border border-white/10"
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <Link href={post.href} className="text-lg font-semibold text-sky-200 hover:text-white">
                {post.title}
              </Link>
              <p className="text-slate-300 mt-1">{post.snippet}</p>
              <div className="text-sm text-slate-400 mt-2">Published on: {post.date}</div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="glass p-6 md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h2 className="section-title">Contact</h2>
        <p className="text-slate-200">If you prefer email, drop a note below. This form only simulates sending on the static site.</p>
        <form
          className="mt-4 grid gap-3 max-w-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            const form = new FormData(e.currentTarget);
            const name = form.get("name");
            const status = e.currentTarget.querySelector("[data-status]") as HTMLElement;
            if (status) status.textContent = `Thanks, ${name || "friend"}! I’ll get back to you soon.`;
            e.currentTarget.reset();
          }}
        >
          <label className="text-sm text-slate-200 flex flex-col gap-2">
            Full name
            <input
              name="name"
              required
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-white"
              placeholder="Name"
            />
          </label>
          <label className="text-sm text-slate-200 flex flex-col gap-2">
            Email
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-white"
              placeholder="Email"
            />
          </label>
          <label className="text-sm text-slate-200 flex flex-col gap-2">
            Message
            <textarea
              name="message"
              rows={4}
              required
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-white"
              placeholder="Message"
            />
          </label>
          <button type="submit" className="button w-fit">Send Message</button>
          <div data-status className="text-sky-200"></div>
        </form>
      </motion.section>

      <footer className="text-center text-slate-400 pt-6 pb-4">© 2025 Muhammad Firoz Kabir</footer>
    </div>
  );
}
