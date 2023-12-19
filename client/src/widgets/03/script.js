export async function initializeScript() {
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
  const theme = localStorage.getItem("theme");

  const response = await fetch(`${process.env.SERVER}/widget/user-data/`);
  const data = await response.json();
  const lat = data.locationData.lat;
  const lon = data.locationData.lon;
  const mapURL = `https://api.mapbox.com/styles/v1/mapbox/${theme}-v11/static/pin-s+d27334(${lon},${lat})/${lon},${lat},12,0/300x300@2x?access_token=${process.env.MAPBOX_KEY}`;

  userMap.src = mapURL;
  userBrowser.textContent =
    `${data.browser} ${data.browserVersion}` || "Mozilla";
  userOS.textContent = data.os || "OS X";
  userIP.textContent = data.ip || "0.0.0.0";
  userISP.textContent = data.locationData.isp || "Verizon";
  userTimezone.textContent = data.locationData.timezone || "America";
  userLat.textContent = lat || 10.013;
  userLon.textContent = lon || -30.019;
  userCity.textContent = data.locationData.city || "Queens";
  userRegion.textContent = data.locationData.regionName || "New York";
  userCountry.textContent = data.locationData.country || "America";
  userPlatform.textContent = data.platform || "Apple";
}
