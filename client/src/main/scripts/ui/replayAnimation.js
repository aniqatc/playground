function replayAnimation(elSelector, animationName) {
  const animatedEl = document.querySelector(elSelector);
  animatedEl.classList.remove(animationName);
  void animatedEl.offsetWidth;
  animatedEl.classList.add(animationName);
}

export { replayAnimation };
