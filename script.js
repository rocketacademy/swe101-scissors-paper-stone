// Project 1: Scissors Paper Stone

// Define constants to use in multiple functions to avoid bugs due to typos.
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var numRolls = 0;
var numWins = 0;
var winPercent = "";
var winRecord = "";
var userName = "";
var gameMode = "waiting for username";
var mostRecentWinner = "";

var main = function (input) {
  if (gameMode == "waiting for username") {
    userName = input;
    gameMode = "normal";
    return `Hello ${userName}! You can start playing by entering "scissors", "paper" or "stone". `;
  } else {
    if (gameMode == "normal") {
      return spsGame(userName, input);
    }
    if (gameMode == "reverse") {
      return reversedSPSGame(userName, input);
    }
    if (gameMode == "korean") {
      return koreanSPSGame(userName, input);
    }
  }
};

// normal SPS game
var spsGame = function (userName, input) {
  if (input == "reverse") {
    gameMode = "reverse";
    return `The rules of the SPS game have been reversed`;
  } else if (input == "korean") {
    gameMode = "korean";
    return `The Korean SPS game will start now.`;
  }

  var comOutput = generateComOutput();
  var standardMessage = `${userName}, you chose ${input} <br> The computer chose ${comOutput} <br>`;
  var endMessage = `Now you can type "scissors", "paper" or "stone" to play another round!`;
  numRolls = numRolls + 1;

  //Computer and User draw when they choose the same object
  if (input == comOutput) {
    winRecord = `${numWins} out of ${numRolls}`;
    var ProgressMessage = generateProgressMessage(numWins, numRolls);

    return `${standardMessage} <br> You draw! <br> <br> So far ${userName}, you've been winning ${winRecord} turns. <br> <br> ${endMessage} ${ProgressMessage}`;
  }

  //scissors beats paper, paper beats stone, and stone beats scissors.

  //Computer wins and user loses
  if (
    (comOutput == SCISSORS && input == PAPER) ||
    (comOutput == PAPER && input == STONE) ||
    (comOutput == STONE && input == SCISSORS)
  ) {
    winRecord = `${numWins} out of ${numRolls}`;
    var ProgressMessage = generateProgressMessage(numWins, numRolls);

    return `${standardMessage} <br> You lost! Bummer! :( <br> <br> So far ${userName}, you've been winning ${winRecord} turns. <br> <br> ${endMessage}  ${ProgressMessage}`;
  }

  //Computer loses and user wins
  if (
    (input == SCISSORS && comOutput == PAPER) ||
    (input == PAPER && comOutput == STONE) ||
    (input == STONE && comOutput == SCISSORS)
  ) {
    numWins = numWins + 1;
    winRecord = `${numWins} out of ${numRolls}`;
    var ProgressMessage = generateProgressMessage(numWins, numRolls);

    return `${standardMessage} <br> You won!!! Hurray! :) <br> <br> So far ${userName}, you've been winning ${winRecord} turns. <br> <br> ${endMessage} ${ProgressMessage}`;
  }

  //Input validation
  if (!(input == SCISSORS || input == PAPER || input == STONE)) {
    return `There are only 3 input options: "scissors", "paper" or "stone". <br> Please try again with any of the three options.`;
  }
};

