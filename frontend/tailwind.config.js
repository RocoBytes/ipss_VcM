/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vue-tailwind-datepicker/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "app" : "url('/img/1.jpg')",
      },
      colors:{
        "vtd-primary" : colors.blue,
        "light-mauve": "#c5a2cb",
        "pastel-lilac": "#e0bfe4",
        "deep-plum": "#5b3c62",
        "muted-grape": "#92608a",
        "dark-indigo": "#110721",
      }
    },
  },
  plugins: [],
}

