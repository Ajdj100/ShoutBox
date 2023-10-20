/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'brand': ['"Ubuntu"']
      },
      colors: {
        'brand-main': '#7C00F9',
        'brand-medium': '#D4C7F9',
        'brand-light': '#EBEDFF',
        'brand-white': '#F8F8FC'
      }
    },
  },
  plugins: [],
}

