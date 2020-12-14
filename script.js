var randomNumberGenerator = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};

var currentGameMode = 'Please enter your name.';
var noOfWins = 0;
var noOfComputerWins = 0;
var noOfTurns = 0;
var myOutputValue = '';

var main = function (input) {
  if (currentGameMode == 'Please enter your name.') {
    userName = input;
    currentGameMode = 'Play SPS';
    myOutputValue = 'Welcome ' + userName + '! Please enter scissors, paper or stone to begin play.';
  } else if (currentGameMode == 'Play SPS') {
    myOutputValue = startGame(userName, input); }
  return myOutputValue;
};

var startGame = function (userName, player) {
  var computer = randomNumberGenerator();

  if (computer == 0) {
    computer = 'scissors';
  } if (computer == 1) {
    computer = 'paper';
  } else if (computer == 2) {
    computer = 'stone'; }

  console.log(computer);
  var message = '';
  var winMessage = userName + ', you win! <br><br> You: ' + noOfWins + '<br> Computer: ' + noOfComputerWins + '<br><br> So far ' + userName + " , you've been winning " + noOfWins + '/' + noOfTurns + ' turns. Pretty good!';
  var loseMessage = userName + ', you lose! <br><br> You: ' + noOfWins + '<br> Computer: ' + noOfComputerWins + '<br><br> So far ' + userName + " , you've been losing " + (noOfTurns - noOfWins) + '/' + noOfTurns + ' turns. Go go go!';

  if (player != 'scissors' || player != 'paper' || player != 'stone') {
    message = 'Please key in scissors, paper or stone.';
  }
  if (player == 'scissors' && computer == 'paper') {
    message = winMessage;
    noOfWins = noOfWins + 1;
    noOfTurns = noOfTurns + 1;
  }
  if (player == 'scissors' && computer == 'stone') {
    message = loseMessage;
    noOfComputerWins = noOfComputerWins + 1;
    noOfTurns = noOfTurns + 1;
  }
  if (player == 'paper' && computer == 'scissors') {
    message = loseMessage;
    noOfComputerWins = noOfComputerWins + 1;
    noOfTurns = noOfTurns + 1;
  }
  if (player == 'paper' && computer == 'stone') {
    message = winMessage;
    noOfComputerWins = noOfComputerWins + 1;
    noOfWins = noOfWins + 1;
    noOfTurns = noOfTurns + 1;
  }
  if (player == 'stone' && computer == 'scissors') {
    message = winMessage;
    noOfWins = noOfWins + 1;
    noOfTurns = noOfTurns + 1;
  }
  if (player == 'stone' && computer == 'paper') {
    message = loseMessage;
    noOfComputerWins = noOfComputerWins + 1;
    noOfTurns = noOfTurns + 1;
  }
  if (player == computer) {
    message = userName + ', it is a draw! <br><br> You: ' + noOfWins + '<br> Computer: ' + noOfComputerWins;
    noOfWins = noOfWins + 1;
    noOfComputerWins = noOfComputerWins + 1;
    noOfTurns = noOfTurns + 1;
  }
  console.log(message);
  return message;
};
