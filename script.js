// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

// Declare and initialise number of times Player and Program won and number of times they drew.
var timesUserWon = 0;
var timesProgramWon = 0;
var timesDrew = 0;
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
// Output win-loss-draw record.
var main = function (input) {
  var result = 'please input 1 of the following options: scissors, paper, stone.';
  var programChoice = getProgramChoice();
  var myOutputValue;
  if (input == programChoice) {
    result = 'you draw.';
    timesDrew += 1; // Add 1 to the total number of times Drew
  }
  if ((input == 'scissors' && programChoice == 'paper')
    || (input == 'paper' && programChoice == 'stone')
    || (input == 'stone' && programChoice == 'scissors')) {
    result = 'you won!';
    timesUserWon += 1; // Add 1 to the total number of times player won.
  }
  if ((input == 'scissors' && programChoice == 'stone')
    || (input == 'paper' && programChoice == 'scissors')
    || (input == 'stone' && programChoice == 'paper')) {
    result = 'you lose~';
    timesProgramWon += 1; // Add 1 to the total number of times Program won.
  }
  myOutputValue = result + ' You chose ' + input + ' and computer chose ' + programChoice
  + '. Win-Loss-Draw record: ' + timesUserWon + '-' + timesProgramWon + '-' + timesDrew;
  return myOutputValue;
};
