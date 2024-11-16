/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1975cc', // Example: Blue
        secondary: '#002540', // Example: Green
        textColor: '#333333', // Example: Dark Gray
        backgroundColor: '#f5f5f5', // Example: Light Gray
      }
    },
  },
  plugins: [],
}
