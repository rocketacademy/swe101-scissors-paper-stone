var main = function (input) {
  var computerGeneratedOutput = generateRandomOutput();
  return gameResult(input, computerGeneratedOutput);
};

var userWon = 'user won';
var programWon = 'program won';
var draw = 'draw';

var generateRandomOutput = function () {
  var output = '';
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    output = 'scissors';
  } else if (randomNumber == 1) {
    output = 'paper';
  } else if (randomNumber == 2) {
    output = 'stone';
  }
  return output;
};

var gameResult = function (playerChoice, computerChoice) {
  var result = '';
  if (playerChoice == 'scissors') {
    switch (computerChoice) {
      case 'scissors':
        result = draw;
        break;
      case 'paper':
        result = userWon;
        break;
      case 'stone':
        result = programWon;
        break;
      default:
        break;
    }
  } else if (playerChoice == 'paper') {
    switch (computerChoice) {
      case 'scissors':
        result = programWon;
        break;
      case 'paper':
        result = draw;
        break;
      case 'stone':
        result = userWon;
        break;
      default:
        break;
    }
  } else if (playerChoice == 'stone') {
    switch (computerChoice) {
      case 'scissors':
        result = userWon;
        break;
      case 'paper':
        result = programWon;
        break;
      case 'stone':
        result = draw;
        break;
      default:
        break;
    }
  } else {
    result = 'Invalid input';
  }
  return result;
};
