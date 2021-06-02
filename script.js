var compPaper = "The computer chose paper";
var compRock = "The computer chose rock";
var compScissors = "The computer chose scissors";
var main = function (input) {
  var compChoice = RandRoll();
  console.log(compChoice);
  var myOutputValue = "";
  var outcome = `You picked ${input}.` + "<br>" + `${compChoice}.`;
  var winOutcome = outcome + "<br>" + "You won! Play again?";
  var loseOutcome = outcome + "<br>" + "You lost! Play again?";
  var drawOutcome = outcome + "<br>" + "You drew! Play again?";
  if (
    (input == "scissors" && compChoice == compPaper) ||
    (input == "paper" && compChoice == compRock) ||
    (input == "rock" && compChoice == compScissors) ||
    (input == "reverse scissors" && compChoice == compRock) ||
    (input == "reverse paper" && compChoice == compScissors) ||
    (input == "reverse rock" && compChoice == compPaper)
  ) {
    myOutputValue = winOutcome;
  } else if (
    (input == "scissors" && compChoice == compRock) ||
    (input == "paper" && compChoice == compScissors) ||
    (input == "rock" && compChoice == compPaper) ||
    (input == "reverse scissors" && compChoice == compPaper) ||
    (input == "reverse paper" && compChoice == compRock) ||
    (input == "reverse rock" && compChoice == compScissors)
  ) {
    myOutputValue = loseOutcome;
  } else if (
    (input == "scissors" && compChoice == compScissors) ||
    (input == "paper" && compChoice == compPaper) ||
    (input == "rock" && compChoice == compRock) ||
    (input == "reverse scissors" && compChoice == compScissors) ||
    (input == "reverse paper" && compChoice == compPaper) ||
    (input == "reverse rock" && compChoice == compRock)
  ) {
    myOutputValue = drawOutcome;
  } else {
    myOutputValue =
      "Invalid input! Please only enter either rock, paper or scissors(small caps). To play reverse mode, you can enter reverse in front of your choice.";
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
