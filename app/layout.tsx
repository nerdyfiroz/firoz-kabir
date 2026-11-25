import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import { PROFILE } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE.siteUrl),
  title: {
    default: `${PROFILE.name} | ${PROFILE.headline}`,
    template: `%s | ${PROFILE.name}`,
  },
  description:
    "Official portfolio of Md. Firoz Kabir — Mathematics Graduate and M.Sc. Student at the University of Rajshahi, AI Trainer & Evaluator, Data Annotation Specialist, Web Developer, Blockchain & Web3 Enthusiast, Digital Marketing Specialist, and Community Manager.",
  keywords: [
    "Md. Firoz Kabir",
    "Mathematics AI Evaluation",
    "AI Trainer",
    "AI Evaluator",
    "Data Annotation Specialist",
    "Micro1 Certified Skills",
    "Forage Academy Data Labeling",
    "University of Rajshahi Mathematics",
    "Full-Stack Web Developer",
    "Next.js Developer",
    "Blockchain",
    "Web3 Community Manager",
    "Stela Network",
    "Digital Marketing",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.siteUrl }],
  creator: PROFILE.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${PROFILE.name} | ${PROFILE.headline}`,
    description:
      "Mathematics Graduate & M.Sc. Student, AI Trainer & Evaluator, Data Annotation Specialist, Web Developer, and Web3 Community Manager. Featuring 7 micro1 certified skills and Forage Academy Data Labeling certification.",
    url: `${PROFILE.siteUrl}/`,
    siteName: PROFILE.name,
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: `Portrait of ${PROFILE.name}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} | ${PROFILE.headline}`,
    description:
      "Mathematics Graduate & M.Sc. Student · AI Trainer & Evaluator · Data Annotation · Web Development · Web3 & Digital Marketing.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${PROFILE.siteUrl}/#person`,
      name: PROFILE.name,
      url: `${PROFILE.siteUrl}/`,
      image: `${PROFILE.siteUrl}/profile.jpg`,
      jobTitle:
        "AI Trainer / AI Evaluator, Data Annotation Specialist, Web Developer & Community Manager",
      description: PROFILE.heroSummary,
      sameAs: [PROFILE.githubUrl],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Rajshahi",
      },
      knowsAbout: [
        "Applied Mathematics",
        "Machine Learning Mathematics",
        "AI Training",
        "AI Model Evaluation",
        "Data Annotation",
        "Software Testing",
        "React.js",
        "Next.js",
        "Solidity",
        "Blockchain Technology",
        "Community Management",
        "Digital Marketing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${PROFILE.siteUrl}/#website`,
      url: `${PROFILE.siteUrl}/`,
      name: `${PROFILE.name} Portfolio`,
      description: PROFILE.headline,
      publisher: {
        "@id": `${PROFILE.siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <BackgroundCanvas />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
