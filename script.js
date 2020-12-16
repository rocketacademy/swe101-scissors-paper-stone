// Function 1: Generate random number between 0 -2.
var randomNumberGenerator = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

// declare variables
var currentGameMode = 'Please enter your name.';
var noOfWins = 0;
var noOfComputerWins = 0;
var noOfTurns = 0;
var myOutputValue = '';
var lastWinner = '';
var userName = '';

// Function 4: korean mode
var koreanGame = function (userName, playersHand) {
// Step 1: Generate a random number for computerHand
  var computerHand = randomNumberGenerator();
  var message = '';

  // Step 2: Assign outcome based on computer's number
  if (computerHand == 0) {
    computerHand = 'scissors';
  } else if (computerHand == 1) {
    computerHand = 'paper';
  } else if (computerHand == 2) {
    computerHand = 'stone'; }
  console.log(computerHand);

  // Step 3: Assign outcome based on computer's number
  if ((playersHand == 'scissors' && computerHand == 'paper')
  || (playersHand == 'paper' && computerHand == 'stone')
  || (playersHand == 'stone' && computerHand == 'scissors')) {
    message = 'Player : muk-jji-ppa!';
    lastWinner = userName;
  }
  if ((playersHand == 'scissors' && computerHand == 'stone')
  || (playersHand == 'paper' && computerHand == 'scissors')
  || (playersHand == 'stone' && computerHand == 'paper')) {
    message = 'Computer : muk-jji-ppa!';
    lastWinner = 'Computer';
  }
  if (playersHand == computerHand) {
    message = 'The winner is ' + lastWinner;
  }
  return message;
};

// Function 3: Playing the actual game
var startGame = function (userName, player) {
  // Step 1: generate random number for computer
  var computer = randomNumberGenerator();

  // Step 2: Assign outcome based on computer's number
  if (computer == 0) {
    computer = 'scissors';
  } else if (computer == 1) {
    computer = 'paper';
  } else if (computer == 2) {
    computer = 'stone';
  }
  console.log('Computer threw: ' + computer);
  console.log('You threw: ' + player);

  // Step 3: Create winning and losing messages
  var message = '';
  var winMessage = userName
    + ', you win! <br><br> You: '
    + noOfWins
    + '<br> Computer: '
    + noOfComputerWins
    + '<br><br> So far '
    + userName
    + " , you've been winning "
    + noOfWins
    + '/'
    + noOfTurns
    + ' turns. Pretty good!';
  var loseMessage = userName
    + ', you lose! <br><br> You: '
    + noOfWins
    + '<br> Computer: '
    + noOfComputerWins
    + '<br><br> So far '
    + userName
    + " , you've been losing "
    + (noOfTurns - noOfWins)
    + '/'
    + noOfTurns
    + ' turns. Go go go!';

  // Step 4: Input validation
  if (player != 'scissors' || player != 'paper' || player != 'stone') {
    message = 'Please key in scissors, paper or stone.';
  }

  // Step 5: Determine outcome and print appropriate win/lose message
  noOfTurns = noOfTurns + 1;
  if (player == 'scissors' && computer == 'paper') {
    if (currentGameMode == 'Play SPS') {
      message = winMessage;
      noOfWins = noOfWins + 1;
    } else if (currentGameMode == 'reverseMode') {
      message = loseMessage;
      noOfComputerWins = noOfComputerWins + 1;
    }
  }
  if (player == 'scissors' && computer == 'stone') {
    if (currentGameMode == 'Play SPS') {
      message = loseMessage;
      noOfComputerWins = noOfComputerWins + 1;
    } else if (currentGameMode == 'reverseMode') {
      message = winMessage;
      noOfWins = noOfWins + 1;
    }
  }
  if (player == 'paper' && computer == 'scissors') {
    if (currentGameMode == 'Play SPS') {
      message = loseMessage;
      noOfComputerWins = noOfComputerWins + 1;
    } else if (currentGameMode == 'reverseMode') {
      message = winMessage;
      noOfWins = noOfWins + 1;
    }
  }
  if (player == 'paper' && computer == 'stone') {
    if (currentGameMode == 'Play SPS') {
      message = winMessage;
      noOfWins = noOfWins + 1;
    } else if (currentGameMode == 'reverseMode') {
      message = loseMessage;
      noOfComputerWins = noOfComputerWins + 1;
    }
  }
  if (player == 'stone' && computer == 'scissors') {
    if (currentGameMode == 'Play SPS') {
      message = winMessage;
      noOfWins = noOfWins + 1;
    } else if (currentGameMode == 'reverseMode') {
      message = loseMessage;
      noOfComputerWins = noOfComputerWins + 1;
    }
  }
  if (player == 'stone' && computer == 'paper') {
    if (currentGameMode == 'Play SPS') {
      message = loseMessage;
      noOfComputerWins = noOfComputerWins + 1;
    } else if (currentGameMode == 'reverseMode') {
      message = winMessage;
      noOfWins = noOfWins + 1;
    }
  }

  if (player == computer) {
    message = userName
      + ', it is a draw! <br><br> You: '
      + noOfWins
      + '<br> Computer: '
      + noOfComputerWins;
    noOfWins = noOfWins + 1;
    noOfComputerWins = noOfComputerWins + 1;
  }
  // Step 6: Spit out the chosen win/lose message
  return message;
};

// Function 2: what happens when you click submit button
var main = function (input) {
  // Play game based on Current Game Mode
  if (currentGameMode == 'Please enter your name.') {
    userName = input;
    currentGameMode = 'Play SPS';
    myOutputValue = 'Welcome '
      + userName + '! Please key in scissors, paper or stone to start';
  } else if (currentGameMode == 'Play SPS') {
    myOutputValue = startGame(userName, input);
  } else if (currentGameMode == 'reverseMode') {
    myOutputValue = startGame(userName, input);
  } else if (currentGameMode == 'koreanMode') {
    myOutputValue = koreanGame(userName, input);
  }
  // when user activates Normal Game Mode
  if (input == 'normal') {
    currentGameMode = 'Play SPS';
  }
  // When user activates Reverse Game Mode
  if (input == 'reverse') {
    currentGameMode = 'reverseMode';
  }
  // change mode to korean mode.
  if (input == 'korean') {
    currentGameMode = 'koreanMode';
    myOutputValue = 'You have selected korean game mode.';
  } return myOutputValue;
};
