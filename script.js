// get scissors, paper, or stone using random 1 to 3
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

// set game mode to initial at the start of program lifecycle
var gameMode = 'initial';
// set win and draw counts to 0
var userWinCount = 0;
var programWinCount = 0;
var drawCount = 0;
// store username
var userName;
// store most recent Winner
var recentWinner = '';

// initial game mode to get user name
var getUserName = function (name) {
  var message = 'Hello ' + name + '! <br><br> Select a game mode by typing normal, korean, or computer, and click submit. <br><br> You can come back to this menu anytime by typing menu and clicking submit.';
  // set user's name as userName
  userName = name;
  // go to choose game menu
  gameMode = 'choose game';
  return message;
};

// get user to choose game type
var chooseGameMenu = function (mode) {
  var message;

  // reset scores when coming back to menu
  userWinCount = 0;
  programWinCount = 0;
  drawCount = 0;

  // go to game mode depending on user input
  if (mode == 'normal') {
    gameMode = 'normal game';
    message = 'You have chosen the normal game. <br><br> Type in scissors, paper, or stone to start playing!';
  } else if (mode == 'korean') {
    gameMode = 'korean game';
    message = 'You have chosen the korean game. <br><br> Type in scissors, paper, or stone to start playing!';
  } else if (mode == 'computer') {
    gameMode = 'comp game';
    message = 'You have chosen the computer vs computer game. <br><br> Click submit to start playing!';
  } else {
    message = 'Invalid input. Please enter normal, korean, or computer in the text box, and click submit.';
  }
  return message;
};

// play normal game
var playNormalGame = function (userInput) {
  var message;

  // get the object the program plays against user
  var programObject = getObject();
  console.log('program Object');
  console.log(programObject);
  console.log('user Object');
  console.log(userInput);

  // if the program wins against the user
  if ((programObject == 'scissors' && userInput == 'paper') || (programObject == 'paper' && userInput == 'stone') || (programObject == 'stone' && userInput == 'scissors')) {
    // increase program win count by 1 and set recent winner as program
    programWinCount = programWinCount + 1;
    recentWinner = 'the Program';
    // lose message to the user
    message = 'You lose! <br><br>' + userName + ' chose ' + userInput + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';

    // if the user wins against the program
  } else if ((programObject == 'scissors' && userInput == 'stone') || (programObject == 'paper' && userInput == 'scissors') || (programObject == 'stone' && userInput == 'paper')) {
    // increase user win count by 1 and set recent winner as user
    userWinCount = userWinCount + 1;
    recentWinner = userName;
    // win message to the user
    message = 'You win! <br><br>' + userName + ' chose ' + userInput + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';

    // if there is a draw
  } else if (programObject == userInput) {
    // increase draw count by 1
    drawCount = drawCount + 1;
    // draw message to the user
    message = 'It is a draw! <br><br>' + userName + ' chose ' + userInput + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';

    // to go back to main menu
  } else if (userInput == 'menu') {
    gameMode = 'choose game';
    message = 'Hello ' + userName + '! <br><br> Select a game mode by typing normal, korean, or computer, and click submit. <br><br> You can come back to this menu anytime by typing menu and clicking submit.';

    // if user gives an invalid input
  } else {
    message = 'Invalid input. Please try again.';
  }
  return message;
};

