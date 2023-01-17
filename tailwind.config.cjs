/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-pantone': '#1DB954',
        'tan': '#DFBE99',
        'ash-gray': '#B7B7A4',
        'artichoke': '#A5A58D',
        'ebony': '#6B705C',
        'black-olive': '#36382E',
        'testA': '#368f8b'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}