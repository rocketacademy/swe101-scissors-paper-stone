var compPaper = "paper";
var compRock = "rock";
var compScissors = "scissors";
var main = function (input) {
  var RandChoice = RandRoll();
  console.log(RandChoice);
  var myOutputValue = "Wrong input! Please only input Scissors, Rock or Paper.";
  //1 is paper, 2 is rock, and 3 is scissors
  //I have set variables to the rolls by the function in order to improve readibility
  if (input == "scissors" && RandChoice == compPaper) {
    myOutputValue =
      "The computer chose paper." +
      "<br>" +
      "You chose scissors and therefore you have won!" +
      "<br>" +
      " You can type again to play again.";
  }
  if (input == "scissors" && RandChoice == compRock) {
    myOutputValue =
      "The computer chose rock." +
      "<br>" +
      "You chose scissors and therefore you have lost. :(" +
      "<br>" +
      "Try again?";
  }
  if (input == "scissors" && RandChoice == compScissors) {
    myOutputValue = "You both have chosen scissors." + "<br>" + "Its a draw!";
  }
  if (input == "paper" && RandChoice == compRock) {
    myOutputValue =
      "The computer chose rock." +
      "<br>" +
      "You chose paper and therefore you have won!" +
      "<br>" +
      "You can type again to play again.";
  }
  if (input == "paper" && RandChoice == compScissors) {
    myOutputValue =
      "The computer chose scissors." +
      "<br>" +
      "You chose paper and therefore you have lost. :(" +
      "<br>" +
      "Try again?";
  }
  if (input == "paper" && RandChoice == compPaper) {
    myOutputValue = "You both have chosen paper." + "<br>" + "Its a draw!";
  }
  if (input == "rock" && RandChoice == compScissors) {
    myOutputValue =
      "The computer chose scissors." +
      "<br>" +
      "You chose rock and therefore you have won!" +
      "<br>" +
      "You can type again to play again.";
  }
  if (input == "rock" && RandChoice == compRock) {
    myOutputValue = "You both have chosen rock." + "<br>" + "Its a draw!";
  }
  if (input == "rock" && RandChoice == compPaper) {
    myOutputValue =
      "The computer chose paper." +
      "<br>" +
      "You chose rock and therefore you have lost. :(" +
      "<br>" +
      "Try again?";
  }
  return myOutputValue;
};

var RandRoll = function () {
  var compOutcome;
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var RandNumber = randomInteger + 1;
  if (RandNumber == 1) {
    compOutcome = compPaper;
  } else if (RandNumber == 2) {
    compOutcome = compRock;
  } else {
    compOutcome = compScissors;
  }
  return compOutcome;
};
