/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: "Cinzel",
      },
      backgroundImage: {
        'featured': "url('/src/assets/home/featured.jpg')",
      }
    },
  },
  plugins: [require("preline/plugin")],
};
