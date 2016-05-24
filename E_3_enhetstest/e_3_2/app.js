exports.stringConverter = function(string){
var result =
string.replace('å', 'a').replace('ä', 'a').replace('ö', 'o').replace('Å', 'A').replace('Ä', 'A').replace('Ö', 'O').toLowerCase();
console.log(result);
exports.result = result;
}
exports.stringConverter('Hej på Dig där i Öster');