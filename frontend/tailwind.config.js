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
      keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          marquee: 'marquee 76s linear infinite',
          'marquee-slow': 'marquee 100s linear infinite',
        },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
