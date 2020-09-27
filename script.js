var userWin = 0;
var totalGames = 0;
var computerWin = 0;
var drawRounds = 0;
var previousWin = '';
var winner = '';

var main = function (input) {
  // input validation
  var myOutputValue = '';
  if (input != 'Rock' || input != 'Paper' || input != 'Scissors') {
    myOutputValue = 'Input error, please ensure that input is  either  Rock,  Paper or Scissors';
    totalGames = totalGames;
  }
  //Computer win scenarios
  var computerRPS = randomRPS();
  if ((input == 'Rock' && computerRPS == 'Paper') || (input == 'Paper' && computerRPS == 'Scissors') || (input == 'Scissors' && computerRPS == 'Rock')) {
    computerWin = computerWin + 1;
    userWin = userWin;
    drawRounds = drawRounds;
    totalGames = totalGames + 1;
    winner = 'computer';
    myOutputValue = `You lost. We have played ${totalGames}, in which you won ${userWin} times, computer won ${computerWin} and there were ${drawRounds}`;
  }
  // Normal - User win scenarios
  if ((input == 'Rock' && computerRPS == 'Scissors') || (input == 'Paper' && computerRPS == 'Rock') || (input == 'Scissors' && computerRPS == 'Paper')) {
    computerWin = computerWin;
    userWin = userWin + 1;
    drawRounds = drawRounds;
    totalGames = totalGames + 1;
    winner = 'user';
    myOutputValue = `You won. We have played ${totalGames}, in which you won ${userWin} times, computer won ${computerWin} and there were ${drawRounds}`;
  }
  // Normal - Draw scenarios
  if (input == computerRPS) {
    computerWin = computerWin;
    userWin = userWin;
    drawRounds = drawRounds + 1;
    totalGames = totalGames + 1;
    myOutputValue = `Its a draw. We have played ${totalGames}, in which you won ${userWin} times, computer won ${computerWin} and there were ${drawRounds}, and the true winner is ${previousWin}`;
    if (totalGames == 0) {
      myOutputValue = `Its a draw. We have played ${totalGames}, in which you won ${userWin} times, computer won ${computerWin} and there were ${drawRounds}`;
    }
  }
  // Previous round's winner
  previousWin = winner;
  return myOutputValue;
};

var randomRPS = function () {
  var randomDraw = '';
  var randomNumber = Math.random() * 3;
  var randomInteger = Math.floor(randomNumber);
  var randNum = randomInteger + 1;
  console.log(randNum);
  if (randNum == 1) {
    randomDraw = 'Rock';
  }
  if (randNum == 2) {
    randomDraw = 'Paper';
  }
  if (randNum == 3) {
    randomDraw = 'Scissors';
  }
  return randomDraw;
};
