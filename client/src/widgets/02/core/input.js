import { Logic } from './logic';
import { UI } from './ui';

function executeCalculatorAction(calcValue) {
  try {
    if (!calcValue) return;

    switch (calcValue) {
      case 'ac':
        UI.displayValue.textContent = '0';
        break;

      case 'trim':
        const trimValue = Logic.evaluateExpression(UI.displayValue.textContent);
        UI.displayValue.textContent = Math.round(trimValue);
        break;

      case 'graph':
        Logic.graphFunction(UI.displayValue.textContent);
        break;

      case '%':
        const percentValue = Logic.evaluateExpression(UI.displayValue.textContent);
        UI.displayValue.textContent = percentValue / 100;
        break;

      case '√':
        const sqrtValue = Logic.evaluateExpression(UI.displayValue.textContent);
        UI.displayValue.textContent = Math.sqrt(sqrtValue);
        break;

      case '=':
        UI.addToHistory(UI.displayValue.textContent);
        UI.displayValue.textContent = Logic.evaluateExpression(UI.displayValue.textContent);
        break;

      default:
        UI.displayValue.textContent += calcValue;
        UI.displayValue.scrollLeft = UI.displayValue.scrollWidth;
    }
  } catch (error) {
    return 'Error';
  }
}

export { executeCalculatorAction };