// reversed SPS game: rules reversed
var reversedSPSGame = function (userName, input) {
  var comOutput = generateComOutput();
  var standardMessage = `${userName}, you chose ${input} <br> The computer chose ${comOutput} <br>`;
  var endMessage = `Now you can type "scissors", "paper" or "stone" to play another round of reversed SPS!`;
  numRolls = numRolls + 1;

  //Computer and User draw when they choose the same object
  if (input == comOutput) {
    winRecord = `${numWins} out of ${numRolls}`;
    var ProgressMessage = generateProgressMessage(numWins, numRolls);

    return `${standardMessage} <br> You draw! <br> <br> So far ${userName}, you've been winning ${winRecord} turns. <br> <br> ${endMessage} ${ProgressMessage}`;
  }
  //reversed: scissors beat stone, stone beats paper, and paper beats scissors
  //Computer wins and user loses
  if (
    (comOutput == SCISSORS && input == STONE) ||
    (comOutput == PAPER && input == SCISSORS) ||
    (comOutput == STONE && input == PAPER)
  ) {
    winRecord = `${numWins} out of ${numRolls}`;
    var ProgressMessage = generateProgressMessage(numWins, numRolls);

    return `${standardMessage} <br> You lost! Bummer! :( <br> <br> So far ${userName}, you've been winning ${winRecord} turns. <br> <br> ${endMessage}  ${ProgressMessage}`;
  }

  //Computer loses and user wins
  if (
    (input == SCISSORS && comOutput == STONE) ||
    (input == PAPER && comOutput == SCISSORS) ||
    (input == STONE && comOutput == PAPER)
  ) {
    numWins = numWins + 1;
    winRecord = `${numWins} out of ${numRolls}`;
    var ProgressMessage = generateProgressMessage(numWins, numRolls);

    return `${standardMessage} <br> You won!!! Hurray! :) <br> <br> So far ${userName}, you've been winning ${winRecord} turns. <br> <br> ${endMessage} ${ProgressMessage}`;
  }

  //Input validation
  if (
    !(
      input == SCISSORS ||
      input == PAPER ||
      input == STONE ||
      input == "reverse"
    )
  ) {
    return `There are only 3 input options: "scissors", "paper" or "stone". <br> Please try again with any of the three options.`;
  }
};

// korean SPS game: records most recent winner
var koreanSPSGame = function (userName, input) {
  var comOutput = generateComOutput();
  var standardMessage = `${userName}, you chose ${input} <br> The computer chose ${comOutput} <br>`;
  var endMessage = `Now you can type "scissors", "paper" or "stone" to play another round!`;
  numRolls = numRolls + 1;

  //Computer and User draw when they choose the same object
  if (input == comOutput) {
    winRecord = `${numWins} out of ${numRolls}`;
    var ProgressMessage = generateProgressMessage(numWins, numRolls);

    return `${standardMessage} <br> You draw! <br> <br> So far ${userName}, you've been winning ${winRecord} turns. <br> <br> ${mostRecentWinner} is thus the ultimate winner!`;
  }

  //scissors beats paper, paper beats stone, and stone beats scissors.

  //Computer wins and user loses
  if (
    (comOutput == SCISSORS && input == PAPER) ||
    (comOutput == PAPER && input == STONE) ||
    (comOutput == STONE && input == SCISSORS)
  ) {
    winRecord = `${numWins} out of ${numRolls}`;
    var ProgressMessage = generateProgressMessage(numWins, numRolls);
    mostRecentWinner = "Computer";

    return `${standardMessage} <br> You lost! Bummer! :( <br> <br> So far ${userName}, you've been winning ${winRecord} turns. <br> <br> ${endMessage}  ${ProgressMessage}`;
  }

  //Computer loses and user wins
  if (
    (input == SCISSORS && comOutput == PAPER) ||
    (input == PAPER && comOutput == STONE) ||
    (input == STONE && comOutput == SCISSORS)
  ) {
    numWins = numWins + 1;
    winRecord = `${numWins} out of ${numRolls}`;
    var ProgressMessage = generateProgressMessage(numWins, numRolls);
    mostRecentWinner = userName;

    return `${standardMessage} <br> You won!!! Hurray! :) <br> <br> So far ${userName}, you've been winning ${winRecord} turns. <br> <br> ${endMessage} ${ProgressMessage}`;
  }

  //Input validation
  if (!(input == SCISSORS || input == PAPER || input == STONE)) {
    return `There are only 3 input options: "scissors", "paper" or "stone". <br> Please try again with any of the three options.`;
  }
};

//Generate a random integer from 1 to 3 inclusive; 3 because only scissors, paper or stone
var generateComOutput = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  console.log(randomInteger);
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

var generateProgressMessage = function (numWins, numRolls) {
  var winPercent = numWins / numRolls;
  console.log(winPercent);
  if (winPercent > 0.5) {
    return "Pretty good!";
  } else return "Keep trying!";
};
