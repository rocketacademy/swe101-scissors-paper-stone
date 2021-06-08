//computer generates random numbe
var PAPER = "paper";
var SCISSORS = "scissors";
var STONE = "stone";
var winCount = 0;
var totalCount = 0;
var loseCount = 0;
var drawCount = 0;
var userName = "";

var computerChoice = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber == 1) {
    return PAPER;
  }
  if (randomNumber == 2) {
    return SCISSORS;
  }
  if ((randomNumber = 3)) {
    return STONE;
  }
};

var main = function (input) {
  var myOutputValue = "Please enter a valid option: scissors, paper or stone.";
  var computerChoiceMade = computerChoice();
  if (!userName) {
    if (!input) {
      return "Please enter your username";
    }
    userName = input;
    return `Thanks ${userName} for entering your name. To start playing, please type "scissors" "paper" or "stone".`;
  }
  if (input == PAPER && computerChoiceMade == PAPER) {
    totalCount = totalCount + 1;
    drawCount = drawCount + 1;
    return (
      "The computer chose paper.<br>You chose paper.<br>You draw. You have won " +
      winCount +
      "/" +
      totalCount +
      " games."
    );
  }
  if (input == PAPER && computerChoiceMade == STONE) {
    winCount = winCount + 1;
    totalCount = totalCount + 1;
    return (
      "The computer chose stone.<br>You chose paper.<br>You win. You have won " +
      winCount +
      "/" +
      totalCount +
      " games."
    );
  }
  if (input == PAPER && computerChoiceMade == SCISSORS) {
    loseCount = loseCount + 1;
    totalCount = totalCount + 1;
    return (
      "The computer chose scissors.<br>You chose paper.<br>You lose. You have won " +
      winCount +
      "/" +
      totalCount +
      " games."
    );
  }
  if (input == STONE && computerChoiceMade == PAPER) {
    loseCount = loseCount + 1;
    totalCount = totalCount + 1;
    return (
      "The computer chose paper.<br>You chose stone.<br>You lose. You have won " +
      winCount +
      "/" +
      totalCount +
      " games."
    );
  }
  if (input == STONE && computerChoiceMade == SCISSORS) {
    winCount = winCount + 1;
    totalCount = totalCount + 1;
    return (
      "The computer chose scissors.<br>You chose stone.<br>You win. You have won " +
      winCount +
      "/" +
      totalCount +
      " games."
    );
  }
  if (input == STONE && computerChoiceMade == STONE) {
    totalCount = totalCount + 1;
    drawCount = drawCount + 1;
    return (
      "The computer chose stone.<br>You chose stone.<br>You draw. You have won " +
      winCount +
      "/" +
      totalCount +
      " games."
    );
  }
  if (input == SCISSORS && computerChoiceMade == PAPER) {
    winCount = winCount + 1;
    totalCount = totalCount + 1;
    return (
      "The computer chose paper.<br>You chose scissors.<br>You win. You have won " +
      winCount +
      "/" +
      totalCount +
      " games."
    );
  }
  if (input == SCISSORS && computerChoiceMade == STONE) {
    loseCount = loseCount + 1;
    totalCount = totalCount + 1;
    return (
      "The computer chose stone.<br>You chose scissors.<br>You lose. You have won " +
      winCount +
      "/" +
      totalCount +
      " games."
    );
  }
  if (input == SCISSORS && computerChoiceMade == SCISSORS) {
    totalCount = totalCount + 1;
    drawCount = drawCount + 1;
    return (
      "The computer chose scissors.<br>You chose scissors.<br>You draw. You have won " +
      winCount +
      "/" +
      totalCount +
      " games."
    );
  }
  return myOutputValue;
};
