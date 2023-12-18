## playground

[https://playground.aniqa.dev](https://playground.aniqa.dev)

🕹️ A place to showcase a variety of independent widgets with different functionalities.

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
- **Inside `/main**`, the main `index.html` file can be found, along with folders containing global styles and overall webpage functionality (e.g. handling the like button, theme toggling, etc)

**Webpack Configuration** for in `/client`

- Handles the SCSS and PostCSS loaders (for Tailwind)
- Handles bundling all modularized JavaScript code
- Handles configuring HTML with meta tags and icons
- Handles retrieval of environmental variables from the hidden `.env` file using different plugins for prod vs. dev environment
- Handles manifest.json file required for a Progressive Web Application
- Handles minifying all final CSS and JavaScript files

**Documentation** in `/docs`

- `/main` goes over choices and code relating to overall webpage design and functionality
- `/widgets` goes over choices and code relating to individual widgets

## Widgets

#### About

<img src="/docs/screenshots/widget-01.png">

A card detailing the purpose of the overall webpage along with a smooth animation displaying the different logos of the technologies used.

#### Calculator

<img src="/docs/screenshots/widget-02.png">

A simple calculator that can handle evaluating different arithmetic expressions with a minimalistic user interface and ability to keep track of previously inputted expressions.

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
