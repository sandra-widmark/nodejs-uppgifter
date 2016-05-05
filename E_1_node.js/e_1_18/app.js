//1. Vi ska nu skriva ett program som tar emot argument ifrån konsollen
//2. Argumenten ska vara strängar med namn på städer som vi använder för att slå upp deras longitud
//och lattitud mha The Google Maps Geocoding API
//exempelurl: https://maps.googleapis.com/maps/api/geocode/json?address=Halmstad
//Om användaren inte skriver något argument så ska programmet förklara att det vill ha argument
//Om användaren skriver en eller flera argument så används alla för att slå upp deras longitud och
//lattitud och alla skrivs ut i konsollen
//Flytta get-requesten till en egen modul
//Skapa en app.js som använder modulen

var myArgs = process.argv.slice(2);

var program = function(){
    if (process.argv.length <= 2 || isNaN(parseFloat(myArgs))){
        console.log("Run the program by typing in arguments as numbers");
    }
    else {
        console.log('myArgs: ', myArgs);

        for (var i=2, p = process.argv.length; i < p; i++) {
            var num = process.argv[i];
            var dice = Math.floor(num*Math.random())+1;
            console.log('this is the result from a ' + num + ' sided dice roll: ', dice);
        }
    }
};
program();