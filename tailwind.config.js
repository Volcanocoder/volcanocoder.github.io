/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'ui-sans-serif', 'system-ui']
      },
      lineHeight: {
        'extra-loose': '2.9',
      },
      height: {
        '100': '50rem'
      },
      fontSize: {
        'exl': '4rem'
      }
    }
  },
  plugins: [],
}