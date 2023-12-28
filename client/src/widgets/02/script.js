import functionPlot from "function-plot";
import html2canvas from "html2canvas";

export function initializeScript() {
  CalculatorUI.initialize();
}

const CalculatorUI = {
  pastEntriesParent: null,
  pastEntries: null,
  toggleHistoryButton: null,
  deleteButton: null,
  snapButton: null,
  calculatorEl: null,
  displayValue: null,
  calcTypeOptions: null,
  graphingCalcButtons: null,
  functionPlotGraph: null,
  calcEqualButton: null,
  calcGraphButton: null,

  // prettier-ignore
  initialize: function () {
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
    
    this.setupCalculatorButtons();
    this.setupHistoryToggle();
    this.setupCalcTypes();
    this.setupDeleteButton();
    this.setupSnapButton();
    CalculatorStorage.getFromLocalStorage();
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

  setupCalcTypes: function () {
    this.calcTypeOptions.forEach((option) => {
      option.addEventListener("click", () => {
        this.calcTypeOptions.forEach((type) => {
          type.classList.remove("active");
        });
        option.classList.add("active");

        if (option.textContent === "Graphing") {
          CalculatorStorage.getFromLocalStorage();
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
          this.calcEqualButton.disabled = true;
          this.calcEqualButton.classList.remove("active");
          this.toggleHistoryButton.disabled = true;
          this.calcGraphButton.classList.add("active");
          this.pastEntries.forEach((entry) => {
            entry.classList.add("active");
          });
          this.displayValue.style.fontSize = "16px";
        } else if (option.textContent === "Scientific") {
          CalculatorStorage.getFromLocalStorage();
          this.graphingCalcButtons.forEach((btn) => {
            btn.disabled = true;
            btn.classList.remove("active");
          });
          this.calcEqualButton.disabled = false;
          this.toggleHistoryButton.disabled = false;
          this.calcGraphButton.classList.remove("active");
          this.calcEqualButton.classList.add("active");
          this.pastEntries.forEach((entry) => {
            entry.classList.remove("active");
          });
          this.displayValue.style.fontSize = "48px";
          if (document.querySelector(".function-plot")) {
            document.querySelector(".function-plot").remove();
          }
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
      this.pastEntries = this.pastEntriesParent.querySelectorAll("li");
      this.pastEntries.forEach((entry) => entry.remove());
      this.displayValue.textContent = "0";
      CalculatorLogic.graphFunction("0");
    });
  },

  setupCalculatorButtons: function () {
    this.calculatorEl.addEventListener("click", (event) => {
      const calcValue = event.target.dataset.calcVal;
      this.displayValue.style.color = "revert";

      try {
        if (
          this.displayValue.textContent === "Error" ||
          this.displayValue.textContent === "0"
        ) {
          this.displayValue.textContent = "";
        }
        if (calcValue === "ac") {
          this.displayValue.textContent = "0";
        } else if (
          calcValue === "trim" &&
          !this.displayValue.textContent.includes(/[a-zA-Z]/)
        ) {
          this.displayValue.textContent = Math.round(
            +this.displayValue.textContent,
          );
        } else if (calcValue === "graph") {
          CalculatorLogic.graphFunction(this.displayValue.textContent);
          CalculatorStorage.saveToLocalStorage();
        } else if (calcValue === "%") {
          this.displayValue.textContent =
            CalculatorLogic.evaluateExpression(this.displayValue.textContent) /
            100;
        } else if (calcValue === "√") {
          this.displayValue.textContent = Math.sqrt(
            CalculatorLogic.evaluateExpression(this.displayValue.textContent),
          );
        } else if (calcValue === "=") {
          this.addToHistory(this.displayValue.textContent);
          this.displayValue.textContent = CalculatorLogic.evaluateExpression(
            this.displayValue.textContent,
          );
          CalculatorStorage.saveToLocalStorage();
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

const CalculatorStorage = {
  saveToLocalStorage: function () {
    const calcHistoryItems = [
      ...CalculatorUI.pastEntriesParent.querySelectorAll("li"),
    ];
    const calcHistory = calcHistoryItems.map((li) => li.textContent) || "";
    const calcValue = CalculatorUI.displayValue.textContent || "0";

    const storageObject = {
      calcHistory,
      calcValue,
    };

    localStorage.setItem("calculatorData", JSON.stringify(storageObject));
  },

  getFromLocalStorage: function () {
    const storedData = localStorage.getItem("calculatorData");
    if (storedData) {
      const { calcHistory, calcValue } = JSON.parse(storedData);

      if (calcHistory) {
        calcHistory.forEach((entry) => CalculatorUI.addToHistory(entry));
      }

      if (calcValue) {
        CalculatorUI.displayValue.textContent = calcValue;
      }

      if (
        calcValue.includes("log") ||
        calcValue.includes("sin") ||
        calcValue.includes("cos")
      ) {
        CalculatorLogic.graphFunction(calcValue);
      } else {
        CalculatorLogic.graphFunction("0");
      }
    } else {
      CalculatorLogic.graphFunction("0");
      CalculatorUI.displayValue.textContent = "0";
    }
  },
};

const CalculatorLogic = {
  // Regexes to get numbers on both sides of the specified operation
  regexParentheses: /\(([^()]+)\)/,
  regexExponent: /(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/,
  regexMultiply: /(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)/,
  regexDivide: /(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)/,
  regexAdd: /(\d+(?:\.\d+)?)\+(\d+(?:\.\d+)?)/,
  regexSubtract: /(\d+(?:\.\d+)?)-(\d+(?:\.\d+)?)/,

  // Follows PEMDAS for execution
  evaluateExpression: function (expression) {
    if (
      expression.includes("log") ||
      expression.includes("sin") ||
      expression.includes("cos")
    ) {
      return expression;
    }
    expression = this.evaluateParentheses(expression);
    expression = this.evaluateExponent(expression);
    expression = this.evaluateMultiplyAndDivide(expression);
    expression = this.evaluateAddAndSubtract(expression);
    return expression;
  },

  evaluateParentheses: function (expression) {
    let match;
    while ((match = this.regexParentheses.exec(expression))) {
      const innerExpression = match[1];
      const evaluatedExpression = this.evaluateExpression(innerExpression);
      expression = expression.replace(match[0], evaluatedExpression);
    }
    return expression;
  },

  evaluateExponent: function (expression) {
    let match;
    while ((match = this.regexExponent.exec(expression))) {
      expression = Math.pow(+match[1], +match[2]);
    }

    return expression;
  },

  evaluateMultiplyAndDivide: function (expression) {
    let match;
    while (
      (match = this.regexMultiply.exec(expression)) ||
      (match = this.regexDivide.exec(expression))
    ) {
      const evaluated = match[0].includes("*")
        ? +match[1] * +match[2]
        : +match[1] / +match[2];
      expression = expression.replace(match[0], evaluated);
    }
    return expression;
  },

  evaluateAddAndSubtract: function (expression) {
    let match;
    while (
      (match = this.regexAdd.exec(expression)) ||
      (match = this.regexSubtract.exec(expression))
    ) {
      const evaluated = match[0].includes("+")
        ? +match[1] + +match[2]
        : +match[1] - +match[2];
      expression = expression.replace(match[0], evaluated);
    }
    return expression;
  },

  graphFunction: function (expression) {
    functionPlot({
      target: "#widget-02 .graph",
      height: 160,
      grid: false,
      data: [
        {
          fn: expression,
        },
      ],
    });
  },
};
