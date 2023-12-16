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
      },
      keyframes: {
        textFill: {
          "100%": { backgroundPositionX: "-100%" },
        },
        borderRotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
    },
  },
  plugins: [],
};
