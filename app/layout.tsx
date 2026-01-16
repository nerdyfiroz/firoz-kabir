import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Muhammad Firoz Kabir | Mathematics • AI • Blockchain",
  description:
    "Personal portfolio of Muhammad Firoz Kabir, mathematics student and web developer exploring AI, blockchain, and digital products.",
  metadataBase: new URL("https://mdfirozkabir.xyz"),
  openGraph: {
    title: "Muhammad Firoz Kabir | Mathematics • AI • Blockchain",
    description:
      "Mathematics student and web developer exploring AI, blockchain, and digital products.",
    url: "https://mdfirozkabir.xyz/",
    siteName: "Muhammad Firoz Kabir",
    images: ["/profile.jpg"],
    type: "website",
  },
  themeColor: "#0b1020",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <BackgroundCanvas />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
