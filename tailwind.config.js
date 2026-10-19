/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: { xs: "420px", sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      colors: {
        cream: "#faf7f3",
        mist: "#f5f1ed",
        ink: "#231f20",
        wine: "#8a3f4d",
        rose: "#d98b95",
        roseDark: "#c97581",
        roseText: "#e08b98",
        bronze: "#7a5a2e",
        peach: "#fdeed8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(16px)" }, "100%": { opacity: 1, transform: "none" } },
        pop: { "0%": { opacity: 0, transform: "scale(.94)" }, "100%": { opacity: 1, transform: "none" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        ring: { "0%": { boxShadow: "0 0 0 0 rgba(217,139,149,.55)" }, "100%": { boxShadow: "0 0 0 14px rgba(217,139,149,0)" } },
      },
      animation: {
        fadeUp: "fadeUp .7s ease-out both",
        pop: "pop .25s ease-out both",
        marquee: "marquee 26s linear infinite",
        float: "float 4s ease-in-out infinite",
        ring: "ring 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
