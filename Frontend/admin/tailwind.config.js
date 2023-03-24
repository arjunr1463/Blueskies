/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
