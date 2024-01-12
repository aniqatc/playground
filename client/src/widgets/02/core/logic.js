import functionPlot from "function-plot";

class CalculatorLogic {
  constructor() {
    this.regexExponent = /(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/;
  }

  evaluateExpression(expression) {
    if (
      expression.includes("log") ||
      expression.includes("sin") ||
      expression.includes("cos") ||
      expression.includes("x")
    ) {
      return "0";
    }
    expression = this.evaluateExponent(expression);
    expression = eval(expression);
    return expression;
  }

  evaluateExponent(expression) {
    let match;
    while ((match = this.regexExponent.exec(expression))) {
      const result = Math.pow(+match[1], +match[2]).toString();
      expression = expression.replace(match[0], result);
    }
    return expression;
  }

  graphFunction(expression = "x") {
    functionPlot({
      target: "#widget-02 .graph",
      height: 175,
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
      this.graphFunction();
    }
  }
}

const Logic = new CalculatorLogic();

export { Logic };
