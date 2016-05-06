var https = require("https");
exports.getData = function(res, url) {
  var apiRequest = https.get(url, function(apiResponse) {
  var data = "";
  apiResponse.on('data', function (chunk) {
    data += chunk;
  });
  apiResponse.on('end', function() {
    var cityData = JSON.parse(data);
    if (cityData.status != "ZERO_RESULTS") {
      res.write(" – latitud: " + cityData.results[0].geometry.location.lat + "\n");
      res.write(" – longitud: " + cityData.results[0].geometry.location.lng);
      res.end();
    } else res.end("Hittade ingen stad med det namnet.");
  });
});
}