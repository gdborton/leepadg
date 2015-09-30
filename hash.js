module.exports = function(message) {
  var hash = 7;
  var letters = "acdegilmnoprstuw";
  for (var iterator = 0; iterator < message.length; iterator++) {
    hash = (hash * 37 + letters.indexOf(message[iterator]));
  }

  return hash;
};
