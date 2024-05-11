/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Arabic':'Arabic',
        'Nightshade':'Nightshade',
        'Aclonica':'Aclonica',
        'Inika':'Inika'
      }
    },
  },
  plugins: [],
}