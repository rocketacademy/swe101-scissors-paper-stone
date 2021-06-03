// constants
var NUMBER_OF_CHOICES = 3;
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSED_SCISSORS = "reversed scissors";
var REVERSED_PAPER = "reversed paper";
var REVERSED_STONE = "reversed stone";

var generateRandomChoice = function () {
  var randomDecimal = Math.random() * NUMBER_OF_CHOICES; // possible values = 0,1,2
  var randomInteger = Math.floor(randomDecimal) + 1; // possible values = 1,2,3
  var randomChoice = SCISSORS;
  if (randomInteger == 1) {
    randomChoice = PAPER;
  }
  if (randomInteger == 2) {
    randomChoice = STONE;
  }
  return randomChoice;
};

var main = function (userChoice) {
  var progChoice = generateRandomChoice();
  var gameResult = `The program chose ${progChoice}.<br>
  You chose ${userChoice}.<br><br>
  Beginner's luck - you somehow managed to win!<br>
  Type "${SCISSORS}", "${PAPER}", "${STONE}" or their reversed versions to play again and I'm sure you won't be so lucky this time round.`;
  if (
    !(
      userChoice == SCISSORS ||
      userChoice == PAPER ||
      userChoice == STONE ||
      userChoice == REVERSED_SCISSORS ||
      userChoice == REVERSED_PAPER ||
      userChoice == REVERSED_STONE
    )
  ) {
    gameResult = `Please choose between any of the following: "${SCISSORS}", "${PAPER}" or "${STONE}". <br>
    You can also add "reversed " to the beginning of any those three guesses to try your hand at Reversed Mode!`;
  }
  if (userChoice == progChoice || userChoice == "reversed " + progChoice) {
    gameResult = `You and the program both chose ${userChoice}.<br><br>
    Oops, it's a draw!<br>
    Type "${SCISSORS}", "${PAPER}", "${STONE}" or their reversed versions to play again. I'm sure you'll win the next time!.`;
  }
  if (
    (userChoice == SCISSORS && progChoice == STONE) ||
    (userChoice == PAPER && progChoice == SCISSORS) ||
    (userChoice == STONE && progChoice == PAPER) ||
    (userChoice == REVERSED_SCISSORS && progChoice == PAPER) ||
    (userChoice == REVERSED_PAPER && progChoice == STONE) ||
    (userChoice == REVERSED_STONE && progChoice == SCISSORS)
  ) {
    gameResult = `The program chose ${progChoice}.<br>
    You chose ${userChoice}.<br><br>  
    Shucks, you lost!<br>
    Give up? Or type "${SCISSORS}", "${PAPER}", "${STONE}" or their reversed versions to play again.`;
  }
  return gameResult;
};
