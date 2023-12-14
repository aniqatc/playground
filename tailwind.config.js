module.exports = {
  content: ["./client/**/*.html", "./client/**/*.js"],
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
      keyframes: {
        textFill: {
          "100%": { backgroundPositionX: "-100%" },
        },
        rotateFull: {
          "0%": { transform: "rotate(-60deg) scale(10)" },
          "100%": { transform: "rotate(-420deg) scale(10)" },
        },
      },
      animation: {
        "text-fill": "textFill 2s ease both 300ms",
        "rotate-full": "rotateFull 4s linear both infinite",
      },
    },
  },
  plugins: [],
};
