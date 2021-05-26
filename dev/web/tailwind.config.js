module.exports = {
  purge: ['.src/pages/**/*.{js,ts,jsx,tsx}', '.src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary': "#F5ECEC",
        'textPrimary': "#817F7F",
      },
      flex:{
        "7/10": '0.7 0.7 auto',
        "3/10": '0.3 0.3 auto'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
