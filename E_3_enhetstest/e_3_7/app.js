exports.numberTriple = function(x,y,z){
    if (Math.pow(x,2) + Math.pow(y,2) === Math.pow(z,2)) {
        return true;
    }
    else {
        return false;
    }
}
exports.numberTriple(3,4,5);
