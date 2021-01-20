module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    },
    extend: {
      margin: {
        content: '-75px'
      },
      colors: {
        gray: {
          warm: '#f5f5f5'
        },
        chrblue: {
          300: '#5386d1',
          500: '#5a77a1',
          700: '#355481',
          900: '#1f3960',
        },
        chr: {
          gray: '#f5f5f5',
          primary: '#242e47',
          secondary: '#abb4cf',
          accent: {
            purple: '#93378d',
            blue: '#5258a8',
            ltblue: '#4b77df',
            green: '#7bbc5f',
            yellow: '#cbd83d',
            orange: '#ccaf39',
            red: '#b45b4e',
          }
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif']
      },
      height: {
        'hero': '40.5rem',
      },
      maxHeight: {
        'hero': '40.5rem',
        'heroinner': '20.5rem',
      },
      minHeight: {
        'hero': '40.5rem',
        'heroinner': '20.5rem',
      },
      border: {
        4: 'border-width: 4px'
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
