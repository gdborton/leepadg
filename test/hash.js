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

describe('both ways', function() {
  it('should hash and unhash to the same value.', function() {
    var value = 'l';
    expect(unhash(hash('l'))).to.equal(value);
  })
});
