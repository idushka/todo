/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '700px',
        lg: '700px',
        xl: '700px',
        '2xl': '700px',
      },
    },
  },
  plugins: [],
}

