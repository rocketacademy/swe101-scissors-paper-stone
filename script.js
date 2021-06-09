var currentGameMode = "waiting for user name";
var userName = " ";
var playCount = 0;
var userWinCount = 0;
var computerWinCount = 0;
var drawCount = 0;
var reverseMode = false;
var mostRecentWinner = "";

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

var playSPS = function (userName, userGuess) {
  var message = "";
  // input validation
  if (isNaN(Number(userGuess)) == false) {
    message = `Sorry ${userName}, please enter a word.`;
    return message;
  }
  // input validation
  if (
    userGuess !== "scissors" &&
    userGuess !== "paper" &&
    userGuess !== "stone"
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
  console.log("generate SPS" + itemName);

  // SPS game logic (normal)
  if (currentGameMode == "SPS" && !reverseMode) {
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
  if (currentGameMode == "SPS" && reverseMode) {
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

  var endingMessage = `Now you can type "scissors", "paper", "stone" to play another round!`;

  if (winningRate >= 50) {
    message = `${beginningMessage} <br> You're doing well, ${userName}! <br> <br> ${endingMessage}`;
  } else {
    message = `${beginningMessage} <br> You're not doing so well, ${userName}! <br> <br> ${endingMessage}`;
  }

  return message;
};

var playKoreanSPS = function (userName, userGuess) {
  var message = "";
  // input validation
  if (isNaN(Number(userGuess)) == false) {
    return message;
  }
  // input validation
  if (
    userGuess !== "scissors" &&
    userGuess !== "paper" &&
    userGuess !== "stone"
  ) {
    message = `Sorry ${userName}, there are only 3 input options available: "scissors", "paper", "stone". <br> <br> Please use lowercase letters only and try again.`;
    return message;
  }
  var itemName = generateSPS();
  console.log("generate SPS" + itemName);

  // korean SPS logic
  if (currentGameMode == "korean SPS") {
    // if user wins the round
    if (
      (userGuess == "scissors" && itemName == "paper") ||
      (userGuess == "paper" && itemName == "stone") ||
      (userGuess == "stone" && itemName == "scissors")
    ) {
      mostRecentWinner = "user";
      var outcomeMessage = `You win! You need to shout "mukjji-ppa!" and throw again to determine the actual winner.`;
    } // if user loses the round
    else if (
      (userGuess == "scissors" && itemName == "stone") ||
      (userGuess == "paper" && itemName == "scissors") ||
      (userGuess == "stone" && itemName == "paper")
    ) {
      mostRecentWinner = "computer";
      outcomeMessage = `You lose! The computer will "muk-jji-ppa!". <br> <br> Throw again to determine the actual winner!`;
    } // if both parties choose the same item, it's a draw
    else if (itemName == userGuess) {
      if (mostRecentWinner == "user") {
        mostRecentWinner = ""; // to restart the game
        outcomeMessage = `It's a draw! <br> <br> Since you are the recent winner, you are the ultimate winner of muk-jji-ppa! <br> <br> You can play again by entering "scissors", "paper", or "stone".`;
      } else if (mostRecentWinner == "computer") {
        mostRecentWinner = ""; // to restart the game
        outcomeMessage = `It's a draw! <br> <br> Since the computer is the recent winner, you have lost muk-jji-ppa! <br> <br> You can play again by entering "scissors", "paper", or "stone".`;
      } else if (mostRecentWinner == "") {
        outcomeMessage = `It's a draw! <br> <br> Since no one wins the previous round, no one is declared the winner. <br> <br> Throw again to continue the game.`;
      }
    }
  }
  var message = `${userName}, the computer chose ${itemName}.<br> You chose ${userGuess}. <br> <br> ${outcomeMessage}`;

  return message;
};

var playComputerSPS = function (userName, userGuess) {
  var message = "";
  var userGuess = generateSPS();
  var itemName = generateSPS();
  console.log("userGuess" + userGuess);
  console.log("itemName" + itemName);

  // SPS game logic (normal)
  if (currentGameMode == "computer SPS") {
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
  var beginningMessage = `${userName}, the computer chose ${itemName} to play against you, <br> while the computer chose ${userGuess} for you. <br> <br> ${outcomeMessage} <br> <br> Games played: ${playCount} <br> Games won: ${userWinCount} <br> Games lost: ${computerWinCount} <br> Number of draws: ${drawCount} <br> Win rate: ${winningRate}%.`;

  var endingMessage = `Please click the submit button to throw again.`;

  if (winningRate >= 50) {
    message = `${beginningMessage} <br> You're doing well, ${userName}! <br> <br> ${endingMessage}`;
  } else {
    message = `${beginningMessage} <br> You're not doing so well, ${userName}! <br> <br> ${endingMessage}`;
  }

  return message;
};

var playComputerKoreanSPS = function (userName, userGuess) {
  var message = "";
  var userGuess = generateSPS();
  var itemName = generateSPS();
  console.log("userGuess" + userGuess);
  console.log("itemName" + itemName);
  // korean SPS logic
  if (currentGameMode == "computer korean SPS") {
    // if user wins the round
    if (
      (userGuess == "scissors" && itemName == "paper") ||
      (userGuess == "paper" && itemName == "stone") ||
      (userGuess == "stone" && itemName == "scissors")
    ) {
      mostRecentWinner = "user";
      var outcomeMessage = `You win! You need to shout "muk-jji-ppa!". <br> <br> Throw again to determine the actual winner.`;
    } // if user loses the round
    else if (
      (userGuess == "scissors" && itemName == "stone") ||
      (userGuess == "paper" && itemName == "scissors") ||
      (userGuess == "stone" && itemName == "paper")
    ) {
      mostRecentWinner = "computer";
      outcomeMessage = `You lose! The computer will "muk-jji-ppa!". <br> <br> Throw again to determine the actual winner.`;
    } // if both parties choose the same item, it's a draw
    else if (itemName == userGuess) {
      if (mostRecentWinner == "user") {
        mostRecentWinner = ""; // to restart the game
        outcomeMessage = `It's a draw! <br> <br> Since you are the recent winner, you are the ultimate winner of muk-jji-ppa! <br> <br> You can play again by clicking "submit".`;
      } else if (mostRecentWinner == "computer") {
        mostRecentWinner = ""; // to restart the game
        outcomeMessage = `It's a draw! <br> <br> Since the computer is the recent winner, you have lost muk-jji-ppa! <br> <br> You can play again by clicking "submit".`;
      } else if (mostRecentWinner == "") {
        outcomeMessage = `It's a draw! <br> <br> Since no one wins the previous round, no one is declared the winner. <br><br> Throw again to continue the game.`;
      }
    }
  }

  var message = `${userName}, the computer chose ${itemName} to play against you, <br> while the computer chose ${userGuess} for you. <br> <br> ${outcomeMessage}`;

  return message;
};

var main = function (input) {
  var myOutputValue = "";
  // collect user's name as the first input after the page loads
  if (currentGameMode == "waiting for user name") {
    userName = input;
    // now that we have the user's name
    currentGameMode = "selecting game";
    return `Hello, ${userName}! <br> <br> Please choose one of the four different games below by typing in the words in " ": <br> 1. "SPS" to play normal Scissors Paper Stone. <br> 2. "korean SPS" to play muk-jji-ppa. <br> 3. "computer SPS" to play computer vs. computer normal Scissors Paper Stone. <br> 4. "computer korean SPS" to play computer vs. computer muk-jji-ppa.`;
  }

  if (currentGameMode == "selecting game") {
    var message = `Please enter "scissors", "paper" or "stone".`;
    var computerMessage = `Please click the "submit" button to start the game.`;
    if (input == "SPS") {
      currentGameMode = "SPS";
      return `You have selected "normal SPS game", ${userName}. <br> <br> ${message}`;
    }
    if (input == "korean SPS") {
      currentGameMode = "korean SPS";
      return `You have selected "Korean SPS game - muk-jji-ppa", ${userName}. <br> <br> ${message}`;
    }
    if (input == "computer SPS") {
      currentGameMode = "computer SPS";
      return `You have selected "computer vs computer normal SPS game", ${userName}. <br> <br> ${computerMessage}`;
    }
    if (input == "computer korean SPS") {
      currentGameMode = "computer korean SPS";
      return `You have selected "computer vs computer Korean SPS game - muk-jji-ppa", ${userName}. <br> <br> ${computerMessage}`;
    }
  }

  if (currentGameMode == "SPS") {
    myOutputValue = playSPS(userName, input);
  } else if (currentGameMode == "korean SPS") {
    myOutputValue = playKoreanSPS(userName, input);
  } else if (currentGameMode == "computer SPS") {
    myOutputValue = playComputerSPS(userName, input);
  } else if (currentGameMode == "computer korean SPS") {
    myOutputValue = playComputerKoreanSPS(userName, input);
  }

  return myOutputValue;
};
