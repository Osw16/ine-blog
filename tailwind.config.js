/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:'Poppins, sans-serif',
        inclusive:'Inclusive Sans, sans-serif'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
