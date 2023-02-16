/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // letterSpacing: {
      //   "letter-spacing-standart": "-0.015em",
      // },
      colors: {
        "custom-blue": "#194591",
        "custom-active-blue": "#21A7F9",
        "custom-disable-blue": "rgba(33, 167, 249, 0.6)",
        "custom-orange": "#FF7964",
        "custom-black": "#010A1B",
        "custom-gray": "#999C9F",
      },
    },
  },
  plugins: [],
};
