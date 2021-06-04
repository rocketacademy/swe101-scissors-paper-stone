var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";

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
  if (userInput == computerObject) {
    return "It's a draw";
  }
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

var main = function (input) {
  //set a var that holds the user's input
  var userObject = input;
  if (
    userObject != SCISSORS &&
    userObject != PAPER &&
    userObject != STONE &&
    userObject != REVERSED_SCISSORS &&
    userObject != REVERSED_PAPER &&
    userObject != REVERSED_STONE
  ) {
    return "Please key in scissors, paper or stone only";
  }
  //get the computer's object
  var computerObject = chooseSPS();
  // compare objects and obtain a winner
  var winner = determineWinner(userObject, computerObject);
  var userObjectIcon = getObjectIcon(userObject);
  var computerObjectIcon = getObjectIcon(computerObject);
  return `${winner}! <br>
  You chose ${userObject} ${userObjectIcon}. <br>
  The computer chose ${computerObject} ${computerObjectIcon}. <br>
  Now you can type 'scissors', 'paper' or 'stone' to play another round!`;
};

//user inputs "scissors" or "paper" or "stone"
// under var main function, user's input (scissors or paper or stone) can call upon 3 other vars/functions

//program outputs whether the user won, the program won, or draw.

//Rule 1: scissors beats paper
//Rule 2: paper beats stone
//Rule 3: stone beats scissors
//Rule 4: If both parties choose the same object, it's a draw.
