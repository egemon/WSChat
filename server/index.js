var WebSocketConstructor = require('ws');
var clients = [];

var	wss = new WebSocketConstructor.Server({port:8081});

	wss.on('connection', function(ws) {
		console.log('New Connection');
		clients.push(ws);

		ws.on('message', function(event) {
			console.log('Message come');
			wss.broadcast(event);
		});

		ws.on('close', function(event) {
			console.log('socket closed');
		});
	});


wss.broadcast = function (data) {
	wss.clients.forEach(function each(client) {
		client.send(data);
	});
};