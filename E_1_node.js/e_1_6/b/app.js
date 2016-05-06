var http = require("http");
var request = http.get("http://mardby.se/AJK15G/lorem_text_long.php", function(response) {
  var data = "";
  var dataArray = [];
  response.on('data', function(chunk) {
    data += chunk;
     dataArray.push(chunk);
  });
  response.on('end', function() {
    console.log("Antal element: " + dataArray.length);
    for (i = 0; i < dataArray.length; i++) {
      console.log("Antal tecken i element nr " + i + ": " + dataArray[i].length);
    }
  })
});