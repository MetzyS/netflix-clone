/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(rgba(0,0,0,0%) ,rgba(0,0,0,100%))",
      },
      dropShadow: {
        default: "0 1px 1px rgb(0 0 0 / 0.8)",
      },
    },
  },
  plugins: [],
};
