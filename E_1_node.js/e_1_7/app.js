var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  fs.readFile('textFile.txt', "utf-8", function(error, data) {
    response.end(data);
    }); 
});
server.listen(8080);
console.log('server running at 8080'); 
  

  