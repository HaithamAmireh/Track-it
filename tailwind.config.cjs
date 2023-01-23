/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing_pattern: "url('/public/Animated_Shape.svg')",
      },
    },
  },
  plugins: [],
};
