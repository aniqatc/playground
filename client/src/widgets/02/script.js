document.addEventListener("DOMContentLoaded", () => {
  CalculatorUI.initialize();
});

const CalculatorUI = {
  pastEntriesParent: null,
  pastEntries: null,
  toggleHistoryButton: null,
  calculatorEl: null,
  displayValue: null,

  // prettier-ignore
  initialize: function () {
    this.pastEntriesParent = document.querySelector("#widget-02 .history");
    this.pastEntries = this.pastEntriesParent.querySelectorAll("li"),
    this.toggleHistoryButton = document.querySelector("#widget-02 .history-btn"),
    this.calculatorEl = document.querySelector("#widget-02 .calculator"),
    this.displayValue = document.querySelector("#widget-02 .current-val"),

    this.getFromLocalStorage();
    this.setupCalculatorButtons();
    this.setupHistoryToggle();
  },

  setupHistoryToggle: function () {
    this.toggleHistoryButton.addEventListener("click", () => {
      this.pastEntries.forEach((entry) => {
        entry.classList.toggle("active");
      });
    });
  },

  setupCalculatorButtons: function () {
    this.calculatorEl.addEventListener("click", (event) => {
      const calcValue = event.target.dataset.calcVal;
      this.displayValue.style.color = "revert";

      try {
        if (
          this.displayValue.textContent === "Error" ||
          this.displayValue.textContent === "0" ||
          calcValue === "ac"
        ) {
          this.displayValue.textContent = "";
        } else if (calcValue === "trim") {
          this.displayValue.textContent = Math.round(
            +this.displayValue.textContent,
          );
        } else if (calcValue === "%") {
          this.displayValue.textContent = +this.displayValue.textContent / 100;
        } else if (calcValue === "√") {
          this.displayValue.textContent = Math.sqrt(
            +this.displayValue.textContent,
          );
        } else if (calcValue === "^") {
          this.displayValue.textContent =
            +this.displayValue.textContent * +this.displayValue.textContent;
        } else if (calcValue === "=") {
          this.addToHistory(this.displayValue.textContent);
          this.displayValue.textContent = eval(this.displayValue.textContent);
        } else if (calcValue !== undefined) {
          this.displayValue.textContent += calcValue;
          this.displayValue.scrollLeft = this.displayValue.scrollWidth;
        }
      } catch (error) {
        this.displayValue.style.color = "#d46060";
        this.displayValue.textContent = "Error";
      }
    });
  },

  addToHistory: function (expression) {
    this.pastEntries = this.pastEntriesParent.querySelectorAll("li");

    if (expression.length > 0) {
      if (this.pastEntries.length >= 4) {
        this.pastEntriesParent.removeChild(this.pastEntries[0]);
      }

      const li = document.createElement("li");
      formattedExp = expression.replace(/(\+|\-|\/|\*)/g, " $1 ");
      li.textContent = formattedExp;
      this.pastEntriesParent.appendChild(li);
      this.pastEntries = this.pastEntriesParent.querySelectorAll("li");
    }

    this.saveToLocalStorage();
  },

  saveToLocalStorage: function () {
    const calcHistory = [...this.pastEntriesParent.querySelectorAll("li")].map(
      (li) => li.textContent,
    );
    const calcValue = eval(this.displayValue.textContent);
    localStorage.setItem("calc-history", JSON.stringify(calcHistory));
    localStorage.setItem("calc-value", calcValue);
  },

  getFromLocalStorage: function () {
    const calcHistory = localStorage.getItem("calc-history");
    const calcValue = localStorage.getItem("calc-value");

    const parsedCalcHistory = JSON.parse(calcHistory);
    parsedCalcHistory.forEach((entry) => {
      this.addToHistory(entry);
    });
    this.displayValue.textContent = calcValue;
  },
};
