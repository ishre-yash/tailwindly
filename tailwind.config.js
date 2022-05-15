module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  variants: {
    scrollbar: ["rounded"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
