var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function (req, res) {
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      var stream = require('fs').createReadStream("index.html");
        stream.on('data', function(chunk){
        res.write(chunk);
        res.end();
    });

    if (req.method == 'POST') {
        console.log("[200] " + req.method + " to " + req.url);
        var fullBody = '';
        req.on('data', function(chunk) {
        fullBody += chunk;
    });

    req.on('end', function() {
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      var decodedBody = querystring.parse(fullBody);
      res.write(util.inspect(decodedBody));
      res.end();
      });
    }
}).listen(8080);


