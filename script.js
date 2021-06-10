var gameMode = "";
var userWinCount = 0;
var computerWinCount = 0;
var drawCount = 0;
var userName = "";
var koreanWinner = "";

var randomSPS = function () {
  randomDecimal = Math.random();
  randomInteger0to2 = Math.floor(randomDecimal * 3);
  RandomInterger1to3 = randomInteger0to2 + 1;
  if (RandomInterger1to3 == 1) {
    computerChoiceMsg = "The computer chose Scissors!";
    return "Scissors";
  }
  if (RandomInterger1to3 == 2) {
    computerChoiceMsg = "The computer chose Paper!";
    return "Paper";
  }
  if (RandomInterger1to3 == 3) {
    computerChoiceMsg = "The computer chose Stone!";
    return "Stone";
  }
};

var main = function (input) {
  computerChoice = randomSPS();
  var yourChoiceMsg = "You chose " + input + "!";
  // Enter username
  if (userName == "") {
    userName = input;
    if (userName == "") {
      myOutputValue = "Please enter a valid username and click submit.";
      return myOutputValue;
    }
    return (
      "Hi " +
      userName +
      ", play the game by choosing a game mode. Then pick either Scissors, Paper, or Stone and click submit!"
    );
  }

  // For user to change game mode
  if (input == "Normal" || input == "Reverse" || input == "Korean") {
    koreanWinner = "";
    gameMode = input;
    return "You selected game mode " + input + ". Start playing!";
  }

  // Enter gameMode if game mode is blank
  if (gameMode != "Normal" && gameMode != "Reverse" && gameMode != "Korean") {
    if (input == "Normal" || input == "Reverse" || input == "Korean") {
      gameMode = input;
      return "You selected game mode " + input + ". Start playing!";
    }
    return "Please enter a game mode!<br>Normal, Reverse, or Korean";
  }

  if (
    input != "Scissors" &&
    input != "Paper" &&
    input != "Stone" &&
    input != "Reverse" &&
    input != "Korean" &&
    input != "Normal"
  ) {
    return "Your input is invalid";
  }

  if (gameMode == "Normal") {
    if (
      (computerChoice == "Scissors" && input == "Stone") ||
      (computerChoice == "Paper" && input == "Scissors") ||
      (computerChoice == "Stone" && input == "Paper")
    ) {
      userWinCount = userWinCount + 1;
      var result = "You win!";
    }

    if (
      (computerChoice == "Scissors" && input == "Paper") ||
      (computerChoice == "Paper" && input == "Stone") ||
      (computerChoice == "Stone" && input == "Scissors")
    ) {
      computerWinCount = computerWinCount + 1;
      var result = "You lose!";
    }

    if (computerChoice == input) {
      drawCount = drawCount + 1;
      var result = "It is a draw!";
    }
  }

  if (gameMode == "Reverse") {
    if (
      (computerChoice == "Scissors" && input == "Paper") ||
      (computerChoice == "Paper" && input == "Stone") ||
      (computerChoice == "Stone" && input == "Scissors")
    ) {
      userWinCount = userWinCount + 1;
      var result = "You win!";
    }

    if (
      (computerChoice == "Scissors" && input == "Stone") ||
      (computerChoice == "Paper" && input == "Scissors") ||
      (computerChoice == "Stone" && input == "Paper")
    ) {
      computerWinCount = computerWinCount + 1;
      var result = "You lose!";
    }

    if (computerChoice == input) {
      drawCount = drawCount + 1;
      var result = "It is a draw!";
    }
  }

  if (gameMode == "Korean") {
    if (
      (computerChoice == "Scissors" && input == "Stone") ||
      (computerChoice == "Paper" && input == "Scissors") ||
      (computerChoice == "Stone" && input == "Paper")
    ) {
      koreanWinner = "user";
      return (
        "You chose " +
        input +
        ". The computer chose " +
        computerChoice +
        ". Get a draw next to win!"
      );
    }

    if (
      (computerChoice == "Scissors" && input == "Paper") ||
      (computerChoice == "Paper" && input == "Stone") ||
      (computerChoice == "Stone" && input == "Scissors")
    ) {
      koreanWinner = "computer";
      return (
        "You chose " +
        input +
        ". The computer chose " +
        computerChoice +
        ". Get a draw next and the computer wins!"
      );
    }
    if (computerChoice == input) {
      if (koreanWinner == "user") {
        koreanWinner = "";
        userWinCount = +1;
        return (
          "Hi " +
          userName +
          "!<br><br>" +
          computerChoiceMsg +
          "<br><br>" +
          yourChoiceMsg +
          "<br><br>" +
          "You win!<br>" +
          userName +
          " " +
          userWinCount +
          " - " +
          computerWinCount +
          " Computer"
        );
      }
      if (koreanWinner == "computer") {
        koreanWinner = "";
        computerWinCount += 1;
        return (
          "Hi " +
          userName +
          "!<br><br>" +
          computerChoiceMsg +
          "<br><br>" +
          yourChoiceMsg +
          "<br><br>" +
          "The computer wins!<br>" +
          userName +
          " " +
          userWinCount +
          " - " +
          computerWinCount +
          " Computer"
        );
      }
      if (koreanWinner == "") {
        koreanWinner = "";
        return (
          "Hi " +
          userName +
          "!<br><br>" +
          computerChoiceMsg +
          "<br><br>" +
          yourChoiceMsg +
          "<br><br>" +
          "It is a draw!<br>" +
          userName +
          " " +
          userWinCount +
          " - " +
          computerWinCount +
          " Computer"
        );
      }
    }
  }

  winCountMessage =
    userName + " " + userWinCount + " - " + computerWinCount + " Computer";

  myOutputValue =
    "Hi " +
    userName +
    "!<br><br>" +
    computerChoiceMsg +
    "<br><br>" +
    yourChoiceMsg +
    "<br><br>" +
    result +
    "<br><br>" +
    winCountMessage;

  return myOutputValue;
};
