/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-bg": "#1A1E1C",
        "layout-bg": "#0B0B0B",
        "primary": "#2AB32A",
        "secondary": "#30AB4A",
        "mine-shaft": "rgb(51 51 51 / 1)",
        "nav-hover": "#333333",
      }
    },
  },
  plugins: [],
}

