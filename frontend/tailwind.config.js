/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  options: {
    safelist: [
      "slide-left-translate",
        "slide-right-translate",
        "no-transform",
    ],
  },
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
      fontFamily: {
        'mono': ['\"IBM Plex Mono\"', 'monospace'],
        'sans': ['\"IBM Plex Sans Condensed\"', 'sans-serif'],
        graphik: ['Graphik', 'Arial', 'sans-serif'],
        sangbleu: ['SangBleu', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
