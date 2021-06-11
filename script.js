// define global variables for user win, user lose (aka computer win)
// storing user name - else if function
//  define function for programme randomly choosing SPS
// no input: if no user input -> empty input message
// input validation: if user chooses NOT SPS -> text output
// if user chooses scissors AND programme chooses paper -> user wins
// if user chooses paper AND programme chooses stone -> user wins
// if user chooses stone AND programme chooses scissors -> user wins
// if user AND programme chooses same -> draw

// define global variables for user win, user lose (aka computer win)
var numberUserWins = 0;
var numberUserLoses = 0;
var numberUserDraws = 0;
var currentGameMode = "waiting for user name";
var userName = " ";

// define function for programme randomly choosing SPS
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
  var myOutputValue = " ";
  // do this if game mode is waiting for user name
  if (currentGameMode == "waiting for user name") {
    userName = input;
    // once user enters name -> game switches into dice mode
    currentGameMode = "SPS";
    myOutputValue =
      "hello " + userName + ". Please input scissors, paper, or stone.";
  } else if (currentGameMode == "SPS") {
    // need to do refactoring then come back to this
    myOutputValue = SpsGame(userName, input);
  }
  return myOutputValue;
};

var SpsGame = function (userName, userChoice) {
  var message = " ";
  var systemChoice = generateSystemChoice();

  // condition debugging - fix this last
  console.log("user choice");
  console.log(userChoice);
  console.log("system choice");
  console.log(systemChoice);
  console.log("user scissors system paper is win");
  console.log(userChoice == "scissors" && systemChoice == "paper");
  console.log("user paper system stone is win");
  console.log(userChoice == "paper" && systemChoice == "stone");
  console.log("user stone system scissors is win");
  console.log(userChoice == "stone" && systemChoice == "scissors");
  console.log("user and system chose same");
  console.log(userChoice == systemChoice);

  console.log("user reverse scissors system stone is win");
  console.log(userChoice == "reverse scissors" && systemChoice == "stone");
  console.log("user reverse stone system paper is win");
  console.log(userChoice == "reverse stone" && systemChoice == "paper");
  console.log("user reverse paper system scissors is win");
  console.log(userChoice == "reverse paper" && systemChoice == "scissors");

  //no input: if no input -> empty input message
  if (userChoice == "") {
    return "Invalid entry!";
  }
  //input invalidation: if it's not scissors, paper or stone -> invalid input message.
  if (
    userChoice != "scissors" &&
    userChoice != "paper" &&
    userChoice != "stone" &&
    userChoice != "reverse scissors" &&
    userChoice != "reverse paper" &&
    userChoice != "reverse stone"
  ) {
    message = userName + ", please enter scissors/paper/stone into box.";
    return message;
  }

  // if user chooses scissors AND programme chooses paper -> user wins
  // if user chooses paper AND programme chooses stone -> user wins
  // if user chooses stone AND programme chooses scissors -> user wins
  if (
    (userChoice == "scissors" && systemChoice == "paper") ||
    (userChoice == "paper" && systemChoice == "stone") ||
    (userChoice == "stone" && systemChoice == "scissors")
  ) {
    numberUserWins = numberUserWins + 1;
    message =
      userName +
      ", you win! <br><br> The system chose " +
      systemChoice +
      ". <br><br> You have " +
      numberUserWins +
      " wins, " +
      numberUserLoses +
      " losses, and " +
      numberUserDraws +
      " draws. <br><br> Well done, you've been winning " +
      numberUserWins +
      " out of " +
      (numberUserWins + numberUserDraws + numberUserLoses) +
      " turns.";
    console.log("win!");
    return message;
  }

  // if user and programme choose same -> draw
  if (userChoice == systemChoice) {
    numberUserDraws = numberUserDraws + 1;
    console.log("draw!");
    message =
      userName +
      ", you drew! <br><br> The system chose " +
      systemChoice +
      ". <br><br> You have " +
      numberUserWins +
      " wins, " +
      numberUserLoses +
      " losses, and " +
      numberUserDraws +
      " draws. <br><br> You're alright, you've been winning " +
      numberUserWins +
      " out of " +
      (numberUserWins + numberUserDraws + numberUserLoses) +
      " turns.";
    return message;
  }
  // reverse game: win scenario
  // if user chooses reverse scissors AND programme chooses stone -> user wins
  // if user chooses reverse stone AND programme chooses paper -> user wins
  // if user chooses reverse paper AND programme chooses scissors -> user wins
  if (
    (userChoice == "reverse scissors" && systemChoice == "stone") ||
    (userChoice == "reverse stone" && systemChoice == "paper") ||
    (userChoice == "reverse paper" && systemChoice == "scissors")
  ) {
    numberUserWins = numberUserWins + 1;
    console.log("winning reverse game!");
    message =
      userName +
      ", you win at the reverse game! <br><br> The system chose " +
      systemChoice +
      ". <br><br> You have " +
      numberUserWins +
      " wins, " +
      numberUserLoses +
      " losses, and " +
      numberUserDraws +
      " draws. <br><br> Well done, you've been winning " +
      numberUserWins +
      " out of " +
      (numberUserWins + numberUserDraws + numberUserLoses) +
      " turns.";
    return message;
  }
  // reverse game: draw scenario
  // if user chooses reverse scissors AND programme chooses scissors -> user wins
  // if user chooses reverse stone AND programme chooses stone -> user wins
  // if user chooses reverse paper AND programme chooses paper -> user wins
  if (
    (userChoice == "reverse scissors" && systemChoice == "scissors") ||
    (userChoice == "reverse stone" && systemChoice == "stone") ||
    (userChoice == "reverse paper" && systemChoice == "paper")
  ) {
    numberUserDraws = numberUserDraws + 1;
    console.log("drawing reverse game!");
    message =
      userName +
      ", you drew at the reverse game! <br><br> The system chose " +
      systemChoice +
      ". <br><br> You have " +
      numberUserWins +
      " wins, " +
      numberUserLoses +
      " losses, and " +
      numberUserDraws +
      " draws. <br><br> You're alright, you've been winning " +
      numberUserWins +
      " out of " +
      (numberUserWins + numberUserDraws + numberUserLoses) +
      " turns.";
    return message;
  }

  // if it is any other combination -> user loses
  numberUserLoses = numberUserLoses + 1;
  message =
    userName +
    ", you lose! <br><br> The system chose " +
    systemChoice +
    ". <br><br> You have " +
    numberUserWins +
    " wins, " +
    numberUserLoses +
    " losses, and " +
    numberUserDraws +
    " draws. <br><br> Try harder, you've been winning " +
    numberUserWins +
    " out of " +
    (numberUserWins + numberUserDraws + numberUserLoses) +
    " turns.";
  return message;
};
