var expect = require('chai').expect;

describe('Pythagorean triple', function(){
    var app = require('../app.js');

    it('should return true if the values are equal to a pythagorean triple', function(){
        expect(app.numberTriple(3,4,5)).to.be.true;
        expect(app.numberTriple(6,8,10)).to.be.true;

    });

    it("should return false if the values are not equal to a pythagorean triple", function(){
        expect(app.numberTriple(6,8,9)).to.be.false;
        expect(app.numberTriple(7.4,8.8,9)).to.be.false;
    });
});
