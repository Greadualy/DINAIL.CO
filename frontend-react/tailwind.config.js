/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dnail-bg': '#F9F6F0',
        'dnail-bg-alt': '#EAE5DF',
        'dnail-surface': '#FCFBF9',
        'dnail-text': '#232323',
        'dnail-muted': '#7A756D',
        'dnail-accent': '#6B1D2F',
        'dnail-accent-alt': '#9E2A2B',
        'dnail-gold': '#C8A86B',
        'dnail-border': '#D6CFC4',
        'dnail-dark': '#181615',
        'dnail-light': '#F7F4EF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      }
    },
  },
  plugins: [],
}
