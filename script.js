// FUNCTION 1: generate a random number to represent scissors, paper or stone.
var genRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomIntegar = Math.floor(randomDecimal);
  var randomNumber = randomIntegar + 1;
  return randomNumber;
};

var genRandomGesture = function () {
  var computerGesture = genRandomNumber();

  if (computerGesture == 1) {
    computerGesture = 'scissors';
  }
  if (computerGesture == 2) {
    computerGesture = 'paper';
  }
  if (computerGesture == 3) {
    computerGesture = 'stone';
  }
  return computerGesture;
};

var main = function (input) {
  var myOutputValue = 'hello world';
  var computerGesture = genRandomGesture();

  // assign a number to each scissors, paper and stone.
  if (input == 'scissors') {
    var userGesture = 1;
    userGesture = 'scissors';
  }
  if (input == 'paper') {
    var userGesture = 2;
    userGesture = 'paper';
  }
  if (input == 'stone') {
    var userGesture = 3;
    userGesture = 'stone';
  }
  console.log('user gesture:' + userGesture);
  console.log('computer gesture:' + computerGesture);

  // set a draw condition
  if (userGesture == computerGesture) {
    myOutputValue = `The computer chose ${computerGesture}.<br> You chose ${input}. <br> Its a draw!`;
  }
  // set winning conditions
  if ((userGesture == 'scissors' && computerGesture == 'paper')
    || (userGesture == 'paper' && computerGesture == 'stone')
    || (userGesture == 'stone' && computerGesture == 'scissors')) {
    myOutputValue = `The computer chose ${computerGesture}.<br> You chose ${input}. <br> You won!`;
  }
  // set losing conditions
  if ((userGesture == 'scissors' && computerGesture == 'stone')
    || (userGesture == 'paper' && computerGesture == 'scissors')
    || (userGesture == 'stone' && computerGesture == 'paper')) {
    myOutputValue = `The computer chose ${computerGesture}.<br> You chose ${input}. <br> You lost!`;
  }

  return myOutputValue;
};
