module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          warm: '#f5f5f5'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
