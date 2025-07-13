/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'herbal-green': '#094d2a',
        'herbal-light': '#326739',
        'herbal-accent': '#22ff00d5',
        'herbal-bg': '#f7fdf5',
        'herbal-card': '#e9f5ec',
        'herbal-card-alt': 'rgba(8, 227, 0, 0.434)',
        'golden': '#ffd700',
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}