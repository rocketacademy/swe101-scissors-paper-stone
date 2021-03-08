// random number from 0 to 2
var randomNum = function () {
  var numZeroTotwo = Math.floor(Math.random() * 3);
  return numZeroTotwo;
};

// user win
var numOfUserWin = 0;

// computer win
var numOfComputerWin = 0;

// total game
var totalMatch = 0;

// winning percentage
var userWinPercentage = 0;
var computerWinPercentage = 0;

// number of draw
var numOfDraw = 0;

// assign value to words
var assignNumberToWords = function () {
  var numGenerator = randomNum();
  if (numGenerator == 0) {
    return 'scissors';
  }
  if (numGenerator == 1) {
    return 'stone';
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

  // If both parties choose the same object, it's a draw.
  if (input == scissorPaperStone) {
    numOfDraw = numOfDraw + 1;
    myOutputValue = 'Draw!! You draw ' + numOfDraw + ' times. You win ' + numOfUserWin + ' times ' + userWinPercentage + '%. Computer win ' + numOfComputerWin + ' times ' + computerWinPercentage + '%';
    console.log('draw!');
  }
  // condition of the game = scissors < rock || rock < paper || paper < scissors
  else if (input == 'stone' && scissorPaperStone == 'scissors'
   || input == 'paper' && scissorPaperStone == 'stone'
   || input == 'scissors' && scissorPaperStone == 'paper') {
    totalMatch = totalMatch + 1;
    numOfUserWin = numOfUserWin + 1;
    userWinPercentage = (numOfUserWin / totalMatch) * 100;
    computerWinPercentage = (numOfComputerWin / totalMatch) * 100;
    myOutputValue = 'You win ' + numOfUserWin + ' times ' + userWinPercentage + '%. Computer win ' + numOfComputerWin + ' times ' + computerWinPercentage + '%. You draw ' + numOfDraw + ' times.';
    console.log('you win ');
  }

  else {
    numOfComputerWin = numOfComputerWin + 1;
    totalMatch = totalMatch + 1;
    userWinPercentage = (numOfUserWin / totalMatch) * 100;
    computerWinPercentage = (numOfComputerWin / totalMatch) * 100;
    myOutputValue = 'You lose. Computer win ' + numOfComputerWin + ' times ' + computerWinPercentage + '%. You win ' + numOfUserWin + ' times ' + userWinPercentage + '%. you draw ' + numOfDraw + ' times.';
    console.log('you lose');
  }
  return myOutputValue;
};
