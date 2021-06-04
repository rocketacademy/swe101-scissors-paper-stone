// Generate random number 1 to 3
var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

// Assign 1 to scissors, 2 to paper, 3 to stone
var generateHand = function () {
  var randomHand = diceRoll();
  if (randomHand == 1) {
    return 'scissors';
  }
  if (randomHand == 2) {
    return 'paper';
  }
  if (randomHand == 3) {
    return 'stone';
  }
};

var main = function (input) {
  var progHand = generateHand();
  var myOutputValue =
    'You lose. You chose ' + input + ' but I chose ' + progHand;

  // User wins if input is stone and hand is scissors, or if input is scissors and hand is paper, or if input is paper and hand is stone
  if (
    (input == 'stone' && progHand == 'scissors') ||
    (input == 'scissors' && progHand == 'paper') ||
    (input == 'paper' && progHand == 'stone')
  ) {
    myOutputValue = 'You win. You chose ' + input + ' but I chose ' + progHand;
  }

  // User draws if input and hand are the same
  if (input == progHand) {
    myOutputValue =
      'It is a draw. You chose ' + input + ' but I chose ' + progHand;
  }

  // Inform user there are only 3 input options
  if (input != 'stone' && input != 'scissors' && input != 'paper') {
    myOutputValue = 'There are only 3 input options, please try again.';
  }
  return myOutputValue;
};
