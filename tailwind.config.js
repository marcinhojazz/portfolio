module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'green-on': '#32CD32',
      'offline': '#ff0000'
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],

  daisyui: {
  themes: ["cupcake", "dark", "cmyk", "bumblebee", "synthwave"],
  },
}
