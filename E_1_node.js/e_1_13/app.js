require('http').createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'image/jpg'});
    var stream = require('fs').createReadStream('cat.jpg');
    stream.on('open', function(){
        stream.pipe(response);
    });
    stream.on('error', function(err){
        response.end(err);
    });
}).listen(8080);
