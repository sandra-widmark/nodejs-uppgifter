exports.romanize = function(num){
    var result = '';
    var numbers = [1,2,3,4,5,6,7,8,9,1,10];
    var roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    for(var i = 0; i < numbers.length; i++) {
        if(num === numbers[i]) {
            result += roman[i];
        }
    }
    console.log(result);
    exports.result = result;
}
exports.romanize(3);
