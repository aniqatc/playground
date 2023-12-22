module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        archivo: [
          "Archivo",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        inter: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      animation: {
        "text-fill": "textFill 2s ease both 250ms",
        "border-rotate": "borderRotate 4s linear both infinite",
        pop: "pop 1s ease-in both",
      },
      keyframes: {
        textFill: {
          "100%": { backgroundPositionX: "-100%" },
        },
        borderRotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        pop: {
          "0%, 60%, 100%": { transform: "scale(1)", opacity: "1" },
          "25%": { transform: "scale(1.75)", opacity: "0.25" },
        },
      },
    },
  },
  plugins: [],
};
