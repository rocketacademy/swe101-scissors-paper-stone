// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars
var main = function (input) {
  var botOutput = decideOutput();
  var myOutputValue = "You lose!";
  if (input == botOutput) {
    myOutputValue = 'We draw!';
  } else if (input == "scissors" && myOutputValue == "paper" || input == "paper" && myOutputValue == "stone" || input == "stone" && myOutputValue == "scissors") {
    myOutputValue = "You win";
  }
  console.log(myOutputValue)
  return myOutputValue;
};

var diceRoll = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat);
  console.log(resultInteger)
  return resultInteger;
};

var decideOutput = function () {
  var randomDicenumber = diceRoll()
  var botOutput;
  if (randomDicenumber == 1) {
    botOutput = "scissors";
  } else if (randomDicenumber == 2) {
    botOutput = "paper";
  } else if (randomDicenumber == 0) {
    botOutput = "stone";
  }
  console.log(botOutput)
  return botOutput;
};