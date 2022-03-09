const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hi Rauqoz!');
});

app.get('/off', (req, res) => {
	process.kill(process.pid, 'SIGTERM');
	res.send('Off');
});

const server = app.listen(3000, () => console.log('Server ready'));

process.on('SIGTERM', () => {
	server.close(() => {
		console.log('Process terminated');
	});
});
