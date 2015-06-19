ws = new WebSocket('ws://localhost:8081');

ws.onopen	= function  () {
	console.log('connection open');
	console.log(arguments);
};

ws.onmessage = function  (event) {
	console.log('Message comes \n msg = ', event);
	var msgText = JSON.parse(event.data);
	$('#output-container').text += msgText;
};

ws.onclose	= function  () {
	console.log('connection close');
	console.log(arguments);
};

ws.onerror = function  () {
	console.log('error');
};

$('#send-button').click(function(event) {
	console.log(event);
	event.preventDefault();
	console.log('send msg');
	ws.send(JSON.stringify ({
        type: 'message',
        msgText: $('#input-text').text
    }));
	$('#input-text').text = '';
});

