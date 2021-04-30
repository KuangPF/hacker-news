module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'color-scale': {
          yellow: {
            '4': 'var(--color-scale-yellow-4)'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
