var expect = require('chai').expect;

describe('Roman numerals', function(){
    var app = require('../app.js');

    it('should return the corresponding roman number to the passed in number', function(){
        app.romanize(2);
        expect(app.result).to.equal('II');
        app.romanize(4);
        expect(app.result).to.equal('IV');
    });
});

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


describe('change string', function(){
    var app = require('../app.js');

    it('should return only lower case letters', function(){
        expect(app.result).to.equal(app.result.toLowerCase());
    });

    it('should never return letters ö,ä,ö', function(){
        expect(app.result).to.not.include('å', 'ä', 'ö');
    });
});


