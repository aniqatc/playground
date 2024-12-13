import html2canvas from 'html2canvas';
import { CalculatorContext } from './context';
import { Storage } from './storage';
import { Logic } from './logic';
import { Styles } from './styles';
import { executeCalculatorAction } from './input';

class CalculatorUI extends CalculatorContext {
  constructor() {
    super();
  }

  initializeUI() {
    this.initializeElements();
    this.setupCalculatorButtons();
    this.setupHistoryButton();
    this.setupCalcMode();
    this.setupResetButton();
    this.setupSnapButton();
    Storage.getFromLocalStorage();
  }

  setupCalcMode() {
    this.modeOptions.forEach((option) => {
      option.addEventListener('click', () => {
        this.modeOptions.forEach((el) => el.classList.remove('active'));
        option.classList.add('active');

        if (option.textContent === 'Graphing') {
          Storage.getFromLocalStorage();
          Styles.graphingMode();
        } else {
          Styles.scientificMode();
        }
      });
    });
  }

  setupHistoryButton() {
    this.toggleHistoryButton.addEventListener('click', () => {
      this.pastEntries.forEach((entry) => {
        entry.classList.toggle('active');
      });
    });
  }

  setupResetButton() {
    this.resetButton.addEventListener('click', () => {
      localStorage.removeItem('calculatorData');
      this.pastEntries.forEach((entry) => entry.remove());
      this.displayValue.textContent = '0';
      Logic.graphFunction();
    });
  }

  setupSnapButton() {
    this.snapButton.addEventListener('click', () => {
      html2canvas(this.widget.querySelector('.display'), {
        removeContainer: true,
      }).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'calc-history.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    });
  }

  setupCalculatorButtons() {
    this.calculatorEl.addEventListener('click', (event) => {
      const calcValue = event.target.dataset.calcVal;
      if (!calcValue) return;

      this.resetDisplay();
      const result = executeCalculatorAction(calcValue);
      if (result === 'Error') {
        this.displayError();
      }

      Storage.saveToLocalStorage();
    });
  }

  resetDisplay() {
    if (this.displayValue.textContent === 'Error' || this.displayValue.textContent === '0') {
      this.displayValue.textContent = '';
      this.displayValue.style.color = 'revert';
    }
  }

  resetGraph() {
    this.displayValue.textContent = '0';
    Logic.renderDefaultGraph();
  }

  displayError() {
    this.displayValue.style.color = '#d46060';
    this.displayValue.textContent = 'Error';
  }

  addToHistory(expression) {
    this.pastEntries = this.pastEntriesParent.querySelectorAll('li');

    if (expression && expression.length > 0) {
      if (this.pastEntries.length >= 7) {
        this.pastEntriesParent.removeChild(this.pastEntries[0]);
      }

      const li = document.createElement('li');
      // adds spacing between mathematical operators for readability
      li.textContent = expression.replace(/(\+|-|\/|\^|\*\*|\*)/g, ' $1 ');
      this.pastEntriesParent.appendChild(li);
      this.pastEntries = this.pastEntriesParent.querySelectorAll('li');
    }
  }
}

const UI = new CalculatorUI();

export { UI };
