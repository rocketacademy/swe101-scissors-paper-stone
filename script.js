// 1. define function for programme randomly choosing SPS
// if user chooses scissors AND programme chooses paper -> user wins
// if user chooses paper AND programme chooses stone -> user wins
// if user chooses stone AND programme chooses scissors -> user wins
// if user AND programme chooses same -> draw
// input validation: if user chooses NOT SPS -> text output
// comment
// 1. define function for programme randomly choosing SPS
var generateSystemNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomSystemNumber = randomInteger + 1;
  return randomSystemNumber;
};

var generateSystemChoice = function () {
  var systemNumber = generateSystemNumber();
  if (systemNumber == 1) {
    return "scissors";
  }
  if (systemNumber == 2) {
    return "paper";
  }
  if (systemNumber == 3) {
    return "stone";
  }
};

var main = function (input) {
  var systemChoice = generateSystemChoice();
  var myOutputValue =
    "You lose! <br><br> The system chose " + systemChoice + ".";

  // condition debugging
  console.log("user choice");
  console.log(input);
  console.log("system choice");
  console.log(systemChoice);
  console.log("user scissors system paper is win");
  console.log(input == "scissors" && systemChoice == "paper");
  console.log("user paper system stone is win");
  console.log(input == "paper" && systemChoice == "stone");
  console.log("user stone system scissors is win");
  console.log(input == "stone" && systemChoice == "scissors");
  console.log("user and system chose same");
  console.log(input == systemChoice);

  // if user chooses scissors AND programme chooses paper -> user wins
  // if user chooses paper AND programme chooses stone -> user wins
  // if user chooses stone AND programme chooses scissors -> user wins
  // check console - see if systemchoice == name instead
  if (
    (input == "scissors" && systemChoice == "paper") ||
    (input == "paper" && systemChoice == "stone") ||
    (input == "stone" && systemChoice == "scissors")
  ) {
    console.log("win!");
    myOutputValue = "You win! <br><br> The system chose " + systemChoice + ".";
  }
  // if user AND programme chooses same -> draw
  if (input == systemChoice) {
    console.log("draw!");
    myOutputValue = "You drew! <br><br> The system chose " + systemChoice + ".";
  }
  // input validation: if user chooses NOT SPS -> text output
  // output only shows when i hit submit with an empty field. doesnt work when i actually input something
  if (input == !("scissors" || "paper" || "stone")) {
    console.log("wrong input");
    myOutputValue =
      "There are only 3 input options: scissors, paper, stone. <br><br> Try again!";
  }
  return myOutputValue;
};
