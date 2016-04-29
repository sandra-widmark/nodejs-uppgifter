var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
	fs.readFile('textFile.txt', "utf-8", function(error, data) {
 	var array = data.split(",");
 	response.end(array[Math.floor(Math.random()*array.length)]);
    }); 
});
server.listen(8080);
console.log('server running at 8080'); 