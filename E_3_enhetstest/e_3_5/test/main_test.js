var expect = require('chai').expect;

describe('Return true or false for odd and even numbers', function(){
    var app = require('../app.js');

    it('should return true if the number is odd', function(){
        var output = app.isEven(5);
        expect(output).to.equal(true);
    });

    it('should return false if the number is even', function(){
        var output = app.isEven(4);
        expect(output).to.equal(false);
    });
});

