//  set diceRoll to a maximum of 3 choices.
//  will be pairing each number to a choice
//  1. 'scissors'
//  2. 'paper'
//  3. 'stone'
var computerSpsRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var spsNumber = randomInteger + 1;
  return spsNumber;
};
// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars
var main = function (input) {
  var myOutputValue = 'hello world';
  var spsRoll = computerSpsRoll();
  console.log(spsRoll);

  if (computerSpsRoll == 1) {
    spsRoll = 'scissors';
  }

  if (computerSpsRoll == 2) {
    spsRoll = 'paper';
  }

  if (computerSpsRoll == 3) {
    spsRoll = 'stone';
  }

  var myOutputValue = 'you lost';

  return myOutputValue;
};
