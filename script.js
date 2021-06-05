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
  differenceValueOutput = difference(input);
  var myOutputValue =
    "Try again: you need to chose between scissors, paper and rock!";
  if (input.includes("reversed")) {
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
  return (
    "The computer chose " +
    computerGuessString +
    ".<br>" +
    "And you chose " +
    input +
    ".<br>" +
    myOutputValue +
    ".<br><br> Type 'scissors' 'paper' or 'stone' to play another round!"
  );
};
