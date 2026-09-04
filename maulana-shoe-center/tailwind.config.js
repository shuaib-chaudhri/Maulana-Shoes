/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#fdfbf7',
          100: '#f7f4ed',
          200: '#efe9de',
          300: '#dfd7c6',
        },
        charcoal: {
          800: '#27313b',
          900: '#1c242c',
          950: '#11171d',
        },
        terracotta: {
          light: '#b56856',
          DEFAULT: '#9a5645',
          dark: '#7e3e30',
        },
        brass: {
          light: '#edd493',
          DEFAULT: '#d4ad58',
          dark: '#b68e39',
        },
        muted: {
          DEFAULT: '#5d6467',
          light: '#8f9699',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(28, 36, 44, 0.08)',
        'elevated': '0 25px 50px -12px rgba(17, 23, 29, 0.25)',
      }
    },
  },
  plugins: [],
};
