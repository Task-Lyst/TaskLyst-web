/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        maincolor: '#292f75',
      }
    },
  },
  plugins: []
}

/* 

module.exports = {
  corePlugins: {
    preflight: false,
  }
}

*/
