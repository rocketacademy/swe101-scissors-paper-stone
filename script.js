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

var main = function (input) {
  console.log('game Mode');
  console.log(gameMode);
  var myOutputValue = 'hello!';
  // at the start of the program, ask for user's name
  if (gameMode == 'initial') {
    // user name is set as the user's input
    userName = input;
    // change game mode to play game when submit is clicked again
    gameMode = 'play game';
    // tell user what to input
    myOutputValue = 'Hello ' + userName + ', type in scissors, paper, or stone to start playing!';
  } else if (gameMode == 'play game') {
    // get the object the program plays against user
    var programObject = getObject();
    console.log('program Object');
    console.log(programObject);
    console.log('user Object');
    console.log(input);
    // if the program wins against the user
    if ((programObject == 'scissors' && input == 'paper') || (programObject == 'paper' && input == 'stone') || (programObject == 'stone' && input == 'scissors')) {
      // increase program win count by 1
      programWinCount = programWinCount + 1;
      // set recent winner as the program
      recentWinner = 'the Program';
      // lose message to the user
      myOutputValue = 'You lose! ' + userName + ' chose ' + input + ' and the program played ' + programObject + '. ' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. There were ' + drawCount + ' draws.';
    }
    // if the program draws with the user when none of them have won yet
    if (programObject == input && (programWinCount == 0 && userWinCount == 0)) {
      // increase draw count by 1
      drawCount = drawCount + 1;
      // draw message to the user
      myOutputValue = 'It is a draw, ' + userName + ' chose ' + input + ' and the program played ' + programObject + '. ' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. There were ' + drawCount + ' draws.';
    }
    // if the program draws with the user after someone has last won
    if (programObject == input && (programWinCount > 0 || userWinCount > 0)) {
      // increase draw count by 1
      drawCount = drawCount + 1;
      // set final winner as the most recent winner
      var finalWinner = recentWinner;
      // final winner message to the user
      myOutputValue = 'It is a draw, ' + userName + ' chose ' + input + ' and the program played ' + programObject + '. ' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. There were ' + drawCount + ' draws. The final winner is ' + finalWinner + '! ';
      // reset win and draw counts to 0 to reset the game
      userWinCount = 0;
      programWinCount = 0;
      drawCount = 0;
    }
    // if the user wins against the program
    if ((programObject == 'scissors' && input == 'stone') || (programObject == 'paper' && input == 'scissors') || (programObject == 'stone' && input == 'paper')) {
      // increase user win count by 1
      userWinCount = userWinCount + 1;
      // set recent winner as the user
      recentWinner = userName;
      // win message to the user
      myOutputValue = 'You win! ' + userName + ' chose ' + input + ' and the program played ' + programObject + '. ' + userName + ' won ' + userWinCount + ' times and the program won ' + programWinCount + ' times. There were ' + drawCount + ' draws.';
    }
    // if user gives invalid input
    if (!(input == 'scissors' || input == 'paper' || input == 'stone')) {
      myOutputValue = 'Invalid input. Please enter "scissors", "paper", or "stone".';
    }
  }
  return myOutputValue;
};
