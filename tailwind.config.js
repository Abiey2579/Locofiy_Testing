/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-100": "#f0f0f2",
        "gray-900": "#252b3b",
        orange: "#ed662c",
        "gray-300": "#8198af",
        voilet: "#7a4d64",
        yellow: "#f9d14b",
        "gray-200": "#a9aec0",
        green: "#27996d",
        "light-purple": "#f7f6f2",
        maroon: "#de7673",
      },
      spacing: {},
      fontFamily: {
        catamaran: "Catamaran",
        quicksand: "Quicksand",
      },
      borderRadius: {
        "481xl": "500px",
      },
    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      "21xl": "2.5rem",
      xl: "1.25rem",
      sm: "0.88rem",
      "13xl": "2rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
