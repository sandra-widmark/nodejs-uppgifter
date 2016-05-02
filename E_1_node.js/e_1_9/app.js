var http = require('http');

http.get('http://mardby.se/AJK15G/lonrem_text.php', function(res){
    var data = '';
    if (res.statusCode === 200){
        res.on('data', function(chunk){
            data += chunk;
        });
        res.on('end', function(){
            console.log(data);
        });

    } else {
        console.log('det blev fel kompis ' + res.statusCode);
    }

});
