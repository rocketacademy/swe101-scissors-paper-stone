// random number from 0 to 2
var randomNum = function () {
  var numZeroTotwo = Math.floor(Math.random() * 3);
  return numZeroTotwo;
};
// assign value to words
var assignNumberToWords = function () {
  var numGenerator = randomNum();
  if (numGenerator == 0) {
    return 'scissor';
  }
  if (numGenerator == 1) {
    return 'rock';
  }
  if (numGenerator == 2) {
    return 'paper';
  }
  return 'got bug';
};

var main = function (input) {
  var scissorPaperStone = assignNumberToWords();
  console.log('scissor-paper-stone');
  console.log(scissorPaperStone);
  var myOutputValue = 'hello world';
  if (input == scissorPaperStone) {
    myOutputValue = 'you win';
  } return myOutputValue;
};
