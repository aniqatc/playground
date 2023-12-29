import { Logic } from "./logic";
import { UI } from "./ui";

function executeCalculatorAction(calcValue) {
  if (calcValue === "ac") {
    UI.displayValue.textContent = "0";
  } else if (calcValue === "trim") {
    UI.displayValue.textContent = Math.round(+UI.displayValue.textContent);
  } else if (calcValue === "graph") {
    Logic.graphFunction(UI.displayValue.textContent);
  } else if (calcValue === "%") {
    UI.displayValue.textContent =
      Logic.evaluateExpression(UI.displayValue.textContent) / 100;
  } else if (calcValue === "√") {
    UI.displayValue.textContent = Math.sqrt(
      Logic.evaluateExpression(UI.displayValue.textContent),
    );
  } else if (calcValue === "=") {
    UI.addToHistory(UI.displayValue.textContent);
    UI.displayValue.textContent = Logic.evaluateExpression(
      UI.displayValue.textContent,
    );
  } else if (calcValue !== undefined) {
    UI.displayValue.textContent += calcValue;
    UI.displayValue.scrollLeft = UI.displayValue.scrollWidth;
  }
}

export { executeCalculatorAction };
