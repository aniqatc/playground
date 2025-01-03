import { UI } from './ui';
import { Logic } from './logic';

class CalculatorStorage {
  saveToLocalStorage() {
    const calcHistoryItems = [...UI.pastEntriesParent.querySelectorAll('li')];
    const calcHistory = calcHistoryItems.map((li) => li.textContent);
    const calcValue = UI.displayValue.textContent || '0';

    const storageObject = { calcHistory, calcValue };
    localStorage.setItem('calculatorData', JSON.stringify(storageObject));
  }

  getFromLocalStorage() {
    const storedData = localStorage.getItem('calculatorData');
    if (storedData) {
      const { calcHistory = [], calcValue = '0' } = JSON.parse(storedData);
      UI.pastEntriesParent.innerHTML = '';
      calcHistory.forEach((entry) => UI.addToHistory(entry));
      Logic.renderDefaultGraph(calcValue);
      UI.displayValue.textContent = calcValue;
    } else {
      UI.resetGraph();
    }
  }
}

const Storage = new CalculatorStorage();

export { Storage };
