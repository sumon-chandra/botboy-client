/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#6366f1",
        secColor: "#4f46e5",
      },
    },
  },
  plugins: [require("daisyui")],
};
