var events = require('events');

var em = new events.EventEmitter();

em.on('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

