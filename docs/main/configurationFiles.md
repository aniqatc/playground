## Configuration Files

--- 

### Client config files
- [package.json](../../client/package.json)
  - Defines script commands for building the project, starting dev server, linting the code, fixing linting issues and formatting the code
  - Defines production dependencies and development dependencies
  - Contains metadata about the project

- [.eslintrc.js](../../client/.eslintrc.js)
  - Configures ESLint for enforcing code quality and style
  - Extends recommended rules and specifies environment

- [.prettierrc](../../client/.prettierrc)
  - Configures Prettier for consistent code formatting
  - Specifies rules for quotes, commas, indentation, and line width
  - Uses a plugin for sorting Tailwind CSS classes (`prettier-plugin-tailwindcss`)

- [webpack.config.js](../../client/webpack.config.js)
  - Configures Webpack for bundling and optimizing assets 
  - Specifies entry point, output directory, and loaders for different file types 
  - Generates HTML, CSS, and PWA manifest files 
  - Configures code splitting and minimization

- [postcss.config.js](../../client/postcss.config.js)
  - Configures PostCSS for transforming CSS
  - Specifies plugins for Tailwind CSS and Autoprefixer

- [tailwind.config.js](../../client/tailwind.config.js)
  - Configures Tailwind CSS
  - Specifies content sources, dark mode, and theme customization

### Server config files
- [package.json](../../package.json)
  - Contains project metadata and server-side dependencies
  - Defines scripts for running, linting, and formatting the server code

- [.eslintrc.js](../../.eslintrc.js)
  - Configures ESLint for enforcing server-side code quality and style
  - Extends recommended rules and uses Node.js-specific plugins
  - Allows console.log statements and ignores common variables
  
- [.prettierrc](../../.prettierrc)
  - Configures Prettier for consistent server-side code formatting
  - Specifies rules for quotes, commas, indentation, and line width

- [Procfile](../../Procfile): Specifies the command to start the server on Heroku