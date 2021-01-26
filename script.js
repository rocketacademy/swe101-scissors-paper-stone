// need to add code for inputting name
var playerName = '';

// set global counter values

var playerWinCounter = 0;
var computerWinCounter = 0;
var gameCounter = 0;

var main = function (inputGuess) {
  var myOutputValue;

  // user input scissor/paper/stone
  // input validation
  if (inputGuess !== 'scissors'
  || inputGuess !== 'paper'
  || inputGuess !== 'stone') {
    myOutputValue = 'please input either scissors, paper or stone for the game to proceed :)';
  }

  // program generates random scissor/paper/stone

  var randomHandInteger = Math.floor(Math.random() * 3);
  var randomHandName;
  var gameResult;

  if (randomHandInteger == 0) {
    randomHandName = 'scissors';
  }
  if (randomHandInteger == 1) {
    randomHandName = 'paper';
  }
  if (randomHandInteger == 2) {
    randomHandName = 'stone';
  }

  // gameCounter still runs even when result is a draw
  // if user == random, draw

  if (randomHandName == inputGuess) {
    gameCounter = gameCounter + 1;
    gameResult = 'It is a draw.';
  }

  // if user gives scissor while random gives paper, user wins
  // if user gives scissor while random gives stone, computer wins

  if (inputGuess == 'scissors' && randomHandName == 'paper') {
    playerWinCounter = playerWinCounter + 1;
    gameCounter = gameCounter + 1;
    gameResult = 'You win! Congrats.';
  }
  if (inputGuess == 'scissors' && randomHandName == 'stone') {
    computerWinCounter = computerWinCounter + 1;
    gameCounter = gameCounter + 1;
    gameResult = 'Computer wins! Bummer.';
  }

  // if user gives paper while random gives stone, user wins
  // if user gives paper while random gives scissor, computer wins

  if (inputGuess == 'paper' && randomHandName == 'stone') {
    playerWinCounter = playerWinCounter + 1;
    gameCounter = gameCounter + 1;
    gameResult = 'You win! Congrats.';
  }
  if (inputGuess == 'paper' && randomHandName == 'scissors') {
    computerWinCounter = computerWinCounter + 1;
    gameCounter = gameCounter + 1;
    gameResult = 'Computer wins! Bummer.';
  }

  // if user gives stone while random gives scissor, user wins
  // if user gives stone while random gives paper, computer wins

  if (inputGuess == 'stone' && randomHandName == 'scissors') {
    playerWinCounter = playerWinCounter + 1;
    gameCounter = gameCounter + 1;
    gameResult = 'You win! Congrats.';
  }
  if (inputGuess == 'stone' && randomHandName == 'paper') {
    computerWinCounter = computerWinCounter + 1;
    gameCounter = gameCounter + 1;
    gameResult = 'Computer wins! Bummer.';
  }

  var playerWinPercentage = playerWinCounter / gameCounter * 100;
  var computerWinPercentage = computerWinCounter / gameCounter * 100;

  if (inputGuess == 'scissors'
  || inputGuess == 'paper'
  || inputGuess == 'stone') {
    myOutputValue = 'You chose ' + inputGuess + '.' + '<br>' + 'The computer chose ' + randomHandName + '. ' + '<br><br>' + gameResult + '<br><br>' + 'So for ' + playerName + ', you have been winning ' + playerWinCounter + ' out of a total of ' + gameCounter + ' games, with a ' + playerWinPercentage + '% rate of winning.' + '<br><br>' + 'The computer has been winning ' + computerWinCounter + ' times, with a ' + computerWinPercentage + '% rate of winning.';
  }

  // win counter checker
  console.log('playerWinCounter ' + playerWinCounter);
  console.log('computerWinCounter ' + computerWinCounter);
  console.log('gameCounter ' + gameCounter);

  return myOutputValue;
};
