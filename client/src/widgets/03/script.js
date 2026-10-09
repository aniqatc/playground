export async function initializeScript() {
  const response = await fetch(`${process.env.SERVER}/widget/user-ip-data/`);
  const data = await response.json();

  updateContent(data);
  updateMap(data);
}

function updateMap(data) {
  const widget = document.querySelector('#widget-03');
  const userMap = widget.querySelector('.user-map-img');
  const userMapParent = widget.querySelector('.map-box');
  // the theme button stores 'light' or 'dark', which match Mapbox's light-v11 / dark-v11 styles
  const theme = localStorage.getItem('theme') || 'outdoors';
  const lat = data?.locationData?.lat || '33.55';
  const lon = data?.locationData?.lon || '-117.77';
  const mapURL = `https://api.mapbox.com/styles/v1/mapbox/${theme}-v11/static/pin-s+e8762b(${lon},${lat})/${lon},${lat},11,0/640x320@2x?access_token=${process.env.MAPBOX_KEY}`;

  if (!mapURL.includes('undefined')) {
    userMap.addEventListener('load', () => userMapParent.classList.add('loaded'), { once: true });
    userMap.alt = `Map of your approximate location near ${data?.locationData?.city || 'you'}`;
    userMap.src = mapURL;
  }
}

function updateContent(data) {
  const widget = document.querySelector('#widget-03');
  const set = (selector, value) => {
    widget.querySelector(selector).textContent = value;
  };
  const location = data?.locationData || {};
  // a template string is always truthy, so build it first and fall back if parts are missing
  const browser = data?.browser ? `${data.browser} ${data.browserVersion || ''}`.trim() : '';

  set('.user-browser', browser || 'Citrus Explorer 8.0');
  set('.user-os', data?.os || 'OrangeOS');
  set('.user-ip', data?.ip || '192.168.OJ');
  set('.user-isp', location.isp || 'SunNet');
  set('.user-timezone', location.timezone || 'Orange Zone');
  set('.user-lat', location.lat || '33.55');
  set('.user-lon', location.lon || '-117.77');
  set('.user-city', location.city || 'Orangetown');
  set('.user-region', location.regionName || 'Valley of Oranges');
  set('.user-country', location.country || 'Orange Republic');
  set('.user-platform', data?.platform || 'OrangePad');
}
