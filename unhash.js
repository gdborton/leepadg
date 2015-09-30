var letters = "acdegilmnoprstuw";
module.exports = function(hashedValue) {
  return letters[hashedValue % 37];
};
