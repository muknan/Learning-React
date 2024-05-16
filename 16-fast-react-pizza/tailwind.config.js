/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: { pizza: "Roboto Mono, monospace" }, //  Custom font name
    // Can be used on any element's className
    // To replace font for entire app we specify it in "sans" property which is the "default" font property Tailwind
    // Properties value would override here
    fontFamily: { sans: "Roboto Mono, monospace" },

    // For keeping everything from tailwind and adding new colors/properties, we have to put it under extend
    // Properties are extended not overrode
    extend: {
      colors: { pizza: "#123456" },
      fontSize: { pizza: ["80rem", { lineHeight: 1 }] },
      height: { screen: "100dvh" },
    },
  },
  plugins: [],
};
