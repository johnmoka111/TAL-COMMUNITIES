/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables manual toggle by adding/removing 'dark' class on root element
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        tal: {
          navy: '#1B3B6F',      // Navy bleu du logo
          orange: '#F58220',    // Orange dynamique du logo
          grey: '#A0AEC0',      // Gris technologique
          dark: '#0B132B',      // Bleu très sombre pour les fonds sombres
        },
        slate: {
          850: '#1e293b', // Extra dark theme color
        }
      },
    },
  },
  plugins: [],
}
