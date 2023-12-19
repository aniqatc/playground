export async function initializeScript() {
  const response = await fetch(`${process.env.SERVER}/widget/user-data/`);
  const data = await response.json();

  updateContent(data);
  updateMap(data);
}

function updateMap(data) {
  const userMap = document.querySelector("#widget-03 .user-map-img");
  const userMapParent = document.querySelector("#widget-03 .map-box");
  const userDataGrid = document.querySelector("#widget-03 .data-grid");
  const theme = localStorage.getItem("theme") || "outdoors";
  const lat = data.locationData.lat || "33.55";
  const lon = data.locationData.lon || "-117.77";
  const mapURL = `https://api.mapbox.com/styles/v1/mapbox/${theme}-v11/static/pin-s+d27334(${lon},${lat})/${lon},${lat},12,0/300x300@2x?access_token=${process.env.MAPBOX_KEY}`;

  if (!mapURL.includes("undefined")) {
    userDataGrid.style.gridTemplateColumns = "1fr 1fr";
    userMapParent.style.display = "block";
    userMap.src = mapURL;
  }
}

function updateContent(data) {
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

  userBrowser.textContent =
    `${data.browser} ${data.browserVersion}` || "Citrus Explorer 8.0";
  userOS.textContent = data.os || "OrangeOS";
  userIP.textContent = data.ip || "192.168.OJ";
  userISP.textContent = data.locationData.isp || "SunNet";
  userTimezone.textContent = data.locationData.timezone || "Orange Zone";
  userLat.textContent = data.locationData.lat || "33.55";
  userLon.textContent = data.locationData.lon || "-117.77";
  userCity.textContent = data.locationData.city || "Orangetown";
  userRegion.textContent = data.locationData.regionName || "Valley of Oranges";
  userCountry.textContent = data.locationData.country || "Orange Republic";
  userPlatform.textContent = data.platform || "OrangePad";
}
