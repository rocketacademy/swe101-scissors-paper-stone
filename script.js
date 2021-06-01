var compPaper = "The computer chose paper";
var compRock = "The computer chose rock";
var compScissors = "The computer chose scissors";
var main = function (input) {
  var RandChoice = RandRoll();
  console.log(RandChoice);
  var myOutputValue = "Wrong input! Please only input scissors, rock or paper.";
  if (input == "scissors") {
    if (RandChoice == compPaper) {
      myOutputValue =
        compPaper +
        "<br>" +
        "You chose scissors and therefore you have won!" +
        "<br>" +
        " You can type again to play again.";
    } else if (RandChoice == compRock) {
      myOutputValue =
        compRock +
        "<br>" +
        "You chose scissors and therefore you have lost. :(" +
        "<br>" +
        "Try again?";
    } else {
      myOutputValue =
        "You both have chosen scissors." +
        "<br>" +
        "Its a draw!" +
        "<br>" +
        "Try again?";
    }
  }
  if (input == "paper") {
    if (RandChoice == compRock) {
      myOutputValue =
        compRock +
        "<br>" +
        "You chose paper and therefore you have won!" +
        "<br>" +
        "You can type again to play again.";
    } else if (RandChoice == compScissors) {
      myOutputValue =
        compScissors +
        "<br>" +
        "You chose paper and therefore you have lost. :(" +
        "<br>" +
        "Try again?";
    } else {
      myOutputValue =
        "You both have chosen paper." +
        "<br>" +
        "Its a draw!" +
        "<br>" +
        "Try again?";
    }
  }
  if (input == "rock") {
    if (RandChoice == compScissors) {
      myOutputValue =
        compScissors +
        "<br>" +
        "You chose rock and therefore you have won!" +
        "<br>" +
        "You can type again to play again.";
    } else if (RandChoice == compPaper) {
      myOutputValue =
        compPaper +
        "<br>" +
        "You chose rock and therefore you have lost. :(" +
        "<br>" +
        "Try again?";
    } else {
      myOutputValue =
        "You both have chosen rock." +
        "<br>" +
        "Its a draw!" +
        "<br>" +
        "Try again?";
    }
  }
  return myOutputValue;
};

var RandRoll = function () {
  var compOutcome;
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var RandNumber = randomInteger + 1;
  console.log(RandNumber);
  //1 is paper, 2 is rock, and 3 is scissors
  if (RandNumber == 1) {
    compOutcome = compPaper;
  } else if (RandNumber == 2) {
    compOutcome = compRock;
  } else {
    compOutcome = compScissors;
  }
  return compOutcome;
};
