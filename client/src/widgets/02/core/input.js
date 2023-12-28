import { CalculatorUI } from "./ui";
import { CalculatorLogic } from "./logic";

function executeCalculatorAction(calcValue) {
  if (calcValue === "ac") {
    CalculatorUI.displayValue.textContent = "0";
  } else if (calcValue === "trim") {
    CalculatorUI.displayValue.textContent = Math.round(
      +CalculatorUI.displayValue.textContent,
    );
  } else if (calcValue === "graph") {
    CalculatorLogic.graphFunction(CalculatorUI.displayValue.textContent);
  } else if (calcValue === "%") {
    CalculatorUI.displayValue.textContent =
      CalculatorLogic.evaluateExpression(
        CalculatorUI.displayValue.textContent,
      ) / 100;
  } else if (calcValue === "√") {
    CalculatorUI.displayValue.textContent = Math.sqrt(
      CalculatorLogic.evaluateExpression(CalculatorUI.displayValue.textContent),
    );
  } else if (calcValue === "=") {
    CalculatorUI.addToHistory(CalculatorUI.displayValue.textContent);
    CalculatorUI.displayValue.textContent = CalculatorLogic.evaluateExpression(
      CalculatorUI.displayValue.textContent,
    );
  } else if (calcValue !== undefined) {
    CalculatorUI.displayValue.textContent += calcValue;
    CalculatorUI.displayValue.scrollLeft =
      CalculatorUI.displayValue.scrollWidth;
  }
}

export { executeCalculatorAction };
