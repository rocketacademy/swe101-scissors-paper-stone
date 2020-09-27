// ANSEL'S SUBMISSION AT 6.48 PM!

var firstEntry = 0;
var numberOfPlays = 0;
var numberOfDraws = 0;
var numberOfPlayerWins = 0;
var numberOfComputerWins = 0;
var name = '';

var choices = ['scissors', 'paper', 'stone'];

function randomNumberGenerator(integer) {
  return Math.floor(Math.random() * (integer));
}

// testing:
// console.log(randomNumberGenerator(3));

function computerMove() {
  // choose number between 0 and 2
  var chosenRandomNumber = randomNumberGenerator(3);
  // choose scissors, paper, or stone (randomly)
  var computerChoice = choices[chosenRandomNumber];
  // return one of scissors, paper, or stone
  return computerChoice;
}

// testing:
/*
for (var i = 1; i < 10; i++) {
  console.log(computerMove());
}
*/

function isDraw(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return true;
  }
  return false;
}

function didPlayerWin(player1Choice, player2Choice) {
  if (player1Choice == 'scissors' && player2Choice == 'paper') {
    return true;
  }
  if (player1Choice == 'paper' && player2Choice == 'stone') {
    return true;
  }
  if (player1Choice == 'stone' && player2Choice == 'scissors') {
    return true;
  }
  return false;
}

// testing
// console.log(isDraw('scissors', 'scissors'));

function playScissorsPaperStone(userChoice) {
  numberOfPlays += 1;
  var computerChoice = computerMove();
  // for testing: var computerChoice = 'scissors';
  var draw = isDraw(userChoice, computerChoice);
  var didUserWin = didPlayerWin(userChoice, computerChoice);
  var finalOutcome;

  if (draw == true) {
    finalOutcome = 'It was a draw! <br> User ' + name + ' chose ' + userChoice + ' and computer chose ' + computerChoice;
    numberOfDraws += 1;
  } else if (didUserWin == true) {
    finalOutcome = 'User won! <br> User ' + name + ' chose ' + userChoice + ' and computer chose ' + computerChoice;
    numberOfPlayerWins += 1;
  } else {
    finalOutcome = 'Computer won! <br> User ' + name + ' chose ' + userChoice + ' and computer chose ' + computerChoice;
    numberOfComputerWins += 1;
  }

  // eslint-disable-next-line no-useless-concat
  var printStatement = finalOutcome + '. <br> This is turn number ' + numberOfPlays + ', player ' + name + ' has won ' + numberOfPlayerWins + ' game(s)' + ' and the computer has won ' + numberOfComputerWins + ' time(s)' + ' and the number of draws is ' + numberOfDraws + '<br> Keep up the good work!!!';
  return printStatement;

  /* Testing!
  console.log('user choice was' + userChoice);
  console.log('number of plays: ' + numberOfPlays);
  console.log('computer choice was ' + computerChoice);
  console.log('is there a draw? ' + draw);
  console.log('did user win? ' + didUserWin);
  */
}

// testing: console.log(playScissorsPaperStone('scissors'));

function isValidInput(userInput) {
  var isInChoices = choices.includes(userInput);
  if (isInChoices == true) {
    return true;
  }
  return false;
}

// testing:
// console.log(isValidInput('scissors'));

// testing:
// console.log(choices.includes('scissors'));

var main = function (userChoice) {
  if (firstEntry == 0) {
    firstEntry += 1;
    name = userChoice;
    return 'Thanks for your name, ' + name + ', now we can start playing! enter scissors, paper, or stone on each turn. strictly lowercase inputs!';
  }
  if (isValidInput(userChoice) == false) {
    return 'Not valid input... the only valid inputs are ' + choices + ' so please try again';
  }
  return playScissorsPaperStone(userChoice);
};

// console.log(main('s'));
