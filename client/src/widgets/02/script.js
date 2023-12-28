import html2canvas from "html2canvas";
import { CalculatorStorage } from "./core/storage";
import { CalculatorLogic } from "./core/logic";

function initializeScript() {
  CalculatorUI.initialize();
}

const CalculatorUI = {
  initialize: function () {
    this.initializeElements();
    this.setupCalculatorButtons();
    this.setupHistoryToggle();
    this.setupCalcTypes();
    this.setupDeleteButton();
    this.setupSnapButton();
    CalculatorStorage.getFromLocalStorage();
  },

  // prettier-ignore
  initializeElements: function() {
    this.widget = document.querySelector("#widget-02");
    this.pastEntriesParent = this.widget.querySelector(".history");
    this.pastEntries = this.widget.querySelectorAll(".history li"),
    this.toggleHistoryButton = this.widget.querySelector(".history-btn"),
    this.deleteButton = this.widget.querySelector(".delete-btn"),
    this.snapButton = this.widget.querySelector(".snap-btn"),
    this.calculatorEl = this.widget.querySelector(".calculator"),
    this.displayValue = this.widget.querySelector(".current-val"),
    this.calcTypeOptions = this.widget.querySelectorAll(".options li");
    this.graphingCalcButtons = this.widget.querySelectorAll(".graphing-btns");
    this.calcEqualButton = this.widget.querySelector('button[data-calc-val="="]');
    this.calcGraphButton = this.widget.querySelector('button[data-calc-val="graph"]');
  },

  setupCalcTypes: function () {
    this.calcTypeOptions.forEach((option) => {
      option.addEventListener("click", () => {
        this.calcTypeOptions.forEach((el) => el.classList.remove("active"));
        option.classList.add("active");
        CalculatorStorage.getFromLocalStorage();

        if (option.textContent === "Graphing") {
          this.handleGraphingStyles();
        } else if (option.textContent === "Scientific") {
          this.handleScientificStyles();
        }
      });
    });
  },

  setupHistoryToggle: function () {
    this.toggleHistoryButton.addEventListener("click", () => {
      this.pastEntries.forEach((entry) => {
        entry.classList.toggle("active");
      });
    });
  },

  setupDeleteButton: function () {
    this.deleteButton.addEventListener("click", () => {
      localStorage.removeItem("calculatorData");
      this.pastEntries.forEach((entry) => entry.remove());
      this.displayValue.textContent = "0";
      CalculatorLogic.graphFunction("0");
    });
  },

  setupSnapButton: function () {
    this.snapButton.addEventListener("click", () => {
      html2canvas(this.widget.querySelector(".display"), {
        removeContainer: true,
      }).then((canvas) => {
        let image = canvas.toDataURL("image/png");
        let link = document.createElement("a");
        link.download = "calculations_aniqa-dev.png";
        link.href = image;
        link.click();
      });
    });
  },

  setupCalculatorButtons: function () {
    this.calculatorEl.addEventListener("click", (event) => {
      this.displayValue.style.color = "revert";
      const calcValue = event.target.dataset.calcVal;

      this.resetDisplay();

      try {
        this.executeCalculatorAction(calcValue);
      } catch (error) {
        this.displayError();
      }
      CalculatorStorage.saveToLocalStorage();
    });
  },

  executeCalculatorAction: function (calcValue) {
    if (calcValue === "ac") {
      this.displayValue.textContent = "0";
    } else if (calcValue === "trim") {
      this.displayValue.textContent = Math.round(
        +this.displayValue.textContent,
      );
    } else if (calcValue === "graph") {
      CalculatorLogic.graphFunction(this.displayValue.textContent);
    } else if (calcValue === "%") {
      this.displayValue.textContent =
        CalculatorLogic.evaluateExpression(this.displayValue.textContent) / 100;
    } else if (calcValue === "√") {
      this.displayValue.textContent = Math.sqrt(
        CalculatorLogic.evaluateExpression(this.displayValue.textContent),
      );
    } else if (calcValue === "=") {
      this.addToHistory(this.displayValue.textContent);
      this.displayValue.textContent = CalculatorLogic.evaluateExpression(
        this.displayValue.textContent,
      );
    } else if (calcValue !== undefined) {
      this.displayValue.textContent += calcValue;
      this.displayValue.scrollLeft = this.displayValue.scrollWidth;
    }
  },

  resetDisplay: function () {
    if (
      this.displayValue.textContent === "Error" ||
      this.displayValue.textContent === "0"
    ) {
      this.displayValue.textContent = "";
    }
  },

  displayError: function () {
    this.displayValue.style.color = "#d46060";
    this.displayValue.textContent = "Error";
  },

  addToHistory: function (expression) {
    this.pastEntries = this.pastEntriesParent.querySelectorAll("li");

    if (expression.length > 0) {
      if (this.pastEntries.length >= 6) {
        this.pastEntriesParent.removeChild(this.pastEntries[0]);
      }

      const li = document.createElement("li");
      const formattedExp = expression.replace(/(\+|\-|\/|\*)/g, " $1 ");
      li.textContent = formattedExp;
      this.pastEntriesParent.appendChild(li);
      this.pastEntries = this.pastEntriesParent.querySelectorAll("li");
    }
  },

  handleGraphingStyles: function () {
    this.pastEntries.forEach((entry) => {
      entry.classList.add("active");
    });
    setTimeout(() => {
      if (document.querySelector(".function-plot")) {
        document.querySelector(".function-plot").style.height = "auto";
        document.querySelector(".function-plot").style.opacity = "1";
      }
    }, 1000);
    this.graphingCalcButtons.forEach((btn) => {
      btn.disabled = false;
      btn.classList.add("active");
    });
    this.toggleHistoryButton.disabled = true;
    this.calcEqualButton.disabled = true;
    this.calcEqualButton.classList.remove("active");
    this.calcGraphButton.classList.add("active");
    this.displayValue.style.fontSize = "16px";
  },

  handleScientificStyles: function () {
    if (document.querySelector(".function-plot")) {
      document.querySelector(".function-plot").remove();
    }
    this.pastEntries.forEach((entry) => {
      entry.classList.remove("active");
    });
    this.graphingCalcButtons.forEach((btn) => {
      btn.disabled = true;
      btn.classList.remove("active");
    });
    this.calcEqualButton.disabled = false;
    this.toggleHistoryButton.disabled = false;
    this.calcGraphButton.classList.remove("active");
    this.calcEqualButton.classList.add("active");
    this.displayValue.style.fontSize = "48px";
  },
};

export { initializeScript, CalculatorUI };
