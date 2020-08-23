// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

// Program to randomly generate scissors, paper or stone.
var getProgramChoice = function () {
  var randomFloat = Math.random() * 3;
  var randomInteger = Math.floor(randomFloat) + 1;
  var programPlay;
  if (randomInteger == 1) { programPlay = 'scissors'; }
  if (randomInteger == 2) { programPlay = 'paper'; }
  if (randomInteger == 3) { programPlay = 'stone'; }
  return programPlay;
};
// If User wins, output wins. If user lose, output lose. If user draw, output draw.
var main = function (input) {
  var result = 'please input 1 of the following options: scissors, paper, stone.';
  var programChoice = getProgramChoice();
  var myOutputValue;
  if (input == programChoice) {
    result = 'You draw.';
  }
  if ((input == 'scissors' && programChoice == 'paper')
    || (input == 'paper' && programChoice == 'stone')
    || (input == 'stone' && programChoice == 'scissors')) {
    result = 'You won!';
  }
  if ((input == 'scissors' && programChoice == 'stone')
    || (input == 'paper' && programChoice == 'scissors')
    || (input == 'stone' && programChoice == 'paper')) {
    result = 'You lose~';
  }
  myOutputValue = result + ' You chose ' + input + ' and computer chose ' + programChoice + '.';
  return myOutputValue;
};
