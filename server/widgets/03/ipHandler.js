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

async function getUserMap(req, res) {
	const theme = req.query.theme;
	const lat = req.userInfo.locationData.lat;
	const lon = req.userInfo.locationData.lon;
	const mapURL = `https://api.mapbox.com/styles/v1/mapbox/${theme}-v11/static/pin-s+d27334(${lon},${lat})/${lon},${lat},13,0/300x300@2x?access_token=${process.env.MAPBOX_KEY}`;

	res.json({
		mapURL,
	});
}

module.exports = { collectUserData, getUserInfo, getUserMap };
