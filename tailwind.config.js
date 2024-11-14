/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono, monospace"],
      },
      scrollbar: {
        none: {
          "&::-webkit-scrollbar": { display: "none" }, // Hides scrollbar in WebKit browsers (Chrome, Safari)
          "-ms-overflow-style": "none", // Hides scrollbar in IE and Edge
          "scrollbar-width": "none", // Hides scrollbar in Firefox
        },
      },
    },
  },
  plugins: [
    // Register a custom plugin to generate the `no-scrollbar` class
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
      });
    },
  ],
};
