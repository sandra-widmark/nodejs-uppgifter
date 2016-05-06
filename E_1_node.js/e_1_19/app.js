var http = require("http");
var querystring = require("querystring");
var getRequest = require('./geolocation');
var server = http.createServer(function(req, res){
  if (req.url === "/") {
    res.writeHead(303,  {'Location': 'index.html'});
    res.end();
  } else if (req.url === "/index.html") {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    var stream = require('fs').createReadStream("index.html");
    stream.pipe(res);
  }
  else if (req.url === "/form-page") {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    req.on("data", function(data) {
      var query = querystring.parse(data.toString());
      getRequest.getData(res, "https://maps.googleapis.com/maps/api/geocode/json?address=" + query.city);
    });
  }
  else {
    res.writeHead(404);
    res.write(res.statusMessage);
    res.end();
  }
});
server.listen(8080);