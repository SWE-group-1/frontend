/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure your React components are included
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#A38901',
      },
    },
  },
  plugins: [],
}