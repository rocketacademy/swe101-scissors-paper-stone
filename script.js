// pointcounters for the user and computer
var pointOfDraw = 0;
var pointOfComputerwin = 0;
var pointOfPlayerWin = 0;
var computerLose = 0;
var playerLose = 0;
// scissors,paper,stone
// scissors,paper and stone will be randomized by dice 1-3
var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var main = function (input) {
  var myOutputValue = 'hello world';
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
  if (input == 'scissors' && randomObjects == 'paper');
  pointOfPlayerWin = pointOfPlayerWin + 1;
  myOutputValue = 'You choose ' + input + '. The computer chose paper. You Win. You have ' + pointOfPlayerWin + ' ';
  if (input == 'paper' && randomObjects == 'stone');
  myOutputValue = 'You choose ' + input + '. The computer chose stone. You Win. You have ' + pointOfPlayerWin + '';
  if (input == 'stone' && randomObjects == 'scissors');
  myOutputValue = 'You choose ' + input + '. The computer chose scissors. You Win. You have ' + pointOfPlayerWin + ' ';
  console.log(pointOfPlayerWin);
  // losing conditions
  // stone lose to paper
  // paper lose to scissors
  // scissors lose to stone
  if (input == 'scissors' && randomObjects == 'stone');
  pointOfComputerwin = pointOfComputerwin + 1;
  myOutputValue = 'You choose ' + input + '. The computer chose stone. You Lose. The Computer win ' + pointOfComputerwin + '';
  if (input == 'paper' && randomObjects == 'scissors');
  myOutputValue = 'You choose ' + input + '. The computer chose scissors. You Lose. The Computer win ' + pointOfComputerwin + '';
  if (input == 'stone' && randomObjects == 'paper');
  myOutputValue = 'You choose ' + input + '. The computer chose paper. You Lose. The Computer win ' + pointOfComputerwin + '';

  // if the user input eg stone and the output which is stone is the same, the results will a draw
  if (input == randomObjects) {
    pointOfDraw = pointOfDraw + 1;
    myOutputValue = 'You choose ' + input + ' The Computer chose ' + randomObjects + ' its a draw. Total draw so far is ' + pointOfDraw + '';
  }

  return myOutputValue;
};
