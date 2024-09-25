## Calculator

[![HTML Badge](https://img.shields.io/badge/HTML-B81717)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-B81717)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-B81717)](https://github.com/aniqatc/playground)
[![Function Plot Badge](https://img.shields.io/badge/FunctionPlot-B81717)](https://github.com/mauriciopoppe/function-plot)
[![HTML2Canvas Badge](https://img.shields.io/badge/HTML2Canvas-B81717)](https://github.com/niklasvh/html2canvas)

A dual-mode calculator that can handle evaluating different arithmetic expressions **and** provides the ability to graph select functions, accessed through a minimalistic user interface. The calculator allows users to keep track of their previously inputted expressions and allows them to save a `.png` file of the calculator's display and history.

**Relevant file(s)**: [/client/src/widgets/02/\*](../../client/src/widgets/02/)

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-02_v2.png"></a>

## Tech

- JavaScript/HTML/SCSS: Core technologies for building and styling the widget
- Function Plot: Library for building interactive SVG graphs
- HTML2Canvas: library for exporting portion of the calculator display as `.png`

## Storage

- Browser storage: `localStorage` utilized to temporarily save previously inputted expressions

## Features

- Allows for basic to intermediate **arithmetic computations** utilizing `eval()` and custom methods for edge cases (e.g. exponents)
- Switch **calculator modes** to focus on calculations based on the mode selected (either graphing or scientic)
- Displays **interactive function graphs** using the Function-Plot library
- **History tracking** that can be toggled, cleared, or saved in a user's browser storage for future review
- **Export and save** the current calculator display as a `.png` file (whether it's the arithmetic history or the view of the current function graph)
- Responsive with user-friendly and minimalistic interface

## Widget Architecture

**User Interface (UI)**

- [../widgets/02/style.css](../../client/src/widgets/02/style.css): Provides the visual appearance of the calculator, including the animations of the expression history and the different active states
- [../widgets/02/core/ui.js](../../client/src/widgets/02/core/ui.js): Manages initialization of all the interactive elements (event handlers), displaying updates, and resets
- [../widgets/02/core/styles.js](../../client/src/widgets/02/core/styles.js): Handles style updates when switching between scientific and graphing modes

**Context**

- [../widgets/02/core/context.js](../../client/src/widgets/02/core/context.js): Initializes and manages key DOM elements, making it easy for other classes (such as `UI`, `Logic`, and `Storage`) to consistently access and utilize the same elements throughout the application

**Logic**

- [../widgets/02/core/logic.js](../../client/src/widgets/02/core/logic.js): generates the graph for the graphing mode and contains the core logic for evaluating arithmetic expressions for the scientific mode

**User Input**

- [../widgets/02/core/input.js](../../client/src/widgets/02/core/input.js): Handles various inputs from the user (e.g., numbers, operators, graphing commands) and determines the appropriate `Logic` method to execute from the `logic.js` file

**Storage**

- [../widgets/02/core/storage.js](../../client/src/widgets/02/core/storage.js): Manages saving and retrieving the calculator's display and input history to and from `localStorage`

## Core Classes

**`CalculatorContext`**

Initializes and manages DOM elements, such as buttons, display, and history

- `initializeElements()` => sets up all relevant DOM elements for interactions

**`CalculatorLogic`**

Processes arithmetic expressions and handles graphing tasks

- `evaluateExpression(expression)` => Evaluates arithmetic expressions with custom handling for exponents (`evaluateExponent(expression)`)
- `graphFunction(expression)` => Renders the graph of a given expression using the Function-Plot library

**`CalculatorUI`**

Handles user interaction, updates the calculator display, manages history, and processes user inputs (e.g., button presses)

- `setupCalculatorButtons()` => Attaches event listeners to buttons to capture user input and trigger calculations
- `resetDisplay()` => Clears the calculator display for new input or error handling
- `addToHistory(expression)` => Adds the user's input to the history display and updates the storage

**`CalculatorStorage`**

Manages saving and restoring calculator history and display data using `localStorage`

- `saveToLocalStorage()` => Saves the current display value and history
- `getFromLocalStorage()` => Retrieves the saved state from `localStorage` and restores it to the calculator's UI

**`CalculatorModeStyles`**

Manages the visual styling of the calculator’s different modes (graphing and scientific). It dynamically updates the calculator’s appearance based on the selected mode and controls the visibility of certain UI elements

- `graphingMode()` => Applies styles and enables the elements required for graphing mode
- `scientificMode()` => Switches the calculator’s interface back to scientific mode, removing graphing elements and adjusting the layout
- `switchStates()` => Handles the transition between modes, toggling active classes and enabling or disabling relevant buttons
