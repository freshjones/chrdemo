module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          warm: '#f5f5f5'
        },
        chrblue: {
          300: '#5386d1',
          500: '#5a77a1',
          700: '#355481',
          900: '#1f3960',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif']
      },
      maxHeight: {
        'hero': '40.5rem',
      },
      minHeight: {
        'hero': '40.5rem',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
