/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",

    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {

        'brand-orange': {
          'DEFAULT': '#F97316'
        },
      },
    },
  },
  plugins: [],
}
