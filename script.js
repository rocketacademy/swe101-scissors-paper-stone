//computer generates random numbe
var PAPER = "paper";
var SCISSORS = "scissors";
var STONE = "stone";

var computerChoice = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber == 1) {git 
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
  if (input == PAPER && computerChoiceMade == PAPER) {
    return "The computer chose paper.<br>You chose paper.<br>You draw.";
  }
  if (input == PAPER && computerChoiceMade == STONE) {
    return "The computer chose stone.<br>You chose paper.<br>You win.";
  }
  if (input == PAPER && computerChoiceMade == SCISSORS) {
    return "The computer chose scissors.<br>You chose paper.<br>You lose.";
  }
  if (input == STONE && computerChoiceMade == PAPER) {
    return "The computer chose paper.<br>You chose stone.<br>You draw.";
  }
  if (input == STONE && computerChoiceMade == SCISSORS) {
    return "The computer chose scissors.<br>You chose stone.<br>You win.";
  }
  if (input == STONE && computerChoiceMade == STONE) {
    return "The computer chose stone.<br>You chose stone.<br>You draw.";
  }
  if (input == SCISSORS && computerChoiceMade == PAPER) {
    return "The computer chose paper.<br>You chose scissors.<br>You win.";
  }
  if (input == SCISSORS && computerChoiceMade == STONE) {
    return "The computer chose stone.<br>You chose scissors.<br>You lose.";
  }
  if (input == SCISSORS && computerChoiceMade == SCISSORS) {
    return "The computer chose scissors.<br>You chose scissors.<br>You draw.";
  }
  return myOutputValue;
};
