/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'monarc-black': '#0A0A0A',
        'monarc-secondary': '#111111',
        'monarc-text': '#F5F5F5',
        'monarc-text-secondary': '#AAAAAA',
        'monarc-accent': '#BFAF9A',
        'monarc-accent-alt': '#C0C0C0',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
        'ultra': '0.3em',
      },
    },
  },
  plugins: [],
}
