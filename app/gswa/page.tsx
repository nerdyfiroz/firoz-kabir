import Image from "next/image";

export const metadata = {
  title: "Gangachara Students Welfare Association (GSWA)",
  description:
    "Gangachara Students Welfare Association (GSWA) is a student development organization focused on community welfare, leadership, and educational support in Gangachara, Rangpur.",
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
    text:
      "The foundation stone of the permanent office of Gangachara Students’ Welfare Association (GSWA) was laid by Prof. Dr. Azizul Islam and Prof. Dr. Md. Zohurul Islam.",
    img: "/event3.jpg",
    alt: "GSWA Foundation Stone Unveiling Ceremony",
  },
];

const photos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
];

export default function GswaPage() {
  return (
    <div className="container pt-28 pb-16 space-y-10">
      <div className="glass p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
        <Image src="/gswa-logo.png" alt="Gangachara Students Welfare Association GSWA Logo" width={140} height={140} className="h-32 w-32" />
        <div>
          <h1 className="section-title">GSWA — Projects & Events</h1>
          <p className="lead">Showcasing activities, contributions & community development</p>
        </div>
      </div>

      <article className="glass p-6 md:p-8 space-y-4">
        <h2 className="section-title">About GSWA</h2>
        <p>The premier student development association in Gangachara.</p>
        <p>
          We are committed to fostering a powerful, supportive community and delivering comprehensive welfare programs that ensure student success and well-being.
        </p>
      </article>

      <section className="glass p-6 md:p-8 space-y-4" id="events">
        <h2 className="section-title">📌 GSWA Events</h2>
        <div className="grid-2">
          {events.map((event) => (
            <div key={event.title} className="glass p-4 border border-white/10">
              <Image src={event.img} alt={event.alt} width={640} height={360} className="w-full rounded-lg mb-3" />
              <h3 className="text-xl font-semibold text-sky-200">{event.title}</h3>
              <p className="text-slate-200">{event.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glass p-6 md:p-8 space-y-4" id="photos">
        <h2 className="section-title">📸 GSWA Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((src) => (
            <Image key={src} src={src} alt="GSWA event photo" width={400} height={320} className="w-full h-52 object-cover rounded-lg" />
          ))}
        </div>
      </section>

      <footer className="text-center text-slate-400">© 2025 Gangachara Students Welfare Association (GSWA) — Page by Muhammad Firoz Kabir</footer>
    </div>
  );
}
