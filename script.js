// *************************************************************************************************
// ******** GET USER NAME **************************************************************************
// *************************************************************************************************

// this section is to obtain user name and update game mode once done
var userName = '';
var gameMode = 'waiting for user name';

var getUserName = function (input) {
  var message = '';

  if (input == 0) {
    // in the event nothing is entered, prompt user to enter a value
    message = 'Hello! Please enter your name.';
  } else {
    // capture user's name, say hello and prompt user to choose type of game
    // also update the game mode
    userName = input;
    gameMode = 'playing game';
    message = 'Hello ' + userName + '. Welcome!' + '<br><br> We have 2 versions of the game.'
      + '<br><br> Enter "normal" for the classic version, or enter "korean" for the korean version!'
      + '<br><br> Or, if anything will do, just hit submit and we will randomly choose for you!';
  }

  return message;
};

// *************************************************************************************************
// ******** GET GAME TYPE - NORMAL OR KOREAN *******************************************************
// *************************************************************************************************

// computer randomly chooses normal or korean game
var getGameTypeByComp = function () {
  var gameTypeByComp = '';
  var random0or1 = Math.floor(Math.random() * 2);

  if (random0or1 == 0) {
    gameTypeByComp = 'normal';
  } else {
    gameTypeByComp = 'korean';
  }

  console.log('comp chose this game type - ' + gameTypeByComp);

  return gameTypeByComp;
};

// finalize game type as normal or korean
var gameType = '';

var getGameType = function (input) {
  if (input == 'normal' || input == 'korean') {
    gameType = input;
  } else {
    gameType = getGameTypeByComp();
  }

  var message = 'Hey ' + userName + ', we shall play the ' + gameType + ' version of the game!'
    + '<br><br>To play, <br>enter "scissors" <br>or, enter "paper" <br>or, enter "stone".'
    + "<br><br>Let's start playing! Good luck!";

  return message;
};

// *************************************************************************************************
// ******** GET COMPUTER GUESS - SCISSCORS PAPER OR STONE ******************************************
// *************************************************************************************************

// computer randomly chooses 'scissors', 'paper' or 'stone'
var getCompGuess = function () {
  // generate a random number between 1 to 3
  var num1to3 = Math.floor(Math.random() * 3) + 1;
  console.log('get random num 1 to 3 - ' + num1to3);

  // use above random number for computer to choose 'scissors', 'paper' or 'stone'
  var compGuess = '';

  if (num1to3 == 1) {
    compGuess = 'scissors';
  } else if (num1to3 == 2) {
    compGuess = 'paper';
  } else {
    compGuess = 'stone';
  }

  console.log('computer guesses - ' + compGuess);

  return compGuess;
};

// *************************************************************************************************
// ******** PLAY 1 ROUND AND GET WIN/LOSE/DRAW FOR THIS ROUND **************************************
// *************************************************************************************************

// play the game - take in user's guess and computer's guess, then conclude win/lose/draw
var playGame = function (userGuess, compGuess) {
  // to play, user inputs 'scissors', 'paper' or 'stone'
  // outcome is user won, or computer won, or its a draw
  // 'scissors' beats 'paper'
  // 'paper' beats 'stone'
  // 'stone' beats 'scissors'
  // its a draw if user's choice is the same as what the computer chose
  var outcome = '';

  if ((compGuess == 'scissors' && userGuess == 'paper')
    || (compGuess == 'paper' && userGuess == 'stone')
    || (compGuess == 'stone' && userGuess == 'scissors')) {
    outcome = 'Computer won!';
  } else if ((userGuess == 'scissors' && compGuess == 'paper')
    || (userGuess == 'paper' && compGuess == 'stone')
    || (userGuess == 'stone' && compGuess == 'scissors')) {
    outcome = 'You won!';
  } else {
    outcome = "It's a draw!";
  }

  return outcome;
};

// *************************************************************************************************
// ******** NORMAL GAME - CALCULATE WIN/LOSS DATA **************************************************
// *************************************************************************************************

// create variables to track the various win-loss data
var totalGameCount = 0;
var compWinCount = 0;
var userWinCount = 0;
var drawCount = 0;
var compWinPercent = 0;
var userWinPercent = 0;
var netWinnerNormGame = '';

// calculate win-loss data for NORMAL game
var getScoresNormGame = function (outcome) {
  // 1) update total, winning and draw counts
  totalGameCount = totalGameCount + 1;

  if (outcome == 'Computer won!') {
    compWinCount = compWinCount + 1;
  } else if (outcome == 'You won!') {
    userWinCount = userWinCount + 1;
  } else {
    drawCount = drawCount + 1;
  }

  // 2) calculate winning %
  compWinPercent = (compWinCount / totalGameCount) * 100;
  userWinPercent = (userWinCount / totalGameCount) * 100;

  // 3) determine the current overall winner
  if (compWinPercent > userWinPercent) {
    netWinnerNormGame = 'As of now, overall computer is winning.';
  } else if (userWinPercent > compWinPercent) {
    netWinnerNormGame = 'As of now, overall you are winning!';
  } else {
    netWinnerNormGame = 'As of now, overall its a draw!';
  }
};

