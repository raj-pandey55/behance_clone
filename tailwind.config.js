/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      'sans' : ['"acumin-pro", "Acumin Pro", "Helvetica Neue", Helvetica, Arial, sans-serif'],
      'acumin-pro': ['"acumin-pro-wide", "Acumin Pro Wide", "Helvetica Neue", Helvetica, Arial, sans-serif']
    },
  },
  plugins: [],
}
}

