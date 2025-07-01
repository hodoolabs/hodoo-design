/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#030616",
          900: "#101729",
          800: "#20293A",
          700: "#364253",
          600: "#4A5667",
          500: "#677589",
          400: "#97A3B6",
          300: "#CDD5E0",
          200: "#E3E8EF",
          100: "#F2F5F9",
          50: "#F8FAFC",
        },
        blue: {
          900: "#233876",
          800: "#1E429F",
          700: "#1A56DB",
          600: "#1C64F2",
          500: "#3F83F8",
          400: "#76A9FA",
          300: "#A4CAFE",
          200: "#C3DDFD",
          100: "#E1EFFE",
          50: "#EBF5FF",
        },
      },
    },
  },
  plugins: [],
};
