import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#050816",
        surface: "#0b1126",
        neon: "#38bdf8",
        cyanGlow: "#22d3ee",
        violet: "#8b5cf6",
        emeraldGlow: "#34d399",
        amber: "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(56, 189, 248, 0.35)",
        "glow-violet": "0 0 40px -8px rgba(139, 92, 246, 0.35)",
        "glow-emerald": "0 0 36px -10px rgba(52, 211, 153, 0.32)",
        card: "0 20px 50px -24px rgba(2, 6, 23, 0.85)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
