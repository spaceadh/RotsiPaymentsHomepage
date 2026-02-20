module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rotsi': {
          'black': '#08080E',
          'surface': '#0F0F1B',
          'surface-2': '#1A1A2E',
          'gold': '#C9A84C',
          'gold-light': '#E8C97A',
        }
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
