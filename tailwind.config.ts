import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#0b1020",
        neon: "#38bdf8",
        violet: "#7c3aed",
        amber: "#f97316",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 10px 40px rgba(56,189,248,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
