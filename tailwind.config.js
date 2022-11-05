/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "fedex-purple": "#4D168A",
        "fedex-orange": "#FD601B",
        "fedex-red": "#DC0033",
        "fedex-blue": "#007AB7",
        "fedex-placeholder": "#333333",
        "fedex-grey": "#F2F2F2",
        "fedex-header-black": "#1E1E1E",
        "fedex-lightblue": "#5EB4DF",
      },
      screens: {
        "3xl": "2750px",
      },
    },
  },
  plugins: [],
};
