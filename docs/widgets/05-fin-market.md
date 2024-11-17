#### Financial Markets Monitor

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

**Relevant file(s)**: [/client/src/widgets/05/\*](../../client/src/widgets/05/), [/server/widgets/05/\*](../../server/widgets/05/)

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-05_v1-1.png"></a>
<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-05_v1-2.png"></a>

A financial markets widget that delivers real-time currency exchange rates against USD and stock market data through interactive 7-day price history graphs, color-coded trend indicators, and detailed metrics for market monitoring.

## Tech

- JavaScript/HTML/SCSS: Core technologies for building and styling the widget
- Node.js & Express.js: Backend technologies for managing market data and API integrations
- MongoDB: Document-based database for caching API responses and historical data
- APIs: Real-time market data integration (AlphaVantage, TwelveData, and OpenExchange)
- Node-cron: Scheduler for automated daily market updates to minimize API requests
- Chart.js: Interactive price history visualization with tooltips and responsive design

## Storage

MongoDB Collections:
- [`CompanyModel`](../../server/widgets/05/models/companyModel.js): Caches static company information including symbols, names, websites, and logos to minimize API requests
- [`StockModel`](../../server/widgets/05/models/stockModel.js) and [`StockWeeklyData`](../../server/widgets/05/models/stockWeeklyData.js): Stores daily market metrics and weekly updated 7-day price history for chart visualization
- [`ExchangeRateModel`](../../server/widgets/05/models/exchangeRateModel.js): Maintains currency exchange rates against USD (connected to [`CurrencyInfoModel`](../../server/widgets/05/models/currencyInfoModel.js) for currency metadata like full names and symbols)

## Features

- **Dual-Mode Interface**: Toggle between stocks and currency exchange rates
- **Real-Time Market Data**:
    - Stock metrics including price, volume, open/close values, and yearly highs/lows
    - Currency exchange rates against USD baseline
    - Dynamic percentage changes and price movements
- **Interactive Visualizations**:
    - 7-day trend graphs with interactive tooltips
    - Color-coded indicators (green for positive, red for negative trends)
- **Company Information**: Direct links to official websites and company logos for brand recognition
- **Smart Search**: Quick lookup with suggestions for both stocks and currencies
- **Responsive Design & Dark Mode**: Adaptive layouts and theme support
- **Automated Updates**: Scheduled data refresh using node-cron

## Limitations

- API rate limits require caching strategies; real-time user requests are replaced with scheduled daily updates
- Historical data limited to 7 days due to widget size constraints
- Weekly updates for historical price data
- Potential delays in market data based on API provider limitations

## Widget Architecture

Each component is designed with specific responsibilities to maintain code organization and scalability. The frontend focuses on user interaction and data visualization, while the backend handles data persistence, API integrations, and scheduled updates.

### Frontend: [/client/src/widgets/05/\*](../../client/src/widgets/05/)

1. **Market Display**: Handles the visualization of stock and currency data
2. **Search Interface**: Manages the user queries and provides filtered data
3. **Graph Generation**: Chart.js implementation for trend visualization
4. **Requests to Backend**: Sends requests to the backend for data and handles how data will be displayed
5. **State Management**: Tracks active view mode and selected items

### Frontend Components

**Core Directory**:
- **charts.js**: Configures Chart.js instances for rendering 7-day price history graphs with tooltips and custom styling
- **context.js**: Centralizes DOM element references and shared widget state for consistent access
- **currencyCard.js**: Handles currency card UI generation and real-time updates of exchange rates
- **data.js**: Manages API calls and returns JSON-formatted data for both stock and currency information
- **menu.js**: Controls navigation between stock/currency views and handles mode switching
- **stockCard.js**: Manages stock card UI rendering with real-time price updates and trends

**Root Files**:
- **content.js**: Defines base HTML structure and placeholder templates for the widget
- **script.js**: Entry point that initializes components and sets up event listeners
- **style.scss**: Widget-specific styling including dark mode, responsive layouts, animations and different states

### Backend: [/server/widgets/05/\*](../../server/widgets/05/)

1. **Node-cron Job**: Scheduled tasks for data updates once a day
2. **Market and Currency Routers**: API endpoints for data retrieval
3. **MongoDB/Mongoose Models**: Schemas for market data

### Backend Components

- [/server.js](/server.js): Initializes the Express.js server, handles API routing, and uses node-cron to refresh market data daily

**Currency Directory**:
- **currencyData.js**: Service layer for processing currency data from OpenExchange API
- **currencyRouter.js**: API endpoints for currency exchange rate operations

**Market Directory**:
- **marketData.js**: Service layer handling stock data from AlphaVantage, TwelveData and Google Favicon APIs
- **marketRouter.js**: API endpoints for stock market operations and historical data

**Models Directory**:
- **companyModel.js**: Schema for storing static company information (name, logo, website)
- **currencyInfoModel.js**: Schema for currency metadata and symbols
- **exchangeRateModel.js**: Schema for daily currency exchange rates against USD
- **stockModel.js**: Schema for daily stock metrics and real-time price data
- **stockWeeklyData.js**: Schema for 7-day historical price data used in trend charts

## How to Use

1. **View Market Data**: Toggle between stocks and currencies using the top navigation menu
2. **Search**: Use the search bar to find specific stocks or currencies which will be displayed at the top of all the cards
3. **Detailed Views**: Click details or the arrow at the top of the widget to expand or minimize stock and currency cards to reveal more details or charts
4. **Analyze Trends**: Hover over the chart to view detailed price points for a given stock
5. **Monitor Changes**: Track real-time updates with color-coded indicators