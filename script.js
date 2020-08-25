// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars
// scissors paper stone game: user (input) vs. computer (random selector) -> define rules. DONE
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

// game state tracker
var userWins = 0;
var userLosses = 0;
var gamesPlayed = 0;
var winPercent = 0;

// user name function
var userName = 'nil';

var spsGame = function (userChoice) {
  var computerChoice = computerSPS();
  gamesPlayed = gamesPlayed + 1;
  // input validation - if not 'scissors', 'paper', or 'stone'.
  var returnText = 'You have made a wrong entry, you may only enter scissors, paper, or stone. Please check that you have spelt correctly';
  // win conditions
  if (userChoice == 'scissors' && computerChoice == 'paper') {
    userWins = userWins + 1;
    winPercent = (userWins / gamesPlayed) * 100;
    returnText = 'You chose ' + userChoice + '. You won! W: ' + userWins + ' L: ' + userLosses + ' Your win rate is: ' + winPercent + '%';
  }
  if (userChoice == 'paper' && computerChoice == 'stone') {
    userWins = userWins + 1;
    winPercent = (userWins / gamesPlayed) * 100;
    returnText = 'You chose ' + userChoice + '. You won! W: ' + userWins + ' L: ' + userLosses + ' Your win rate is: ' + winPercent + '%';
  }
  if (userChoice == 'stone' && computerChoice == 'scissors') {
    userWins = userWins + 1;
    winPercent = (userWins / gamesPlayed) * 100;
    returnText = 'You chose ' + userChoice + '. You won! W: ' + userWins + ' L: ' + userLosses + ' Your win rate is: ' + winPercent + '%';
  }
  // lose conditions
  if (userChoice == 'scissors' && computerChoice == 'stone') {
    userLosses = userLosses + 1;
    winPercent = (userWins / gamesPlayed) * 100;
    returnText = 'You chose ' + userChoice + '. You lost! W: ' + userWins + ' L: ' + userLosses + ' Your win rate is: ' + winPercent + '%';
  }
  if (userChoice == 'paper' && computerChoice == 'scissors') {
    userLosses = userLosses + 1;
    winPercent = (userWins / gamesPlayed) * 100;
    returnText = 'You chose ' + userChoice + '. You lost! W: ' + userWins + ' L: ' + userLosses + ' Your win rate is: ' + winPercent + '%';
  }
  if (userChoice == 'stone' && computerChoice == 'paper') {
    userLosses = userLosses + 1;
    winPercent = (userWins / gamesPlayed) * 100;
    returnText = 'You chose ' + userChoice + '. You lost! W: ' + userWins + ' L: ' + userLosses + ' Your win rate is: ' + winPercent + '%';
  }
  // draw conditions
  if (userChoice == 'scissors' && computerChoice == 'scissors') {
    winPercent = (userWins / gamesPlayed) * 100;
    returnText = 'You chose ' + userChoice + '. You tied! W: ' + userWins + ' L: ' + userLosses + ' Your win rate is: ' + winPercent + '%';
  }
  if (userChoice == 'paper' && computerChoice == 'paper') {
    winPercent = (userWins / gamesPlayed) * 100;
    returnText = 'You chose ' + userChoice + '. You tied! W: ' + userWins + ' L: ' + userLosses + ' Your win rate is: ' + winPercent + '%';
  }
  if (userChoice == 'stone' && computerChoice == 'stone') {
    winPercent = (userWins / gamesPlayed) * 100;
    returnText = 'You chose ' + userChoice + '. You tied! W: ' + userWins + ' L: ' + userLosses + ' Your win rate is: ' + winPercent + '%';
  }
  return returnText;
};

var main = function (input) {
  var myOutputValue = 'Waiting of user name input';
  if (userName == 'nil') {
    userName = input;
    myOutputValue = 'Welcome ' + userName + ', game initialized. Please pick "scissors," "paper," or "stone."';
  } else {
    myOutputValue = spsGame(input);
  }
  return myOutputValue;
};
