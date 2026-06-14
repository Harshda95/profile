/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#111118",
        border: "#1f1f2e",
        primary: "#a78bfa", // purple-400
        primaryDark: "#7c3aed", // purple-600
        accent: "#c4b5fd", // purple-300
        muted: "#9ca3af",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at top left, rgba(124,58,237,0.25), transparent 50%), radial-gradient(circle at bottom right, rgba(167,139,250,0.18), transparent 50%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(167,139,250,0.04))",
      },
      animation: {
        gradientShift: "gradientShift 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
