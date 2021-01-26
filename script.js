// pointcounters for the user and computer
var pointOfDraw = 0;
var pointOfComputerwin = 0;
var pointOfPlayerWin = 0;
// creating a user name
var myOutputValue = '';
var currentGameMode = 'waiting for user name';

// scissors,paper,stone
// scissors,paper and stone will be randomized by dice 1-3
var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var main = function (input) {
  // user or computer wins variables
  var currentUserWin;
  var currentComputerWin;

  if (currentGameMode == 'waiting for user name') {
    // set the name
    userName = input;
    // now that we have the name, switch the mode
    currentGameMode = 'scs';

    myOutputValue = 'Hello ' + userName;
  }
  if (currentGameMode == 'scs') {
  }

  // input validation to kindly let the user know that there are only 3 input options
  var myOutputValue = 'Hello ' + userName + '.<br> You may only input scissors, paper or stone to play the game.<br> Enjoy!';
  // randomObjects is scissors paper and stone
  var randomObjects;
  var randomNumber = diceRoll();
  console.log(randomNumber);
  // user will choose either scissors, paper or stone
  // this will randomized using dice
  if (randomNumber == 1) {
    randomObjects = 'stone';
  }
  if (randomNumber == 2) {
    randomObjects = 'paper';
  }
  if (randomNumber == 3) {
    randomObjects = 'scissors';
  }
  console.log(randomObjects);

  // winning conditions
  // stone win scissors
  // paper win stone
  // scissors win paper
  // also the user will be notified on how many points he will have if he win
  if (input == 'scissors' && randomObjects == 'paper') {
    currentUserWin = pointOfPlayerWin + 1;
    myOutputValue = '' + userName + ' choose ' + input + '.<br> The computer chose paper.<br> You Win. <br>You have ' + currentUserWin + ' point.';
    pointOfPlayerWin = currentUserWin;
  }
  if (input == 'paper' && randomObjects == 'stone') {
    currentUserWin = pointOfPlayerWin + 1;
    myOutputValue = '' + userName + ' choose ' + input + '.<br> The computer chose stone.<br> You Win. You have ' + currentUserWin + ' point.';
    pointOfPlayerWin = currentUserWin;
  }
  if (input == 'stone' && randomObjects == 'scissors') {
    currentUserWin = pointOfPlayerWin + 1;
    myOutputValue = '' + userName + ' choose ' + input + '.<br> The computer chose scissors.<br> You Win.<br> You have ' + currentUserWin + ' point. ';
    pointOfPlayerWin = currentUserWin;
  }
  console.log(pointOfPlayerWin);
  // losing conditions
  // stone lose to paper
  // paper lose to scissors
  // scissors lose to stone
  // the user will know how many points the computer will have if user lost
  if (input == 'scissors' && randomObjects == 'stone') {
    currentComputerWin = pointOfComputerwin + 1;
    myOutputValue = '' + userName + ' choose ' + input + '.<br> The computer chose stone.<br> You Lose.<br> The Computer wins ' + currentComputerWin + ' point ';
    pointOfComputerwin = currentComputerWin;
  }
  if (input == 'paper' && randomObjects == 'scissors') {
    currentComputerWin = pointOfComputerwin + 1;
    myOutputValue = '' + userName + ' choose ' + input + '.<br> The computer chose scissors.<br> You Lose.<br> The Computer wins ' + currentComputerWin + ' point ';
    pointOfComputerwin = currentComputerWin;
  }
  if (input == 'stone' && randomObjects == 'paper') {
    currentComputerWin = pointOfComputerwin + 1;
    myOutputValue = '' + userName + ' choose ' + input + '.<br> The computer chose paper.<br> You Lose.<br> The Computer wins ' + currentComputerWin + ' point ';
    pointOfComputerwin = currentComputerWin;
  }

  // if the user input eg stone and the output which is stone is the same, the results will a draw
  if (input == randomObjects) {
    pointOfDraw = pointOfDraw + 1;
    myOutputValue = '' + userName + ' choose ' + input + '.<br> The Computer chose ' + randomObjects + '<br> Its a draw.<br> Total draw so far is ' + pointOfDraw + '';
  }

  return myOutputValue;
};
