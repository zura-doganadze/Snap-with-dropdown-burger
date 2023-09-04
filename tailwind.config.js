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
      height: {
        'h-640px': '440px',
        
      },
      width: {
        'w-500px': '448px'
      },
    },
  },
  plugins: [],
};
