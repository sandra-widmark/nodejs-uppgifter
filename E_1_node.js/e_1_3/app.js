var http = require('http');
http.createServer(function(request, response) {
  response.writeHead(200, {'content-Type': 'text/plain'}); 
  response.end('hello world!'); 
}).listen(8080);
console.log('server running at localhost:8080'); 