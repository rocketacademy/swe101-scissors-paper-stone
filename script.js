var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var sps = function () {
  var randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    return SCISSORS;
  }
  if (randomNumber == 1) {
    return PAPER;
  }
  return STONE;
};

var main = function (input) {
  var computerInput = sps();
  console.log("computer input" + computerInput);
  var playerInput = input;
  console.log("player input" + playerInput);
  var genericOutput =
    "Your guess:" + playerInput + "Computer guess:" + computerInput;
  var winOutput = "You win!";
  var loseOutput = "Computer won!";
  var myOutputValue = genericOutput;
  //input validation to let user know there are only 3 input options and ask them to try again
  if (input != SCISSORS && input != PAPER && input != STONE) {
    myOutputValue =
      'Please input either "scissors", "paper", or "stone" to play.';

    return myOutputValue;
  }

  if (
    (playerInput == SCISSORS && computerInput == PAPER) ||
    (playerInput == PAPER && computerInput == STONE) ||
    (playerInput == PAPER && computerInput == STONE) ||
    (playerInput == STONE && computerInput == SCISSORS)
  ) {
    myOutputValue = myOutputValue + winOutput;

    return myOutputValue;
  }

  if (
    (playerInput == PAPER && computerInput == SCISSORS) ||
    (playerInput == STONE && computerInput == PAPER) ||
    (playerInput == SCISSORS && computerInput == STONE)
  ) {
    myOutputValue = myOutputValue + loseOutput;

    return myOutputValue;
  }
};

//input is either scissors, paper, or stone

//assign each input with a number to random choose

//output is whether the user won, the program won, or it's a draw

//scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object its a draw.
