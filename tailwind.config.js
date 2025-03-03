/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        line: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        line: 'line 2s ease-in-out forwards',
      },

      fontFamily: {
        sans: ['josefin sans', 'serif',]
      }
      ,
  },
  plugins: [],
}
}



