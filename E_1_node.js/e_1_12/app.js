//Skriv ett program som skickar en get-request till http://mardby.se/AJK15G/lorem_text.php
//med en querystring numberOfWords vars värde hämtas ifrån terminalens argument.

//node getlorem.js 20 - skulle hämta 20 ord och skriva ut dem i consolen.

var qs = require('querystring');
var myArgs = process.argv.slice(2);
var http = require('http');
var url = require('url');

http.get('http://mardby.se/AJK15G/lorem_text.php', function(res){
    var data = '';
    res.on('data', function(chunk){
         data += chunk;
    });
    res.on('end', function(){
        var parsedUrl = url.parse(data, true);

        for (var i=2, p = process.argv.length; i < p; i++) {
            var num = process.argv[i];
            parsedUrl.query['numberOfWords'] = num;
            parsedUrl.query = qs.stringify(parsedUrl.query);
            console.log(url.format(parsedUrl), parsedUrl.query);
            }
    });

});


//gör om datan/texten till en array av ord.
//console-logga det antal element som skrivs i consolen.

//numberofwords är nu lika med alla ord. NumberOfWords ska vara lika med process.arg[i]


