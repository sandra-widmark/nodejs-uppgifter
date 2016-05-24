exports.letterArray = function(letter,number){
    var newArray = Array(number + 1).join(letter);
    var result = newArray.split('');
    console.log(result);
    exports.newArray = newArray;
    exports.result = result;
}
exports.letterArray('b', 10);
