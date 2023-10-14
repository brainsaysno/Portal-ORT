/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#661020',
          50: '#EC8699',
          100: '#E86E85',
          200: '#E13E5C',
          300: '#C71F3E',
          400: '#96182F',
          500: '#661020',
          600: '#540D1A',
          700: '#430A15',
          800: '#31080F',
          900: '#1F050A',
          950: '#170407'
        },
        timber: "#f1f1f1",
        light: "#dddddd",
        hover: "#eeeeee",
        charcoal: "#292929",
        active: "#0166fe",
      },
    },
  },
  plugins: [],
};
