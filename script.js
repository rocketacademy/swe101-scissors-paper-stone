//input is either scissors, paper, or stone
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

// number of player wins, computer wins, and draws

var numPlayerWins = 0;
var numComputerWins = 0;
var numDraws = 0;

//assign each input with a number to random choose
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

  //output is whether the user won, the program won, or it's a draw
  var getGenericOutput = function () {
    return " Your guess: " + playerInput + " Computer guess: " + computerInput;
  };

  var getWinLossMessage = function () {
    return (
      " You won: " +
      numPlayerWins +
      " times | Computer won: " +
      numComputerWins +
      " times | Draws: " +
      numDraws
    );
  };

  var genericOutput = getGenericOutput(playerInput, computerInput);

  var winLossMessage = getWinLossMessage();

  var myOutputValue = genericOutput;

  var winOutput = " You win! ";
  var loseOutput = " Computer won! ";
  var drawOutput = " Its a draw! ";

  //input validation to let user know there are only 3 input options and ask them to try again
  if (input != SCISSORS && input != PAPER && input != STONE) {
    myOutputValue =
      'Please input either "scissors", "paper", or "stone" to play.';

    return myOutputValue;
  }
  //scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object its a draw.

  if (
    (playerInput == SCISSORS && computerInput == PAPER) ||
    (playerInput == PAPER && computerInput == STONE) ||
    (playerInput == PAPER && computerInput == STONE) ||
    (playerInput == STONE && computerInput == SCISSORS)
  ) {
    numPlayerWins += 1;
    myOutputValue = myOutputValue + winOutput + winLossMessage;

    return myOutputValue;
  }

  if (
    (playerInput == PAPER && computerInput == SCISSORS) ||
    (playerInput == STONE && computerInput == PAPER) ||
    (playerInput == SCISSORS && computerInput == STONE)
  ) {
    numComputerWins += 1;
    myOutputValue = myOutputValue + loseOutput + winLossMessage;

    return myOutputValue;
  }

  if (playerInput == computerInput) {
    numDraws += 1;
    myOutputValue = myOutputValue + drawOutput + winLossMessage;

    return myOutputValue;
  }
};
