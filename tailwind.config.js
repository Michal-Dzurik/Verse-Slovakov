/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#1F1F1F', // Background color
        'light-grey': '#ADADA9', // Text default color
        'white': '#D7D7D7', // White
      },
      fontFamily: {
        'main' : ['Roboto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

