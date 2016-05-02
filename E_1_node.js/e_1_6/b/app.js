//gör create readstream här, hade glömt det :)


var fs = require('fs');
var http = require('http');

http.get('http://mardby.se/AJK15G/lorem_text_long.php', function(res){
    var data = '';
    var dataArray = [];

    res.on('data', function(res){
        data += res;
        dataArray.push(res);
        });
    res.on('end', function(){
        console.log('Antal bitar: ' + dataArray.length);
        for (i = 0; i < dataArray.length; i++) {
        console.log('antal tecken i bit nr ' +  i + ': ' + dataArray[i].length);
        }
        var total = 0;
        for (var i = 0, n = dataArray.length; i < n; ++i){
            total += dataArray[i].length;
            console.log('summan av alla elements längder: ' + total);
        }
    });

 });

