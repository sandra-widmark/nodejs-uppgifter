require('http').createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    var stream = require('fs').createReadStream('index.html');
    stream.on('open', function(){
        stream.pipe(response);
    });
    stream.on('error', function(err){
        response.end(err);
        console.log('something went wrong!');
    });
}).listen(8080);
