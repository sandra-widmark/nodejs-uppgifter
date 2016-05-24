var expect = require('chai').expect;

describe('split a string into array', function(){
    var splitString = require('../app.js');

    it('should return an array', function(){
        expect(splitString.wordArray).to.be.an('array');
    });

    it('should return an array of two elements, the first and last word', function(){
        expect(splitString.result).to.have.length.below(3);
    });

    it('should always return a string as last value (even if the last value is undefined)', function(){
        expect(splitString.result[1]).to.be.a('string');
    });
});
