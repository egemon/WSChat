var WebSocketConstructor = require('ws');
var clients = [];
// console.log('WebSocketServer = ',WebSocketConstructor);

var	wss = new WebSocketConstructor.Server({port:8081});

console.log('wss.on = ',wss.on);
console.log('wss._events = ',wss._events);
	wss.on('connection', function(ws) {
		console.log('New Connection');
		clients.push(ws);

		ws.on('message', function(event) {
			console.log('Message come');
			var msgText = JSON.parse(event);
			// sendAll(msgText);
			ws.send(JSON.stringify({
			type:'message',
			msgText:msgText
		}));
		});

		ws.on('close', function(event) {
			console.log('socket closed');
		});
	});


function sendAll (msgText) {
	clients.forEach(function  (ws) {
		ws.send(JSON.stringify({
			type:'message',
			msgText:msgText
		}));
	});
}