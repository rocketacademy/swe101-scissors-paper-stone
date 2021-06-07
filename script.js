//set global variable for userName
var userName = "";

//set global variable for number of times computer won
var numComputerWins = 0;

//set global var for number of times user won
var numUserWins = 0;

//set global var for number of times user draws
var numUserDraws = 0;

var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";

/* ================================================================= HELPER FUNCTION ==============
===============================================
 */
//program to choose scissors, paper or stone randomly
var chooseSPS = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  if (diceNumber == 1) {
    return SCISSORS;
  }

  if (diceNumber == 2) {
    return PAPER;
  }

  if (diceNumber == 3) {
    return STONE;
  }
};

//Compare computer answer with user input
var determineWinner = function (userInput, computerObject) {
  // determine draw when user's input or reversed input same as computerObject
  if (
    userInput == computerObject ||
    (userInput == "reversed scissors" && computerObject == SCISSORS) ||
    (userInput == "reversed paper" && computerObject == PAPER) ||
    (userInput == "reversed stone" && computerObject == STONE)
  ) {
    return "It's a draw";
  }
  // determine if player has won using regular SPS and reverse SPS
  if (
    (userInput == SCISSORS && computerObject == PAPER) ||
    (userInput == PAPER && computerObject == STONE) ||
    (userInput == STONE && computerObject == SCISSORS) ||
    (userInput == REVERSED_SCISSORS && computerObject == STONE) ||
    (userInput == REVERSED_PAPER && computerObject == SCISSORS) ||
    (userInput == REVERSED_STONE && computerObject == PAPER)
  ) {
    return "User wins";
  }
  return "User loses";
};

var getObjectIcon = function (object) {
  if (object == SCISSORS || object == REVERSED_SCISSORS) {
    return "✂";
  }
  if (object == PAPER || object == REVERSED_PAPER) {
    return "📃";
  }
  if (object == STONE || object == REVERSED_STONE) {
    return "💎";
  }
};
/* =================================================================MAIN================================================================
 */
var main = function (input) {
  if (userName == "") {
    userName = input;
    return (
      "Welcome " +
      userName +
      " to the scissors paper stone game. Please key in scissors, paper or stone to play."
    );
  }
  // validate input
  if (
    input != SCISSORS &&
    input != PAPER &&
    input != STONE &&
    input != REVERSED_SCISSORS &&
    input != REVERSED_PAPER &&
    input != REVERSED_STONE
  ) {
    return "Please key in scissors, paper or stone only";
  }

  //set a var that holds the user's input
  var userObject = input;

  //get the computer's object
  var computerObject = chooseSPS();
  // compare objects and obtain a winner
  var winner = determineWinner(userObject, computerObject);
  if (winner == "User wins") {
    //count number of user wins
    numUserWins = numUserWins + 1;
  } else if (winner == "User loses") {
    //count number of computer wins
    numComputerWins = numComputerWins + 1;
  } else {
    //count number of draws
    numUserDraws = numUserDraws + 1;
  }
  //get matching icon for user's and computer's object
  var userObjectIcon = getObjectIcon(userObject);
  var computerObjectIcon = getObjectIcon(computerObject);
  // return output to user
  return `${winner}! <br>
  You chose ${userObject} ${userObjectIcon}. <br>
  The computer chose ${computerObject} ${computerObjectIcon}. <br> 
  ${userName}'s wins: ${numUserWins}, Losses: ${numComputerWins}, Draws: ${numUserDraws}
  <br>
  Now you can type 'scissors', 'paper' or 'stone' to play another round!`;
};

//user inputs "scissors" or "paper" or "stone"
// under var main function, user's input (scissors or paper or stone) can call upon 3 other vars/functions

//program outputs whether the user won, the program won, or draw.

//Rule 1: scissors beats paper
//Rule 2: paper beats stone
//Rule 3: stone beats scissors
//Rule 4: If both parties choose the same object, it's a draw.