// play Korean game
var playKoreanGame = function (userInput) {
  var message;

  // get the object the program plays against user
  var programObject = getObject();
  console.log('program Object');
  console.log(programObject);
  console.log('user Object');
  console.log(userInput);

  // if the program wins against the user
  if ((programObject == 'scissors' && userInput == 'paper') || (programObject == 'paper' && userInput == 'stone') || (programObject == 'stone' && userInput == 'scissors')) {
    // increase program win count by 1 and set recent winner as program
    programWinCount = programWinCount + 1;
    recentWinner = 'the Program';
    // lose message to the user
    message = 'You lose! <br><br>' + userName + ' chose ' + userInput + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';

    // if the user wins against the program
  } else if ((programObject == 'scissors' && userInput == 'stone') || (programObject == 'paper' && userInput == 'scissors') || (programObject == 'stone' && userInput == 'paper')) {
    // increase user win count by 1 and set recent winner as user
    userWinCount = userWinCount + 1;
    recentWinner = userName;
    // win message to the user
    message = 'You win! <br><br>' + userName + ' chose ' + userInput + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';

    // if there is a draw when none of them have won yet
  } else if (programObject == userInput && (programWinCount == 0 && userWinCount == 0)) {
    // increase draw count by 1
    drawCount = drawCount + 1;
    // draw message to the user
    message = 'It is a draw! <br><br>' + userName + ' chose ' + userInput + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';

    // if there is a draw after someone has last won
  } else if (programObject == userInput && (programWinCount > 0 || userWinCount > 0)) {
    // increase draw count by 1 amd set recent winner as fina winner
    drawCount = drawCount + 1;
    var finalWinner = recentWinner;
    // final winner message to the user
    message = 'The final winner is ' + finalWinner + '! <br><br>There was a draw, ' + userName + ' chose ' + userInput + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';
    // reset win and draw counts to 0 to reset the game
    userWinCount = 0;
    programWinCount = 0;
    drawCount = 0;

    // to go back to main menu
  } else if (userInput == 'menu') {
    gameMode = 'choose game';
    message = 'Hello ' + userName + '! <br><br> Select a game mode by typing normal, korean, or computer, and click submit. <br><br> You can come back to this menu anytime by typing menu and clicking submit.';

    // if user gives invalid input
  } else {
    message = 'Invalid input. Please enter "scissors", "paper", or "stone".';
  }
  return message;
};

// play computer vs computer
var playCompVsComp = function (userInput) {
  var message;

  // get the object the program plays against user
  var programObject = getObject();
  // get user's object generated by computer
  var userObject = getObject();
  console.log('program Object');
  console.log(programObject);
  console.log('user Object');
  console.log(userObject);

  // to go back to main menu
  if (userInput == 'menu') {
    gameMode = 'choose game';
    message = 'Hello ' + userName + '! <br><br> Select a game mode by typing normal, korean, or computer, and click submit. <br><br> You can come back to this menu anytime by typing menu and clicking submit.';

    // if the program wins against the user
  } else if ((programObject == 'scissors' && userObject == 'paper') || (programObject == 'paper' && userObject == 'stone') || (programObject == 'stone' && userObject == 'scissors')) {
    // increase program win count by 1 and set recent winner as program
    programWinCount = programWinCount + 1;
    recentWinner = 'the Program';
    // lose message to the user
    message = 'You lose! <br><br>' + userName + ' chose ' + userObject + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';

    // if the user wins against the program
  } else if ((programObject == 'scissors' && userObject == 'stone') || (programObject == 'paper' && userObject == 'scissors') || (programObject == 'stone' && userObject == 'paper')) {
    // increase user win count by 1 and set recent winner as user
    userWinCount = userWinCount + 1;
    recentWinner = userName;
    // win message to the user
    message = 'You win! <br><br>' + userName + ' chose ' + userObject + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';

    // if there is a draw
  } else if (programObject == userObject) {
    // increase draw count by 1
    drawCount = drawCount + 1;
    // draw message to the user
    message = 'It is a draw! <br><br>' + userName + ' chose ' + userObject + ' and the program played ' + programObject + '. <br><br>' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. <br><br>There were ' + drawCount + ' draws.';

    // if the user gives an invalid input
  } else {
    message = 'Invalid input. Please try again.';
  }
  return message;
};

var main = function (input) {
  console.log('game Mode');
  console.log(gameMode);
  var myOutputValue = '';

  // at the start of the program, ask for user's name
  if (gameMode == 'initial') {
    myOutputValue = getUserName(input);
    // game selection menu
  } else if (gameMode == 'choose game') {
    myOutputValue = chooseGameMenu(input);
    // game modes depending on user selection
  } else if (gameMode == 'normal game') {
    myOutputValue = playNormalGame(input);
  } else if (gameMode == 'korean game') {
    myOutputValue = playKoreanGame(input);
  } else if (gameMode == 'comp game') {
    myOutputValue = playCompVsComp(input);
    // error message
  } else {
    myOutputValue = 'Something went wrong. Please refresh the page and try again.';
  }
  return myOutputValue;
};
