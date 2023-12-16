import { replayAnimation } from "./replayAnimation";

const root = document.documentElement;
const themeToggle = document.querySelector("#js-theme-btn");

themeToggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  replayAnimation("#js-text-highlight", "animate-text-fill");
  localStorage.setItem(
    "theme",
    root.classList.contains("dark") ? "dark" : "light",
  );
});

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.classList.toggle("dark", savedTheme === "dark");
  }
}

export { applySavedTheme };
