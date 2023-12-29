import { UI } from "./ui";

function handleGraphingMode() {
  UI.pastEntries.forEach((entry) => {
    setTimeout(() => {
      entry.classList.add("active");
    }, 0);
  });
  setTimeout(() => {
    if (document.querySelector(".function-plot")) {
      document.querySelector(".function-plot").style.height = "auto";
      document.querySelector(".function-plot").style.opacity = "1";
    }
  }, 1600);
  UI.graphingButtons.forEach((btn) => {
    btn.disabled = false;
    btn.classList.add("active");
  });
  UI.toggleHistoryButton.disabled = true;
  UI.equalButton.disabled = true;
  UI.equalButton.classList.remove("active");
  UI.graphButton.classList.add("active");
  UI.displayValue.style.fontSize = "16px";
}

function handleScientificMode() {
  if (document.querySelector(".function-plot")) {
    document.querySelector(".function-plot").remove();
  }
  UI.graphingButtons.forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("active");
  });
  UI.equalButton.disabled = false;
  UI.toggleHistoryButton.disabled = false;
  UI.graphButton.classList.remove("active");
  UI.equalButton.classList.add("active");
  UI.displayValue.style.fontSize = "48px";
}

export { handleGraphingMode, handleScientificMode };
