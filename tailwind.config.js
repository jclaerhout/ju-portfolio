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
        'yellow': '#FFC857',
        'white': '#FFFFFF',
        'darkgreen': '#173430',
        'lightgreen': '#19B888',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        'zen-regular': ['ZenKakuGo-Regular', 'sans-serif'],
        'zen-medium': ['ZenKakuGo-Medium', 'sans-serif'],
        'zen-bold': ['ZenKakuGo-Bold', 'sans-serif'],
        'zen-light': ['ZenKakuGo-Light', 'sans-serif'],
        'zen-black': ['ZenKakuGo-Black', 'sans-serif'],
      }
    },
  },
  plugins: [],
};