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

- [/server.js](/server.js): Initializes the Express.js server, handles API routing, and uses node-cron to refresh the historical lottery data (as new numbers are added weekly)

**Base Directory**:
**Megamillions Directory**:
**Powerball Directory**:

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