import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0F1B2D",
          950: "#0A1220",
          900: "#0F1B2D",
          800: "#162538",
          700: "#1C2F47",
        },
        coral: {
          DEFAULT: "#FF7849",
          600: "#F06435",
          500: "#FF7849",
          400: "#FF916B",
          100: "#FFE8DF",
        },
        steel: {
          DEFAULT: "#8FA3C2",
          400: "#A7B7CF",
          300: "#B8C5DA",
          200: "#D0D9E8",
        },
        slate: {
          brand: "#5F7494",
        },
        surface: {
          light: "#E8EAEE",
          warm: "#F5F3F0",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.03em",
        brand: "0.2em",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(255, 120, 73, 0.35)",
        panel: "0 24px 80px -24px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(143,163,194,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(143,163,194,0.08) 1px, transparent 1px)",
        "radial-coral":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,120,73,0.18), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
