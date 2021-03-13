var userWins = 0;
var computerWins = 0;

var numberGenerator = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var finalNumber = randomInteger + 1;
  return finalNumber;
};

var assignMoveToNumber = function () {
  var generatedNumber = numberGenerator();
  console.log('number:' + generatedNumber);
  if (generatedNumber == 1) {
    return 'scissors';
  }
  if (generatedNumber == 2) {
    return 'paper';
  }
  if (generatedNumber == 3) {
    return 'stone';
  }

  return 'something went wrong';
};

var main = function (input) {
  var computersMove = assignMoveToNumber();
  var myOutputValue = 'enter valid input';
  console.log('input:' + input);
  console.log('computer:' + computersMove);

  if (input == computersMove) {
    myOutputValue = 'DRAW! your move: ' + input + ', computer move: ' + computersMove + '-----User Wins:' + userWins + '-----Computer Wins:' + computerWins;
  }

  if (input == 'scissors' && computersMove == 'paper') {
    userWins = userWins + 1;
    myOutputValue = 'you WIN! your move: ' + input + ', computer move: ' + computersMove + '-----User Wins:' + userWins + '-----Computer Wins:' + computerWins;
  }

  if (input == 'scissors' && computersMove == 'stone') {
    computerWins = computerWins + 1;
    myOutputValue = 'you LOSE! your move: ' + input + ', computer move: ' + computersMove + '-----User Wins:' + userWins + '-----Computer Wins:' + computerWins;
  }

  if (input == 'paper' && computersMove == 'stone') {
    userWins = userWins + 1;
    myOutputValue = 'you WIN! your move: ' + input + ', computer move: ' + computersMove + '-----User Wins:' + userWins + '-----Computer Wins:' + computerWins;
  }

  if (input == 'paper' && computersMove == 'scissors') {
    computerWins = computerWins + 1;
    myOutputValue = 'you LOSE! your move: ' + input + ', computer move: ' + computersMove + '-----User Wins:' + userWins + '-----Computer Wins:' + computerWins;
  }

  if (input == 'stone' && computersMove == 'scissors') {
    userWins = userWins + 1;
    myOutputValue = 'you WIN! your move: ' + input + ', computer move: ' + computersMove + '-----User Wins:' + userWins + '-----Computer Wins:' + computerWins;
  }

  if (input == 'stone' && computersMove == 'paper') {
    computerWins = computerWins + 1;
    myOutputValue = 'you LOSE! your move: ' + input + ', computer move: ' + computersMove + '-----User Wins:' + userWins + '-----Computer Wins:' + computerWins;
  }

  return myOutputValue;
};
