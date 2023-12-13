import "../styles/main.css";

const themeToggle = document.querySelector("#js-theme-btn");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  replayAnimation("#js-text-highlight", "animate-text-fill");
});

function replayAnimation(elSelector, animationName) {
  const animatedEl = document.querySelector(elSelector);
  animatedEl.classList.remove(animationName);
  void animatedEl.offsetWidth;
  animatedEl.classList.add(animationName);
}
