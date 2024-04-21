/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dark-blue': '#2A324B',
        'yellow': '#FFC857'
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Montserrat-Light': ['Montserrat-Light', 'sans-serif'],
        'Montserrat-Regular': ['Montserrat-Regular', 'sans-serif'],
        'Montserrat-Medium': ['Montserrat-Medium', 'sans-serif'],
        'Montserrat-Bold': ['Montserrat-Bold', 'sans-serif'],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};