const http = require('http');
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Function to simulate updating sports scores
function updateScores() {
    // Simulate updating sports scores
    const scores = {
        homeTeam: Math.floor(Math.random() * 5),
        awayTeam: Math.floor(Math.random() * 5)
    };

    // Emit a 'scoreUpdate' event with the updated scores
    eventEmitter.emit('scoreUpdate', scores);
}

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set headers for Server-Sent Events
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    // Listen for the 'scoreUpdate' event
    eventEmitter.on('scoreUpdate', (scores) => {
        // Send the updated scores to the client as a Server-Sent Event
        res.write(`data: ${JSON.stringify(scores)}\n\n`);
    });

    // Simulate sending updates to the client every 2 seconds
    const intervalId = setInterval(updateScores, 1000);

    // Clean up when the client disconnects
    req.on('close', () => {
        clearInterval(intervalId);
        console.log('Client disconnected');
    });
});

// Start the server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
