/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // Specifically match index.html in the root directory
    "./src/**/*.{html,js}" // Match HTML and JS files in the src folder and its subfolders
  ],
  theme: {
   extend: {
  colors: {
        default: '#2C3C87', // Define your custom color
        accent: '#F15F5C',
      },
   },
  },
  plugins: [],
}

