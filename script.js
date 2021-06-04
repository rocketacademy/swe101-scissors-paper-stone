// Define constants to use in multiple functions to avoid bugs due to typos.
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var R_SCISSORS = "reversed scissors";
var R_PAPER = "reversed paper";
var R_STONE = "reversed stone";

var main = function (input) {
  var comOutput = generateComputerMove();

  //draw when choose same object
  if (
    input == comOutput ||
    (input == R_SCISSORS && comOutput == SCISSORS) ||
    (input == R_PAPER && comOutput == PAPER) ||
    (input == R_STONE && comOutput == STONE)
  ) {
    return `The computer chose ${comOutput} <br> You chose ${input} <br> You draw! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }

  //scissors beats paper, paper beats stone, and stone beats scissors.
  //reversed: scissors beat stone, stone beats paper, and paper beats scissors

  //computer wins user loses; first 3 normal SPS, last 3 reverse SPS
  if (
    (comOutput == SCISSORS && input == PAPER) ||
    (comOutput == PAPER && input == STONE) ||
    (comOutput == STONE && input == SCISSORS) ||
    (comOutput == SCISSORS && input == R_STONE) ||
    (comOutput == PAPER && input == R_SCISSORS) ||
    (comOutput == STONE && input == R_PAPER)
  ) {
    return `The computer chose ${comOutput}. <br> You chose ${input}. <br> You lose! Bummer! :( <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }

  // computer loses user wins; first 3 normal SPS, last 3 reveser SPS
  if (
    (input == SCISSORS && comOutput == PAPER) ||
    (input == PAPER && comOutput == STONE) ||
    (input == STONE && comOutput == SCISSORS) ||
    (input == R_SCISSORS && comOutput == STONE) ||
    (input == R_PAPER && comOutput == SCISSORS) ||
    (input == R_STONE && comOutput == PAPER)
  ) {
    return `The computer chose ${comOutput}. <br> You chose ${input}. <br> You win!!! Hurray! :) <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }

  // input validation
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

// Generate a random integer from 1 to 3 inclusive; 3 because only scissors, paper or stone
var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// This function outputs a random move by the computer
var generateComputerMove = function () {
  var computerMove = generateRandomInteger();
  return SCISSORS;
  if (computerMove == 1) {
    return SCISSORS;
  }
  if (computerMove == 2) {
    return PAPER;
  }
  if (computerMove == 3) {
    return STONE;
  }
};
