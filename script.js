var draws = 0;
var playerWins = 0;
var computerWins = 0;
var timesPlayed = 0;
var previousWinner = '';

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
    message = `${playerName}, it's a DRAW! The previous winner ${previousWinner} wins!<br><br>Your choice: ${playerGuess}<br>Computer's choice: ${computerChoice}<br>Player wins: ${playerWins}
    <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;

  // if player wins
  } else if ((playerGuess == 'scissors' && computerChoice == 'paper')
  || (playerGuess == 'paper' && computerChoice == 'stone')
  || (playerGuess == 'stone' && computerChoice == 'scissors')) {
    playerWins += 1;
    previousWinner = playerName;
    console.log(previousWinner);
    message = `${playerName}, you WIN!<br><br>Your choice: ${playerGuess}<br>Computer's choice: ${computerChoice}<br>Player wins: ${playerWins}
      <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;

  // if computer wins
  } else {
    computerWins += 1;
    previousWinner = 'computer';
    console.log(previousWinner);
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

// game block
var computerMode = function (playerGuess) {
  var computerChoice1 = '';
  var computerChoice2 = '';
  var computerNumber1 = randomNumber();
  var computerNumber2 = randomNumber();
  var message = '';

  if (computerNumber1 == 1) {
    computerChoice1 = 'scissors';
  } else if (computerNumber1 == 2) {
    computerChoice1 = 'paper';
  } else {
    computerChoice1 = 'stone';
  }

  if (computerNumber2 == 1) {
    computerChoice2 = 'scissors';
  } else if (computerNumber2 == 2) {
    computerChoice2 = 'paper';
  } else {
    computerChoice2 = 'stone';
  }

  // if both player and computer choose the same
  if (computerChoice1 == computerChoice2) {
    draws += 1;
    message = `${playerName}, it's a DRAW! The previous winner ${previousWinner} wins!<br><br>Your choice: ${computerChoice1}<br>Computer's choice: ${computerChoice2}<br>Player wins: ${playerWins}
    <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;

  // if player wins
  } else if ((computerChoice1 == 'scissors' && computerChoice2 == 'paper')
  || (computerChoice1 == 'paper' && computerChoice2 == 'stone')
  || (computerChoice1 == 'stone' && computerChoice2 == 'scissors')) {
    playerWins += 1;
    previousWinner = playerName;
    console.log(previousWinner);
    message = `${playerName}, you WIN!<br><br>Your choice: ${computerChoice1}<br>Computer's choice: ${computerChoice2}<br>Player wins: ${playerWins}
      <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;

  // if computer wins
  } else {
    computerWins += 1;
    previousWinner = 'computer';
    console.log(previousWinner);
    message = `${playerName}, you LOSE!<br><br>Your choice: ${computerChoice1}<br>Computer's choice: ${computerChoice2}<br>Player wins: ${playerWins}
      <br>Computer wins: ${computerWins}<br>Draws: ${draws}<br>You have won ${playerWins}/${timesPlayed} times`;
  }

  return message;
};
// end of game block

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

  // if 'computer' is entered, the normal game mode is entered
  if (input == 'computer') {
    mode = 'computer mode';
    myOutputValue = 'You are now in computer mode, you have no more free will';
    return myOutputValue;
  }

  // computer game mode
  if (mode == 'computer mode') {
    timesPlayed += 1;
    myOutputValue = computerMode(input);
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
