var expect = require('chai').expect;

describe('change string', function(){
    var app = require('../app.js');

    it('should return only lower case letters', function(){
        expect(app.result).to.equal(app.result.toLowerCase());
    });

    it('should never return letters ö,ä,ö', function(){
        expect(app.result).to.not.include('å', 'ä', 'ö');
    });
});
