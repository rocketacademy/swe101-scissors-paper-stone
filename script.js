// Basic Scissors Paper Stone (reference answer)
// default settings
var computerGuess = '';
var outcome = '';
var userName = '';
var currentGameMode = 'waiting for user name';

//win + loss record 
var currentLog = 0;
var totalLog = 0;
var message = '';

var main = function (userGuess) { 
  // in index.html, i've included a placeholder
  
  // set the name if there is no name 
  if (currentGameMode == 'waiting for user name') {
    userName = userGuess; 
    currentGameMode = 'scissors paper stone game';
    message = 'Hi ' + userName + ' Please choose scissors, paper, stone';
    return message;
  }

  // if there is a name, store the name and run the whole game 
  else if (currentGameMode == 'scissors paper stone game') {

    // input validation: user must input either scissors, paper, or stone
    if (!(userGuess == 'scissors' 
    || userGuess == 'paper'
    || userGuess == 'stone')) {
      message = 'Hi ' + userName + '. Please choose scissors, paper, or stone';
      return message;
    }
    else {
      computerGuess = computerGame();
      outcome = computerProgram(userGuess);
      // when user starts playing, number of games increases
      totalLog = totalLog + 1;
    }

    message = 'The computer chose ' + computerGuess + '.\n' + 'You chose ' + userGuess + '.' + '<br>' + outcome + '<br>' + 'So far ' + userName + ', you\'ve been winning ' + currentLog + '/' + totalLog;      
  }

  // print message
  return message;
};

// the program internally randomly returns string scissors, paper, or stone
var computerGame = function () {
  // computer produces random number 1,2,3
  var randomNumber = Math.floor ( Math.random() * 4 );

  // assign 1: scissors
  var computerChoice = 'scissors';

  // assign 2: paper
  if (randomNumber == 2) {
    computerChoice = 'paper';
  }

  // assign 3: stone 
  if (randomNumber == 3) {
    computerChoice = 'stone';
  }

  return computerChoice;
}

// the program outputs whether the user won, user lost, user drew
var computerProgram = function (userGuess) {

  // run computer random guess
  computerGuess = computerGame ();
  console.log('computer guesses');
  console.log(computerGuess);
  console.log('user guesses');
  console.log(userGuess);
  
  // winning logic: 
  // draw 
  if (userGuess == computerGuess) {
    outcome = 'It\'s a draw';
    console.log('banana');
  } 
  /* user wins when: 
  user: scissors && computer: paper 
  user: paper && computer: stone
  user: stone && computer: scissors */ 
  else if ( 
    (userGuess == 'scissors' && computerGuess == 'paper') ||
    (userGuess == 'paper' && computerGuess == 'stone') ||
    (userGuess == 'stone' && computerGuess == 'scissors')
  ) {
    outcome = 'You win! Awesome.';

    // increase my winning log by 1 
    currentLog = currentLog + 1;

  } 
  else {
    outcome = 'You lose! Bummer.';
  }
  return outcome;
}
