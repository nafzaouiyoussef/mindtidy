import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        ink: {
          DEFAULT: "#33302B",
          soft: "#5C574E",
          muted: "#8A8479",
        },
        coral: {
          DEFAULT: "#E4664B",
          dark: "#C94F35",
        },
        teal: {
          DEFAULT: "#3E7C6F",
          dark: "#2F6156",
        },
        mustard: {
          DEFAULT: "#DE9E33",
          dark: "#B87F1F",
        },
        lavender: {
          DEFAULT: "#8B7BB5",
          dark: "#6F5F9C",
        },
        // soft pastel tints for section backgrounds and chips
        blush: "#F8E2DA",
        mint: "#DFEAE4",
        sand: "#F8ECD3",
        lilac: "#EAE5F2",
      },
      fontFamily: {
        heading: ["var(--font-lora)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(51, 48, 43, 0.08)",
        lift: "0 12px 40px rgba(51, 48, 43, 0.14)",
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
