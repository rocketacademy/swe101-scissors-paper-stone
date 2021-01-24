var validInput1 = 'scissors';
var validInput2 = 'paper';
var validInput3 = 'stone';

var getComputerSps = function () {
  // generate a value between 0 and 2.9999...
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // number type ranges from 1 to 3, inclusive.
  var numberType = randomInteger + 1;

  // 1: scissors
  if (numberType == 1) {
    return validInput1;
  }

  // 2: paper
  if (numberType == 2) {
    return validInput2;
  }

  // 3: stone
  return validInput3;
};

var getSpsEmoji = function (spsType) {
  // scissors
  if (spsType == validInput1) {
    return '&#9986;&#65039;';
  }

  // paper
  if (spsType == validInput2) {
    return '&#128220;';
  }

  // stone
  return '&#128142;';
};

var getWinningState = function (playerInput, computerInput) {
  // draw conditions:
  // same inputs from both
  if (playerInput == computerInput) {
    return "<br /><br />It's a draw!";
  }
  // winning conditions:
  // player chose scissors, computer chose paper
  // player chose paper, computer chose stone
  // player chose stone, computer chose paper
  if (
    (playerInput == validInput1 && computerInput == validInput2)
    || (playerInput == validInput2 && computerInput == validInput3)
    || (playerInput == validInput3 && computerInput == validInput1)
  ) {
    return '<br /><br />You win! Congratulations!';
  }

  // losing conditions:
  // everything else
  return '<br /><br />You lose! Bummer.';
};

var main = function (input) {
  // when submit is hit, generate random type
  var computerSps = getComputerSps();

  var myOutputValue = 'The computer chose ' + computerSps + ' ' + getSpsEmoji(computerSps) + '.<br />You chose ' + input + ' ' + getSpsEmoji(input) + '.' + getWinningState(input, computerSps);

  return myOutputValue;
};
