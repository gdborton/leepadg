var chai = require('chai');
var expect = chai.expect;
var hash = require('../hash');
var unhash = require('../unhash');

describe('hash', function() {
  it('should return the correct value for the example message.', function() {
    expect(hash('leepadg')).to.equal(680131659347);
  });
});

describe('unhash', function() {
  it('should return the unhashed version of the example message.', function() {
    expect(unhash(680131659347)).to.equal('leepadg');
  });
});
