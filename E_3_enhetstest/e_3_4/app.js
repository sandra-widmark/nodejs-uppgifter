exports.convertString = function(string){
    var result = string.replace(/\s+/g,'');
    console.log(result)
    exports.result = result;
}
exports.convertString('hej jag heter sandra');
