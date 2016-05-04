//1. Skriv en server som i roten visar ett formulär där användaren kan fylla i ett postnummer
//2. När användaren klickar på Send-knappen så skickar servern en get-request för att slå upp
//postorten för postnumret. Du kan utgå ifrån koden i postnummer.js (modul) om du vill eller gå
//direkt till http://www.opendata.se/2010/09/svenska-postnummer-api.html för info om API:et
//3. Resultatet som vi får tillbaks ifrån API:et visas i webbläsaren


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
