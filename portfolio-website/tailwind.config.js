// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Never emit this legacy logo shadow utility (avoids stray matches + dead CSS in DevTools).
  blocklist: [
    '[filter:drop-shadow(0_1px_1px_rgb(0_0_0/0.1))]',
    'md:[filter:drop-shadow(0_1px_1px_rgb(0_0_0/0.1))]',
    'lg:[filter:drop-shadow(0_1px_1px_rgb(0_0_0/0.1))]',
    'hover:[filter:drop-shadow(0_1px_1px_rgb(0_0_0/0.1))]',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
