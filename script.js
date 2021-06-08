var currentGameMode = "waiting for user name";
var userWins = 0;
var computerWins = 0;
var draws = 0;
var userName = "";

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    return "scissors";
  }
  if (randomInteger == 1) {
    return "paper";
  }
  if (randomInteger == 2) {
    return "stone";
  }
};

var main = function (input) {
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = "scp game";

    return "Hello " + userName;
  }
  computerMove = rollDice();
  if (
    (input == "scissors" && computerMove == "paper") ||
    (input == "paper" && computerMove == "stone") ||
    (input == "stone" && computerMove == "scissors")
  ) {
    userWins = userWins + 1;
    myOutputValue =
      userName +
      " you won! you did " +
      input +
      "and the computer did" +
      computerMove +
      ". Your current score is " +
      userWins +
      "and the computers score is " +
      computerWins;
  }

  if (
    (input == "scissors" && computerMove == "stone") ||
    (input == "paper" && computerMove == "scissors") ||
    (input == "stone" && computerMove == "paper")
  ) {
    computerWins = computerWins + 1;
    myOutputValue =
      userName +
      " you lost! you did " +
      input +
      "and the computer did" +
      computerMove +
      ". Your current score is " +
      userWins +
      "and the computers score is " +
      computerWins;
  }

  if (
    (input == "scissors" && computerMove == "scissors") ||
    (input == "paper" && computerMove == "paper") ||
    (input == "stone" && computerMove == "stone")
  ) {
    draws = draws + 1;
    myOutputValue =
      userName +
      " you drew! you did " +
      input +
      "and the computer did" +
      computerMove +
      ". Your current score is " +
      userWins +
      "and the computers score is " +
      computerWins +
      " and number of draws is " +
      draws;
  }

  return myOutputValue;
};
