var letters = "acdegilmnoprstuw";
var base = 7;
var prime = 37;

module.exports = {
  hash: function(message) {
    var hash = base;
    for (var index in message) {
      hash = (hash * prime + letters.indexOf(message[index]));
    }
    return hash;
  },
  unhash: function (hashedValue) {
    var result = '';
    while (hashedValue > base) {
      var index = hashedValue % prime;
      result = letters[index] + result;
      hashedValue = (hashedValue - index) / prime;
    }
    return result;
  }
};
