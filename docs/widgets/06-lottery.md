#### Historical Lottery Search

[![HTML Badge](https://img.shields.io/badge/HTML-38C4DC)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-38C4DC)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-38C4DC)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-38C4DC)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-38C4DC)](https://github.com/aniqatc/playground)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-38C4DC)](https://github.com/aniqatc/playground)
[![AvoraTech Powerball Badge](https://img.shields.io/badge/AvoraTech%20Powerball%20API-38C4DC)](https://github.com/aniqatc/playground)
[![AvoraTech Megamillions Badge](https://img.shields.io/badge/AvoraTech%20Megamillions%20API-38C4DC)](https://github.com/aniqatc/playground)

**Relevant file(s)**: [/client/src/widgets/06/\*](../../client/src/widgets/06/), [/server/widgets/06/\*](../../server/widgets/06/)

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-06_v1.png"></a>

A lottery analysis tool that helps players analyze historical Powerball and Mega Millions drawings, featuring quick number generation, detailed match statistics, and visual indicators to easily spot winning combinations - all searchable across 20+ years of drawing history.

## Tech

- JavaScript/HTML/SCSS: Core technologies for building and styling the widget
- Node.js & Express.js: Backend technologies for managing lottery data, search operations and data transformations
- MongoDB: Document-based database for storing historical lottery drawing data for both games
- Node-cron: Scheduler for automated updates to minimize API requests

## Storage

MongoDB Collections:
- [`MegaMillionsModel`](../../server/widgets/06/models/megaMillionsModel.js): Stores historical Mega Millions drawings including numbers, mega ball, multiplier, and jackpot amounts to minimize API requests to the AvoraTech APIs
- [`PowerballModel`](../../server/widgets/06/models/powerballModel.js):  Stores historical Powerball drawings including numbers, power ball, multiplier, and jackpot amounts to minimize API requests to the AvoraTech APIs

## Features

- **Dual Game Support**: Toggle between Powerball and Megamillions games
- **Historical Search**: Search through years of drawing history for number matches
- **Match Analysis in `Matches` Tab**:
    - Perfect matches (include all numbers and special ball)
    - Partial Matches (3 or more numbers)
    - Color-coded number display showing matched versus unmatched numbers
    - Sorted results (by match count and by date)
- **Robust Error Handling**: Visual indications of invalid entries (duplicate numbers, empty inputs, numbers out-of-range)
- **Search Statistics in `Stats` Tab**:
    - Total drawings searched
    - Search period coverage
    - Largest jackpot in the dataset
    - Number frequency analysis for each searched number
    - Percentage value of how often a searched number appears in the drawings
- **Tooltip Game-Specific Details**: Provides drawing schedules, number range guidelines and link to official lottery site for each lottery game
- **Quick Pick Number Generator**: Quick pick provides random numbers that meet the guidelines of each respective game
- **Responsive Design & Dark Mode**: Adaptive layouts and theme support
- **Automated Updates**: Scheduled data refresh using node-cron

## Limitations

- To reduce the load on the website, only matches with 3 or more matching numbers are shown
- Data is limited to only two types of lottery games
- Data is updated periodically as opposed to daily

## Widget Architecture

### Frontend: [/client/src/widgets/06/\*](../../client/src/widgets/06/)

1. **Search Interface**: Inputs fields for main numbers, special ball value with clear indication of range for each respective game and clear visual cues for any errors
2. **Quick Pick**: Generates randomized numbers within the valid range for each game
3. **Results Display: Matches**: Match cards showing drawing details (matched vs unmatched numbers, jackpot value, multiplier value and description)
4. **Results Display: Stats**: Statistics dashboard with frequency information for each number, highest jackpot that includes the user-inputted numbers and number of drawings searched
5. **Switch Game Modes & Result Display Views**: Megamillions/Powerball game; Matches/Stats views

### Frontend Components

**Core Directory**:
- [`core/context.js`](/client/src/widgets/06/core/context.js): Initializes and manages DOM elements and shared widget state for consistent access
- [`core/data.js`](/client/src/widgets/06/core/data.js): Manages API calls to backend for match searches, statistics, and search range data
- [`core/displayMatches.js`](/client/src/widgets/06/core/displayMatches.js): Handles the rendering of match cards with color-coded numbers and match details
- [`core/displayStats.js`](/client/src/widgets/06/core/displayStats.js): Manages the statistics view showing search analysis and number frequencies
- [`core/handleReset.js`](/client/src/widgets/06/core/handleReset.js): Controls clearing input fields and resetting the widget state
- [`core/handleSearch.js`](/client/src/widgets/06/core/handleSearch.js): Validates input numbers and manages the search process
- [`core/handleTabs.js`](/client/src/widgets/06/core/handleTabs.js): Controls switching between Matches and Stats views
- [`core/inputAutocomplete.js`](/client/src/widgets/06/core/inputAutocomplete.js): Manages automatic focus switching between input fields for smooth number entry
- [`core/quickPickNumbers`](/client/src/widgets/06/core/quickPickNumbers.js): Generates random valid numbers for the selected game type
- [`core/switchGameMode.js`](/client/src/widgets/06/core/switchGameMode.js): Handles toggling between Powerball and Mega Millions games

**Root Files**:
- [`content.js`](/client/src/widgets/06/content.js): Defines base HTML structure and placeholder templates for the widget
- [`script.js`](/client/src/widgets/06/script.js): Entry point that initializes relevant components 
- [`style.scss`](/client/src/widgets/06/style.scss): Widget-specific styling including dark mode, responsive layouts, animations and different states

### Backend: [/server/widgets/06/\*](../../server/widgets/06/)

1. **Node-cron Job**: Scheduled task for a data refresh on the lottery data about once a month (but will change to weekly)
2. **Lottery Router**: API endpoint for data refresh
3. **Powerball & MegaMillion Routers**: API endpoints to retrieve data from the backend (matches, stats and search date ranges)
4. **Powerball & MegaMillion Helpers**: Helper class that holds functions that handle finding perfect/partial matches and calculating relevant statistics
5. **MongoDB/Mongoose Models**: Schemas for lottery data

### Backend Components

- [`/server.js`](/server.js): Initializes the Express.js server, handles API routing, and uses node-cron to refresh the historical lottery data (as new numbers are added weekly)

**Base Directory**:
- [`lotteryData.js`](/server/widgets/06/lotteryData.js): Base class for shared lottery data operations
- [`lotteryRouter.js`](/server/widgets/06/lotteryRouter.js): Handles data refresh endpoint

**Megamillions Directory**:
- [`/megamillions/megaMillionData.js`](/server/widgets/06/megamillions/megaMillionData.js): Class that handles all Mega Millions data operations including fetching search date ranges, finding matches for user numbers, and calculating statistics like number frequencies and largest relevant jackpot
- [`/megamillions/megaMillionRouter.js`](/server/widgets/06/megamillions/megaMillionRouter.js): Express router handling three endpoints: getting search date range (`/range`), finding matches (`/matches`), and retrieving statistics (`/stats`) for Mega Millions drawings

**Powerball Directory**:
- [`/powerball/powerballData.js`](/server/widgets/06/powerball/powerballData.js): Class that mirrors the Mega Millions functionality but for Powerball data, with methods to fetch search ranges, find number matches, and calculate statistics specific to Powerball drawings
- [`/powerball/powerballRouter.js`](/server/widgets/06/powerball/powerballRouter.js): Express router providing the same three endpoints as Mega Millions but for Powerball data

**Models Directory**:
- [`/models/powerballModel.js`](/server/widgets/06/models/powerballModel.js): Mongoose schema for Powerball drawings defining the data structure for drawing date, numbers, power ball, multiplier, jackpot amounts, and related drawing information
- [`/models/megaMillionsModel.js`](/server/widgets/06/models/megaMillionsModel.js): Mongoose schema for Mega Millions drawings with fields for drawing date, numbers, mega ball, megaplier, jackpot amounts, and additional drawing details like video URLs and next drawing information

## How to Use

1. **Select game type**: Choose between Powerball or Mega Millions lottery

2. **Enter your numbers**:
    - **5 numbers + 1 special ball value** that must be within the indicated range
    - **Quick pick numbers**: Click the "quick pick" button in order to generate numbers that are within the required range for search

3. **Find matches**:
   - View matching drawings and details in the `Matches` tab
   - See search statistics in the `Stats` tab

4. **Review color-coded results**:
   - Matches numbers appear highlighted
   - Unmatched numbers appear faded (greyed out)
   - Perfect matches are shown first