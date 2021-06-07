//global variables
var countGames = 0;
var countWins = 0;
var countLosses = 0;
var gameMode = "waiting for name";
var userName = "";
var gameOption = "";
var koreanMode = "";
var previousWinner = "no game yet";
var previousWinnerActual = "no game yet";
var ultimateWinner = "";

//assigning an integer to the user's guess to make it comparable to the computer's guess
var difference = function (input) {
  console.log("input");
  console.log(input);
  var userGuess = "try again";
  if (input == "scissors") {
    userGuess = 1;
  }
  if (input == "paper") {
    userGuess = 2;
  }
  if (input == "rock") {
    userGuess = 3;
  }
  if (input == "reversed scissors") {
    userGuess = 1;
  }
  if (input == "reversed paper") {
    userGuess = 2;
  }
  if (input == "reversed rock") {
    userGuess = 3;
  }
  console.log("userGuess");
  console.log(userGuess);
  //generating random integer between 1 and 3 representing the computer's guess
  var randomNum = Math.random();
  var computerGuess = Math.floor(randomNum * 3) + 1;
  console.log("computerGuess");
  console.log(computerGuess);
  // matching computer guess to actual string values in order to be able to use the string in the output
  if (computerGuess == 1) {
    computerGuessString = "scissors";
  }
  if (computerGuess == 2) {
    computerGuessString = "paper";
  }
  if (computerGuess == 3) {
    computerGuessString = "rock";
  }
  console.log("computerGuessString");
  console.log(computerGuessString);
  //calculating difference between both guesses to later be able to evaluate who won
  differenceValue = userGuess - computerGuess;
  console.log("differenceValue");
  console.log(differenceValue);
  return differenceValue;
};
//comparing computer guess to input and determining outcome
var main = function (input) {
  //game mode for end of game
  if (gameMode === "finished") {
    return "Game is finished, please refresh the page to play again";
  }
  //game mode for user name input
  if (gameMode === "waiting for name") {
    userName = input;
    gameMode = "waiting for normal or reverse game mode";
    return (
      "Hello " +
      userName +
      "! To start off please decide whether you want to play the normal or reverse mode, by typing in one of these two options. Good luck!"
    );
  }
  //game mode for reverse/normal game
  if (gameMode === "waiting for normal or reverse game mode") {
    gameOption = input;
    console.log("gameoption");
    console.log(gameOption);
    if (input === "reverse" || input === "normal") {
      gameMode = "waiting for korean mode";
      return (
        "Hello " +
        userName +
        "! You have chosen the " +
        gameOption +
        " option of the game. Please now decide whether you want to play the korean version of the game or the normal one!"
      );
    } else
      return "Try again, you need to chose between normal and reverse game play!";
  }
  //game mode for korean mode
  if (gameMode === "waiting for korean mode") {
    koreanMode = input;
    console.log("koreanMode");
    console.log(koreanMode);
    if (input === "korean" || input === "normal") {
      gameMode = "ready to go";
      return (
        "Hello " +
        userName +
        "! You have chosen the " +
        koreanMode +
        " option of the game. Good luck!"
      );
    } else
      return "Try again, you need to chose between korean and normal game play!";
  }
  //normal mode not korean
  if (gameMode === "ready to go" && koreanMode === "normal") {
    console.log("gameoption");
    console.log(gameOption);
    countGames = countGames + 1;
    differenceValueOutput = difference(input);
    var myOutputValue =
      "Try again: you need to chose between scissors, paper and rock!";
    if (gameOption === "reverse") {
      if (differenceValueOutput == -1) {
        myOutputValue = "You lose";
      }
      if (differenceValueOutput == 1) {
        myOutputValue = "You win";
      }
      if (differenceValueOutput == 2) {
        myOutputValue = "You lose";
      }
      if (differenceValueOutput == -2) {
        myOutputValue = "You win";
      }
      if (differenceValueOutput == 0) {
        myOutputValue = "Draw...";
      }
    } else {
      if (differenceValueOutput == 1) {
        myOutputValue = "You lose";
      }
      if (differenceValueOutput == -1) {
        myOutputValue = "You win";
      }
      if (differenceValueOutput == -2) {
        myOutputValue = "You lose";
      }
      if (differenceValueOutput == 2) {
        myOutputValue = "You win";
      }
      if (differenceValueOutput == 0) {
        myOutputValue = "Draw...";
      }
    }
    console.log("myoutput");
    console.log(myOutputValue);
    if (myOutputValue === "You win") {
      countWins = countWins + 1;
    }
    if (myOutputValue === "You lose") {
      countLosses = countLosses + 1;
    }
    return (
      "Hi " +
      userName +
      "! The computer chose " +
      computerGuessString +
      ".<br>" +
      "And you chose " +
      input +
      ".<br>" +
      myOutputValue +
      ".<br><br> Type 'scissors' 'paper' or 'stone' to play another round!" +
      "<br><br>You have played " +
      countGames +
      " " +
      (countGames === 1 ? "game" : "games") +
      "<br><br>You have won " +
      countWins +
      " " +
      (countWins === 1 ? "game" : "games") +
      "<br><br>You have lost " +
      countLosses +
      " " +
      (countLosses === 1 ? "game" : "games") +
      "<br><br>Your winning percentage is " +
      ((countWins / countGames) * 100).toFixed(2) +
      "%" +
      (((countWins / countGames) * 100).toFixed(2) > 50
        ? "<br>You are doing well!"
        : "<br>You can still improve!")
    );
  }
  //korean mode
  if (gameMode === "ready to go" && koreanMode === "korean") {
    console.log("gameoption");
    console.log(gameOption);
    countGames = countGames + 1;
    previousWinnerActual = previousWinner;
    differenceValueOutput = difference(input);
    var myOutputValue =
      "Try again: you need to chose between scissors, paper and rock!";
    if (gameOption === "reverse") {
      if (differenceValueOutput == -1) {
        myOutputValue = "You lose";
        previousWinner = myOutputValue;
      }
      if (differenceValueOutput == 1) {
        myOutputValue = "You win";
        previousWinner = myOutputValue;
      }
      if (differenceValueOutput == 2) {
        myOutputValue = "You lose";
        previousWinner = myOutputValue;
      }
      if (differenceValueOutput == -2) {
        myOutputValue = "You win";
        previousWinner = myOutputValue;
      }
      if (differenceValueOutput == 0) {
        myOutputValue = "Draw...";
        previousWinner = myOutputValue;
      }
    } else {
      if (differenceValueOutput == 1) {
        myOutputValue = "You lose";
        previousWinner = myOutputValue;
      }
      if (differenceValueOutput == -1) {
        myOutputValue = "You win";
        previousWinner = myOutputValue;
      }
      if (differenceValueOutput == -2) {
        myOutputValue = "You lose";
        previousWinner = myOutputValue;
      }
      if (differenceValueOutput == 2) {
        myOutputValue = "You win";
        previousWinner = myOutputValue;
      }
      if (differenceValueOutput == 0) {
        myOutputValue = "Draw...";
        previousWinner = myOutputValue;
      }
    }
    console.log("myoutput");
    console.log(myOutputValue);
    if (myOutputValue === "You win") {
      countWins = countWins + 1;
      previousWinner = myOutputValue;
    }
    if (myOutputValue === "You lose") {
      countLosses = countLosses + 1;
      previousWinner = myOutputValue;
    }
    if (previousWinnerActual === "You win" && myOutputValue === "Draw...") {
      gameMode = "finished";
      return (
        myOutputValue +
        "Muk-jji-ppa! You are the ultimate winner, congratulations!"
      );
    }
    if (previousWinnerActual === "You lose" && myOutputValue === "Draw...") {
      gameMode = "finished";
      return (
        myOutputValue +
        "Muk-jji-ppa! The computer is the ultimate winner, try again!"
      );
    } else
      return (
        "Hi " +
        userName +
        "! <br>Previous round status: " +
        previousWinnerActual +
        "<br>The computer chose " +
        computerGuessString +
        ".<br>" +
        "And you chose " +
        input +
        ".<br>" +
        myOutputValue +
        ".<br><br> Type 'scissors' 'paper' or 'stone' to play another round!" +
        "<br><br>You have played " +
        countGames +
        " " +
        (countGames === 1 ? "game" : "games") +
        "<br><br>You have won " +
        countWins +
        " " +
        (countWins === 1 ? "game" : "games") +
        "<br><br>You have lost " +
        countLosses +
        " " +
        (countLosses === 1 ? "game" : "games") +
        "<br><br>Your winning percentage is " +
        ((countWins / countGames) * 100).toFixed(2) +
        "%" +
        (((countWins / countGames) * 100).toFixed(2) > 50
          ? "<br>You are doing well!"
          : "<br>You can still improve!")
      );
  }
};
