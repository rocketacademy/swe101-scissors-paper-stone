var draws = 0;
var playerWins = 0;
var computerWins = 0;
var timesPlayed = 0;

var mode = 'waiting for playerName';
var playerName = '';

// generate a random number between 1 and 3
var randomNumber = function () {
  return (Math.floor(Math.random() * 3)) + 1;
};

// game block
var playGame = function (playerGuess) {
  var computerChoice = '';
  var computerNumber = randomNumber();
  var message = '';

  if (computerNumber == 1) {
    computerChoice = 'scissors';
  } else if (computerNumber == 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'stone';
  }

  // if both player and computer choose the same
  if (playerGuess == computerChoice) {
    draws += 1;
    message = `${playerName}, it's a DRAW!<br><br>Your choice: ${playerGuess}<br>Computer's choice: ${computerChoice}<br>Player wins: ${playerWins}
    <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;

  // if player wins
  } else if ((playerGuess == 'scissors' && computerChoice == 'paper')
  || (playerGuess == 'paper' && computerChoice == 'stone')
  || (playerGuess == 'stone' && computerChoice == 'scissors')) {
    playerWins += 1;
    message = `${playerName}, you WIN!<br><br>Your choice: ${playerGuess}<br>Computer's choice: ${computerChoice}<br>Player wins: ${playerWins}
      <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;

  // if computer wins
  } else {
    computerWins += 1;
    message = `${playerName}, you LOSE!<br><br>Your choice: ${playerGuess}<br>Computer's choice: ${computerChoice}<br>Player wins: ${playerWins}
      <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;
  }

  return message;
};
// end of game block

// reverse mode game block
var reverseMode = function (playerGuess) {
  var computerChoice = '';
  var computerNumber = randomNumber();
  var message = '';

  if (computerNumber == 1) {
    computerChoice = 'scissors';
  } else if (computerNumber == 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'stone';
  }

  // if both player and computer choose the same
  if (playerGuess == computerChoice) {
    draws += 1;
    message = `${playerName}, it's a DRAW!<br><br>Your choice: ${playerGuess}<br>Computer's choice: ${computerChoice}<br>Player wins: ${playerWins}
    <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;

  // if player wins
  } else if ((playerGuess == 'paper' && computerChoice == 'scissors')
  || (playerGuess == 'stone' && computerChoice == 'paper')
  || (playerGuess == 'scissors' && computerChoice == 'stone')) {
    playerWins += 1;
    message = `${playerName}, you WIN!<br><br>Your choice: ${playerGuess}<br>Computer's choice: ${computerChoice}<br>Player wins: ${playerWins}
      <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;

  // if computer wins
  } else {
    computerWins += 1;
    message = `${playerName},you LOSE!<br><br>Your choice: ${playerGuess}<br>Computer's choice: ${computerChoice}<br>Player wins: ${playerWins}
      <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;
  }

  return message;
};
// end of reverse mode game block

var main = function (input) {
  var myOutputValue = '';

  // change from asking for username to playing the game
  if (mode == 'waiting for playerName') {
    playerName = input;
    mode = 'normal mode';
    myOutputValue = `Hello ${playerName}, please enter scissors, paper or stone`;
    return myOutputValue;
  }

  // if 'reverse' is entered, the reverse mode game is entered
  if (input == 'reverse') {
    mode = 'reverse mode';
    myOutputValue = 'You are now in reverse mode, please enter scissors, paper or stone';
    return myOutputValue;
  }

  // if 'normal' is entered, the normal game mode is entered
  if (input == 'normal') {
    mode = 'normal mode';
    myOutputValue = 'You are now in normal mode, please enter scissors, paper or stone';
    return myOutputValue;
  }

  // check to see if user input is either scissors, paper or stone
  if (!(input == 'scissors'
  || input == 'paper'
  || input == 'stone')) {
    myOutputValue = 'Please enter either scissors, paper or stone';
    return myOutputValue;
  }

  // reverse game mode
  if (mode == 'reverse mode') {
    timesPlayed += 1;
    myOutputValue = reverseMode(input);
    return myOutputValue;
  }

  // normal game mode
  if (mode == 'normal mode') {
    timesPlayed += 1;
    myOutputValue = playGame(input);
    return myOutputValue;
  }
};
