/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito','sans-serif']
      },
      colors: {
        primary: '#A47DE4',
        secondary: '#7DE4AC',
      },
      backgroundImage: {
        'code-pattern': "url('assets/code-bg.jpg')",
      }
    },
  },
  plugins: [],
}