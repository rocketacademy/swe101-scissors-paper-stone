var getObject = function () {
  var randomFloat = Math.random() * 3;
  var randomInteger = Math.floor(randomFloat) + 1;
  var object;
  if (randomInteger == 1) {
    object = 'scissors';
  }
  if (randomInteger == 2) {
    object = 'paper';
  }
  if (randomInteger == 3) {
    object = 'stone';
  }
  return object;
};

var gameMode = 'initial';
var userWinCount = 0;
var programWinCount = 0;
var drawCount = 0;
var userName;

var main = function (input) {
  console.log('game Mode');
  console.log(gameMode);
  var myOutputValue = 'hello!';
  if (gameMode == 'initial') {
    userName = input;
    gameMode = 'play game';
    myOutputValue = 'Hello ' + userName + ', type in scissors, paper, or stone to start playing!';
  } else if (gameMode == 'play game') {
    var programObject = getObject();
    console.log('program Object');
    console.log(programObject);
    console.log('user Object');
    console.log(input);
    if ((programObject == 'scissors' && input == 'paper') || (programObject == 'paper' && input == 'stone') || (programObject == 'stone' && input == 'scissors')) {
      programWinCount = programWinCount + 1;
      myOutputValue = 'You lose! ' + userName + ' chose ' + input + ' and the program played ' + programObject + '. ' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. There were ' + drawCount + ' draws.';
    }
    if (programObject == input) {
      drawCount = drawCount + 1;
      myOutputValue = 'It is a draw, ' + userName + ' chose ' + input + ' and the program played ' + programObject + '. ' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. There were ' + drawCount + ' draws.';
    }
    if ((programObject == 'scissors' && input == 'stone') || (programObject == 'paper' && input == 'scissors') || (programObject == 'stone' && input == 'paper')) {
      userWinCount = userWinCount + 1;
      myOutputValue = 'You win! ' + userName + ' chose ' + input + ' and the program played ' + programObject + '. ' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. There were ' + drawCount + ' draws.';
    }
    if (!(input == 'scissors' || input == 'paper' || input == 'stone')) {
      myOutputValue = 'Invalid input. Please enter "scissors", "paper", or "stone".';
    }
  }
  return myOutputValue;
};
