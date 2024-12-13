import { UI } from './ui';

class CalculatorModeStyles {
  graphingMode() {
    this.switchStates();
    UI.displayValue.style.fontSize = '16px';

    setTimeout(() => {
      const plot = this.getFunctionPlot();
      if (plot) {
        plot.style.height = 'auto';
        plot.style.opacity = '1';
      }
    }, 1600);
  }

  scientificMode() {
    this.switchStates();
    UI.displayValue.style.fontSize = '48px';

    const plot = this.getFunctionPlot();
    if (plot) {
      plot.remove();
    }
  }

  enableOrDisable(el) {
    el.disabled = !el.disabled;
  }

  toggleActiveClass(el) {
    el.classList.toggle('active');
  }

  switchStates() {
    UI.pastEntries.forEach((entry) => {
      requestAnimationFrame(() => {
        this.toggleActiveClass(entry);
      });
    });

    UI.graphingButtons.forEach((btn) => {
      this.enableOrDisable(btn);
      this.toggleActiveClass(btn);
    });
    this.enableOrDisable(UI.equalButton);
    this.enableOrDisable(UI.toggleHistoryButton);
    this.toggleActiveClass(UI.equalButton);
  }

  getFunctionPlot() {
    return document.querySelector('.function-plot');
  }
}

const Styles = new CalculatorModeStyles();

export { Styles };
