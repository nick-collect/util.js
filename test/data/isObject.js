import isObject from '@/data/isObject';

var expect = require('chai').expect;

describe('isObject', function() {
  it('should be object', function() {
    expect(isObject({})).to.be.ok;
    expect(isObject(function(){})).to.be.ok;
  });

  it('should not object', function() {
    expect(isObject(null)).to.not.be.ok;
  });
});
