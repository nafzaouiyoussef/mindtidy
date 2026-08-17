import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#8FA98F",
          light: "#B5C7B5",
          lighter: "#E4ECE4",
          dark: "#6E8A6E",
          darker: "#557055",
        },
        cream: {
          DEFAULT: "#F7F3EC",
          dark: "#EFE9DE",
        },
        slate: {
          DEFAULT: "#3E4A45",
          light: "#5C6B64",
          muted: "#7A877F",
        },
        // Terracotta — brand accent + primary CTA. Deepened from the brand
        // guide's "soft" #D9A48F so buttons actually pop on the cream bg.
        terracotta: {
          DEFAULT: "#C06B4A", // punchy CTA — was pastel #D9A48F
          light: "#EAC8BA", // kept for soft chip backgrounds
          dark: "#9E4F30", // hover / focus ring — was #C08265
        },
        // Spider-Man palette — used only on /spider-man pages so that
        // page has its own visual identity while still living on MindTidy.
        spider: {
          red: "#D62828",
          "red-dark": "#B01F1F",
          blue: "#1D3557",
          "blue-dark": "#122540",
          "red-tint": "#FBE5E5",
          "blue-tint": "#DDE4EC",
        },
      },
      fontFamily: {
        heading: ["var(--font-quicksand)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(62, 74, 69, 0.08)",
        lift: "0 12px 40px rgba(62, 74, 69, 0.14)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "check-pop": {
          "0%": { transform: "scale(0.8)" },
          "60%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite 1s",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
