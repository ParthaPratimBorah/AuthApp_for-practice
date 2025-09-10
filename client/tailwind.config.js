/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      "brand-dark": "#190019",
      "brand-darkPurple": "#2B124C",
      "brand-purple": "#522B5B",
      "brand-mauve": "#854F6C",
      "brand-peach": "#DFB6B2",
      "brand-softPink": "#FBE4D8",
    },
  },
},
  plugins: [],
  darkMode: "class", // enables dark mode via .dark
};
