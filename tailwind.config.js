/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "rgba(79, 70, 229, 1)",
        "sidebar-tab": "rgb(67, 56, 202, 1)",
        "hover-sidebar-tab": "rgb(42, 28, 221, 1)",
      },
    },
  },
  plugins: [],
};
