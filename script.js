var compPaper = "The computer chose paper";
var compRock = "The computer chose rock";
var compScissors = "The computer chose scissors";
var main = function (input) {
  var RandChoice = RandRoll();
  console.log(RandChoice);
  var myOutputValue = "";
  var outcome = `You picked ${input}.` + "<br>" + `${RandChoice}.`;
  var winOutcome = outcome + "<br>" + "You won! Play again?";
  var loseOutcome = outcome + "<br>" + "You lost! Play again?";
  var drawOutcome = outcome + "<br>" + "You drew! Play again?";
  if (
    (input == "scissors" && RandChoice == compPaper) ||
    (input == "paper" && RandChoice == compRock) ||
    (input == "rock" && RandChoice == compScissors)
  ) {
    myOutputValue = winOutcome;
  } else if (
    (input == "scissors" && RandChoice == compRock) ||
    (input == "paper" && RandChoice == compScissors) ||
    (input == "rock" && RandChoice == compPaper)
  ) {
    myOutputValue = loseOutcome;
  } else if (
    (input == "scissors" && RandChoice == compScissors) ||
    (input == "paper" && RandChoice == compPaper) ||
    (input == "rock" && RandChoice == compRock)
  ) {
    myOutputValue = drawOutcome;
  } else {
    myOutputValue =
      "Invalid input! Please only enter either rock, paper or scissors(small caps).";
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
