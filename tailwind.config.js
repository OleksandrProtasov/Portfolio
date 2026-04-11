/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* Please Don’t Tell — основная палитра */
        pdt: {
          ink: "#0D0D0D",
          violet: "#9D62D9",
          mint: "#8FD9B6",
          lemon: "#F2E96D",
          coral: "#F25835",
          surface: "#141218",
        },
        /* Сохраняем старые имена как алиасы → новые тона (меньше правок в JSX) */
        "deep-blue": "#0D0D0D",
        blue: "#8FD9B6",
        red: "#F25835",
        yellow: "#F2E96D",
        grey: "#e8ebe9",
        "dark-grey": "#5c5866",
        "opaque-black": "rgba(13, 13, 13, 0.45)",
      },
      backgroundImage: {
        "gradient-rainbow":
          "linear-gradient(125deg, #9D62D9 0%, #8FD9B6 38%, #F2E96D 68%, #F25835 100%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #9D62D9 0%, #8FD9B6 32%, #F2E96D 66%, #F25835 100%)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        "pdt-glow": "0 4px 28px rgba(157, 98, 217, 0.28)",
        "pdt-glow-mint": "0 4px 24px rgba(143, 216, 182, 0.22)",
        "pdt-line": "0 0 18px rgba(157, 98, 217, 0.35), 0 0 12px rgba(143, 216, 182, 0.2)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
