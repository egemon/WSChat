ws = new WebSocket('ws://localhost:8081');

ws.onopen	= function  () {
	console.log('connection open');
	console.log(arguments);
};

ws.onmessage = function  (event) {
	console.log('Message comes \n msg = ', event);
	$('#output-container').append('<p>' + event.data + '</p>');
};

ws.onclose	= function  () {
	console.log('connection close');
	console.log(arguments);
};

ws.onerror = function  () {
	console.log('error');
};

$('#send-button').click(function(event) {
	event.preventDefault();
	console.log('send msg');
	ws.send($('#input-text').val());
	$('#input-text').val('');
});
