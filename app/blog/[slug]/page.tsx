import { notFound } from "next/navigation";
import Image from "next/image";

export function generateStaticParams() {
  return [
    { slug: "first-post" },
    { slug: "ru-convocation" },
  ];
}

const posts = {
  "first-post": {
    title: "How I Started My Journey in Web Development",
    description:
      "Muhammad Firoz Kabir shares his journey of learning web development, challenges, and building projects step by step.",
    date: "15 December 2025",
    body: (
      <>
        <nav style={{ background: "#0f172a", padding: "15px", borderRadius: "10px" }}>
          <strong>Contents</strong>
          <ul style={{ marginTop: 10 }}>
            <li><a href="#learning">Learning by Building</a></li>
            <li><a href="#community">Community and Growth</a></li>
          </ul>
        </nav>

        <h1 className="text-3xl font-bold mt-6 mb-3">How I Started My Journey in Web Development</h1>
        <div className="text-slate-300 mb-6">By <strong>Muhammad Firoz Kabir</strong> · 15 December 2025</div>

        <p>
          Web development is one of the most powerful skills in today’s digital world.
          My journey started as a student with curiosity about how websites work.
        </p>

        <p>
          At first, I learned the basics of HTML and CSS. It was challenging, but seeing
          my first webpage come alive gave me motivation to continue.
        </p>

        <h2 id="learning" className="text-2xl font-semibold mt-8 mb-3">Learning by Building</h2>

        <p>
          Instead of only watching tutorials, I focused on building small projects.
          This helped me understand real-world problems and solutions.
        </p>

        <ul className="list-disc pl-6">
          <li>Started with simple static pages</li>
          <li>Practiced CSS layouts and responsiveness</li>
          <li>Learned JavaScript for interactivity</li>
        </ul>

        <h2 id="community" className="text-2xl font-semibold mt-8 mb-3">Community and Growth</h2>

        <p>
          Being part of tech and student communities like GSWA helped me grow faster.
          Sharing knowledge and learning from others made a big difference.
        </p>

        <p>
          Through this blog, I will share my experiences, tutorials, and thoughts on
          web development, AI, blockchain, and community work.
        </p>

        <div className="rounded-xl overflow-hidden mt-6">
          <Image src="/blog/images/first-post.jpg" alt="Journey of learning web development" width={1200} height={720} unoptimized className="w-full" />
        </div>
      </>
    ),
  },
  "ru-convocation": {
    title: "Rajshahi University’s 12th Convocation",
    description:
      "Highlights of the 12th Convocation of Rajshahi University, celebrating academic excellence, graduates, and memorable moments.",
    date: "18 December 2025",
    body: (
      <>
        <h1 className="text-3xl font-bold mt-2 mb-3">Rajshahi University 12th Convocation</h1>
        <p className="text-slate-300 mb-4">A celebration of knowledge, resilience, and academic excellence</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">🎓 Overview</h2>
          <p>
            Rajshahi University proudly hosted its 12th Convocation, marking a historic
            moment for graduates and their families. The ceremony symbolized dedication,
            academic achievement, and future promise.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold">📜 Inspiring Messages</h2>
          <p>
            Speakers emphasized ethical leadership, social responsibility, and applying
            knowledge for national development. Graduates were encouraged to lead with
            integrity and innovation.
          </p>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold">📸 Convocation Moments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {["ru1","ru2","ru3","ru4","ru5"].map((img) => (
              <Image key={img} src={`/blog/images/${img}.jpg`} alt={`RU Convocation Moment ${img}`} width={640} height={360} unoptimized className="w-full h-48 object-cover rounded-lg" />
            ))}
          </div>
        </section>

        <section className="space-y-4 mt-6">
          <h2 className="text-2xl font-semibold">✨ Final Thoughts</h2>
          <p>
            The 12th Convocation of Rajshahi University was more than a ceremony — it was a
            celebration of perseverance, dreams fulfilled, and journeys ahead.
          </p>
        </section>
      </>
    ),
  },
} as const;

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return {};
  return {
    title: `${post.title} | Muhammad Firoz Kabir`,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  if (!post) return notFound();

  return (
    <div className="container pt-28 pb-16">
      <article className="glass p-6 md:p-8">
        <header className="mb-4">
          <p className="text-sm text-slate-400">Published on: {post.date}</p>
        </header>
        {post.body}
      </article>
    </div>
  );
}
