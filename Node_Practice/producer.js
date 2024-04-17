// producer.js
const EventEmitter = require('events');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Function to simulate data production
function produceData() {
    // Simulate data production
    const data = Math.random();

    // Emit a 'dataProduced' event with the produced data
    emitter.emit('dataProduced', data);
}

// Export the function to produce data
module.exports = { produceData };
