/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secColor: "#6366f1",
        mainColor: "#4f46e5",
      },
      fontFamily: {
        head: "Maven Pro",
      },
    },
  },
  plugins: [require("daisyui")],
};
