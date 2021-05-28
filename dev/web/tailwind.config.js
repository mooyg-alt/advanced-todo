module.exports = {
  purge: ['.src/pages/**/*.{js,ts,jsx,tsx}', '.src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': "#F5ECEC",
        'textPrimary': "#414141",
        'secondary': "#ABB0D8"
      },
      flex:{
        "7/10": '0.85 0.85 auto',
        "3/10": '0.15 0.15 auto'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
