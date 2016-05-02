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