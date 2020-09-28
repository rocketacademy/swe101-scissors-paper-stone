var userWon = 'user won';
var programWon = 'program won';
var draw = 'draw';

var gameNumber = 0;
var numberOfUserWins = 0;
var numberOfProgramWins = 0;
var numberOfDraws = 0;

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
    result = 'Invalid user input';
  }
  return result;
};

var recordWinStats = function (gameResultInput) {
  gameNumber += 1;
  switch (gameResultInput) {
    case userWon:
      numberOfUserWins += 1;
      break;
    case programWon:
      numberOfProgramWins += 1;
      break;
    case draw:
      numberOfDraws += 1;
      break;
    default:
      break;
  }
};

var main = function (input) {
  var computerGeneratedOutput = generateRandomOutput();
  var result = gameResult(input, computerGeneratedOutput);
  recordWinStats(result);
  var winPercentage = ((numberOfUserWins / gameNumber) * 100).toFixed(2);
  var output = 'User chose: ' + input
    + '<br>Program chose: ' + computerGeneratedOutput
    + '<br>Result: ' + result
    + '<br><br>This is game number: ' + gameNumber
    + '<br>Number of user wins: ' + numberOfUserWins
    + '<br>Number of program wins: ' + numberOfProgramWins
    + '<br>Number of draws: ' + numberOfDraws
    + '<br>Win percentage: ' + winPercentage + '%';
  return output;
};
