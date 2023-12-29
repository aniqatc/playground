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

- Browser storage: local storage utilized to temporarily save previously inputted expressions

## Features

- Allows for basic to intermediate **arithmetic computations** utilizing `eval()` and custom methods for edge cases
- Switch **calculator modes** to focus on calculations based on the mode selected
- Displays **interactive function graphs** using the Function-Plot library
- **History tracking** that can be toggled, cleared, or saved in a user's browser storage for future review
- **Export and save** the current calculator display as a `.png` file (whether it's the arithmetic history or the view of the current function graph)
- Responsive with user-friendly and minimalistic interface
