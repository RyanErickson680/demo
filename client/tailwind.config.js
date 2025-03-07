/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tech: ["Share Tech Mono", 'mono']
      },
      colors: {
        mainTeal: '#00e5ff',
        mainBlue: '#1200ff',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
