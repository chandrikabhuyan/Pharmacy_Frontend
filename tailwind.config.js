module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "prim-blue": "#4980A4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
