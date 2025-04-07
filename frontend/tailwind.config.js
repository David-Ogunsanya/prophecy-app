/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
      fontFamily: {
        'mono': ['"IBM Plex Mono"', 'monospace'],
        'sans': ['"IBM Plex Sans Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
