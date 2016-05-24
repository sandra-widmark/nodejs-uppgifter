var expect = require('chai').expect;

describe('return the largest numeric value', function(){
    var app = require('../app.js');

    it('should return a numeric value', function(){
        expect(app.result).to.be.a('number');
    });

    it('should return the largest of two numeric values', function(){
        app.getLargestNumber(3,5);
        expect(app.result).to.equal(5);
    });
});
