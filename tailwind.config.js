/** @type {import('tailwindcss').Config} */
import { colors as defaultColors } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./public/*.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      colors: {
        'custom-blue': '#0290ff',
      },
    },
  },
  plugins: [],
};
