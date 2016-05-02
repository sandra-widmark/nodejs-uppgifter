var http = require('http');

http.get('http://mardby.se/AJK15G/employees_json.php', function(res){
    var data = '';
    if (res.statusCode === 200){
        res.on('data', function(chunk){
            data += chunk;
        });
        res.on('end', function(){
            var objectData = JSON.parse(data);

            for(var i=0, l= objectData.employees.length; i < l; i++) {
                console.log(objectData.employees[i]['name']);
            }
        });

    } else {
        console.log('det blev fel kompis ' + res.statusCode);
    }

});

