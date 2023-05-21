/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-background-color': '#F2F6F5',
      },

      colors: {
        'primary-focus': '#DF4D67',
      },

      fontFamily: {
        'captions': ['bc-alphapipe', 'sans-serif', 'helvetica'],
        'default': ['Poppins', 'sans-serif', 'helvetica'],
      }
    },
  },
  plugins: [],
}

