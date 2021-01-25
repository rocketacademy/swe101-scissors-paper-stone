var comWins = 0;
var playerWins = 0;
var drawCount = 0;
var winLossRecord;
var finalResult;

var rollDice = function () {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  return randomInteger;
};
var lossCondition = function (input, comGuess) {
  // Lose condition: computer guesses winning sign over the player
  if ((comGuess == 'stone' && input == 'scissors')
  || (comGuess == 'scissors' && input == 'paper')
  || (comGuess == 'paper' && input == 'stone')) {
    comWins = comWins + 1;
    console.log('Number of times computer won: ' + comWins);
    finalResult = 'lose';
  }
};

var drawCondition = function (input, comGuess) {
// draw condition: both guesses are the same
  if (input == comGuess) {
    drawCount = drawCount + 1;
    console.log('Number of times draw: ' + drawCount);
    finalResult = 'draw';
  }
};

var winCondition = function (input, comGuess) {
  // win condition: scissors beats paper, paper beats stone, stone beats scissors
  if ((input == 'stone' && comGuess == 'scissors')
  || (input == 'scissors' && comGuess == 'paper')
  || (input == 'paper' && comGuess == 'stone')) {
    playerWins = playerWins + 1;
    console.log('Number of wins by player: ' + playerWins);
    finalResult = 'win';
  }
};

var inputValidation = function (input) {
  if ((input != 'scissors') || (input != 'paper') || (input != 'stone')) {
    finalResult = 'invalid';
  }
};
var finalOutput = function (input, comGuess) {
  if (finalResult == 'lose') {
    return 'You lost! <br><br>' + comGuess + ' beats ' + input + '. <br><br>The computer has won <b>' + comWins + '</b> times.';
  }
  if (finalResult == 'draw') {
    return 'It is a draw! <br><br>You both chose ' + input + '. <br><br>You have come to a draw <b>' + drawCount + '</b> time(s).';
  }
  if (finalResult == 'win') {
    return 'Congratulations! <br><br>You beat the computer. ' + input + ' beats ' + comGuess + '. <br><br>You have won <b>' + playerWins + '</b> times.';
  }
  if (finalResult == 'invalid') {
    return 'Only scissors, paper or stone are acceptable answers';
  }
};

var main = function (input) {
  var comGuess = rollDice();
  var myOutputValue;

  // assign specific numbers to a sign
  if (comGuess == 0) {
    comGuess = 'scissors';
  }

  if (comGuess == 1) {
    comGuess = 'paper';
  }

  if (comGuess == 2) {
    comGuess = 'stone';
  }

  console.log('Computer guessed');
  console.log(comGuess);

  inputValidation(input);
  lossCondition(input, comGuess);
  drawCondition(input, comGuess);
  winCondition(input, comGuess);

  myOutputValue = finalOutput(input, comGuess);
  winLossRecord = '<br>Your win-loss record is <b>' + playerWins + '</b> wins and <b>' + comWins + '</b> losses.';

  return myOutputValue + ' ' + winLossRecord;
};
