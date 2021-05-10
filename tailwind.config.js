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
      },
      boxShadow: {
        DEFAULT: '0 1px 2px rgb(0 0 0 / 10%)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
