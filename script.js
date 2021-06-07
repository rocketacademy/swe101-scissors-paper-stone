// Fucntion to generate random number between 0 to 2, and assign it so scissors, paper or stone.
var guessGenerator = function () {
  numGuess = Math.floor(Math.random() * 3);
  // Assign random numbers to sps
  if (numGuess == 0) {
    return "scissors";
  } else if (numGuess == 1) {
    return "paper";
  } else {
    return "stone";
  }
};

// Global variable to keep track of number of times user has won, number of draws, total number of guesses, player name, last winner and game mode.
var userNumWin = 0;
var totalGuesses = 0;
var numDraws = 0;
var playerName = "";
var gameMode = "";
var lastWinner = "";

// Function to obtain user name.
var getName = function (userName) {
  playerName = userName;
  return `Hello ${userName}! Thanks for playing the game. Input scissors, paper or stone.`;
};

// Function to obtain game mode.
var getGameMode = function (selectedMode) {
  gameMode = selectedMode;
  return `You have selected ${selectedMode}. Please enter your username.`;
};

// Function to output winning statement for normal and reverse game
var nrWinningStatement = function (
  compGuess,
  userGuess,
  username,
  userNumWin,
  totalGuesses,
  numDraws
) {
  if (gameMode == "normal" || gameMode == "reverse") {
    return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> You win! <br> Hey ${username}, so far you have won ${userNumWin} of ${totalGuesses} rounds, with ${numDraws} draws! <br> Type "scissors", "paper" or "stone" to play another round!`;
  } else if (gameMode == "ai") {
    return `The computer chose ${compGuess}. <br> The computer chose ${userGuess} for you. <br> You win! <br> Hey ${username}, so far you have won ${userNumWin} of ${totalGuesses} rounds, with ${numDraws} draws! <br> Click "submit" to play another round!`;
  } else if (gameMode == "korean") {
    return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> Player: "MUK-JJI-PPA!" <br> Type "scissors", "paper" or "stone" to play another round!`;
  }
};

// Function for normal game logic
var playNormalGame = function (username, userGuess) {
  compGuess = guessGenerator();
  // Implement rule: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
  // Also validate user input, must be either sps.
  if (
    !(userGuess == "scissors" || userGuess == "paper" || userGuess == "stone")
  ) {
    return `Please input either scissors, paper or stone.`;
  } else {
    totalGuesses += 1;
    if (userGuess == "scissors" && compGuess == "paper") {
      userNumWin += 1;
      return nrWinningStatement(
        compGuess,
        userGuess,
        username,
        userNumWin,
        totalGuesses,
        numDraws
      );
    } else if (userGuess == "paper" && compGuess == "stone") {
      userNumWin += 1;
      return nrWinningStatement(
        compGuess,
        userGuess,
        username,
        userNumWin,
        totalGuesses,
        numDraws
      );
    } else if (userGuess == "stone" && compGuess == "scissors") {
      userNumWin += 1;
      return nrWinningStatement(
        compGuess,
        userGuess,
        username,
        userNumWin,
        totalGuesses,
        numDraws
      );
    } else if (userGuess == compGuess) {
      numDraws += 1;
      return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> This is a draw! <br> Hey ${username}, so far you have won ${userNumWin} of ${totalGuesses} rounds, with ${numDraws} draws! <br> Type "scissors", "paper" or "stone" to play another round!`;
    } else {
      return `${userGuess} doesn't beat ${compGuess}. You lose!`;
    }
  }
};

// Function for reversed game logic
var playReverseGame = function (username, userGuess) {
  compGuess = guessGenerator();
  // Implement rule: scissors beat stone, stone beats paper, and paper beats scissors. If both parties choose the same object, it's a draw.
  // Also validate user input, must be either sps.
  if (
    !(userGuess == "scissors" || userGuess == "paper" || userGuess == "stone")
  ) {
    return `Please input either scissors, paper or stone.`;
  } else {
    totalGuesses += 1;
    if (userGuess == "scissors" && compGuess == "stone") {
      userNumWin += 1;
      return nrWinningStatement(
        compGuess,
        userGuess,
        username,
        userNumWin,
        totalGuesses,
        numDraws
      );
    } else if (userGuess == "paper" && compGuess == "scissors") {
      userNumWin += 1;
      return nrWinningStatement(
        compGuess,
        userGuess,
        username,
        userNumWin,
        totalGuesses,
        numDraws
      );
    } else if (userGuess == "stone" && compGuess == "paper") {
      userNumWin += 1;
      return nrWinningStatement(
        compGuess,
        userGuess,
        username,
        userNumWin,
        totalGuesses,
        numDraws
      );
    } else if (userGuess == compGuess) {
      numDraws += 1;
      return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> This is a draw! <br> Hey ${username}, so far you have won ${userNumWin} of ${totalGuesses} rounds, with ${numDraws} draws! <br> Type "scissors", "paper" or "stone" to play another round!`;
    } else {
      return `${userGuess} doesn't beat ${compGuess}. You lose!`;
    }
  }
};

