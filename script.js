// Project 1: Scissors Paper Stone

// Define constants to use in multiple functions to avoid bugs due to typos.
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var R_SCISSORS = "reversed scissors";
var R_PAPER = "reversed paper";
var R_STONE = "reversed stone";
var numRolls = 0;
var numWins = 0;
var numComWins = 0;
var winningPercent = "";
var comWinningPercent = "";

var main = function (input) {
  var comOutput = generateComOutput();
  var standardMessage = `You chose ${input} <br> The computer chose ${comOutput} <br>`;
  var endMessage = `Now you can type "scissors", "paper" or "stone" to play another round!`;
  numRolls = numRolls + 1;

  //Computer and User draw when they choose the same object
  if (
    input == comOutput ||
    (input == R_SCISSORS && comOutput == SCISSORS) ||
    (input == R_PAPER && comOutput == PAPER) ||
    (input == R_STONE && comOutput == STONE)
  ) {
    winningPercent = (numWins / numRolls) * 100;
    comWinningPercent = (numComWins / numRolls) * 100;

    return `${standardMessage} You draw! <br> Your winning percentage: ${winningPercent}% <br> Computer's winning percentage: ${comWinningPercent}% <br> ${endMessage}`;
  }

  //scissors beats paper, paper beats stone, and stone beats scissors.
  //reversed: scissors beat stone, stone beats paper, and paper beats scissors

  //Computer wins and user loses; first 3 normal SPS, last 3 reversed SPS
  if (
    (comOutput == SCISSORS && input == PAPER) ||
    (comOutput == PAPER && input == STONE) ||
    (comOutput == STONE && input == SCISSORS) ||
    (comOutput == SCISSORS && input == R_STONE) ||
    (comOutput == PAPER && input == R_SCISSORS) ||
    (comOutput == STONE && input == R_PAPER)
  ) {
    numComWins = numComWins + 1;
    winningPercent = (numWins / numRolls) * 100;
    comWinningPercent = (numComWins / numRolls) * 100;

    return `${standardMessage} You lost! Bummer! :( <br> Your winning percentage: ${winningPercent}% <br> Computer's winning percentage: ${comWinningPercent}% <br> ${endMessage}`;
  }

  //Computer loses and user wins; first 3 normal SPS, last 3 reversed SPS
  if (
    (input == SCISSORS && comOutput == PAPER) ||
    (input == PAPER && comOutput == STONE) ||
    (input == STONE && comOutput == SCISSORS) ||
    (input == R_SCISSORS && comOutput == STONE) ||
    (input == R_PAPER && comOutput == SCISSORS) ||
    (input == R_STONE && comOutput == PAPER)
  ) {
    numWins = numWins + 1;
    winningPercent = (numWins / numRolls) * 100;
    comWinningPercent = (numComWins / numRolls) * 100;

    return `${standardMessage} You won!!! Hurray! :) <br> Your winning percentage: ${winningPercent}% <br> Computer's winning percentage: ${comWinningPercent}% <br> ${endMessage}`;
  }

  //Input validation
  if (
    !(
      input == SCISSORS ||
      input == PAPER ||
      input == STONE ||
      input == R_SCISSORS ||
      input == R_PAPER ||
      input == R_STONE
    )
  ) {
    return `There are only 3 input options: "scissors", "paper" or "stone". <br> Please try again with any of the three options.`;
  }
};

//Generate a random integer from 1 to 3 inclusive; 3 because only scissors, paper or stone
var generateComOutput = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;

  if (randomInteger == 1) {
    return SCISSORS;
  }

  if (randomInteger == 2) {
    return PAPER;
  }

  if (randomInteger == 3) {
    return STONE;
  }
};
