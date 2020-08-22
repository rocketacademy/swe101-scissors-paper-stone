// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars
var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};

var diceRoll = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat);
  console.log(resultInteger)
  return resultInteger;
};