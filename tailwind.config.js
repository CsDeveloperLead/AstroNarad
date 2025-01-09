/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'], // Adding Playfair Display font
      },
      animation: {
        "spin-slow": "spin-slow 10s linear infinite", // Slower spin
        "spin-fast": "spin-fast 500ms linear infinite", // Faster spin
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "spin-fast": {
          from: { transform: "rotate(3600deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
