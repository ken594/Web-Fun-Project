/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration: {
        3000: "3000ms",
      },
      keyframes: {
        showRight: {
          "100%": { width: 0 },
        },
      },
      animation: {
        "show-right": "showRight 1s ease forwards",
      },
      transitionDelay: {
        3000: "3000ms",
      },
      lineHeight: {
        12: "3rem",
        14: "5rem",
      },
      animationDelay: {
        2500: "2500ms",
      },
      backgroundSize: {
        "50%": "50%",
      },
      screens: {
        xs: "425px",
        "2xs": "320px",
      },
      fontSize: {
        "2xs": "0.5rem",
        "3xl": "1.8rem",
      },
      height: {
        "110%": "110%",
      },
      top: {
        88: "22rem",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
