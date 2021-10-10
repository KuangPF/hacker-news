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
      },
      keyframes: {
        ring: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        ring: 'ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
