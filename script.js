// random number from 0 to 2
var randomNum = function () {
  var numZeroTotwo = Math.floor(Math.random() * 3);
  return numZeroTotwo;
};
// assign value to words
var assignNumberToWords = function () {
  var numGenerator = randomNum();
  if (numGenerator == 0) {
    return 'scissors';
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
  // condition of the game = scissors < rock || rock < paper || paper < scissors
  // If both parties choose the same object, it's a draw.
  if (input == scissorPaperStone) {
    myOutputValue = 'draw';
    console.log('draw!');
  }
  else if (input == 'rock' && scissorPaperStone == 'scissors'
   || input == 'paper' && scissorPaperStone == 'rock'
   || input == 'scissors' && scissorPaperStone == 'paper') {
    myOutputValue = 'you win';
    console.log('you win');
  }
  else {
    myOutputValue = 'you lose';
    console.log('you lose');
  }

  return myOutputValue;
};
