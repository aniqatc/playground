import functionPlot from "function-plot";

const CalculatorLogic = {
  regexExponent: /(\d+(?:\.\d+)?)\^(\d+(?:\.\d+)?)/,

  evaluateExpression: function (expression) {
    if (
      expression.includes("log") ||
      expression.includes("sin") ||
      expression.includes("cos")
    ) {
      return "0";
    }
    expression = this.evaluateExponent(expression);
    return eval(expression);
  },

  evaluateExponent: function (expression) {
    let match;
    while ((match = this.regexExponent.exec(expression))) {
      expression = Math.pow(+match[1], +match[2]);
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

export { CalculatorLogic };
