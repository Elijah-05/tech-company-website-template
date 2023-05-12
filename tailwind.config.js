/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('./images/banner-md.jpg')"
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primaryColor: '#14213D',
      secondaryColor: '#FCA311',
      btnHover: '#F49800',
      white: '#fff',
      ...colors,
    }
  },
  plugins: [],
}

