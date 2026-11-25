import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gangachara Students Welfare Association (GSWA)",
  description:
    "Gangachara Students Welfare Association (GSWA) is a student development organization focused on community welfare, leadership, and educational support in Gangachara, Rangpur.",
  alternates: { canonical: "/gswa/" },
};

const events = [
  {
    title: "Honours Celebration and Eid Reunion 2025",
    text: "Organized by Gangachara Students’ Welfare Association (GSWA)",
    img: "/event1.jpg",
    alt: "Honours Celebration and Eid Reunion 2025 by GSWA",
  },
  {
    title: "A Hangout",
    text: "At Gangachara Adarsha High School, Gangachara, Rangpur",
    img: "/event2.jpg",
    alt: "GSWA Hangout at Gangachara Adarsha High School",
  },
  {
    title: "Foundation Stone Unveiling",
    text: "The foundation stone of the permanent office of Gangachara Students’ Welfare Association (GSWA) was laid by Prof. Dr. Azizul Islam and Prof. Dr. Md. Zohurul Islam.",
    img: "/event3.jpg",
    alt: "GSWA Foundation Stone Unveiling Ceremony",
  },
];

const photos = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg"];

export default function GswaPage() {
  return (
    <div id="main" className="container pt-28 pb-16 space-y-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-sky-200 transition-colors"
      >
        <span>← Back to Portfolio</span>
      </Link>

      <div className="glass card-gradient p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center">
        <Image
          src="/gswa-logo.png"
          alt="Gangachara Students Welfare Association GSWA Logo"
          width={140}
          height={140}
          priority
          unoptimized
          className="h-32 w-32 rounded-2xl object-contain bg-white/5 p-2 border border-white/10"
        />
        <div className="space-y-2 text-center md:text-left">
          <span className="inline-block rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-0.5 text-xs font-semibold text-emerald-200">
            Office Secretary · Community Leadership
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            GSWA — Projects &amp; Events
          </h1>
          <p className="lead text-sm sm:text-base">
            Showcasing activities, contributions &amp; student community development in Gangachara,
            Rangpur
          </p>
        </div>
      </div>

      <article className="glass p-6 sm:p-8 space-y-4">
        <h2 className="section-title">About GSWA</h2>
        <p className="text-slate-200 font-medium">
          The premier student development association in Gangachara.
        </p>
        <p className="text-slate-300 leading-relaxed">
          We are committed to fostering a powerful, supportive community and delivering
          comprehensive welfare programs that ensure student success and well-being.
        </p>
      </article>

      <section className="glass p-6 sm:p-8 space-y-5" id="events">
        <h2 className="section-title">GSWA Events</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-2xl border border-white/10 bg-slate-950/65 p-4 flex flex-col gap-3"
            >
              <Image
                src={event.img}
                alt={event.alt}
                width={640}
                height={360}
                unoptimized
                className="w-full h-48 object-cover rounded-xl"
              />
              <h3 className="font-display text-lg font-bold text-sky-200">{event.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{event.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-6 sm:p-8 space-y-5" id="photos">
        <h2 className="section-title">GSWA Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`GSWA community event photo ${index + 1}`}
              width={400}
              height={320}
              unoptimized
              className="w-full h-56 object-cover rounded-xl border border-white/10"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
