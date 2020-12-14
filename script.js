// Global variables
var gameMode = 'waiting for username';
var userName = '';
var playerScore = 0;
var computerScore = 0;
var gamesPlayed = 0;

// Random Scissors Paper Stone Function
// Random Number Function
var randomNumGenerator = function (min, max) {
  // generate a random number from min to max
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

// Scissors Paper Stone Game Logic
// Tie Number to Object (1. Scissors 2. Paper 3. Stone)
var scissorsPaperStoneGame = function (userInput) {
  // generate a number from 1 to 3
  var computerInput = randomNumGenerator(1, 3);
  // TEST
  computerInput = 3;
  // count as gameplay
  gamesPlayed += 1;
  // Statements for output
  var computerChoiceStatementScissors = 'The computer chose ✂️' + '<br>';
  var computerChoiceStatementPaper = 'The computer chose 🗒' + '<br>';
  var computerChoiceStatementStone = 'The computer chose 🗻' + '<br>';
  var userChoiceStatementScissors = 'You chose ✂️' + '<br>';
  var userChoiceStatementPaper = 'You chose 🗒' + '<br>';
  var userChoiceStatementStone = 'You chose 🗻' + '<br>';
  var resultStatementWin = 'You Win! Hooray' + '<br>';
  var resultStatementDraw = 'Its a draw!' + '<br>';
  var resultStatementLose = 'You Lose! Bummer' + '<br>';
  // check userInput
  if (userInput == 'scissors') {
    // if computer input is paper. WIN
    if (computerInput == 2) {
      playerScore += 1;
      returnStatement = computerChoiceStatementPaper + userChoiceStatementScissors + resultStatementWin;
    // else if computer input is scissors. DRAW
    } else if (computerInput == 1) {
      returnStatement = computerChoiceStatementScissors + userChoiceStatementScissors + resultStatementDraw;
    // else computer input is stone. LOSE
    } else {
      computerScore += 1;
      returnStatement = computerChoiceStatementStone + userChoiceStatementScissors + resultStatementLose;
    }

    // else if user is Paper
  } else if (userInput == 'paper') {
    // if computer input is stone. WIN
    if (computerInput == 3) {
      playerScore += 1;
      returnStatement = computerChoiceStatementStone + userChoiceStatementPaper + resultStatementWin;
    // else if computer input is paper. DRAW
    } else if (computerInput == 2) {
      returnStatement = computerChoiceStatementPaper + userChoiceStatementPaper + resultStatementDraw;
    // else computer input is scissors. LOSE
    } else {
      computerScore += 1;
      returnStatement = computerChoiceStatementScissors + userChoiceStatementPaper + resultStatementLose;
    }

    // else if user is Stone
  } else if (userInput == 'stone') {
    // if computer input is scissors. WIN
    if (computerInput == 1) {
      playerScore += 1;
      returnStatement = computerChoiceStatementScissors + userChoiceStatementStone + resultStatementWin;
    // else if computer input is stone. DRAW
    } else if (computerInput == 3) {
      returnStatement = computerChoiceStatementStone + userChoiceStatementStone + resultStatementDraw;
    // else computer input is paper. LOSE
    } else {
      computerScore += 1;
      returnStatement = computerChoiceStatementPaper + userChoiceStatementStone + resultStatementLose;
    }
  } else {
    // pass
  }
  return returnStatement + '<br>' + `So far ${userName}, you've been winning ${playerScore}/${gamesPlayed} turns. Pretty good!`;
};

// Input validation
var inputValidation = function (userName, userInput) {
  var returnStatement = '';
  // if input is scissors paper or stone
  if ((userInput == 'scissors')
  || (userInput == 'paper')
  || (userInput == 'stone')) {
    gameMode = 'inputValidationChecked';
  // if blank
  } else if (userInput.trim() == '') {
    gameMode = 'start game';
    returnStatement = `Hey ${userName} no blanks allowed!`;
  } else {
    gameMode = 'start game';
    returnStatement = `Hey ${userName}! You need to type either ✂️🗒🗻!`;
  }
  return returnStatement;
};

// MAIN FUNCTION
var main = function (input) {
  var myOutputValue = '';
  if (gameMode == 'waiting for username') {
    // set the name
    userName = input;
    // now that we have the name, switch the mode
    gameMode = 'start game';
    myOutputValue = 'Hello ' + userName + '!' + '<br>' + 'Welcome to a game of ✂️🗒🗻' + '<br>' + 'Take a guess!';
  } else if (gameMode == 'start game' || 'inputValidationChecked') {
    // input validations arguements (userName, userInput)
    myOutputValue = (inputValidation(userName, input));
    // start game
    if (gameMode == 'inputValidationChecked') {
      myOutputValue = scissorsPaperStoneGame(input);
    }
  }
  return myOutputValue;
};
