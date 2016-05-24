exports.getLargestNumber = function(number1,number2) {
    var result = Math.max(number1, number2);
    console.log(result);
    exports.result = result;
}
exports.getLargestNumber(10,20);
