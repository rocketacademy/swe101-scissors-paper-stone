// add global variables
var timesUserWon = 0;
var timesComWon = 0;
var timesDraw = 0;
var gameMode = 'Waiting for username';
var userName = '';
var spsGameMode = 'normal';
var prevWinner = '';
var versionType = '';
var computerMode = '';

// Generate random number 1 to 3
var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// Assign 1 to scissors, 2 to paper, 3 to stone (Computer)
var generateHand = function () {
  var randomHand = diceRoll();
  if (randomHand == 1) {
    return 'scissors';
  }
  if (randomHand == 2) {
    return 'paper';
  }
  if (randomHand == 3) {
    return 'stone';
  }
};

// Assign 1 to scissors, 2 to paper, 3 to stone (User)
var generateUserHand = function () {
  var randomUserHand = diceRoll();
  if (randomUserHand == 1) {
    return 'scissors';
  }
  if (randomUserHand == 2) {
    return 'paper';
  }
  if (randomUserHand == 3) {
    return 'stone';
  }
};

// Choose between normal or Korean game
var chooseGame = function (userGuess) {
  var message = 'Please choose regular or Korean game.';
  if (userGuess == 'regular') {
    message = 'The version of the game is regular.';
    versionType = 'regular';
  }
  if (userGuess == 'Korean') {
    message = 'The version of the game is Korean.';
    versionType = 'Korean';
  }
  return message;
};

// Choose between manual or auto game
var chooseMode = function (userGuess) {
  var message = 'Please choose auto or manual game.';
  if (userGuess == 'manual') {
    message = 'You will choose your own guess each turn.';
    computerMode = 'manual';
  }
  if (userGuess == 'auto') {
    message = 'The computer will choose for you each turn.';
    computerMode = 'auto';
  }
  return message;
};

// Scissors, paper, stone game (Korean version)
var korGame = function (userName, userGuess) {
  var message = 'There are only 3 input options, please try again.';
  var progHand = generateHand();
  if (computerMode == 'auto') {
    userGuess = generateUserHand();
  }

  // Conditions for user to win
  if (
    (userGuess == 'stone' && progHand == 'scissors') ||
    (userGuess == 'scissors' && progHand == 'paper') ||
    (userGuess == 'paper' && progHand == 'stone')
  ) {
    timesUserWon = timesUserWon + 1;
    prevWinner = userName;
    console.log('Times User Won');
    console.log(timesUserWon);
    message =
      'The computer chose ' +
      progHand +
      '.<br> You chose ' +
      userGuess +
      '.<br> You win :) <br> So far ' +
      userName +
      ', you have won ' +
      timesUserWon +
      ' times.';
  }
  // Conditions for user to lose in normal game
  if (
    (userGuess == 'paper' && progHand == 'scissors') ||
    (userGuess == 'stone' && progHand == 'paper') ||
    (userGuess == 'scissors' && progHand == 'stone')
  ) {
    timesComWon = timesComWon + 1;
    prevWinner = 'Computer';
    console.log('Times Com Won');
    console.log(timesComWon);
    message =
      'The computer chose ' +
      progHand +
      '.<br> You chose ' +
      userGuess +
      '.<br> You lose :( <br> So far ' +
      userName +
      ', you have lost ' +
      timesComWon +
      ' times.';
  }
  // Conditions for user to draw
  if (userGuess == progHand) {
    timesUserWon = 0;
    timesComWon = 0;
    versionType = '';
    message =
      'It is a draw. The game has ended. ' +
      prevWinner +
      ' is the ultimate winner.';
  }
  return message;
};

