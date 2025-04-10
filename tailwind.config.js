/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3743D',
        'custom-gray': '#939393',
        'custom-black': '#2C2C2C',
      },
    },
  },
  plugins: [],
}
