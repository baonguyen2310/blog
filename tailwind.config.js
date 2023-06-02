const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        // gray: {
        //   50: '#fdf8f6',
        //   100: '#f2e8e5',
        //   200: '#eaddd7',
        //   300: '#e0cec7',
        //   400: '#9B5F1F',
        //   500: '#9B5F1F',
        //   600: '#DE882D',
        //   700: '#977669',
        //   800: '#42280D',
        //   900: '#43302b',
        // },
        green: {
          50: '#fdf8f6',
          100: '#F5DBC0',
          200: '#E7AB6C',
          300: '#e0cec7',
          400: '#DE882D',
          500: '#DE882D',
          600: '#DE882D',
          700: '#977669',
          800: '#42280D',
          900: '#43302b',
        },
        blue: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#DE882D',
          500: '#821E1B',
          600: '#DE882D',
          700: '#977669',
          800: '#42280D',
          900: '#43302b',
        }
      },
      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        stock: [defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
