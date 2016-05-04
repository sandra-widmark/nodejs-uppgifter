var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function (req, res) {
  if(req.url === '/') {
    res.writeHead(200, "OK", {'Content-Type': 'text/html'});
    console.log(req.url, res.statusCode);
    var stream = require('fs').createReadStream("index.html");
      stream.on('data', function(chunk){
      res.write(chunk);
      res.end();
      });
    }
  else  {
    res.writeHead(302, {'Content-Type': 'text/html'});
    console.log(res.statusCode + ' ' + req.method + " to " + req.url);
    var fullBody = '';
    req.on('data', function(chunk) {
    fullBody += chunk;
    });
    req.on('end', function() {
      var decodedBody = querystring.parse(fullBody);
      res.write(util.inspect(decodedBody));
      res.end();
      });
    }
}).listen(8080);
