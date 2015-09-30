var letters = "acdegilmnoprstuw";
module.exports = function (hashedValue) {
  var result = '';
  while (hashedValue > 7) {
    var index = hashedValue % 37;
    result = letters[index] + result;
    hashedValue = (hashedValue - index) / 37;
  }
  return result;
};
