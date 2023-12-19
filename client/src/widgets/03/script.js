export async function initializeScript() {
  // Elements
  const userCountry = document.querySelector("#widget-03 .user-country");
  const userRegion = document.querySelector("#widget-03 .user-region");
  const userCity = document.querySelector("#widget-03 .user-city");
  const userLat = document.querySelector("#widget-03 .user-lat");
  const userLon = document.querySelector("#widget-03 .user-lon");
  const userBrowser = document.querySelector("#widget-03 .user-browser");
  const userOS = document.querySelector("#widget-03 .user-os");
  const userPlatform = document.querySelector("#widget-03 .user-platform");
  const userTimezone = document.querySelector("#widget-03 .user-timezone");
  const userISP = document.querySelector("#widget-03 .user-isp");
  const userIP = document.querySelector("#widget-03 .user-ip");
  const userMap = document.querySelector("#widget-03 .user-map-img");

  // Get the user agent data
  const serverURL = process.env.SERVER;
  const key = process.env.MAPBOX_KEY;
  const response = await fetch(`${serverURL}/widget/user-data/`);
  const data = await response.json();

  // get the map
  const theme = localStorage.getItem("theme");
  const lat = data.locationData.lat;
  const lon = data.locationData.lon;
  const mapURL = `https://api.mapbox.com/styles/v1/mapbox/${theme}-v11/static/pin-s+d27334(${lon},${lat})/${lon},${lat},12,0/300x300@2x?access_token=${key}`;

  // set the values
  userMap.src = mapURL;
  userBrowser.textContent = `${data.browser} ${data.browserVersion}`;
  userOS.textContent = data.os;
  userIP.textContent = data.ip;
  userISP.textContent = data.locationData.isp;
  userTimezone.textContent = data.locationData.timezone;
  userLat.textContent = lat;
  userLon.textContent = lon;
  userCity.textContent = data.locationData.city;
  userRegion.textContent = data.locationData.regionName;
  userCountry.textContent = data.locationData.country;
  userPlatform.textContent = data.platform;
}
