#### Digital Footprint

[![HTML Badge](https://img.shields.io/badge/HTML-D27334)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-D27334)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-D27334)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-D27334)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-D27334)](https://github.com/aniqatc/playground)
[![MapBox Badge](https://img.shields.io/badge/MapBox-D27334)](https://www.mapbox.com/)
[![IP API Badge](https://img.shields.io/badge/IP%20API-D27334)](https://ip-api.com/)

**Relevant file(s)**: [/client/src/widgets/03/\*](../../client/src/widgets/03/), [/server/widgets/03/ipHandler.js](../../server/widgets/03/ipHandler.js)

A mini dashboard that presents a user's digital footprint, including geographic location (obtained using their IP), browser details, operating system, and ISP information, all underscored by a dynamic map visualization for a quick and elegant overview of their online presence.

<a href="https://playground.aniqa.dev/"><img src="/docs/screenshots/widget-03_v1.png"></a>

## Tech

- JavaScript/HTML/SCSS: Core technologies for building and styling the widget
- Node.js & Express.js: Backend technologies used for handling API requests
- Mapbox API: For generating dynamic maps based on geolocation data
- IP-API: For retrieving geolocation data from user IP addresses

## Storage

- For privacy reasons, I am not utilizing or saving the user's data in any way

## Features

- **User's personal digital footprint** information including browser, OS, IP address, ISP, and platform details
- **Geolocation mapping** using Mapbox to visually represent the user's location based on their IP address
- User's **approximate location is mapped** using IP-API after the IP address is retrieved from the backend
- **Error handling** by providing fictional default values if the data cannot be found
- **Different map themes** based on the website's main theme mode (light or dark or default)

## Limitations

Geolocation accuracy depends on the IP address, which may not always be precise

## Widget Architecture

**Frontend**: [/client/src/widgets/03/\*](../../client/src/widgets/03/)

1. Fetching user data: makes an API call to the backend to retrieve the user's IP address, browser details and geolocation data
2. Rendering information: updates the DOM with the user's IP address, geolocation, browser information, OS and ISP details
3. Map rendering: Uses MapBox to display the user's location based on geolocation data. Map theme changes based on the website's current theme mode (light or dark)

**Frontend Components**

- [`style.scss`](../../client/src/widgets/03/style.scss): Handles the styling for the widget, including the subtle animation that occurs when page is loaded
- [`content.js`](../../client/src/widgets/03/content.js): Contains the HTML structure for the widget (including placeholder values if there is an error getting the user's digital footprint)
- [`script.js`](../../client/src/widgets/03/script.js): Fetches user data from the backend API, updates the widget with the fetched data, construct a MapBox URL to render a map, and provides default values in case any data is missing

**Backend** [/server/widgets/03/ipHandler.js](../../server/widgets/03/ipHandler.js)

1. User data collection: collects the user's IP address, browser details, OS and platform using the `useragent` middleware. The IP is then used to request geolocation data from the IP-API library
2. API endpoint: provides an endpoint that the frontend can call to retrieve user data
3. Geolocation fetching: uses the IP address from the `useragent` middleware to get precise location data (country, region, city, latitude, longitude, and timezone) from the IP-API
4. IP processing: ensures that IP is formatted in the correct way

**Backend Components**

- [`server.js`](/server.js): Initializes the Express.js server & handles API routing
- [`ipHandler.js`](../../server/widgets/03/ipHandler.js):
  - `collectUserData()` => middleware that extracts the user's IP address, browser and platform details and then calls IP-API for geolocation data (`getLocationData(ip)`) which is bundled as object inside `userInfo`
  - `getLocationData(ip)` => helper function that fetches the geolocation data based on the user's IP addressi using IP-API
  - `getUserInfo()` => API endpoint that returns the user's collected data to the frontend (found inside the `userInfo` object)
