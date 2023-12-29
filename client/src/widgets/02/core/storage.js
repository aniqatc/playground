import { UI } from "./ui";
import { Logic } from "./logic";

class CalculatorStorage {
  saveToLocalStorage() {
    const calcHistoryItems = [...UI.pastEntriesParent.querySelectorAll("li")];
    const calcHistory = calcHistoryItems.map((li) => li.textContent);
    const calcValue = UI.displayValue.textContent || "0";

    const storageObject = { calcHistory, calcValue };
    localStorage.setItem("calculatorData", JSON.stringify(storageObject));
  }

  getFromLocalStorage() {
    const storedData = localStorage.getItem("calculatorData");
    if (storedData) {
      const { calcHistory = [], calcValue = "0" } = JSON.parse(storedData);
      calcHistory.forEach((entry) => UI.addToHistory(entry));
      UI.displayValue.textContent = calcValue;
      Logic.renderDefaultGraph(calcValue);
    } else {
      UI.displayValue.textContent = "0";
      Logic.renderDefaultGraph();
    }
  }
}

const Storage = new CalculatorStorage();

export { Storage };
