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
