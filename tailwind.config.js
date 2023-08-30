/** @type {import('tailwindcss').Config} */
export default {

  //The content property is an array that specifies the files which Tailwind CSS should scan for classes:
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  //The theme property is an object that allows you to customize various aspects of the default styling provided by Tailwind CSS.
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};