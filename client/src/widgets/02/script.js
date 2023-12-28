import functionPlot from "function-plot";

export function initializeScript() {
  CalculatorUI.initialize();
}

const CalculatorUI = {
  pastEntriesParent: null,
  pastEntries: null,
  toggleHistoryButton: null,
  calculatorEl: null,
  displayValue: null,
  calcTypeOptions: null,
  graphingCalcButtons: null,
  functionPlotGraph: null,

  // prettier-ignore
  initialize: function () {
    this.widget = document.querySelector("#widget-02");
    this.pastEntriesParent = this.widget.querySelector(".history");
    this.pastEntries = this.widget.querySelectorAll(".history li"),
    this.toggleHistoryButton = this.widget.querySelector(".history-btn"),
    this.calculatorEl = this.widget.querySelector(".calculator"),
    this.displayValue = this.widget.querySelector(".current-val"),
    this.calcTypeOptions = this.widget.querySelectorAll(".options li");
    this.graphingCalcButtons = this.widget.querySelectorAll(".graphing-btns");
    this.calcEqualButton = this.widget.querySelector('button[data-calc-val="="]');
    this.calcGraphButton = this.widget.querySelector('button[data-calc-val="graph"]');
    
    this.setupCalculatorButtons();
    this.setupHistoryToggle();
    this.getFromLocalStorage();
    this.setupCalcTypes();
  },

  setupCalcTypes: function () {
    this.calcTypeOptions.forEach((option) => {
      option.addEventListener("click", () => {
        this.calcTypeOptions.forEach((type) => {
          type.classList.remove("active");
        });
        option.classList.add("active");

        if (option.textContent === "Graphing") {
          graphTheFunction("x");
          setTimeout(() => {
            document.querySelector(".function-plot").style.opacity = "1";
            document.querySelector(".function-plot").style.height = "revert";
          }, 2000);
          this.graphingCalcButtons.forEach((btn) => {
            btn.disabled = false;
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
          this.graphingCalcButtons.forEach((btn) => (btn.disabled = true));
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
          localStorage.removeItem("calc-value");
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
        } else if (calcValue === "=") {
          this.addToHistory(this.displayValue.textContent);
          this.displayValue.textContent = CalculatorLogic.evaluateExpression(
            this.displayValue.textContent,
          );
        } else if (calcValue === "graph") {
          graphTheFunction(this.displayValue.textContent);
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

    this.saveToLocalStorage();
  },

  saveToLocalStorage: function () {
    const calcHistory = [...this.pastEntriesParent.querySelectorAll("li")].map(
      (li) => li.textContent,
    );
    localStorage.setItem("calc-history", JSON.stringify(calcHistory));

    const calcValue = eval(this.displayValue.textContent);
    // ensures value is a number & not NaN value
    if (!isNaN(parseFloat(calcValue))) {
      localStorage.setItem("calc-value", calcValue);
    }
  },

  getFromLocalStorage: function () {
    const calcHistory = localStorage.getItem("calc-history");
    if (calcHistory) {
      const parsedCalcHistory = JSON.parse(calcHistory);
      parsedCalcHistory.forEach((entry) => {
        this.addToHistory(entry);
      });
    }

    const calcValue = localStorage.getItem("calc-value");
    if (calcValue) {
      this.displayValue.textContent = calcValue;
    } else {
      this.displayValue.textContent = "0";
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
    expression = this.evaluateParentheses(expression);
    expression = this.evaluateExponent(expression);
    expression = this.evaluateMultiply(expression);
    expression = this.evaluateDivide(expression);
    expression = this.evaluateAdd(expression);
    expression = this.evaluateSubtract(expression);
    return expression;
  },

  evaluateParentheses: function (expression) {
    const regex = this.regexParentheses;
    let match;
    while ((match = regex.exec(expression))) {
      const innerExpression = match[1];
      const evaluatedExpression = this.evaluateExpression(innerExpression);
      expression = expression.replace(match[0], evaluatedExpression);
    }
    return expression;
  },

  evaluateExponent: function (expression) {
    const regex = this.regexExponent;
    let match;
    while ((match = regex.exec(expression))) {
      expression = Math.pow(+match[1], +match[2]);
    }

    return expression;
  },

  evaluateMultiply: function (expression) {
    const regex = this.regexMultiply;
    let match;
    while ((match = regex.exec(expression))) {
      expression = +match[1] * +match[2];
    }
    return expression;
  },

  evaluateDivide: function (expression) {
    const regex = this.regexDivide;
    let match;
    while ((match = regex.exec(expression))) {
      expression = +match[1] / +match[2];
    }
    return expression;
  },

  evaluateAdd: function (expression) {
    const regex = this.regexAdd;
    let match;
    while ((match = regex.exec(expression))) {
      expression = +match[1] + +match[2];
    }
    console.log(match);
    return expression;
  },

  evaluateSubtract: function (expression) {
    const regex = this.regexSubtract;
    let match;
    while ((match = regex.exec(expression))) {
      expression = +match[1] - +match[2];
    }
    return expression;
  },
};

function graphTheFunction(expression) {
  functionPlot({
    target: "#widget-02 .history",
    height: 162,
    grid: false,
    data: [
      {
        fn: expression,
      },
    ],
  });
}
