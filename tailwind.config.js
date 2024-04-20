/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#52B69A",
          200: "#76C893",
        },
        secondary: {
          100: "#FFA92C",
          200: "#FFC570",
        },
        tertiary: {
          100: "#00B2A0",
          200: "#00D3BD",
        },
        gray: {
          black: "#0C0C20",
          white: "#F6FAF9",
        },
      },
    },
  },
  plugins: [],
};
