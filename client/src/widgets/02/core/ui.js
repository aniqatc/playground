import html2canvas from "html2canvas";
import { CalculatorStorage } from "./storage";
import { CalculatorLogic } from "./logic";
import { handleGraphingMode, handleScientificMode } from "./styles";
import { executeCalculatorAction } from "./input";

const CalculatorUI = {
  initialize: function () {
    this.initializeElements();
    this.setupCalculatorButtons();
    this.setupHistoryToggle();
    this.setupCalcMode();
    this.setupClearButton();
    this.setupSnapButton();
    CalculatorStorage.getFromLocalStorage();
  },

  // prettier-ignore
  initializeElements: function() {
    this.widget = document.querySelector("#widget-02");
    this.pastEntriesParent = this.widget.querySelector(".history");
    this.pastEntries = this.widget.querySelectorAll(".history li"),
    this.toggleHistoryButton = this.widget.querySelector(".history-btn"),
    this.clearButton = this.widget.querySelector(".clear-btn"),
    this.snapButton = this.widget.querySelector(".snap-btn"),
    this.calculatorEl = this.widget.querySelector(".calculator"),
    this.displayValue = this.widget.querySelector(".current-val"),
    this.modeOptions = this.widget.querySelectorAll(".options li");
    this.graphingButtons = this.widget.querySelectorAll(".graphing-btns");
    this.equalButton = this.widget.querySelector('button[data-calc-val="="]');
    this.graphButton = this.widget.querySelector('button[data-calc-val="graph"]');
  },

  setupCalcMode: function () {
    this.modeOptions.forEach((option) => {
      option.addEventListener("click", () => {
        CalculatorStorage.getFromLocalStorage();

        this.modeOptions.forEach((el) => el.classList.remove("active"));
        option.classList.add("active");

        if (option.textContent === "Graphing") {
          handleGraphingMode();
        } else {
          handleScientificMode();
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

  setupClearButton: function () {
    this.clearButton.addEventListener("click", () => {
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
        let link = document.createElement("a");
        link.download = "calc-aniqa_dev.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    });
  },

  setupCalculatorButtons: function () {
    this.calculatorEl.addEventListener("click", (event) => {
      this.resetDisplay();

      try {
        executeCalculatorAction(event.target.dataset.calcVal);
      } catch (error) {
        this.displayError();
      }

      CalculatorStorage.saveToLocalStorage();
    });
  },

  resetDisplay: function () {
    if (
      this.displayValue.textContent === "Error" ||
      this.displayValue.textContent === "0"
    ) {
      this.displayValue.textContent = "";
      this.displayValue.style.color = "revert";
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
};

export { CalculatorUI };
