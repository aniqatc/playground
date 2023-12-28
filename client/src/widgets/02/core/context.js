class CalculatorContext {
  constructor() {
    this.initializeElements();
  }

  // prettier-ignore
  initializeElements() {
    this.widget = document.querySelector("#widget-02");
    this.pastEntriesParent = this.widget.querySelector(".history");
    this.pastEntries = this.widget.querySelectorAll(".history li"),
    this.toggleHistoryButton = this.widget.querySelector(".history-btn"),
    this.resetButton = this.widget.querySelector(".reset-btn"),
    this.snapButton = this.widget.querySelector(".snap-btn"),
    this.calculatorEl = this.widget.querySelector(".calculator"),
    this.displayValue = this.widget.querySelector(".current-val"),
    this.modeOptions = this.widget.querySelectorAll(".options li");
    this.graphingButtons = this.widget.querySelectorAll(".graphing-btns");
    this.equalButton = this.widget.querySelector('button[data-calc-val="="]');
    this.graphButton = this.widget.querySelector('button[data-calc-val="graph"]');
  }
}

const Context = new CalculatorContext();

export { Context };
