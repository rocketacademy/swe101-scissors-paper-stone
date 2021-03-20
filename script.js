// Define global variables
var gamesPlayed = -1;
var userWinCount = 0;
var currentGameMode = 'waiting for user name';
var computerObject = '';

// Randomly generate a number corresponding to Scissors, Paper or Stone and return this object.
function chooseRandomObject() {
  var randomObject = Math.floor(Math.random() * 3 + 1);
  if (randomObject == 1) {
    computerObject = 'Scissors';
  }
  else if (randomObject == 2) {
    computerObject = 'Paper';
  } else {
    computerObject = 'Stone';
  }
  return computerObject;
}

// SPS logic
function playGame(userName, userGuess) {
// Call the random object function to generate the computer guess
  var computerGuess = chooseRandomObject();
  var message = '';
  console.log(computerGuess, ': computer guess');
  console.log(userGuess, ': user guess');

  // Input validation to check that input is either Scissors, Paper or Stone.
  // Must be spelled correctly and case sensitive.
  if (!(userGuess == 'Scissors'
    || userGuess == 'Paper'
    || userGuess == 'Stone')) {
    // Display error message to user if input fails validation check
    myOutputValue = 'Oops, that doesn\'t seem right. <br> Please check your spelling and only select *one* object out of the following: <br> Scissors ✂️ Paper 📄 or Stone 💎';
    return myOutputValue;
  }
  // Otherwise go ahead with the game
  if (userGuess == computerGuess) {
    message = `Unlucky ${userName}, that's a draw. <br> You guessed ${userGuess} and computer guessed ${computerGuess}.`;
  } else if (
    userGuess == 'Scissors' && computerGuess == 'Paper'
      || userGuess == 'Stone' && computerGuess == 'Scissors'
      || userGuess == 'Paper' && computerGuess == 'Stone'
  ) {
    // If user beats computer with any of the above 3 winning conditions, add 1 to the win count.
    userWinCount += 1;
    message = `Awesome ${userName}, you win! <br> You guessed ${userGuess} and computer guessed ${computerGuess}.`;
  } else {
    message = `Aw shucks ${userName} :( you lost. <br> You guessed ${userGuess} and computer guessed ${computerGuess}.`;
  }
  console.log(userWinCount, 'no. user wins');
  var winRate = `<br> Your win count is ${userWinCount}/${gamesPlayed}`;
  return message + winRate;
}

var main = function (input) {
  var myOutputValue = '';
  // Increase count of no. games played each time user clicks 'Let's go'
  gamesPlayed += 1;
  console.log(gamesPlayed, 'no. games played');

  if (currentGameMode == 'waiting for user name') {
    // set the name
    userName = input;
    // then change the game mode
    currentGameMode = 'ready to play';
    console.log(currentGameMode, 'game mode');
    myOutputValue = `Hello ${userName}, let's start the game!`;
  } else if
  (currentGameMode == 'ready to play') {
    // SPS logic
    myOutputValue = playGame(userName, input);
  }
  return myOutputValue;
};
