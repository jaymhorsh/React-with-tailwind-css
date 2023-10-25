import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007acc', // Define a custom color code
      },
      screens: {
        //Added new screen breakpoint 
        'xs': '275px',
        ...defaultTheme.screens,
        'xs': {'max': '540px'}
      },
    },
  },
  plugins: [],
}