// *************************************************************************************************
// ******** NORMAL GAME - GET MESSAGE FOR USER *****************************************************
// *************************************************************************************************

// generate output message on outcome for NORMAL game
var getMsgNormGame = function (userGuess, compGuess, outcome) {
  // basic message
  var message = userName + ', you chose ' + userGuess + '.<br>The computer chose ' + compGuess + '.<br>' + outcome
    + '<br><br>You have played ' + totalGameCount + ' rounds and there were ' + drawCount + ' draws.'
    + '<br><br>So far, you have won ' + userWinCount + ' rounds (' + userWinPercent + '%).'
    + '<br>While the computer has won ' + compWinCount + ' rounds (' + compWinPercent + ' %).'
    + '<br><br>' + netWinnerNormGame;

  // additional message depending on who is net winner
  if (netWinnerNormGame == 'As of now, overall computer is winning.') {
    message = message + '<br><br>Its okay, keep trying! Good luck!';
  } else {
    message = message + "<br><br>You're doing great! Keep going!";
  }

  return message;
};

// *************************************************************************************************
// ******** KOREAN GAME - GET MESSAGE FOR USER *****************************************************
// *************************************************************************************************

// this section is to generate output message on outcome for KOREAN game
var prevRoundOutcome = '';

var getMsgKoreanGame = function (userGuess, compGuess, outcome) {
  // basic message to say Hi and inform outcome of current round
  var message = userName + ', you chose ' + userGuess + '.<br>The computer chose ' + compGuess
    + '<br>For this round : ' + outcome + '<br><br>';

  // additional message to say keep playing, or declare ultimate winner using korean game rules
  if (prevRoundOutcome == '') {
    // *****SCENARIO 1***** if it is only the very 1st round, keep playing
    message = message + 'This is the very first round. <br><br>Please continue playing and good luck!';
  } else if (outcome == 'You won!' || outcome == 'Computer won!') {
    // *****SCENARIO 2***** if no draws yet, keep playing
    message = message + 'For the korean game, once there is a draw, the most recent winner is the ultimate winner!'
      + '<br><br>For now, please continue playing and good luck!';
  } else if (outcome == "It's a draw!" && !(prevRoundOutcome == "It's a draw!")) {
    // *****SCENARIO 3***** if get 1 draw, declare most recent winner as the ultimate winner
    // basic message for this scenario
    message = message + 'For the korean game, once there is a draw, the Most Recent winner is the Current Ultimate winner!'
      + '<br><br>We know that most RECENTLY......' + prevRoundOutcome
      + '<br><br>So AS OF NOW.....the ULTIMATE outcome is........' + prevRoundOutcome;

    // additional message depending on who is the ultimate winner
    if (prevRoundOutcome == 'Computer won!') {
      message = message + '<br><br>Its okay, keep trying! Good luck!';
    } else {
      message = message + "<br><br>You're doing great! Keep going!";
    }
  } else if (outcome == "It's a draw!" && prevRoundOutcome == "It's a draw!") {
    // *****SCENARIO 4***** if get 2 consecutive draws, just continue playing
    message = message + 'We just had a draw previously. <br><br>Please continue playing and good luck!';
  }

  return message;
};

// *************************************************************************************************
// ******** MAIN FUNCTION **************************************************************************
// *************************************************************************************************

var main = function (input) {
  // this console log is added for visual clarity only (to show its a new submit)
  console.log('****************new submit****************');

  var myOutputValue = '';

  if (gameMode == 'waiting for user name') {
    // obtain user's name and update game mode
    myOutputValue = getUserName(input);
  } else if (gameMode == 'playing game' && gameType == '') {
    // decide to play normal or korean game
    myOutputValue = getGameType(input);
  } else if (gameMode == 'playing game' && !(gameType == '')) {
    // start playing

    if (!(input == 'scissors') && !(input == 'paper') && !(input == 'stone')) {
      // feedback if user types something other than "scissors", "paper", or "stone"
      myOutputValue = 'Hey ' + userName + ', <br><br>Please enter only 1 of the 3 options below :'
        + '<br><br>"scissors" or "paper" or "stone" <br><br>Please try again. Good luck!';
    } else {
      // generate guess by computer and determine outcome of current round
      var compGuess = getCompGuess();
      var outcome = playGame(input, compGuess);

      // next, play either normal or korean game
      // for korean game, also update the previous outcome
      if (gameType == 'normal') {
        getScoresNormGame(outcome);
        myOutputValue = getMsgNormGame(input, compGuess, outcome);
      } else if (gameType == 'korean') {
        console.log('KR game PREV outcome (b4 this round) - ' + prevRoundOutcome);
        myOutputValue = getMsgKoreanGame(input, compGuess, outcome);
        prevRoundOutcome = outcome;
      }
    }
  }

  console.log('gameMode - ' + gameMode);

  return myOutputValue;
};
