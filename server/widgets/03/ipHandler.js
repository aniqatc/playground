async function ipRouter(req, res, next) {
	let ip = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress;
	if (ip) {
		ip = ip.split(',')[0];
	}
	if (ip.startsWith('::ffff:')) {
		ip = ip.slice(7);
	}
	const browser = req.useragent.browser;
	const browserVersion = req.useragent.version;
	const os = req.useragent.os;
	const platform = req.useragent.platform;

	const locationAPI = `http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,lat,lon,timezone,isp,query`;
	const apiResponse = await fetch(locationAPI);
	const locationData = await apiResponse.json();

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

function getUserInfo(req, res) {
	if (req.userInfo) {
		res.json(req.userInfo);
	} else {
		res.status(500).send('Error in fetching user information.');
	}
}

module.exports = { ipRouter, getUserInfo };
