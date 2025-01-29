/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1F1F1F', // Background color
        'gray': '#353535',
        'light-gray': '#ADADA9', // Text default color
        'white': '#D7D7D7', // White

        'white-darken': '#acacac',
      },
      fontFamily: {
        'main' : ['Roboto Serif', 'serif'],
      },
    },
  },
}

