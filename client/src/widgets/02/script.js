document.addEventListener("DOMContentLoaded", () => {
  const pastEntries = document.querySelectorAll("#widget-02 .history li");
  const expandHistoryBtn = document.querySelector("#widget-02 .history-btn");

  expandHistoryBtn.addEventListener("click", () => {
    pastEntries.forEach((entry) => {
      entry.classList.toggle("active");
    });
  });
});

class CalculatorLogic {
  constructor() {
    // pull all relevant calc buttons
  }

  add() {}

  subtract() {}

  divide() {}

  multipy() {}

  pi() {}

  exponent() {}

  sqRoot() {}

  euler() {}

  percentage() {}

  expressions() {}
}

class CalculatorUI {
  constructor() {
    // pull display
    // methods: init buttons with event listeners, handle user inputs by running through calc class, clear display, add values to display, equals shows the value
  }
}
