#### Digital Footprint

[![HTML Badge](https://img.shields.io/badge/HTML-D27334)](https://github.com/aniqatc/playground)
[![SCSS Badge](https://img.shields.io/badge/SCSS-D27334)](https://github.com/aniqatc/playground)
[![JavaScript Badge](https://img.shields.io/badge/JavaScript-D27334)](https://github.com/aniqatc/playground)
[![Node Badge](https://img.shields.io/badge/Node-D27334)](https://github.com/aniqatc/playground)
[![Express Badge](https://img.shields.io/badge/Express-D27334)](https://github.com/aniqatc/playground)
[![MapBox Badge](https://img.shields.io/badge/MapBox-D27334)](https://www.mapbox.com/) 
[![IP API Badge](https://img.shields.io/badge/IP%20API-D27334)](https://ip-api.com/)

**Relevant file(s)**: [/client/src/widgets/03/\*](../../client/src/widgets/03/)

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
