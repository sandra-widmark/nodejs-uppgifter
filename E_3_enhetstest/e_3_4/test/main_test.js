var expect = require('chai').expect;

describe('Convert string', function(){
    var app = require('../app.js');

    it('should return a string without spaces', function(){
        expect(app.result).to.not.contain(' ');
    });

    it('should return an empty string if the string only contains one or several spaces', function(){
        app.convertString('  ');
        expect(app.result).to.equal('');
    });
});
