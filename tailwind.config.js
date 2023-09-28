/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#383b44',
        primary: '#c3f012',
        second: '#4d6325'
      }
    },
  },
  plugins: [],
}