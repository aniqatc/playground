#### GitHub Repository Search

[![HTML Badge](https://img.shields.io/badge/HTML-6366F1)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-6366F1)](https://github.com/aniqatc/playground)
[![HTML-to-Image Badge](https://img.shields.io/badge/html2image-6366F1)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-6366F1)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-6366F1)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-6366F1)](https://github.com/aniqatc/playground)
[![Octokit Badge](https://img.shields.io/badge/Octokit-6366F1)](https://github.com/aniqatc/playground)

**Relevant file(s)**: [/client/src/widgets/07/\*](../../client/src/widgets/07/), [/server/widgets/07/\*](../../server/widgets/07/)

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-07_v1.png"></a>

A GitHub repository visualization tool that generates cards displaying repository statistics and language breakdowns. Features include random repository discovery, search functionality, and PNG export capabilities.

## Tech

- JavaScript/HTML/SCSS: Core technologies for building and styling the widget
- Node.js & Express.js: Backend technologies for handling GitHub API requests and data processing
- Octokit: GitHub REST API client for interacting with GitHub's API
- HTML-to-Image: Library for exporting repository cards as `png` files

## Storage

No persistent storage required; all data is fetched directly from GitHub's API in real-time.

## Features

- **Repository Search**: Search any GitHub repository using repository URL (e.g. `github.com/aniqatc/weather`) or user profile URL
- **User Repository Discovery**: View any user's most recent repository by entering their user profile URL (e.g. `github.com/aniqatc`)
- **Random Repository Discover**: View a random repository from GitHub's most popular repositories (5000+ stars)
- **Comprehensive Stats Display**:
  - Basic repository information (name, description, topics, user avatar and relevant links)
  - Repository metrics (stars, forks, watchers)
  - Last updated timestamp
  - License information
  - Language breakdown with percentage visualization
- **Language Analysis**:
  - Visual representation of language distribution
  - Byte count and line estimates for each language
  - Interactive tooltips showing percentage value for each language
- **Export Functionality**: Save repository cards as `png` images for sharing
- **Responsive Design & Dark Mode**
- **Animated Interface**

## Limitations

- Language line count is estimated using a bytes-per-line approximation so the line count shown is only an estimation and not an exact count
- Random repository feature is currently limited to repositories with 5000+ stars
- Card `png` export may not be the best quality

## Widget Architecture

### Frontend: [/client/src/widgets/07/\*](../../client/src/widgets/07/)

1. **Search Interface**: URL-based repository search with error handling
2. **Card Display**: Animated repository cards
3. **Language Visualization**: Interactive language breakdown with statistics
4. **Export Controls**: `png` export functionality for repository cards
5. **Random Feature**: Random repository card is displayed

### Frontend Components

**Core Directory**:
- [`core/context.js`]: Manages DOM elements and shared widget state
- [`core/data.js`]: Handles API requests to the backend
- [`core/buttonState.js`]: Controls button states during loading and animations, provides helpers to enable and disable buttons
- [`core/displayCard.js`]: Manages repository card rendering and animations, handles calculation of the language stats (by converting the byte value to an estimated line count)
- [`core/handleSearch.js`]: Validates input and manages search process
- [`core/saveImage.js`]: Handles PNG export functionality
- [`core/tooltips.js`]: Manages interactive language statistics tooltips
- [`core/showRandom.js`]: Initializes the random button to fetch a random repository and uses the function in `displayCard.js` to display the repository card

**Root Files**:
- [`content.js`](/client/src/widgets/07/content.js): Defines base HTML structure and placeholder templates for the widget
- [`script.js`](/client/src/widgets/07/script.js): Entry point that initializes relevant components
- [`style.scss`](/client/src/widgets/07/style.scss): Widget-specific styling including dark mode, responsive layouts, animations and different states

### Backend: [/server/widgets/07/\*](../../server/widgets/07/)

1. **GitHub API Integration**: Octokit client used for GitHub API communication
2. **Data Processing**: Repository and language statistics packaged together to be sent to the frontend
3. **Error Handling**

### Backend Components

- [/server.js](/server.js): Initializes the Express.js server, handles API routing

**Base Directory**:
- [`ghRouter.js`](/server/widgets/07/ghRouter.js): Express router handling GitHub API requests with endpoints
  - `:/owner/:repo` => repository details, including user information and language stats
  - `/random` => random repository discovery

## How to Use

1. **Search for repositories**:
   - Enter a GitHub repository URL (e.g. `github.com/aniqatc/weather`)
   - Enter a GitHub user profile URL (e.g. `github.com/aniqatc`)
   - Click `Random` button to discover a random popular repository that has over 5000 stars
2. **View repository details**:
   - Repository information and statistics
   - Language breakdown with percentage bars
   - Hover over the language bars for additional stats
3. **Export card**:
   - Click "`Download .png`" to download the repository card
   - Card includes all the visible repository information