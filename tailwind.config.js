/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-black': 'rgb(16, 16, 16)',
        'grey-border' : '#5F5E5E',
        'red': '#E50914'
      }
    },
  },
  plugins: [],
}