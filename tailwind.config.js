const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      'blue': '#7D89FF',
      'indigo': '#AB40FF',
      'gray': '#DDDDDD',
      'gray-3': '#969696',
      'gray-2': '#F4F4F4',
      'gray-1': '#646464',
      'white': '#FFFFFF',
      'black_1': '#0D1222',
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

