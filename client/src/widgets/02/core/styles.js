import { CalculatorUI } from "./ui";

function handleGraphingMode() {
  CalculatorUI.pastEntries.forEach((entry) => {
    entry.classList.add("active");
  });
  setTimeout(() => {
    if (document.querySelector(".function-plot")) {
      document.querySelector(".function-plot").style.height = "auto";
      document.querySelector(".function-plot").style.opacity = "1";
    }
  }, 1000);
  CalculatorUI.graphingButtons.forEach((btn) => {
    btn.disabled = false;
    btn.classList.add("active");
  });
  CalculatorUI.toggleHistoryButton.disabled = true;
  CalculatorUI.equalButton.disabled = true;
  CalculatorUI.equalButton.classList.remove("active");
  CalculatorUI.graphButton.classList.add("active");
  CalculatorUI.displayValue.style.fontSize = "16px";
}

function handleScientificMode() {
  if (document.querySelector(".function-plot")) {
    document.querySelector(".function-plot").remove();
  }
  CalculatorUI.pastEntries.forEach((entry) => {
    entry.classList.remove("active");
  });
  CalculatorUI.graphingButtons.forEach((btn) => {
    btn.disabled = true;
    btn.classList.remove("active");
  });
  CalculatorUI.equalButton.disabled = false;
  CalculatorUI.toggleHistoryButton.disabled = false;
  CalculatorUI.graphButton.classList.remove("active");
  CalculatorUI.equalButton.classList.add("active");
  CalculatorUI.displayValue.style.fontSize = "48px";
}

export { handleGraphingMode, handleScientificMode };
