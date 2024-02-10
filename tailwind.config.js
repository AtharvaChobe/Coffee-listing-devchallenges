/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components"
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1B1D1F',
        'charcoal': '#111315',
        'slate': '#6F757C',
        'light-green': '#BEE3CC',
        'cream': '#FEF7EE',
        'mustard': '#F6C768',
        'coral': '#ED735D',
      },
    },
  },
  plugins: [],
}