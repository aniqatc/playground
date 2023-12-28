import { CalculatorUI } from "./ui";
import { CalculatorLogic } from "./logic";

const CalculatorStorage = {
  saveToLocalStorage: function () {
    const calcHistoryItems = [
      ...CalculatorUI.pastEntriesParent.querySelectorAll("li"),
    ];
    const calcHistory = calcHistoryItems.map((li) => li.textContent);
    const calcValue = CalculatorUI.displayValue.textContent || "0";

    const storageObject = { calcHistory, calcValue };
    localStorage.setItem("calculatorData", JSON.stringify(storageObject));
  },

  getFromLocalStorage: function () {
    const storedData = localStorage.getItem("calculatorData");
    if (storedData) {
      const { calcHistory = [], calcValue = "0" } = JSON.parse(storedData);
      calcHistory.forEach((entry) => CalculatorUI.addToHistory(entry));
      CalculatorUI.displayValue.textContent = calcValue;
      this.renderDefaultGraph(calcValue);
    } else {
      CalculatorUI.displayValue.textContent = "0";
      this.renderDefaultGraph();
    }
  },

  renderDefaultGraph: function (calcValue = "") {
    if (
      calcValue.includes("log") ||
      calcValue.includes("sin") ||
      calcValue.includes("cos") ||
      calcValue.includes("x")
    ) {
      CalculatorLogic.graphFunction(calcValue);
    } else {
      CalculatorLogic.graphFunction("0");
    }
  },
};

export { CalculatorStorage };
