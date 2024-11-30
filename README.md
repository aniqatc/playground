## playground

[https://playground.aniqa.dev](https://playground.aniqa.dev)

🕹️ A place to showcase a collection of independent, interactive widgets that each demonstrate a different functionality using both frontend and backend technologies.

## Tech

- HTML5
- Tailwind
- Sass
- JavaScript
- Webpack
- Node
- Express
- MongoDB
- Mongoose

**Hosts**

- Frontend: Vercel
- Backend: Heroku
- Database: MongoDB Atlas

## Project Files

**Config** files in root directory

- `server.js` holds backend server configuration and connection to the MongoDB database
- `package.json` & `package-lock.json` refers to any dependencies relating to the backend
- `Procfile` holds commands that are run by Heroku

**Server** files in `/server`

- `/main` holds all database models, express routing and handlers for the overall webpage
- `/widgets` holds individual widget database models, express routing and handlers

**Client** files in `/client`

- `.prettierrc` includes a plugin to organize Tailwind utility classes in the main HTML file
- `package.json` & `package-lock.json` refers to any dependencies relating to the frontend
- `postcss.config.js`, `tailwind.config.js` and `webpack.config.js` are individual configuration files for PostCSS, Tailwind and Webpack

**Inside the `/client` directory**: the `/public` directory contains all production-ready code, bundled and optimized using Webpack and the `/src` directory contains all source code, split between `/main` which represents the overall webpage & layout and `/widgets` which represents individual widgets

- **Inside `/widgets`**, there are template files that represent reusable markup for the widgets (`_card.html` for main markup including title, like button, etc and `_border.html` to create an animated border around the widget card) and individual folders that hold the markup, styling and scripts for each widget
- **Inside `/main`**, the main `index.html` file can be found, along with folders containing global styles and overall webpage functionality (e.g. handling the like button, theme toggling, etc)

**Webpack Configuration** for in `/client`

- Handles the SCSS and PostCSS loaders (for Tailwind)
- Handles bundling all modularized JavaScript code
- Handles minifying all final CSS and JavaScript files
- Handles configuring HTML with meta tags and icons
- Handles retrieval of the relevant environmental variables from the hidden `.env` files, dependent on the environment (development vs production)
- Handles manifest.json file required for a Progressive Web Application

**Documentation** in `/docs`

- `/main` goes over choices and code relating to overall webpage design and functionality
- `/widgets` goes over choices and code relating to individual widgets

## Individual Widgets

#### Widget 01: About ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/01-about.md))

[![HTML Badge](https://img.shields.io/badge/HTML-0A0A0A)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-0A0A0A)](https://github.com/aniqatc/playground)

A card showcasing the purpose of the webpage with animated SVG logos of the technologies used, a GitHub activity grid of the creator, and links to source code and social media.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-01_v1.png"></a>

#### Widget 02: Calculator ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/02-calculator.md))

[![HTML Badge](https://img.shields.io/badge/HTML-B81717)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-B81717)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-B81717)](https://github.com/aniqatc/playground)
[![Function Plot Badge](https://img.shields.io/badge/FunctionPlot-B81717)](https://github.com/mauriciopoppe/function-plot)
[![HTML2Canvas Badge](https://img.shields.io/badge/HTML2Canvas-B81717)](https://github.com/niklasvh/html2canvas)

A dual-mode calculator that can handle evaluating different arithmetic expressions and provides the ability to graph select functions, accessed through a minimalistic user interface. The calculator allows users to keep track of their previously inputted expressions and allows them to save a `.png` file of the calculator's display and history.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-02_v2.png"></a>

#### Widget 03: Digital Footprint ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/03-digital-footprint.md))

[![HTML Badge](https://img.shields.io/badge/HTML-D27334)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-D27334)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-D27334)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-D27334)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-D27334)](https://github.com/aniqatc/playground)
[![MapBox Badge](https://img.shields.io/badge/MapBox-D27334)](https://www.mapbox.com/)
[![IP API Badge](https://img.shields.io/badge/IP%20API-D27334)](https://ip-api.com/)

A mini dashboard that presents a user's digital footprint, including geographic location (obtained using their IP), browser details, operating system, and ISP information, all underscored by a dynamic map visualization for a quick and elegant overview of their online presence.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-03_v1.png"></a>

#### Widget 04: Task Tracker ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/04-todo-list.md))

[![HTML Badge](https://img.shields.io/badge/HTML-F4BA52)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-F4BA52)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-F4BA52)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-F4BA52)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-F4BA52)](https://github.com/aniqatc/playground)
[![Flatpickr Badge](https://img.shields.io/badge/Flatpickr-F4BA52)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-F4BA52)](https://github.com/aniqatc/playground)

A user-friendly to-do list widget that lets users manage tasks with priority tags, due dates, and quick actions like edit, delay, archive, or delete.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-04_v1.png"></a>

#### Widget 05: Financial Markets Monitor ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/05-fin-market.md))

[![HTML Badge](https://img.shields.io/badge/HTML-4eb247)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-4eb247)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-4eb247)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-4eb247)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-4eb247)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-4eb247)](https://github.com/aniqatc/playground)
[![OpenExchange Badge](https://img.shields.io/badge/OpenExchange%20API-4eb247)](https://github.com/aniqatc/playground)
[![TwelveData Badge](https://img.shields.io/badge/TwelveData%20API-4eb247)](https://github.com/aniqatc/playground)
[![AlphaVantage Badge](https://img.shields.io/badge/Alpha%20Vantage%20API-4eb247)](https://github.com/aniqatc/playground)
[![Chart.js Badge](https://img.shields.io/badge/Chartjs-4eb247)](https://github.com/aniqatc/playground)
[![Google Favicon API Badge](https://img.shields.io/badge/Google%20Favicon%20API-4eb247)](https://github.com/aniqatc/playground)

A financial markets widget that delivers real-time currency exchange rates against USD and stock market data through interactive 7-day price history graphs, color-coded trend indicators, and detailed metrics for market monitoring.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-05_v1-1.png"></a>
<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-05_v1-2.png"></a>

#### Widget 06: Historical Lottery Search ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/06-lottery.md))

[![HTML Badge](https://img.shields.io/badge/HTML-38C4DC)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-38C4DC)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-38C4DC)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-38C4DC)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-38C4DC)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-38C4DC)](https://github.com/aniqatc/playground)
[![AvoraTech Powerball Badge](https://img.shields.io/badge/AvoraTech%20Powerball%20API-38C4DC)](https://github.com/aniqatc/playground)
[![AvoraTech Megamillions Badge](https://img.shields.io/badge/AvoraTech%20Megamillions%20API-38C4DC)](https://github.com/aniqatc/playground)

A lottery analysis tool that helps players analyze historical Powerball and Mega Millions drawings, featuring quick number generation, detailed match statistics, and visual indicators to easily spot winning combinations - all searchable across 20+ years of drawing history.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-06_v1.png"></a>

## Available Scripts

**To be used at root directory for server-side development**:

#### `npm run start:dev`

- Starts the backend server
- Sets `NODE_ENV` variable to `development` (sets a different CORS origin so that requests can be made from the frontend development localhost)

#### `npm run start`

- Starts the backend server, used for production
- Sets `NODE_ENV` variable to `production` (sets a different CORS origin so that requests can be made from the hosted frontend)

**To be used within the `/client` directory for client-side development**:

#### `npm run start`

- Starts the development server
- Sets `NODE_ENV` variable to `development`

#### `npm run build`

- Build in production mode
- Sets `NODE_ENV` variable to `production`
