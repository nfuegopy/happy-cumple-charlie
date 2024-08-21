/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charli-pink': '#FFC0CB',
        'charli-purple': '#8A2BE2',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}