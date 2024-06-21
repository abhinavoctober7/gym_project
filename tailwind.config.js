/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sidebar-bg": "rgba(79, 70, 229, 1)",
      },
      width: {
        "5/24": "20.833333%", // 5/24th of the width
        "19/24": "79.166666%", // 23/24th of the width
      },
    },
  },
  plugins: [],
};
