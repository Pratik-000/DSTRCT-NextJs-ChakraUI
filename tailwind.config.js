/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      backgroundImage: {
      },
      screens: {
        xs: "576px",
        sm: "640px",
        md: "872px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
};
