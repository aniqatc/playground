import { Logic } from "./logic";
import { Context } from "./context";
import { CalculatorUI } from "./ui";

function executeCalculatorAction(calcValue) {
  if (calcValue === "ac") {
    Context.displayValue.textContent = "0";
  } else if (calcValue === "trim") {
    Context.displayValue.textContent = Math.round(
      +Context.displayValue.textContent,
    );
  } else if (calcValue === "graph") {
    Logic.graphFunction(Context.displayValue.textContent);
  } else if (calcValue === "%") {
    Context.displayValue.textContent =
      Logic.evaluateExpression(Context.displayValue.textContent) / 100;
  } else if (calcValue === "√") {
    Context.displayValue.textContent = Math.sqrt(
      Logic.evaluateExpression(Context.displayValue.textContent),
    );
  } else if (calcValue === "=") {
    CalculatorUI.addToHistory(Context.displayValue.textContent);
    Context.displayValue.textContent = Logic.evaluateExpression(
      Context.displayValue.textContent,
    );
  } else if (calcValue !== undefined) {
    Context.displayValue.textContent += calcValue;
    Context.displayValue.scrollLeft = Context.displayValue.scrollWidth;
  }
}

export { executeCalculatorAction };
