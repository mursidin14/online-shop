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
      'blue': {
        30: '#7D89FF',
      },
      'indigo': {
        30: '#AB40FF',
      },
      'gray': {
        10: '#DDDDDD',
        20: '#F4F4F4',
        30: '#969696',
        40: '#646464',
      },
      'white': '#FFFFFF',
      'black_1': '#0D1222',
    },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}

