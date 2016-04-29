var fs = require('fs'); 

fs.writeFile('textFile.txt', 'Hello there!', function(error) {
	if(error) {
		return console.log(error);
	}
	console.log('The file was saved!'); 
}); 
