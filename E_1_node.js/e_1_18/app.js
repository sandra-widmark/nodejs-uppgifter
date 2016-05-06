var myArgs = process.argv.slice(2);
var http = require('http');
var geoLocation = require('./geolocation');

var program = function(){
    if (process.argv.length <= 2){
        console.log("I am a program that wants arguments as city names");
    }
    else {
        console.log('myArgs: ', myArgs);

        myArgs.forEach(geoLocation.get);

        }
};
program();