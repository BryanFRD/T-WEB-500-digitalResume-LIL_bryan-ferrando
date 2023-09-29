const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#383b44',
        backgroundsec: '#3b424c',
        primary: '#c3f012',
        second: '#4d6325'
      },
      fontFamily: {
        sans: ['Kanit', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}