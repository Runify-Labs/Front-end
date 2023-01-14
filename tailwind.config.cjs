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
        'dark-purple': '#321325',
        'davys-grey': '#5E5B52',
        'komnu-green': '#243119'
      }
    },
  },
  plugins: [],
}