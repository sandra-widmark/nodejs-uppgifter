var expect = require('chai').expect;

describe('Return array of letters', function(){
    var app = require('../app.js');

    it('should return an array', function(){
        expect(app.result).to.be.an('array');
    });

    it("should return an array with a given number of elements and the letter you pass in as the array's elements", function(){
        app.letterArray('a',4);
        expect(app.result).to.deep.equal(['a','a','a','a']);
    });
});
