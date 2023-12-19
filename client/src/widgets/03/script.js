export async function initializeScript() {
  const serverURL = process.env.SERVER;
  const key = process.env.MAPBOX_KEY;
  const response = await fetch(`${serverURL}/widget/user-data/`);
  const data = await response.json();
  console.log(data);

  const theme = "light";
  const lat = data.locationData.lat;
  const lon = data.locationData.lon;
  const mapURL = `https://api.mapbox.com/styles/v1/mapbox/${theme}-v11/static/pin-s+d27334(${lon},${lat})/${lon},${lat},13,0/300x300@2x?access_token=${key}`;

  const mapEl = document.querySelector("#widget-03 .map-img");
  mapEl.src = mapURL;
}
