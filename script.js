// Computer guess of random number up to 3
var scissorsPaperStoneAction = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.round(randomDecimal);
  var randomNumber = randomInteger + 1;
  return randomNumber;
};

// assign 3 words to each of the integers
function computerAction(num) {
  // 1 is scissors
  var randomAction = 'scissors';
  // 2 is paper
  if (num == 2) {
    randomAction = 'paper';
  }
  // 3 is stone
  if (num == 3) {
    randomAction = 'stone';
  }
  return randomAction;
}

// when i call this randomAnswer function, the computer generates a random word
var randomAnswer = function () {
  var numberGenerated = scissorsPaperStoneAction(3);
  console.log(numberGenerated);

  return computerAction(numberGenerated);
};

// declare global variable to store the previous winning log
var previousLog = 0;
var gameLog = 0;

// input username
var currentGameMode = 'waiting for user name';
var userName = '';

// Actual Gameplay with two states
// GameState 1 (Username)
var main = function (input) {
  var myOutputValue = '';

  if (currentGameMode == 'waiting for user name') {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = 'Scissors Paper Stone';

    myOutputValue = 'Hello ' + userName + ', lets play SPS! Input scissors, paper or stone to start! ';

    // GameState2 SPS
  } else if (currentGameMode == 'Scissors Paper Stone') {
    console.log(input);
    var currentLog = previousLog;

    // if the user's guess matches the computer random guess, then add 1 to winning log for all gamestates

    gameLog = gameLog + 1;

    // user loses in SPS

    var winDrawOrLose = 'You lost, ' + userName + '. What a Bummer! ';
    var computerAnswer = randomAnswer();

    // if guess = computer selection, its a draw

    if (input == computerAnswer) {
      console.log(computerAnswer);
      currentLog = previousLog;
      winDrawOrLose = 'You drew, ' + userName + '. What a Bummer! ';
    }
    // if guess is scissors and computer selects paper, you win.
    // if guess is stone and computer selects scissors, you win.
    // if guess is paper and computer selects stone, you win.

    if ((input == 'scissors' && computerAnswer == 'paper') || (input == 'paper' && computerAnswer == 'stone') || (input == 'stone' && computerAnswer == 'scissors')) {
      currentLog = previousLog + 1;
      winDrawOrLose = 'Congratulations, ' + userName + ', you won! ';
    }

    var myOutputValue = winDrawOrLose + 'You guessed ' + input + ' and the computer guessed ' + computerAnswer + '. Your winning log is ' + currentLog + '. You have won ' + currentLog + '/' + gameLog + 'times. Your percentage win rate is ' + (currentLog / gameLog) * 100 + '%';

    // Add input validation to kindly let the user know that there are only 3 input options, scissors, paper, stone

    if ((input != 'scissors') && (input != 'paper') && (input != 'stone')) {
      console.log((input != 'scissors') && (input != 'paper') && (input != 'stone'));
      myOutputValue = ' Please only type scissors, paper, or stone into the text box for this game!';
    }
    previousLog = currentLog;
  }
  return myOutputValue;
};
