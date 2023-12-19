/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontSize: {
      title: "28px",
      subtitle: "25px",
    },
    extend: {
      colors: {
        orange: "#f47321",
        red: "#f34646",
        yellow: "#DCCD42",
        green: "#66B56E",
        blue: "#5BB0FF",
        darkgray: "#616161",
        gray: "#757575",
        lightgray: "#acacac",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
