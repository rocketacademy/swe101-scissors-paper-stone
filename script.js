// PROJECT 1: Scissors Paper Stone - Part 1 & 2

var currentGameMode = "waiting for user name";
var userName = " ";
var playCount = 0;
var userWinCount = 0;
var computerWinCount = 0;
var drawCount = 0;
var reverseMode = false;

// create a function to generate Scissors Paper Stone
var generateSPS = function () {
  // produces a decimal between 0 and 2
  var randomDecimal = Math.random() * 3;
  // take off the decimal to get a number 0 - 2 ... add 1
  var randomInteger = Math.floor(randomDecimal) + 1;
  // assign 1, 2, and 3 to "scissors", "paper", and "stone" respectively.
  if (randomInteger == 1) {
    var randomItem = "scissors";
  } else if (randomInteger == 2) {
    randomItem = "paper";
  } else if (randomInteger == 3) {
    randomItem = "stone";
  }
  return randomItem;
};

var playSPSGame = function (userName, userGuess) {
  var message = " ";

  // input validation: first check if input is a string (part 1 - more comfortable)
  if (isNaN(Number(userGuess)) == false) {
    message = `Sorry ${userName}, please enter a word.`;
    return message;
  }

  // input validation: then check if input is scissors, paper, stone, reversed scissors, reversed paper or reversed stone (part 1 - more comfortable)
  if (
    userGuess !== "scissors" &&
    userGuess !== "paper" &&
    userGuess !== "stone" &&
    userGuess !== "reverse" &&
    userGuess !== "normal"
  ) {
    message = `Sorry ${userName}, there are only 3 input options available: "scissors", "paper", "stone". <br> <br> Please use lowercase letters only and try again.`;
    return message;
  }

  if (userGuess == "reverse") {
    reverseMode = true;
    return "Reverse mode is on! Now, please enter 'scissors', 'paper', or 'stone'";
  }

  if (userGuess == "normal") {
    reverseMode = false;
    return "Game is back to normal mode! Now, please enter 'scissors', 'paper', or 'stone'.";
  }

  var itemName = generateSPS();
  var endingMessage = `Now you can type "scissors", "paper", "stone" to play another round! <br> <br> (To return to normal mode, please type "normal".)`;
  // SPS game logic (normal)
  if (currentGameMode == "SPS game" && !reverseMode) {
    if (
      (userGuess == "scissors" && itemName == "paper") ||
      (userGuess == "paper" && itemName == "stone") ||
      (userGuess == "stone" && itemName == "scissors")
    ) {
      playCount = playCount + 1;
      userWinCount = userWinCount + 1;
      var winningRate = (userWinCount / playCount) * 100;
      var outcomeMessage = `You win!`;
    } // if both parties choose the same object, it's a draw
    else if (itemName == userGuess) {
      playCount = playCount + 1;
      drawCount = drawCount + 1;
      winningRate = (userWinCount / playCount) * 100;
      outcomeMessage = `It's a draw!`;
    } // if the above two statements are false then the user has lost
    else {
      playCount = playCount + 1;
      computerWinCount = computerWinCount + 1;
      winningRate = (userWinCount / playCount) * 100;
      outcomeMessage = `You lose!`;
    }
  }

  // SPS game logic (reverse)

  if (currentGameMode == "SPS game" && reverseMode) {
    if (
      (userGuess == "scissors" && itemName == "stone") ||
      (userGuess == "stone" && itemName == "paper") ||
      (userGuess == "paper" && itemName == "scissors")
    ) {
      playCount = playCount + 1;
      userWinCount = userWinCount + 1;
      var winningRate = (userWinCount / playCount) * 100;
      var outcomeMessage = `You win!`;
    } // if both parties choose the same object, it's a draw.
    else if (itemName == userGuess) {
      playCount = playCount + 1;
      drawCount = drawCount + 1;
      winningRate = (userWinCount / playCount) * 100;
      outcomeMessage = `It's a draw!`;
    } // if the above two statements are false then the user has lost
    else {
      playCount = playCount + 1;
      computerWinCount = computerWinCount + 1;
      winningRate = (userWinCount / playCount) * 100;
      outcomeMessage = `You lose!`;
    }
  }

  var beginningMessage = `${userName}, the computer chose ${itemName}.<br> You chose ${userGuess}. <br> <br> ${outcomeMessage} <br> <br> Games played: ${playCount} <br> Games won: ${userWinCount} <br> Games lost: ${computerWinCount} <br> Number of draws: ${drawCount} <br> Win rate: ${winningRate}%.`;

  if (winningRate >= 50) {
    message = `${beginningMessage} <br> You're doing well, ${userName}! <br> <br> ${endingMessage}`;
  } else {
    message = `${beginningMessage} <br> You're not doing so well, ${userName}! <br> <br> ${endingMessage}`;
  }

  return message;
};

var main = function (input) {
  var myOutputValue = " ";
  // collect user's name as the first input after the page loads
  if (currentGameMode == "waiting for user name") {
    userName = input;
    // now that we have the user's name
    currentGameMode = "SPS game";
    return `Hello, ${userName}! Now you can choose to play normal SPS game by typing in "scissors", "paper", or "stone" immediately, or you can choose to play the reverse SPS game by typing in "reverse" first.`;
  } else {
    myOutputValue = playSPSGame(userName, input);
  }
  return myOutputValue;
};
