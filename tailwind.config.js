/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'cheeseburga': ['cheeseburga', 'cursive'],
        'kumbh': ['"Kumbh Sans"', 'sans-serif'],
        'baronkuffner': ['baronkuffner', 'cursive'],
      },
      colors:{
        'theme-orange' : '#FFA800',
        'theme-gray' : '#353535',

      }
    },
  },
  plugins: [],
}
