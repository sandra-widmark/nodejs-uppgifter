var http = require('http');
var querystring = require('querystring');

http.createServer(function (req, res) {
  if(req.url === '/') {
    res.writeHead(200, "OK", {'Content-Type': 'text/html'});
    console.log(req.url, res.statusCode);
    var stream = require('fs').createReadStream("index.html", "utf");
      stream.on('data', function(chunk){
      res.write(chunk);
      res.end();
      });
    }
  else  {
    res.writeHead(302, {'Content-Type': 'text/plain'});
    console.log(res.statusCode + ' ' + req.method + " to " + req.url);
    var fullBody = '';
    var zipCodeData = "";
    req.on('data', function(chunk) {
    fullBody += chunk;
    http.get("http://yourmoneyisnowmymoney.com/api/zipcodes/?"+fullBody, function(response) {
      response.on('data', function(piece){
        zipCodeData += piece
      });
      response.on('end',function(){
        var result = JSON.parse(zipCodeData);
        console.log(result.results[0].address);
        res.write(result.results[0].address.toString('utf8'));
        res.end();
      });
    });

    });
    }
}).listen(8080);
