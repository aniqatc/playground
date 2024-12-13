## playground

[https://playground.aniqa.dev](https://playground.aniqa.dev)

🕹️ A place to showcase a collection of independent, interactive widgets that each demonstrate a different functionality using both frontend and backend technologies. The collection includes a geolocation-based digital footprint analyzer, dual-mode calculator, a MongoDB-powered task management system, real-time financial markets dashboard, historical lottery data analysis tool, a GitHub repository visualizer, and a community-driven bookmark widget with automated metadata extraction. Built with a Node.js/Express backend, MongoDB database, and a Webpack-optimized frontend utilizing Tailwind CSS and Sass, each widget represents different aspects of full-stack development while maintaining a cohesive user experience.

<p float="left">
  <a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/playground-light.png" width="49%"></a>
  <a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/playground-dark.png" width="49%"></a>
</p>

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

**Build Tools**
- Webpack
- ESLint
- Prettier

## Project Files

**Config** files in root directory

- `server.js` holds backend server configuration and connection to the MongoDB database
- `package.json` & `package-lock.json` refers to any dependencies relating to the backend
- `Procfile` holds commands that are run by Heroku

**Server** files in `/server`

- `/main` holds all database models, express routing and handlers for the overall webpage
- `/widgets` holds individual widget database models, express routing and handlers

**Client** config files in `/client`

- `.prettierrc` configures Prettier for consistent code formatting and includes a plugin to organize Tailwind utility classes in the main HTML file
- `package.json` & `package-lock.json` refers to any dependencies relating to the frontend, including development and build tools
- `postcss.config.js`, `tailwind.config.js`, and `webpack.config.js`: Provide individual configurations for PostCSS, Tailwind CSS, and Webpack, ensuring efficient CSS processing, utility-class management, and asset bundling
- `.eslintrc.js` configures ESLint to enforce coding standards and identify potential errors

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
- Handles image optimization and outputs images to a dedicated assets/images folder with hashed filenames for caching
- Handles splitting JavaScript code into optimized chunks for better performance, including separating vendor libraries and reusable code
- Handles output of hashed filenames for JS and CSS to support long-term caching

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
[![Expr-Eval Badge](https://img.shields.io/badge/expr--eval-B81717)](https://github.com/niklasvh/html2canvas)
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

#### Widget 07: GitHub Repository Search ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/07-gh-card.md))

[![HTML Badge](https://img.shields.io/badge/HTML-6366F1)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-6366F1)](https://github.com/aniqatc/playground)
[![HTML-to-Image Badge](https://img.shields.io/badge/html2image-6366F1)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-6366F1)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-6366F1)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-6366F1)](https://github.com/aniqatc/playground)
[![Octokit Badge](https://img.shields.io/badge/Octokit-6366F1)](https://github.com/aniqatc/playground)

A GitHub repository visualization tool that generates cards displaying repository statistics and language breakdowns. Features include random repository discovery, search functionality, and PNG export capabilities.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-07_v1.png"></a>

#### Widget 08: Community Bookmarks ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/08-bookmarks.md))

[![HTML Badge](https://img.shields.io/badge/HTML-602CA2)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-602CA2)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-602CA2)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-602CA2)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-602CA2)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-602CA2)](https://github.com/aniqatc/playground)
[![Cheerio Badge](https://img.shields.io/badge/Cheerio-602CA2)](https://github.com/aniqatc/playground)
[![Google Safe Browsing Badge](https://img.shields.io/badge/Google%20Safe%20Browsing-602CA2)](https://github.com/aniqatc/playground)
[![Natural Badge](https://img.shields.io/badge/Natural-602CA2)](https://github.com/aniqatc/playground)
[![Leo-Profanity Badge](https://img.shields.io/badge/Leo%20Profanity-602CA2)](https://github.com/aniqatc/playground)
[![Google Favicon Badge](https://img.shields.io/badge/MongoDB-602CA2)](https://github.com/aniqatc/playground)

A community-driven bookmark platform that processes submitted URLs to extract metadata, validate content safety, and generate topic tags. Features include community voting, automated metadata extraction, and content filtering to maintain a curated collection of high-quality web resources.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-08_v1.png"></a>

## Available Scripts

**To be used at root directory for server-side development**:

```
npm run start:dev
```

- Starts the backend server
- Sets `NODE_ENV` variable to `development` (sets a different CORS origin so that requests can be made from the frontend development localhost)

```
npm run start
```

- Starts the backend server, used for production
- Sets `NODE_ENV` variable to `production` (sets a different CORS origin so that requests can be made from the hosted frontend)

**To be used within the `/client` directory for client-side development**:

```
npm run start
```

- Starts the development server
- Sets `NODE_ENV` variable to `development`

```
npm run build
```

- Build in production mode
- Sets `NODE_ENV` variable to `production`

```
npm run lint
```

- Check for code errors based on the `.eslintrc.js` config file

```
npm run lint:fix
```

- Automatically fix minor syntax errors identified by ESLint

```
npm run format
```

- Format the code based on the `.prettierrc` config file
