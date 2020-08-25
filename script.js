//  set diceRoll to a maximum of 3 choices.
//  will be pairing each number to a choice
//  1. 'scissors'
//  2. 'paper'
//  3. 'stone'
var computerSpsRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var spsNumber = randomInteger + 1;
  return spsNumber;
};
// Disable ESLint rule no-unused-vars on next line because this code
// is a learning tool and not a full-fledged node app.
// eslint-disable-next-line no-unused-vars
var main = function (input) {
  var myOutputValue;
  var spsRoll = computerSpsRoll();
  console.log(spsRoll);

  if (spsRoll == 1) {
    spsRoll = 'scissors';
  }

  if (spsRoll == 2) {
    spsRoll = 'paper';
  }

  if (spsRoll == 3) {
    spsRoll = 'stone';
  }

  // Win conditions

  if (input == 'scissors' && spsRoll == 'paper') {
    myOutputValue = 'you won this round! Computer chose ' + spsRoll;
  }
  if (input == 'paper' && spsRoll == 'stone') {
    myOutputValue = 'you won this round! Computer chose ' + spsRoll;
  }
  if (input == 'stone' && spsRoll == 'scissors') {
    myOutputValue = 'you won this round! Computer chose ' + spsRoll;
  }
  // Lose conditions
  if (input == 'scissors' && spsRoll == 'stone') {
    myOutputValue = 'you lost! why you so stupid! Computer chose ' + spsRoll;
  }
  if (input == 'paper' && spsRoll == 'scissors') {
    myOutputValue = 'you lost! why you so stupid! Computer chose ' + spsRoll;
  }
  if (input == 'stone' && spsRoll == 'paper') {
    myOutputValue = 'you lost! why you so stupid! Computer chose ' + spsRoll;
  }
  // Draw conditions
  if (input == 'scissors' && spsRoll == 'scissors') {
    myOutputValue = 'Draw! lets challenge again. Computer chose ' + spsRoll;
  }
  if (input == 'paper' && spsRoll == 'paper') {
    myOutputValue = 'Draw! lets challenge again. Computer chose' + spsRoll;
  }
  if (input == 'stone' && spsRoll == 'stone') {
    myOutputValue = 'Draw! lets challenge again. Computer chose' + spsRoll;
  }
  return myOutputValue;
};
