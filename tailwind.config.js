/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg": "url('./images/banner-md.jpg')",
      },
      animation: {
        "slow-slide-l": "slideLeft 1s ease-in-out",
        "slow-slide-r": "slideRight 1s ease-in-out",
      },
      keyframes: {
        slideLeft: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
        slideRight: {
          "0%": { opacity: 0, transform: "translateY(-80px)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryColor: "#14213D",
      secondaryColor: "#FCA311",
      btnHover: "#F49800",
      white: "#fff",
      ...colors,
    },
  },
  plugins: [],
};
