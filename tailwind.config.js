/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      objectPosition: {
        'center-top': 'center top',
        'center-bottom': 'center bottom'
      }
    }
  },
  plugins: []
};
