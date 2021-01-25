// create random dice function for a total result of 3
var randomDiceRoll = function () {
  // return 2;
  var randomBetNumber = Math.random() * 3;
  var randomInterger = Math.floor(randomBetNumber);
  var randomResult = randomInterger + 1;
  return randomResult;
};
// create base win/loss system
var previousWin = 0;
var currentWins = 0;
var previousLoss = 0;
var currentLoss = 0;

var main = function (input) {
  // 3 different random generated outcome assigned for scissors, paper, stone
  var randomNumber = randomDiceRoll();
  var randomWord;
  if (randomNumber == 1) {
    randomWord = 'scissors';
  }
  else if (randomNumber == 2) {
    randomWord = 'paper';
  }
  else if (randomNumber == 3) {
    randomWord = 'stone';
  }
  console.log(randomNumber);
  console.log(randomWord);

  var myOutputValue = 'invalid input';
  // 3 different inputs, scissors paper stone with point win/loss system
  if (input == randomWord) {
    currentWins = previousWin + 0;
    myOutputValue = 'you chose ' + input + ' and its a draw! try again! - current wins-loss record is ' + currentWins + ' wins and ' + currentLoss + ' losses.';
    previousWin = currentWins;
  }
  // if input is scissors

  else if (input == 'scissors' && randomWord == 'paper') {
    currentWins = previousWin + 1;
    myOutputValue = 'you chose ' + input + ' and won ' + randomWord + ' - current wins-loss record is ' + currentWins + ' wins and ' + currentLoss + ' losses.';
    previousWin = currentWins;
  }
  else if (input == 'scissors' && randomWord == 'stone') {
    currentLoss = previousLoss + 1;
    myOutputValue = 'you chose ' + input + ' and lost to ' + randomWord + ', please try again! - current wins-loss record is ' + currentWins + ' wins and ' + currentLoss + ' losses.';
    previousLoss = currentLoss;
  }
  // if input is paper

  else if (input == 'paper' && randomWord == 'stone') {
    currentWins = previousWin + 1;
    myOutputValue = 'you chose ' + input + ' and won ' + randomWord + ' - current wins-loss record is ' + currentWins + ' wins and ' + currentLoss + ' losses.';
    previousWin = currentWins;
  }
  else if (input == 'paper' && randomWord == 'scissors') {
    currentLoss = previousLoss + 1;
    myOutputValue = 'you chose ' + input + ' and lost to ' + randomWord + ', please try again! - current wins-loss record is ' + currentWins + ' wins and ' + currentLoss + ' losses.';
    previousLoss = currentLoss;
  }
  // if input is stone

  else if (input == 'stone' && randomWord == 'scissors') {
    currentWins = previousWin + 1;
    myOutputValue = 'you chose ' + input + ' and won ' + randomWord + ' - current wins-loss record is ' + currentWins + ' wins and ' + currentLoss + ' losses.';
    previousWin = currentWins;
  }
  else if (input == 'stone' && randomWord == 'paper') {
    currentLoss = previousLoss + 1;
    myOutputValue = 'you chose ' + input + ' and lost to ' + randomWord + ', please try again! - current wins-loss record is ' + currentWins + ' wins and ' + currentLoss + ' losses.';
    previousLoss = currentLoss;
  }
  console.log(randomWord);

  return myOutputValue;
};
