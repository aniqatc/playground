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
  