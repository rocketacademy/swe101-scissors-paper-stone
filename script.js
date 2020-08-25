// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

// Adding Win-lost record for the life cycle of program 
  var noOfLosses = 0;
  var noOfWins = 0;
  var noOfDraws = 0;
  var noOfGames = 0;
  var userName = 'blank';

// Randomising computerChoice of rock/paper/scissors
  var getComputerChoice = function() {
    var randomNumber = Math.random() * 3; // Getting a random number
    var randomChoice = Math.floor(randomNumber) + 1; // Making this a whole number
    if (randomChoice == 1){
      return 'rock';
    }
    if (randomChoice == 2){
      return 'scissors';
    }
    if (randomChoice == 3){
      return 'paper'
    }
    return getComputerChoice
  };

var main = function (userChoice) {
  noOfGames += 1;
  var myOutputValue = 'hello world';
  var computerChoice = getComputerChoice();
  var outcome; 
   // Draw scenario
  if (userChoice == computerChoice) {
      noOfDraws += 1;
      outcome = ' Its a draw ';
    }
    // Lose scenario
  if (userChoice == 'rock' && computerChoice == 'paper' || 
      userChoice == 'paper' && computerChoice == 'scissors' || 
      userChoice == 'scissors' && computerChoice == 'rock') {
       noOfLosses += 1
       outcome = " You lose :( ";
      }

    // Win scenario
  if (userChoice == 'rock' && computerChoice == 'scissors' ||
     userChoice == 'scissors' && computerChoice == 'paper' ||
     userChoice == 'paper' && computerChoice == 'rock') {
       noOfWins += 1;
       outcome = " You won!!!! ";
     }
     myOutputValue = 'Number of wins = ' + noOfWins + ' Number of losses = ' + noOfLosses + 
     ' Number of Draw = ' + noOfDraws + ' Total number of games = ' + noOfGames + ' You chose ' + userChoice +
     '. The computer chose '  + computerChoice + '. ' + outcome + ' please try again '
    return (myOutputValue); }
  
  