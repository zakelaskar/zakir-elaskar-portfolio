import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0f172a",
          muted: "#475569",
        },
        brand: {
          purple: "#7c3aed",
          violet: "#8b5cf6",
          sky: "#0ea5e9",
          indigo: "#6366f1",
        },
      },
      boxShadow: {
        card: "0 24px 80px -24px rgba(99, 102, 241, 0.18), 0 12px 32px -16px rgba(15, 23, 42, 0.08)",
        soft: "0 8px 30px rgba(15, 23, 42, 0.06)",
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(167, 139, 250, 0.35), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 20%, rgba(125, 211, 252, 0.45), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 90%, rgba(196, 181, 253, 0.25), transparent 55%)",
        "hero-name":
          "linear-gradient(105deg, #7c3aed 0%, #6366f1 45%, #0ea5e9 100%)",
        "cta-primary":
          "linear-gradient(105deg, #7c3aed 0%, #6366f1 50%, #2563eb 100%)",
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        "float-delayed": "float 22s ease-in-out infinite 3s",
        drift: "drift 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(12px, -18px) scale(1.03)" },
          "66%": { transform: "translate(-10px, 8px) scale(0.98)" },
        },
        drift: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(10%)" },
        },
      },
    },
  },
  plugins: [typography],
};
