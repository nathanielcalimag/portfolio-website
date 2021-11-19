const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: colors.orange,
        lime: colors.lime,
        sky: colors.sky,
      },
      screens: {
        xs: "480px",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen xs": {
            maxWidth: "608px",
          },
          "@screen sm": {
            maxWidth: "608px",
          },
          "@screen md": {
            maxWidth: "672px",
          },
          "@screen lg": {
            maxWidth: "720px",
          },
          "@screen xl": {
            maxWidth: "768px",
          },
          "@screen 2xl": {
            maxWidth: "896px",
          },
        },
      });
    },
  ],
  corePlugins: {
    container: false,
  },
};
