var expect = require('chai').expect;

describe('Prime number', function(){
    var app = require('../app.js');

    it('should return true if the given number is a prime number', function(){
        expect(app.isPrime(2)).to.be.true;
        expect(app.isPrime(13)).to.be.true;
        expect(app.isPrime(41)).to.be.true;
    });

    it("should return false if the given number is not a prime number", function(){
        expect(app.isPrime(6)).to.be.false;
        expect(app.isPrime(12)).to.be.false;
        expect(app.isPrime(38)).to.be.false;
    });
});
