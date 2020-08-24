// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars
// scissors paper stone game: user (input) vs. computer (random selector) -> define rules.
// win-loss record: game state, track and output wins and losses -> output win percentage
// user name: first input = store username -> default page (HTML), instructions to input username
// -> after username input, initialize game, display message to start "input Scissors..."
// input validation: limiting inputs to only 3 options

// random "computer" selector
var computerSPS = function () {
  // randomizer 1-3
  var randomThree = (Math.random() * 3) + 1;
  // remove decimal
  var randomSelector = Math.floor(randomThree);
  // selector
  if (randomSelector == 1) {
    return 'scissors';
  }
  if (randomSelector == 2) {
    return 'paper';
  }
  if (randomSelector == 3) {
    return 'stone';
  }
};

var main = function (input) {
  // defining the variables
  var userChoice = input;
  var computerChoice = computerSPS();
  var myOutputValue = 'xxx';
  // win conditions
  if (userChoice == 'scissors' && computerChoice == 'paper') {
    myOutputValue = 'You won!';
  }
  if (userChoice == 'paper' && computerChoice == 'stone') {
    myOutputValue = 'You won!';
  }
  if (userChoice == 'stone' && computerChoice == 'scissors') {
    myOutputValue = 'You won!';
  }
  // lose conditions
  if (userChoice == 'scissors' && computerChoice == 'stone') {
    myOutputValue = 'You lost!';
  }
  if (userChoice == 'paper' && computerChoice == 'scissors') {
    myOutputValue = 'You lost!';
  }
  if (userChoice == 'stone' && computerChoice == 'paper') {
    myOutputValue = 'You lost!';
  }
  return myOutputValue;
};
