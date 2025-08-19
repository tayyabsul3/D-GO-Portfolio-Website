/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-beige': 'rgb(248, 245, 240)',
      },
      boxShadow: {
        'inner-lg': 'inset 0 0 10px 0 rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],  
}