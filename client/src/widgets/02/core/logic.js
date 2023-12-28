import functionPlot from "function-plot";

class CalculatorLogic {
  constructor() {
    this.regexExponent = /(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/;
  }

  evaluateExpression(expression) {
    if (
      expression.includes("log") ||
      expression.includes("sin") ||
      expression.includes("cos")
    ) {
      return "0";
    }
    expression = this.evaluateExponent(expression);
    return eval(expression);
  }

  evaluateExponent(expression) {
    let match;
    while ((match = this.regexExponent.exec(expression))) {
      expression = Math.pow(+match[1], +match[2]);
    }
    return expression;
  }

  graphFunction(expression) {
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
  }

  renderDefaultGraph(calcValue = "") {
    if (
      calcValue.includes("log") ||
      calcValue.includes("sin") ||
      calcValue.includes("cos") ||
      calcValue.includes("x")
    ) {
      this.graphFunction(calcValue);
    } else {
      this.graphFunction("0");
    }
  }
}

const Logic = new CalculatorLogic();

export { Logic };
