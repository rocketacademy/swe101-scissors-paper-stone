var Scissors = "scissors";
var Paper = "paper";
var Stone = "stone";

var main = function (input) {
  var opponentNumber = randomNumber();
  console.log(opponentNumber);
  var opponentInput = generateSPS(opponentNumber);
  console.log(opponentInput);
  var myOutputValue = spsResult(input, opponentInput);

  //Input validation
  if (input != Scissors && input != Paper && input != Stone) {
    myOutputValue =
      "Please enter one of the following: " +
      Scissors +
      ", " +
      Paper +
      " or " +
      Stone +
      ". (case-sensitive)";
  }
  return myOutputValue;
};

// generate a random number
var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNum = randomInteger + 1;
  return randomNum;
};

// generate either scissors, paper or stone based on randomly generated number
var generateSPS = function (number) {
  if (number == 1) {
    return Scissors;
  }
  if (number == 2) {
    return Paper;
  }
  if (number == 3) {
    return Stone;
  }
};

//determine the result based on the rules
var spsResult = function (userInput, spsGenerated) {
  if (userInput == spsGenerated) {
    return "It's a draw. :/";
  }
  if (
    (userInput == Scissors && spsGenerated == Paper) ||
    (userInput == Paper && spsGenerated == Stone) ||
    (userInput == Stone && spsGenerated == Scissors)
  ) {
    return "You won! :)";
  }
  if (
    (userInput == Scissors && spsGenerated == Stone) ||
    (userInput == Paper && spsGenerated == Scissors) ||
    (userInput == Stone && spsGenerated == Paper)
  ) {
    return "You lose! :(";
  }
};
