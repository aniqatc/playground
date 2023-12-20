export async function initializeScript() {
  const response = await fetch(`${process.env.SERVER}/widget/user-ip-data/`);
  const data = await response.json();
  saveToLocalStorage(data);

  let cachedData = localStorage.getItem("user-footprint");
  cachedData = JSON.parse(cachedData);

  if (cachedData) {
    updateContent(cachedData);
    updateMap(cachedData);
  } else {
    updateContent(data);
    updateMap(data);
  }
}

function saveToLocalStorage(data) {
  localStorage.setItem("user-footprint", JSON.stringify(data));
}

function updateMap(data) {
  const widget = document.querySelector("#widget-03");
  const userMap = widget.querySelector(".user-map-img");
  const userMapParent = widget.querySelector(".map-box");
  const userDataGrid = widget.querySelector(".data-grid");
  const theme = localStorage.getItem("theme") || "outdoors";
  const lat = data?.locationData.lat || "33.55";
  const lon = data?.locationData.lon || "-117.77";
  const mapURL = `https://api.mapbox.com/styles/v1/mapbox/${theme}-v11/static/pin-s+d27334(${lon},${lat})/${lon},${lat},12,0/300x300@2x?access_token=${process.env.MAPBOX_KEY}`;

  if (!mapURL.includes("undefined")) {
    userDataGrid.style.gridTemplateColumns = "1fr 1fr";
    userMapParent.style.display = "block";
    userMap.src = mapURL;
  }
}

function updateContent(data) {
  const widget = document.querySelector("#widget-03");
  const userCountry = widget.querySelector(".user-country");
  const userRegion = widget.querySelector(".user-region");
  const userCity = widget.querySelector(".user-city");
  const userLat = widget.querySelector(".user-lat");
  const userLon = widget.querySelector(".user-lon");
  const userBrowser = widget.querySelector(".user-browser");
  const userOS = widget.querySelector(".user-os");
  const userPlatform = widget.querySelector(".user-platform");
  const userTimezone = widget.querySelector(".user-timezone");
  const userISP = widget.querySelector(".user-isp");
  const userIP = widget.querySelector(".user-ip");
  const timezoneFormatted = data?.locationData?.timezone.replace("_", " ");

  userBrowser.textContent =
    `${data?.browser} ${data?.browserVersion}` || "Citrus Explorer 8.0";
  userOS.textContent = data?.os || "OrangeOS";
  userIP.textContent = data?.ip || "192.168.OJ";
  userISP.textContent = data?.locationData?.isp || "SunNet";
  userTimezone.textContent = timezoneFormatted || "Orange Zone";
  userLat.textContent = data?.locationData?.lat || "33.55";
  userLon.textContent = data?.locationData?.lon || "-117.77";
  userCity.textContent = data?.locationData?.city || "Orangetown";
  userRegion.textContent =
    data?.locationData?.regionName || "Valley of Oranges";
  userCountry.textContent = data?.locationData?.country || "Orange Republic";
  userPlatform.textContent = data?.platform || "OrangePad";
}
