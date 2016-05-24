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
