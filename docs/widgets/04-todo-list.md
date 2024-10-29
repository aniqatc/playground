#### Task Tracker

[![HTML Badge](https://img.shields.io/badge/HTML-F4BA52)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-F4BA52)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-F4BA52)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-F4BA52)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-F4BA52)](https://github.com/aniqatc/playground)
[![Flatpickr Badge](https://img.shields.io/badge/Flatpickr-F4BA52)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-F4BA52)](https://github.com/aniqatc/playground)

**Relevant file(s)**: [/client/src/widgets/04/\*](../../client/src/widgets/04/), [/server/widgets/04/\*](../../server/widgets/04/)

A user-friendly to-do list widget that lets users manage tasks with priority tags, due dates, and quick actions like edit, delay, archive, or delete.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-04_v1.png"></a>

## Tech

- JavaScript/HTML/SCSS: Core technologies for building and styling the widget
- Node.js & Express.js: Backend technologies used for handling API requests

## Storage

## Features

## Limitations

## Widget Architecture

**Frontend**: [/client/src/widgets/04/\*](../../client/src/widgets/04/)

**Frontend Components**

- [/client/../widgets/04/style.scss](../../client/src/widgets/04/style.scss): Handles the styling for the widget, including the subtle animation that occurs when page is loaded
- [/client/../widgets/04/content.js](../../client/src/widgets/04/content.js): Contains the HTML structure for the widget (including placeholder values if there is an error getting the user's digital footprint)
- [/client/../widgets/04/script.js](../../client/src/widgets/04/script.js):

**Backend**

**Backend Components**

- [/server.js](/server.js): Initializes the Express.js server & handles API routing
