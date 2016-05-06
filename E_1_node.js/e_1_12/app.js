var myArgs = process.argv.slice(2);
var http = require('http');

var program = function(){
    if (process.argv.length <= 2){
        console.log("I am a program that wants arguments");
    }
    else {
        console.log('myArgs: ', myArgs);
        var data = "";

        http.get('http://mardby.se/AJK15G/lorem_text.php', function(response){
            response.on('data', function(chunk){
                data += chunk;
            });
            response.on('end', function(){
                var dataArray = data.split(' ');
                dataArray.length = myArgs;
                for (i = 0; i < dataArray.length; i++) {
                console.log(dataArray[i]);
                }
            });
        });
    }
};
program();