// Function for korean game logic
var playKoreanGame = function (username, userGuess) {
  compGuess = guessGenerator();
  // Implement rule: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw and the winner of the last round wins.
  // Also validate user input, must be either sps.
  if (
    !(userGuess == "scissors" || userGuess == "paper" || userGuess == "stone")
  ) {
    return `Please input either scissors, paper or stone.`;
  } else {
    totalGuesses += 1;
    if (userGuess == "scissors" && compGuess == "paper") {
      userNumWin += 1;
      lastWinner = "you";
      return nrWinningStatement(
        compGuess,
        userGuess,
        username,
        userNumWin,
        totalGuesses,
        numDraws
      );
    } else if (userGuess == "paper" && compGuess == "stone") {
      userNumWin += 1;
      lastWinner = "you";
      return nrWinningStatement(
        compGuess,
        userGuess,
        username,
        userNumWin,
        totalGuesses,
        numDraws
      );
    } else if (userGuess == "stone" && compGuess == "scissors") {
      userNumWin += 1;
      lastWinner = "you";
      return nrWinningStatement(
        compGuess,
        userGuess,
        username,
        userNumWin,
        totalGuesses,
        numDraws
      );
    } else if (userGuess == compGuess && totalGuesses > 1) {
      numDraws += 1;
      return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> This is a draw! <br> The last winner of this game was ${lastWinner}, therefore, ${lastWinner} won!`;
    } else if (userGuess == compGuess && totalGuesses <= 1) {
      numDraws += 1;
      return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> What are the odds! You got a draw in the first round! <br> There is no winner, please continue!`;
    } else {
      lastWinner = "the computer";
      return `${userGuess} doesn't beat ${compGuess}. <br> Computer: "MUK-JJI-PPA!"`;
    }
  }
};

// Function for computer vs computer game logic
var playAiGame = function (username) {
  compGuess1 = guessGenerator();
  compGuess2 = guessGenerator();
  // Implement rule: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
  // No validation here as user just have to click submit for computer guess.

  totalGuesses += 1;
  if (compGuess1 == "scissors" && compGuess2 == "paper") {
    userNumWin += 1;
    return nrWinningStatement(
      compGuess2,
      compGuess1,
      username,
      userNumWin,
      totalGuesses,
      numDraws
    );
  } else if (compGuess1 == "paper" && compGuess2 == "stone") {
    userNumWin += 1;
    return nrWinningStatement(
      compGuess2,
      compGuess1,
      username,
      userNumWin,
      totalGuesses,
      numDraws
    );
  } else if (compGuess1 == "stone" && compGuess2 == "scissors") {
    userNumWin += 1;
    return nrWinningStatement(
      compGuess2,
      compGuess1,
      username,
      userNumWin,
      totalGuesses,
      numDraws
    );
  } else if (compGuess1 == compGuess2) {
    numDraws += 1;
    return `The computer chose ${compGuess2}. <br> You chose ${compGuess1}. <br> This is a draw! <br> Hey ${username}, so far you have won ${userNumWin} of ${totalGuesses} rounds, with ${numDraws} draws! <br> Click "submit" to play another round!`;
  } else {
    return `${compGuess1} doesn't beat ${compGuess2}. You lose!`;
  }
};

var main = function (input) {
  if (gameMode == "") {
    return getGameMode(input);
  } else if (playerName == "") {
    return getName(input);
  } else {
    if (gameMode == "normal") {
      return playNormalGame(playerName, input);
    } else if (gameMode == "reverse") {
      return playReverseGame(playerName, input);
    } else if (gameMode == "korean") {
      return playKoreanGame(playerName, input);
    } else if (gameMode == "ai") {
      return playAiGame(playerName);
    }
  }
};
