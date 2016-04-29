var events = require('events');
var eventEmitter = new events.EventEmitter();

var shootGun = function(){
	console.log("bang bang!");
	eventEmitter.emit('dyingWish', "I'm hit!");
}

eventEmitter.on('pullTrigger', shootGun);
eventEmitter.on('dyingWish', function(message){
	console.log(message)
});

eventEmitter.emit('pullTrigger');




