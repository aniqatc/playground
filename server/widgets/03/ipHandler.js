async function collectUserData(req, res, next) {
  let ip = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress;
  if (ip) {
    ip = ip.split(',')[0];
  }
  const browser = req.useragent.browser;
  const browserVersion = req.useragent.version;
  const os = req.useragent.os;
  const platform = req.useragent.platform;
  const locationData = await getLocationData(ip);

  req.userInfo = {
    ip,
    browser,
    browserVersion,
    os,
    platform,
    locationData,
  };

  next();
}

async function getLocationData(ip) {
  const locationAPI = `http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,lat,lon,timezone,isp,query`;
  const response = await fetch(locationAPI);
  const data = await response.json();
  return data;
}

function getUserInfo(req, res) {
  if (req.userInfo) {
    res.json(req.userInfo);
  }
}

module.exports = { collectUserData, getUserInfo };
