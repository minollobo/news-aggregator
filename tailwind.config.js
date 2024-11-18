/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#bbbbbb',
        'gray-dark': '#212121',
        'gray-mute': '#191919',
        'black': '#121212'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

