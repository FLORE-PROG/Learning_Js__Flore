const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();

const wss = new WebSocket.Server({ server });

// Event handler for when a WebSocket connection is established
wss.on('connection', ws => {
    console.log('Client connected');

    ws.on('message', message => {
        console.log(`Received message: ${message}`);
        ws.send(message);
    });

    ws.on('error', error => {
        console.error('WebSocket error:', error);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the HTTP server and listen on port 3000
server.listen(3000, () => {
    console.log('Server is listening on ws://localhost:3000');
});
