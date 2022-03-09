const http = require('http');
const port = 4000;
let songs = [];

const get_data_ = async (req) => {
	let temp;
	await req.on('data', (data) => {
		temp = JSON.parse(data);
	});
	return temp;
};

const server_listener_ = async (req, res) => {
	switch (req.url) {
		case '/song':
			if (req.method === 'POST') {
				await get_data_(req).then((data) => songs.push(data));
				res.end('song posted');
			} else {
				res.end(JSON.stringify(songs));
			}
			break;
		default:
			let pre = req.url.match(/\/song\/[0-9]+/) || undefined;
			if (pre != undefined) {
				let pre_split = pre[0].split('/');
				let code = pre_split[2];
				switch (req.method) {
					case 'GET':
						let temp_get = songs.find((e) => e.id == code) || 'no existe';
						res.end(JSON.stringify(temp_get));
						break;
					case 'PUT':
						await get_data_(req).then((data) => {
							songs.forEach((e) => {
								if (e.id == code) {
									e.name = data.name;
									e.artist = data.artist;
									e.released_during_covid = data.released_during_covid;
									e.duration = data.duration;
								}
							});
						});
						let temp_put = songs.find((e) => e.id == code) || 'no existe';
						res.end(JSON.stringify(temp_put));
						break;
					case 'DELETE':
						await get_data_(req).then((data) => {
							let search = songs.findIndex((e) => e.id == code);
							if (search >= 0) {
								songs.splice(search, 1);
							}
						});
						res.end(`eliminado ${code}`);
						break;
					default:
						res.writeHead(404);
						res.end('error');
						break;
				}
			} else {
				res.writeHead(404);
				res.end('error');
			}
			break;
	}
};

const server_on = http.createServer(server_listener_);

server_on.listen(port, () => {
	console.log('server on port', port);
});
