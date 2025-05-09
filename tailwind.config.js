/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark-rgb) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
        'secondary-dark': 'rgb(var(--color-secondary-dark-rgb) / <alpha-value>)',
        'dark': '#0F172A',
        'body-color': '#637381'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem'
        }
      },
      boxShadow: {
        'card': '0px 1px 3px rgba(0, 0, 0, 0.12)',
        'card-hover': '0px 10px 20px rgba(0, 0, 0, 0.08)'
      },
      animation: {
        'gradient': 'gradient 8s ease infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
} 