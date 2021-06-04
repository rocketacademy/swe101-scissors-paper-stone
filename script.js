// Define constants to use in multiple functions to avoid bugs due to typos.
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

var main = function (input) {
  var comOutput = generateComputerMove();

  //draw when choose same object
  if (input == comOutput) {
    return `The computer chose ${comOutput} <br> You chose ${input} <br> You draw! <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }

  //scissors beats paper, paper beats stone, and stone beats scissors.
  //computer wins user loses
  if (
    (comOutput == SCISSORS && input == PAPER) ||
    (comOutput == PAPER && input == STONE) ||
    (comOutput == STONE && input == SCISSORS)
  ) {
    return `The computer chose ${comOutput}. <br> You chose ${input}. <br> You lose! Bummer! :( <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }
  // computer loses user wins
  if (
    (input == SCISSORS && comOutput == PAPER) ||
    (input == PAPER && comOutput == STONE) ||
    (input == STONE && comOutput == SCISSORS)
  ) {
    return `The computer chose ${comOutput}. <br> You chose ${input}. <br> You win!!! Hurray! :) <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  }

  // input validation
  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    return `There are only 3 input options: "scissors", "paper" or "stone". <br> Please try again with any of the three options.`;
  }
};

// Generate a random integer from 1 to 3 inclusive; 3 because only scissors, paper or stone
var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// this functions outputs a random move by the computer
var generateComputerMove = function () {
  var computerMove = generateRandomInteger();
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
