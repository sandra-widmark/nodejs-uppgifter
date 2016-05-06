 var http = require('http');

function get(geoLocation) {
    var request = http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + geoLocation, function(response){
    var data = '';

    response.on('data', function(piece){
        data += piece;
    });
    response.on('end', function(){
        var result = JSON.parse(data);
        console.log('this is the latitude and longitude for ' + geoLocation + ':');
        console.log(result.results[0]['geometry']['location']);
    });
});
}
module.exports.get = get;
