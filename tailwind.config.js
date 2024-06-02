/** @type {import('tailwindcss').Config} */
  module.exports = {
    plugins: [
      require('daisyui'),
    ],
    content: ["./**/*.{html,js}"],
    theme: {
      content: ["index.html"],
      fontFamily: {
        'sans': ["Poppins", sans-serif],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      }
    }
  }


