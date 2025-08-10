/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   fontFamily: {
        'snap': ['font-snap', 'sans-serif'], 
      },
    extend: {
      spacing:{
        "128":"30rem" ,
      }
    },
  },
  content: [
    './index.html', // Ensure Tailwind scans index.html
    './src/**/*.{html,js}', // Adjust based on your project structure
  ],
  plugins: [],
}

