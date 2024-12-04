/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'grotesk': ['Space Grotesk', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    colors: {
      'yellow': '#FDCA09',
      'dark-yellow': '#FEC00A',
      'black': '#101010',
      'white': '#FFFFFF',
      'gray': '#D9D9D9',
      'gray-30': '#F4F4F4'
    },
    extend: {},
  },
  plugins: [],
}

