import functionPlot from "function-plot";
import { CalculatorUI } from "../script";

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
    const invalidPattern = /[\x\.\+\*\/]{2,}/;
    if (invalidPattern.test(expression)) {
      CalculatorUI.displayError();
      return "Error";
    }
    if (
      expression.includes("log") ||
      expression.includes("sin") ||
      expression.includes("cos")
    ) {
      return "0";
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

export { CalculatorLogic };
