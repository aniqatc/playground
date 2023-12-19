async function ipHandler(req, res, next) {
	const ip = req.ip || req.connection.remoteAddress;
	const userAgent = req.headers['user-agent'];
	const locationAPIURL = `http://ip-api.com/json/24.48.0.1?fields=status,message,country,regionName,city,lat,lon,timezone,isp,query`;
	const response = await fetch(locationAPIURL);
	const data = await response.json();
	req.userInfo = {
		ip,
		userAgent,
		data,
	};
	console.log(ip);
	console.log(userAgent);
	console.log(data);
	next();
}

function sendIPData(req, res) {
	if (req.userInfo) {
		res.json(req.userInfo);
	} else {
		res.status(500).send('Error in fetching user information');
	}
}

module.exports = { ipHandler, sendIPData };
