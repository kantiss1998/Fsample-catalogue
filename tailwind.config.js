/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      },
    },
    screens: {
      xxl: "1440px",
      xl: "1280px",
      lg: "1024px",
      md: "790px",
      sm: "640px",
      xs: "400px",
      xxs: "320px",
    },
    extend: {
      colors: {
        blue: "#4A69E2",
        blue_dark: "#324fc7",
        yellow: "#FFA52F",
        white: "#FFFFFF",
        fa_white: "#FAFAFA",
        gray: "#E7E7E3",
        gray_main: "#70706E",
        gray_dark: "#232321",
      },
    },
  },
  plugins: [],
};
