/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      backgroundImage: {
        'fond-div': "url('../img/so-white.png')",
      },
      colors: {
        custom: {
          50: '#a73f2d',
        }
      }
    },
  },
  plugins: [],
}