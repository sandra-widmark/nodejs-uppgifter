var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, "OK", {'Content-Type': 'text/html'});
    fs.readFile('listItems.txt', "utf-8", function(error, data) {
        var fullBody = '';
        req.on('data', function(chunk) {
        fs.appendFile('listItems.txt', '<li><p>' + chunk + '</p></li>', function(err){
        console.log('data appended to file');
        });
        fullBody += '<li><p>' + chunk + '</p></li>';
    });
    req.on('end', function() {
      res.writeHead(200, "OK", {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>Add items to shopping list</h1>');
        res.write('<form method="POST"><input name= "Item" /><input type="submit"><enctype="multipart/form-data"></form>');
        res.write(data);
        res.write(fullBody);
        res.end();
    });
    });
}).listen(8080);
