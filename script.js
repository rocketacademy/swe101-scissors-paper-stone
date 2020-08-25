// assign global value to user name input, game mode and scores
var currentGameMode = 'waiting for user name';
var userName = '';
var winScore = 0;
var lossScore = 0;
var drawScore = 0;

var getRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var getComputerGuess = function () {
  var randomNumber = getRandomNumber();
  var computerGuess;
  if (randomNumber == 1) {
    computerGuess = 'scissors';
  } else if (randomNumber == 2) {
    computerGuess = 'paper';
  } else if (randomNumber == 3) {
    computerGuess = 'stone';
  }
  console.log(computerGuess);
  return computerGuess;
};

var main = function (input) {
  if (currentGameMode == 'waiting for user name') {
    userName = input;
    currentGameMode = 'Scissors, Paper, Stone';
    return 'Hello ' + userName + ', Please enter your guess: Scissors, Paper or Stone';
  }
  // get user guess
  var userGuess = input;
  console.log(input);
  // get computer guess
  var computerGuess = getComputerGuess();
  console.log(computerGuess);
  // compare user vs computer guess & return result
  // Lose
  if ((userGuess == 'scissors' && computerGuess == 'stone') || (userGuess == 'paper' && computerGuess == 'scissors') || (userGuess == 'stone' && computerGuess == 'paper')) {
    lossScore = lossScore + 1;
    console.log(lossScore);
    return userName + ' You lost! Your: ' + userGuess + ' loses to ' + computerGuess + ' Total Win Score: ' + winScore + ' Total Lost Score: ' + lossScore + '  Total Draw score: ' + drawScore + ' please try again!';
  }
  // Win
  if ((userGuess == 'scissors' && computerGuess == 'paper') || (userGuess == 'paper' && computerGuess == 'stone') || (userGuess == 'stone' && computerGuess == 'scissors')) {
    winScore = winScore + 1;
    console.log(winScore);
    return userName + ' You won! Your: ' + userGuess + ' wins: ' + computerGuess + ' Total Win Score: ' + winScore + ' Total Lost Score: ' + lossScore + '  Total Draw score: ' + drawScore + ' please try again!';
  }
  // Draw
  if ((userGuess == 'scissors' && computerGuess == 'scissors') || (userGuess == 'paper' && computerGuess == 'paper') || (userGuess == 'stone' && computerGuess == 'stone')) {
    drawScore = drawScore + 1;
    console.log(drawScore);
    return userName + ' You drew! Your: ' + userGuess + ' drew to ' + computerGuess + ' Total Win Score: ' + winScore + ' Total Lost Score: ' + lossScore + '  Total Draw score: ' + drawScore + ' please try again!';
  }
  // input anything other than scissors, paper or stone
  return 'Please only input from one of the following: scissors, paper, stone';
};
