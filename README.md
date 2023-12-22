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

[![HTML Badge](https://img.shields.io/badge/HTML-703F77)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-703F77)](https://github.com/aniqatc/playground)

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-01.png"></a>

A card detailing the purpose of the overall webpage along with a smooth animation displaying the different logos of the technologies used.

#### Widget 02: Calculator ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/02-calculator.md))

[![HTML Badge](https://img.shields.io/badge/HTML-B81717)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-B81717)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-B81717)](https://github.com/aniqatc/playground)

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-02.png"></a>

A simple calculator that can handle evaluating different arithmetic expressions with a minimalistic user interface and ability to keep track of previously inputted expressions.

#### Widget 03: Digital Footprint ([README](https://github.com/aniqatc/playground/blob/main/docs/widgets/03-digital-footprint.md))

[![HTML Badge](https://img.shields.io/badge/HTML-D27334)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-D27334)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-D27334)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-D27334)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-D27334)](https://github.com/aniqatc/playground)
[![MapBox Badge](https://img.shields.io/badge/MapBox-D27334)](https://github.com/aniqatc/playground)
[![IP API Badge](https://img.shields.io/badge/IP%20API-D27334)](https://github.com/aniqatc/playground)

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-03.png"></a>

A mini dashboard that presents a user's digital footprint, including geographic location (obtained using their IP), browser details, operating system, and ISP information, all underscored by a dynamic map visualization for a quick and elegant overview of their online presence.

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
