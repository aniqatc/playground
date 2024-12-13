import functionPlot from "function-plot";
import { Parser } from "expr-eval";

class CalculatorLogic {
  constructor() {
    this.graphableFunctions = ["log", "sin", "cos", "x"];
    this.parser = new Parser();
  }

  evaluateExpression(expression) {
    if (this.graphableFunctions.some(func => expression.includes(func))) {
      return "0";
    }

    try {
      const result = this.parser.evaluate(expression);
      if (Number.isInteger(result)) {
        return result.toString();
      }
      return Number(result.toString());
    } catch (error) {
      return "Error";
    }
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
    this.graphableFunctions.some(fn => calcValue.includes(fn)) ?
      this.graphFunction(calcValue) : this.graphFunction();
  }
}

const Logic = new CalculatorLogic();
export { Logic };
