import { CalculatorUI } from "./ui";
import { Context } from "./context";
import { Logic } from "./logic";

class CalculatorStorage {
  saveToLocalStorage() {
    const calcHistoryItems = [
      ...Context.pastEntriesParent.querySelectorAll("li"),
    ];
    const calcHistory = calcHistoryItems.map((li) => li.textContent);
    const calcValue = Context.displayValue.textContent || "0";

    const storageObject = { calcHistory, calcValue };
    localStorage.setItem("calculatorData", JSON.stringify(storageObject));
  }

  getFromLocalStorage() {
    const storedData = localStorage.getItem("calculatorData");
    if (storedData) {
      const { calcHistory = [], calcValue = "0" } = JSON.parse(storedData);
      calcHistory.forEach((entry) => CalculatorUI.addToHistory(entry));
      Context.displayValue.textContent = calcValue;
      Logic.renderDefaultGraph(calcValue);
    } else {
      Context.displayValue.textContent = "0";
      Logic.renderDefaultGraph();
    }
  }
}

const Storage = new CalculatorStorage();

export { Storage };
