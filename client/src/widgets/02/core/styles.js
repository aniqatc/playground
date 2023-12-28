import { Context } from "./context";

function handleGraphingMode() {
  Context.pastEntries.forEach((entry) => {
    entry.classList.add("active");
  });
  setTimeout(() => {
    if (document.querySelector(".function-plot")) {
      document.querySelector(".function-plot").style.height = "auto";
      document.querySelector(".function-plot").style.opacity = "1";
    }
  }, 1000);
  Context.graphingButtons.forEach((btn) => {
    btn.disabled = false;
    btn.classList.add("active");
  });
  Context.toggleHistoryButton.disabled = true;
  Context.equalButton.disabled = true;
  Context.equalButton.classList.remove("active");
  Context.graphButton.classList.add("active");
  Context.displayValue.style.fontSize = "16px";
}

function handleScientificMode() {
  if (document.querySelector(".function-plot")) {
    document.querySelector(".function-plot").remove();
  }
  Context.pastEntries.forEach((entry) => {
    entry.classList.remove("active");
  });
  Context.graphingButtons.forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("active");
  });
  Context.equalButton.disabled = false;
  Context.toggleHistoryButton.disabled = false;
  Context.graphButton.classList.remove("active");
  Context.equalButton.classList.add("active");
  Context.displayValue.style.fontSize = "48px";
}

export { handleGraphingMode, handleScientificMode };
