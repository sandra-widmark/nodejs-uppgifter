
var fs = require('fs');
var fileReadStream = fs.createReadStream('textFile.txt');
var data = "";
var dataArray = [];

fileReadStream.on('data', function(chunk) {
    data += chunk;
    dataArray.push(chunk);
});

fileReadStream.on('end', function(){
    console.log('Antal bitar: ' + dataArray.length);
    for (i = 0; i < dataArray.length; i++) {
    console.log('antal tecken i bit nr ' +  i + ': ' + dataArray[i].length);
    }
});
