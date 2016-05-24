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


function splitString(stringToSplit, separator){
    var wordArray = stringToSplit.split(separator);
    var newArray = wordArray.shift() + ' ' + wordArray.pop();
    var result = newArray.split(separator);

    if (result[1] === 'undefined') {
        result[1] = '';
        console.log(result);
    }
    else {
        console.log(result);
    }
    module.exports.wordArray = wordArray;
    module.exports.newArray = newArray;
    module.exports.result = result;
}
splitString('Hej på dig', ' ');

module.exports.splitString = splitString;

exports.stringConverter = function(string){
var result =
string.replace('å', 'a').replace('ä', 'a').replace('ö', 'o').replace('Å', 'A').replace('Ä', 'A').replace('Ö', 'O').toLowerCase();
console.log(result);
exports.result = result;
}
exports.stringConverter('Hej på Dig där i Öster');
