//Du ska nu skriva ett program som läser in textfilen bit för bit med en ström. 
//Varje bit som läses in ska
//lagras som ett element i en array. När inläsningen är klar ska programmet 
//skriva ut antal element i arrayen
//samt antalet tecken i varje element.
//filen är 33 754 byte stor

var fs = require('fs');
var fileReadStream = fs.createReadStream('textFile.txt', {start: 0, end: 500}); 
var data = "";

fileReadStream.on('data', (chunk) => {
 data += chunk;
 console.log('the amount of characters is ' + chunk.length); 
});

fileReadStream.on('end', () => {
console.log(data
	);
});