/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%": { opacity: "1" },
          "80%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        flicker: "flicker 0.2s infinite 0.3s",
      },
    },
  },
  plugins: [],
}

