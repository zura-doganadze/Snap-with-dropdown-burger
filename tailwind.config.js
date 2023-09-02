/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#686868",
      },
      backgroundColor: {
        'my-acgkround': "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
