var diceRoll = function () {
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's anumber from 0 - 2 ... add 1
  var diceNumber = randomInteger + 1;
  console.log('roll');
  console.log(diceNumber);
  return diceNumber;
};

var scissorsOrPaperOrStone = function () {
  var winninganswer;
  // if diceroll lands on 1, scissors will be generated
  var scissorsPaperStone = diceRoll();
  if (scissorsPaperStone == 1) {
    scissorsPaperStone = 'scissors';
  }
  // if diceroll lands on 2, paper will be generated
  if (scissorsPaperStone == 2) {
    scissorsPaperStone = 'paper';
  }
  // if diceroll lands on 3,stone will be generated
  if (scissorsPaperStone == 3) {
    scissorsPaperStone = 'stone';
  }

  return winninganswer;
};
// Diceroll to generate scissors, paper or stone and make sure a win/lose/draw output will happen depending on the results
var main = function (input) {
  var answer = scissorsOrPaperOrStone();
  if (input == 'scissors' && diceRoll == 1 || input == 'stone' && diceRoll == 2 || input == 'paper' && diceRoll == 3) {
    myOutputValue = 'you draw';
    if (input == 'scissors' && diceRoll == 2 || input == 'stone' && diceRoll == 3 || input == 'paper' && diceRoll == 1) {
      myOutputValue = 'you lose';
    }
    if (input == 'scissors' && diceRoll == 3 || input == 'stone' && diceRoll == 1 || input == 'paper' && diceRoll == 2) {
      myOutputValue = 'you win';
    }
    var myOutputValue = '';
    return myOutputValue;
  }

  var counter = 0;
  var guessesCorrect = 0;
  function playGame(guess) {
    counter += 1;
    var myOutputValue = 'This is guess number ' + counter;

    var winningAnswer = scissorsOrPaperOrStone();
    if (guess == winningAnswer) {
      guessesCorrect += 1;
      myOutputValue = 'You win';
    }
  }
  playGame(input);
};
