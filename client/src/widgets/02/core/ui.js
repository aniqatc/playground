import html2canvas from "html2canvas";
import { Storage } from "./storage";
import { Logic } from "./logic";
import { Context } from "./context";
import { handleGraphingMode, handleScientificMode } from "./styles";
import { executeCalculatorAction } from "./input";

const CalculatorUI = {
  initialize: function () {
    this.setupCalculatorButtons();
    this.setupHistoryToggle();
    this.setupCalcMode();
    this.setupResetButton();
    this.setupSnapButton();
    Storage.getFromLocalStorage();
  },

  setupCalcMode: function () {
    Context.modeOptions.forEach((option) => {
      option.addEventListener("click", () => {
        Storage.getFromLocalStorage();

        Context.modeOptions.forEach((el) => el.classList.remove("active"));
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
    Context.toggleHistoryButton.addEventListener("click", () => {
      Context.pastEntries.forEach((entry) => {
        entry.classList.toggle("active");
      });
    });
  },

  setupResetButton: function () {
    Context.resetButton.addEventListener("click", () => {
      localStorage.removeItem("calculatorData");
      Context.pastEntries.forEach((entry) => entry.remove());
      Context.displayValue.textContent = "0";
      Logic.graphFunction("0");
    });
  },

  setupSnapButton: function () {
    Context.snapButton.addEventListener("click", () => {
      html2canvas(Context.widget.querySelector(".display"), {
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
    Context.calculatorEl.addEventListener("click", (event) => {
      this.resetDisplay();

      try {
        executeCalculatorAction(event.target.dataset.calcVal);
      } catch (error) {
        this.displayError();
      }

      Storage.saveToLocalStorage();
    });
  },

  resetDisplay: function () {
    if (
      Context.displayValue.textContent === "Error" ||
      Context.displayValue.textContent === "0"
    ) {
      Context.displayValue.textContent = "";
      Context.displayValue.style.color = "revert";
    }
  },

  displayError: function () {
    Context.displayValue.style.color = "#d46060";
    Context.displayValue.textContent = "Error";
  },

  addToHistory: function (expression) {
    Context.pastEntries = Context.pastEntriesParent.querySelectorAll("li");

    if (expression.length > 0) {
      if (Context.pastEntries.length >= 6) {
        Context.pastEntriesParent.removeChild(Context.pastEntries[0]);
      }

      const li = document.createElement("li");
      const formattedExp = expression.replace(/(\+|\-|\/|\*)/g, " $1 ");
      li.textContent = formattedExp;
      Context.pastEntriesParent.appendChild(li);
      Context.pastEntries = Context.pastEntriesParent.querySelectorAll("li");
    }
  },
};

export { CalculatorUI };
