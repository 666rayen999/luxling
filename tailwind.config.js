/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a14",
        secondary: "#40f",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(104, 79, 131, 0.1)"
      },
      fontFamily: {
        poppings: ["Poppings", "sans-serif"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      ls: "1200px",
      xl: "1700px"
    }
  },
  plugins: [],
}