// Scissors, paper, stone game (normal version)
var spsGame = function (userName, userGuess) {
  var message = 'There are only 3 input options, please try again.';
  var progHand = generateHand();
  if (userGuess == 'normal') {
    spsGameMode = 'normal';
    message = 'The game mode is ' + spsGameMode + ' now.';
  }
  if (userGuess == 'reverse') {
    spsGameMode = 'reverse';
    message = 'The game mode is ' + spsGameMode + ' now.';
  }
  if (computerMode == 'auto') {
    userGuess = generateUserHand();
  }
  if (spsGameMode == 'normal') {
    // Conditions for user to lose in normal game
    if (
      (userGuess == 'paper' && progHand == 'scissors') ||
      (userGuess == 'stone' && progHand == 'paper') ||
      (userGuess == 'scissors' && progHand == 'stone')
    ) {
      timesComWon = timesComWon + 1;
      console.log('Times Com Won');
      console.log(timesComWon);
      message =
        'The computer chose ' +
        progHand +
        '.<br> You chose ' +
        userGuess +
        '.<br> You lose :( <br> So far ' +
        userName +
        ', you have lost ' +
        timesComWon +
        ' times.';
    }
    // Conditions for user to win in normal game
    if (
      (userGuess == 'stone' && progHand == 'scissors') ||
      (userGuess == 'scissors' && progHand == 'paper') ||
      (userGuess == 'paper' && progHand == 'stone')
    ) {
      timesUserWon = timesUserWon + 1;
      console.log('Times User Won');
      console.log(timesUserWon);
      message =
        'The computer chose ' +
        progHand +
        '.<br> You chose ' +
        userGuess +
        '.<br> You win :) <br> So far ' +
        userName +
        ', you have won ' +
        timesUserWon +
        ' times.';
    }
  } else if (spsGameMode == 'reverse') {
    // Conditions for user to lose in reverse game
    if (
      (userGuess == 'stone' && progHand == 'scissors') ||
      (userGuess == 'scissors' && progHand == 'paper') ||
      (userGuess == 'paper' && progHand == 'stone')
    ) {
      timesComWon = timesComWon + 1;
      console.log('Times Com Won');
      console.log(timesComWon);
      message =
        'The computer chose ' +
        progHand +
        '.<br> You chose ' +
        userGuess +
        '.<br> You lose :( <br> So far ' +
        userName +
        ', you have lost ' +
        timesComWon +
        ' times.';
    }
    // Conditions for user to win in reverse game
    if (
      (userGuess == 'paper' && progHand == 'scissors') ||
      (userGuess == 'stone' && progHand == 'paper') ||
      (userGuess == 'scissors' && progHand == 'stone')
    ) {
      timesUserWon = timesUserWon + 1;
      console.log('Times User Won');
      console.log(timesUserWon);
      message =
        'The computer chose ' +
        progHand +
        '.<br> You chose ' +
        userGuess +
        '.<br> You win :) <br> So far ' +
        userName +
        ', you have won ' +
        timesUserWon +
        ' times.';
    }
  }
  // Conditions for user to draw
  if (userGuess == progHand) {
    timesDraw = timesDraw + 1;
    console.log('Times Draw');
    console.log(timesDraw);
    message =
      'The computer chose ' +
      progHand +
      '.<br> You chose ' +
      userGuess +
      '.<br> It is a draw :| <br> So far ' +
      userName +
      ', you have drew ' +
      timesDraw +
      ' times.';
  }
  return message;
};

var main = function (input) {
  var myOutputValue = '';
  // Prompt user to key username
  if (gameMode == 'Waiting for username') {
    userName = input;
    gameMode = 'SPS game';
    myOutputValue =
      'Hello ' +
      userName +
      '! Please start playing Scissors Paper Stone by entering one of the 3 objects.';
  }
  // Start game
  else if (gameMode == 'SPS game') {
    myOutputValue = chooseGame(input);
    if (versionType == 'Korean' || versionType == 'regular') {
      myOutputValue = chooseMode(input);
      if (
        versionType == 'Korean' &&
        (computerMode == 'auto' || computerMode == 'manual')
      ) {
        myOutputValue = korGame(userName, input);
      }
      if (
        versionType == 'regular' &&
        (computerMode == 'auto' || computerMode == 'manual')
      ) {
        myOutputValue = spsGame(userName, input);
      }
    }
  }
  return myOutputValue;
};
