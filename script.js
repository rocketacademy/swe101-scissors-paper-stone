const USER_WON = 'user won';
const PROGRAM_WON = 'program won';
const DRAW = 'draw';
const ENTER_USERNAME = 'enter username';
const GAME_STARTED = 'game started';
const SCISSORS = 'scissors';
const PAPER = 'paper';
const STONE = 'stone';

var gameNumber = 0;
var numberOfUserWins = 0;
var numberOfProgramWins = 0;
var numberOfDraws = 0;

var gameState = ENTER_USERNAME;
var userName = '';

var generateRandomOutput = function () {
  var output = '';
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    output = SCISSORS;
  } else if (randomNumber == 1) {
    output = PAPER;
  } else if (randomNumber == 2) {
    output = STONE;
  }
  return output;
};

var gameResult = function (playerChoice, computerChoice) {
  var result = '';
  if (playerChoice == SCISSORS) {
    switch (computerChoice) {
      case SCISSORS:
        result = DRAW;
        break;
      case PAPER:
        result = USER_WON;
        break;
      case STONE:
        result = PROGRAM_WON;
        break;
      default:
        break;
    }
  } else if (playerChoice == PAPER) {
    switch (computerChoice) {
      case SCISSORS:
        result = PROGRAM_WON;
        break;
      case PAPER:
        result = DRAW;
        break;
      case STONE:
        result = USER_WON;
        break;
      default:
        break;
    }
  } else if (playerChoice == STONE) {
    switch (computerChoice) {
      case SCISSORS:
        result = USER_WON;
        break;
      case PAPER:
        result = PROGRAM_WON;
        break;
      case STONE:
        result = DRAW;
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
    case USER_WON:
      numberOfUserWins += 1;
      break;
    case PROGRAM_WON:
      numberOfProgramWins += 1;
      break;
    case DRAW:
      numberOfDraws += 1;
      break;
    default:
      break;
  }
};

var calculateWinPercentage = function (numberOfWins, numberOfGames) {
  return ((numberOfWins / numberOfGames) * 100).toFixed(2);
};

var setUserName = function (username) {
  userName = username;
  gameState = GAME_STARTED;
};

var displayInstructions = function () {
  return 'Hello ' + userName + '! You can now start playing by entering "scissors", "paper" or "stone"';
};

var displayOutput = function (userChoice, computerChoice, result, winPercentage) {
  var resultWithUsername = result;
  if (result == USER_WON) {
    resultWithUsername = userName + ' won';
  }
  return userName + ' chose: ' + userChoice
    + '<br>Program chose: ' + computerChoice
    + '<br>Result: ' + resultWithUsername
    + '<br><br>This is game number: ' + gameNumber
    + '<br>Number of wins for ' + userName + ': ' + numberOfUserWins
    + '<br>Number of program wins: ' + numberOfProgramWins
    + '<br>Number of draws: ' + numberOfDraws
    + '<br>Win percentage: ' + winPercentage + '%';
};

var main = function (input) {
  var output = '';
  if (gameState == ENTER_USERNAME) {
    setUserName(input);
    output = displayInstructions();
  } else if (gameState == GAME_STARTED) {
    if (input == SCISSORS || input == PAPER || input == STONE) {
      var computerGeneratedOutput = generateRandomOutput();
      var result = gameResult(input, computerGeneratedOutput);
      recordWinStats(result);
      var winPercentage = calculateWinPercentage(numberOfUserWins, gameNumber);
      output = displayOutput(input, computerGeneratedOutput, result, winPercentage);
    } else {
      output = 'Please enter "scissors,"paper" or "stone"';
    }
  }
  return output;
};
