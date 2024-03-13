/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(/neww.png), pointer',
      }
    },
  },
  plugins: [],
}