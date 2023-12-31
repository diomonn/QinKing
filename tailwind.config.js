import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      keyframes:{
        SlidingEnter:{
          '0%':{
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%':{
            opacity: '1',
            transform: 'none'
          }
        }
      }
    },
    animation:{
       SlidingEnter:'SlidingEnter 1s both 1'
    },
   
    fontFamily:{
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [],
}

