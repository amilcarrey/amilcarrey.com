const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')
module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      colors: {
         primary: '#06487A',
         secondary: '#05354B',
         teal: '#1697A1',
         neutral: { 100: '#9F9F9F', 200: '#5A5A5A' },
         accent: '#169C86',
         dark: '#0A1926',
         light: '#F4EBD9',
         yellow: '#F9E900',
         //F5F3F5 
         //D8E4FF
      },
      fontFamily: {
         heading: ['Cocogoose', ...fontFamily.serif],
         primary: "var(--montserrat-font)"
      },
      keyframes: {
         slide: {
            '100%': { transform: 'translateX(-50%)' },
         },
         rot3d: {
            '50%': { transform: 'rotate3d(0, 1, 0, 180deg)' },
            '100%': { transform: 'rotate3d(0, 1, 0, 360deg)' },
         },
      },
      animation: {
         'spin-slow': 'spin 15s linear infinite',
         slide: 'slide 20s linear infinite',
         '3d': 'rot3d 5s linear infinite',
      },
   },
   plugins: [forms, typography],
}
