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

// Global variable to keep track of number of times user has won, and also total number of guesses.
var userNumWin = 0;
var totalGuesses = 0;
var numDraws = 0;
var playerName = "";

// Function to obtain user name.
var getName = function (userName) {
  playerName = userName;
  return `Hello ${userName}! Thanks for playing the game. Input scissors, paper or stone.`;
};

// Function for game logic
var playGame = function (username, userGuess) {
  compGuess = guessGenerator();
  console.log(compGuess);
  console.log(userGuess);
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
      return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> You win! <br> Hey ${username}, so far you have won ${userNumWin} of ${totalGuesses} rounds, with ${numDraws} of draws! <br> Type "scissors", "paper" or "stone" to play another round!`;
    } else if (userGuess == "paper" && compGuess == "stone") {
      userNumWin += 1;
      return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> You win! <br> Hey ${username}, so far you have won ${userNumWin} of ${totalGuesses} rounds, with ${numDraws} of draws! <br> Type "scissors", "paper" or "stone" to play another round!`;
    } else if (userGuess == "stone" && compGuess == "scissors") {
      userNumWin += 1;
      return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> You win! <br> Hey ${username}, so far you have won ${userNumWin} of ${totalGuesses} rounds, with ${numDraws} of draws! <br> Type "scissors", "paper" or "stone" to play another round!`;
    } else if (userGuess == compGuess) {
      numDraws += 1;
      return `The computer chose ${compGuess}. <br> You chose ${userGuess}. <br> This is a draw! <br> Hey ${username}, so far you have won ${userNumWin} of ${totalGuesses} rounds, with ${numDraws} draws! <br> Type "scissors", "paper" or "stone" to play another round!`;
    } else {
      return `${userGuess} doesn't beat ${compGuess}. You lose!`;
    }
  }
};

var main = function (input) {
  if (playerName == "") {
    return getName(input);
  } else {
    return playGame(playerName, input);
  }
};
