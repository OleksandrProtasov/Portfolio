/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pdt: {
          bg: "#1A1640",
          ink: "#26215C",
          violet: "#7F77DD",
          mint: "#1D9E75",
          lemon: "#EEEDFE",
          body: "#AFA9EC",
          tag: "#5DCAA5",
          coral: "#1D9E75",
          surface: "#26215C",
        },
        "deep-blue": "#26215C",
        blue: "#1D9E75",
        red: "#1D9E75",
        yellow: "#EEEDFE",
        grey: "#e8ebe9",
        "dark-grey": "#5c5866",
        "opaque-black": "rgba(26, 22, 64, 0.55)",
      },
      backgroundImage: {
        "gradient-rainbow":
          "linear-gradient(125deg, #7F77DD 0%, #1D9E75 38%, #EEEDFE 55%, #7F77DD 100%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #7F77DD 0%, #1D9E75 100%)",
      },
      fontFamily: {
        display: [
          '"Bricolage Grotesque"',
          "system-ui",
          "sans-serif",
        ],
        jakarta: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        jetbrains: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        /* Совместимость: playfair/opensans/dmmono в JSX */
        playfair: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        opensans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        dmmono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        display: "-2px",
      },
      boxShadow: {
        "pdt-glow": "0 4px 28px rgba(127, 119, 221, 0.28)",
        "pdt-glow-mint": "0 4px 24px rgba(29, 158, 117, 0.22)",
        "pdt-line":
          "0 0 18px rgba(127, 119, 221, 0.32), 0 0 12px rgba(29, 158, 117, 0.18)",
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
