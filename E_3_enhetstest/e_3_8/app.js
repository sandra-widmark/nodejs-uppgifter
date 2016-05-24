exports.isPrime = function(value){
    if (value < 2 || value != Math.round(value)){
        return false;
    }
    var isPrime = true;

    for(var i=2; i <= Math.sqrt(value); i++) {
        if(value % i == 0) {
        isPrime = false;
        }
    }
    return isPrime;

}
exports.isPrime(5);
