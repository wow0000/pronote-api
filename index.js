const pronote = require('./src/pronote');

/**
 * Fetch all information about an user.
 * @async
 * @param {string} username - Username.
 * @param {string} password - User's password.
 * @param {string} url - Pronote url
 * @param {string} cas - Authentication server
 */
function fetch(username, password, url, cas) {
	return pronote.fetch({username, password, url, cas, type: "fetch"});
}

/**
 * Get schools near a location
 * @async
 * @param {float/string} lat - latitude such as 45.3
 * @param {float/string} long - longitude
 * @return {object} json
 */
function geo(lat, long) {
	return new Promise((resolve, reject) => {
		const data = `data={"nomFonction":"geoLoc","lat":${lat.toString()},"long":${long.toString()}}`
		const options = {
			hostname: "www.index-education.com",
			port: 443,
			path: "/swie/geoloc.php",
			method: "POST",
			headers: {
				'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
				'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1",
				'Content-Length': data.length
			}
		}

		let incomingData = "";
		const request = https.request(options, function (resp) {
			resp.on('data', function (data) {
				incomingData += data;
			});
			resp.on("end", function () {
				resolve(JSON.parse(incomingData));
			})
		})

		request.write(data);
		request.end();

		request.on('error', (error) => {
			reject(error);
		})
	})
}

module.exports = {
	fetch,
	geo,
	pronote,
};
