// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

// Adding Win-lost record for the life cycle of program 
var noOfLosses = 0;
var noOfWins = 0;
var noOfDraws = 0;
var noOfGames = 0;
var userName = '';
var mode = 'get username';

// Randomising computerChoice of rock/paper/scissors
var getComputerChoice = function () {
  var randomNumber = Math.random() * 3; // Getting a random number
  var randomChoice = Math.floor(randomNumber) + 1; // Making this a whole number
  if (randomChoice == 1) {
    return 'stone';
  }
  if (randomChoice == 2) {
    return 'scissors';
  }
  if (randomChoice == 3) {
    return 'paper'
  }
  return 'This is invalid' // I think this is not needed, but will not cause errors
};

var main = function (userChoice) {
  var myOutputValue = '';
  var computerChoice = getComputerChoice();
  console.log(computerChoice); // Edit
  var outcome = 'Sorry, you have entered an invalid option. Please input scissors, paper or stone.';

  if (mode == 'get username') {
    //set the name
    userName = userChoice;

    myOutputValue = 'Hello ' + userName;

    //switch the mode
    mode = 'game';
  } else if (mode == 'game') {
    // Add 1 total number of games.
    noOfGames += 1;

    // De-capitalise input
    var input = userChoice.toLowerCase();

    // Draw scenario
    if (input == computerChoice) {
      noOfDraws += 1;
      outcome = ' Its a draw ';
    }
    // Lose scenario
    if (input == 'stone' && computerChoice == 'paper' ||
      input == 'paper' && computerChoice == 'scissors' ||
      input == 'scissors' && computerChoice == 'stone') {
      noOfLosses += 1
      outcome = " You lose :( ";
    }

    // Win scenario
    if (input == 'stone' && computerChoice == 'scissors' ||
      input == 'scissors' && computerChoice == 'paper' ||
      input == 'paper' && computerChoice == 'stone') {
      noOfWins += 1;
      outcome = " You won!!!! ";
    }
    // myOutputValue = 'Number of wins = ' + noOfWins + ' Number of losses = ' + noOfLosses +
    //   ' Number of Draw = ' + '\r\n' + noOfDraws + ' Total number of games = ' + noOfGames + ' You chose ' + input +
    //   '. The computer chose ' + computerChoice + '. ' + outcome + ' please try again '

    myOutputValue =
      `Number of wins = ${noOfWins} <br/><br/><br/>
    Number of losses = ${noOfLosses} 
    Number of Draw = ${noOfDraws} 
    Total number of games = ${noOfGames}
    You chose ${input}.
    The computer chose ${computerChoice}.
    ${outcome} please try again`;
  }
  return (myOutputValue);
}



