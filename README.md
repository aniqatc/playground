## playground

[https://playground.aniqa.dev](https://playground.aniqa.dev)

🕹️ A place to showcase a collection of independent, interactive widgets that each demonstrate a different functionality using both frontend and backend technologies. 
<p float="left">
  <a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/playground-light.png" width="49%" alt="Playground v2 in light mode"></a>
  <a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/playground-dark.png" width="49%" alt="Playground v2 in dark mode"></a>
</p>

> These screenshots show the **v2 design** (current). The original design is documented in [v1 design](#v1-design) at the bottom of this page.

## Tech

- **Frontend**: HTML5, Tailwind, Sass, JavaScript
- **Design (v2)**: CSS custom properties for light/dark design tokens, Bricolage Grotesque + Geist + Geist Mono
- **Backend**: Node, Express, MongoDB, Mongoose

**Hosts**

- **Frontend**: Vercel
- **Backend**: Heroku
- **Database**: MongoDB Atlas

**Build Tools**
- **Bundling & Optimization**: Webpack
- **Tailwind Processing**: PostCSS
- **Linter**: ESLint
- **Formatter**: Prettier

## Project Files

```plaintext
playground/
├── client/                 # Client-side code
│   ├── public/             # Public assets
│   ├── src/                # Source code for the client
│   │   ├── main/           # Main client-side scripts and styles (relating to theme mode, styling, like system, user handling, etc)
│   │   ├── widgets/        # Client-side logic for individual widgets
│   │   │   ├── 01/         # Widget 01 (About: tech stack + GitHub activity)
│   │   │   ├── 02/         # Widget 02 (Calculator)
│   │   │   ├── 03/         # Widget 03 (Digital Footprint)
│   │   │   ├── 04/         # Widget 04 (Task Manager)
│   │   │   ├── 05/         # Widget 05 (Financial Market Monitor)
│   │   │   ├── 06/         # Widget 06 (Historical Lottery Search)
│   │   │   ├── 07/         # Widget 07 (GitHub Repository Visualizer)
│   │   │   ├── 08/         # Widget 08 (Community Bookmarks)
│   │   │   │    │          # Example structure of individual widget folders:
│   │   │   │    ├── core/  
│   │   │   │    ├── content.js
│   │   │   │    ├── script.js
│   │   │   │    ├── style.scss
│   │   │   
│   │   ├── _card.js        # Shared card shell (header, like button, footer) used by every widget
│   │
│   ├── .env                # Environment variables for the client-side
│   ├── .env.development    # Environment-specific variables for development mode in the client-side
│   ├── .eslintrc.js        # ESLint configuration for linting client-side JavaScript
│   ├── .prettierrc         # Prettier configuration for formatting client-side code
│   ├── postcss.config.js   # PostCSS configuration for CSS processing
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── webpack.config.js   # Webpack configuration 
│   ├── package.json        # Metadata and scripts for the client-side
│   ├── package-lock.json   # Exact dependency versions for the client-side
│
├── docs/                   # Documentation files for the project
│
├── server/                 # Server-side code
│   ├── main/               # Main server-side logic (handling users and widget likes)
│   ├── widgets/            # Server-side logic for individual widgets
│   │   ├── 03/             # Widget 03 (Digital Footprint)
│   │   ├── 04/             # Widget 04 (Task Manager)
│   │   ├── 05/             # Widget 05 (Financial Market Monitor)
│   │   ├── 06/             # Widget 06 (Historical Lottery Search)
│   │   ├── 07/             # Widget 07 (GitHub Repository Visualizer)
│   │   ├── 08/             # Widget 08 (Community Bookmarks)
│   ├── _modelTemplate.js   # Template for server-side data models 
│
├── .env                    # Environment variables for the server
├── .eslintrc.js            # ESLint configuration for the server-side
├── .gitignore              # Git ignore file to exclude certain files from version control
├── .prettierignore         # Prettier ignore file to exclude certain files from formatting
├── .prettierrc             # Prettier configuration for the server-side
├── package.json            # Metadata and scripts for the server-side
├── package-lock.json       # Exact dependency versions for the server-side
├── Procfile                # Process file for Heroku deployment
├── server.js               # Entry point for the server-side application
│
├── LICENSE                 # License for the project
├── README.md               # Project README (contains notes/screenshots about the widgets, structure, and more)
```

**Webpack** configuration for client-side code (`client/webpack.config.js`):
- processes SCSS and PostCSS
- bundles modular JavaScript
- minifies CSS and JavaScript
- configures HTML (meta tags, icons)
- loads environment variables from `.env`
- manages `manifest.json` for PWA support
- optimizes images and saves them in `assets/images` with hashed filenames
- splits JavaScript into chunks for better performance
- outputs hashed filenames for JS and CSS to enable caching

## Individual Widgets

### Widget 01: About ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/01-about.md))

[![HTML Badge](https://img.shields.io/badge/HTML-0A0A0A)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-0A0A0A)](https://github.com/aniqatc/playground)

A full-width card describing the purpose of the playground, the tech stack grouped into frontend, backend and hosting, the creator's GitHub activity grid, and a link to the source code.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/widget-01.png" alt="Widget 01 in light and dark mode"></a>

### Widget 02: Calculator ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/02-calculator.md))

[![HTML Badge](https://img.shields.io/badge/HTML-B81717)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-B81717)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-B81717)](https://github.com/aniqatc/playground)
[![Function Plot Badge](https://img.shields.io/badge/FunctionPlot-B81717)](https://github.com/mauriciopoppe/function-plot)
[![Expr-Eval Badge](https://img.shields.io/badge/expr--eval-B81717)](https://github.com/niklasvh/html2canvas)
[![HTML2Canvas Badge](https://img.shields.io/badge/HTML2Canvas-B81717)](https://github.com/niklasvh/html2canvas)

A dual-mode calculator that can handle evaluating different arithmetic expressions and provides the ability to graph select functions, accessed through a minimalistic user interface. The calculator allows users to keep track of their previously inputted expressions and allows them to save a `.png` file of the calculator's display and history.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/widget-02.png" alt="Widget 02 in light and dark mode"></a>

### Widget 03: Digital Footprint ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/03-digital-footprint.md))

[![HTML Badge](https://img.shields.io/badge/HTML-D27334)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-D27334)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-D27334)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-D27334)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-D27334)](https://github.com/aniqatc/playground)
[![MapBox Badge](https://img.shields.io/badge/MapBox-D27334)](https://www.mapbox.com/)
[![IP API Badge](https://img.shields.io/badge/IP%20API-D27334)](https://ip-api.com/)

A mini dashboard that presents a user's digital footprint, including geographic location (obtained using their IP), browser details, operating system, and ISP information, all underscored by a dynamic map visualization for a quick and elegant overview of their online presence.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/widget-03.png" alt="Widget 03 in light and dark mode"></a>

### Widget 04: Task Tracker ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/04-todo-list.md))

[![HTML Badge](https://img.shields.io/badge/HTML-F4BA52)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-F4BA52)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-F4BA52)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-F4BA52)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-F4BA52)](https://github.com/aniqatc/playground)
[![Flatpickr Badge](https://img.shields.io/badge/Flatpickr-F4BA52)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-F4BA52)](https://github.com/aniqatc/playground)

A user-friendly to-do list widget that lets users manage tasks with priority tags, due dates, and quick actions like edit, delay, archive, or delete.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/widget-04.png" alt="Widget 04 in light and dark mode"></a>

### Widget 05: Financial Markets Monitor ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/05-fin-market.md))

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

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/widget-05.png" alt="Widget 05 in light and dark mode"></a>

### Widget 06: Historical Lottery Search ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/06-lottery.md))

[![HTML Badge](https://img.shields.io/badge/HTML-38C4DC)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-38C4DC)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-38C4DC)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-38C4DC)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-38C4DC)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-38C4DC)](https://github.com/aniqatc/playground)
[![AvoraTech Powerball Badge](https://img.shields.io/badge/AvoraTech%20Powerball%20API-38C4DC)](https://github.com/aniqatc/playground)
[![AvoraTech Megamillions Badge](https://img.shields.io/badge/AvoraTech%20Megamillions%20API-38C4DC)](https://github.com/aniqatc/playground)

A lottery analysis tool that helps players analyze historical Powerball and Mega Millions drawings, featuring quick number generation, detailed match statistics, and visual indicators to easily spot winning combinations - all searchable across 20+ years of drawing history.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/widget-06.png" alt="Widget 06 in light and dark mode"></a>

### Widget 07: GitHub Repository Search ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/07-gh-card.md))

[![HTML Badge](https://img.shields.io/badge/HTML-6366F1)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-6366F1)](https://github.com/aniqatc/playground)
[![HTML-to-Image Badge](https://img.shields.io/badge/html2image-6366F1)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-6366F1)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-6366F1)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-6366F1)](https://github.com/aniqatc/playground)
[![Octokit Badge](https://img.shields.io/badge/Octokit-6366F1)](https://github.com/aniqatc/playground)

A GitHub repository visualization tool that generates cards displaying repository statistics and language breakdowns. Features include random repository discovery, search functionality, and PNG export capabilities.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/widget-07.png" alt="Widget 07 in light and dark mode"></a>

### Widget 08: Community Bookmarks ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/08-bookmarks.md))

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

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/v2/widget-08.png" alt="Widget 08 in light and dark mode"></a>

## v1 design

The first version of the playground used a different look: each widget had its own hand-picked palette in `_var.scss`, a plain stone/zinc card with the widget's name and like count underneath it, Archivo + DM Sans + Inter as fonts, a lightbulb theme toggle, and an auto-fill grid where every card had the same width. The About widget used an animated rotating border (`_border.html`) and a grid of tech logos.

The v2 redesign (October 2026) kept every widget's features and data and changed the presentation:

- one set of light/dark design tokens (CSS custom properties) instead of per-widget hard-coded colors
- a shared card shell (`client/src/widgets/_card.js`) with a numbered header, tech tags, like button and "Build notes" link
- a hero with a live widget index, a 12-column grid with wide and narrow cards, and small animations throughout

<p float="left">
  <img src="/docs/screenshots/playground-light.png" width="49%" alt="Playground v1 in light mode">
  <img src="/docs/screenshots/playground-dark.png" width="49%" alt="Playground v1 in dark mode">
</p>

<details>
<summary>v1 widget screenshots</summary>

#### Widget 01: About
<img src="/docs/screenshots/widget-01_v1.png" alt="About widget, v1">

#### Widget 02: Calculator
<img src="/docs/screenshots/widget-02_v2.png" alt="Calculator widget, v1 design (second iteration)">

#### Widget 03: Digital Footprint
<img src="/docs/screenshots/widget-03_v1.png" alt="Digital footprint widget, v1">

#### Widget 04: Task Tracker
<img src="/docs/screenshots/widget-04_v1.png" alt="Task tracker widget, v1">

#### Widget 05: Financial Markets Monitor
<img src="/docs/screenshots/widget-05_v1-1.png" alt="Financial markets widget (stocks), v1">
<img src="/docs/screenshots/widget-05_v1-2.png" alt="Financial markets widget (currencies), v1">

#### Widget 06: Historical Lottery Search
<img src="/docs/screenshots/widget-06_v1.png" alt="Lottery widget, v1">

#### Widget 07: GitHub Repository Search
<img src="/docs/screenshots/widget-07_v1.png" alt="Repo card widget, v1">

#### Widget 08: Community Bookmarks
<img src="/docs/screenshots/widget-08_v1.png" alt="Community bookmarks widget, v1">

</details>

## Available Scripts

### Server-Side Development (Root `/` Directory)
- `npm run start:dev`: starts the backend server and sets `NODE_ENV` variable to `development` (sets a different CORS origin so that requests can be made from the frontend development localhost)
- `npm run start`: starts the backend server, used for production; sets `NODE_ENV` variable to `production` (sets a different CORS origin so that requests can be made from the hosted frontend)
- `npm run lint:server`: check for code errors based on the `.eslintrc.js` config file
- `npm run lint:server:fix`: automatically fix minor syntax errors identified by ESLint
- `npm run format:server`: format the server-side code based on the `.prettierrc` config file

### Client-Side Development (`/client` Directory):
- `npm run start`: starts the development server with `NODE_ENV` variable set to `development`
- `npm run build`: builds frontend for production with `NODE_ENV` variable set to `production`
- `npm run lint`: check for code errors based on the `.eslintrc.js` config file
- `npm run lint:fix`: automatically fix minor syntax errors identified by ESLint
- `npm run format`: format client-side code based on the `.prettierrc` config file

## License & Contributions
📑 This project is licensed under the [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html). 

👋🏼 Contributions for new widgets are always welcome.