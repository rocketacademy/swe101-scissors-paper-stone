// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars

var UserWinCounter = 0; //counter for user wins 
var CompWinCounter = 0; //counter for computer wins 
var currentGameMode = 'waiting for user name'; //waitin for user input 
var userName = ''; // Username

var main = function (input) {
  var myOutputValue = '';

  // if game mode is waiting for username 
  if (currentGameMode == 'waiting for user name') {
    //set userName
    userName = input;

    // Switch To GameMode 
    currentGameMode = "RPS Game"

    myOutputValue = "Hello " + userName + " Please enter paper, rock or sissors ";

  } else if (currentGameMode == "RPS Game") {
    // if game mode is RPS Game 

    var rpsGameOutput = rockPaperScissors()

    if (input == "rock" && rpsGameOutput == "scissors") {
      var myOutputValue = 'You Win'
      UserWinCounter += 1;

    } else if (input == "scissors" && rpsGameOutput == "paper") {
      var myOutputValue = 'You Win'
      UserWinCounter += 1;

    } else if (input == "paper" && rpsGameOutput == "rock") {
      var myOutputValue = 'You Win'
      UserWinCounter += 1;

    } else if (input == rpsGameOutput) {
      var myOutputValue = 'You Draw with the computer';

    } else if (input !== "paper" && input !== "rock" && input !== "scissors") {
      var myOutputValue = 'Input error, Please enter paper, rock or sissors ';

    } else {
      var myOutputValue = 'You Lose'
      CompWinCounter += 1;
    }
  }

  return myOutputValue + "<br> Your score is " + UserWinCounter + "<br> The computer score is " + CompWinCounter;
};

var rockPaperScissors = function () {
  var randomDecimal = Math.random() * 3; // returns a random number from 0 - 2 
  var randomInteger = Math.floor(randomDecimal); //Round down decimal to nearest integer 
  var rpsResult = randomInteger + 1; // 

  if (rpsResult == 1) {
    var rpsOutput = 'rock'; // if 1 = rock 
  }
  else if (rpsResult == 2) {
    var rpsOutput = 'paper'; // if 2 = paper 
  }
  else if (rpsResult == 3) { //maybe you could put else 
    var rpsOutput = 'scissors'; // if 3 = scissors  
  }
  return rpsOutput; // return the output of rock paper or scissors 
}
