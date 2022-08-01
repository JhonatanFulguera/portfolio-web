module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '150': '150px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gris-b': '#282828',
      'fuccia-b': '#f300b4',
      
    },
  },
  plugins: [],
}