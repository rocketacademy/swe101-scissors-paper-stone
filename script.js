//input is either scissors, paper, or stone
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
// number of player wins, computer wins, and draws
var numPlayerWins = 0;
var numComputerWins = 0;
var numDraws = 0;
var userName = "";

// first input as the username
var getName = function (userName) {
  playerName = userName;
  if (input == userName) {
    return `Hello ${userName}! Thanks for playing the game. Input scissors, paper or stone.`;
  }
};
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
//output is whether the user won, the program won, or it's a draw
var getGenericOutput = function (playerInput, computerInput) {
  return (
    ` ${userName} guess: ` +
    playerInput +
    ` <br> Computer guess: 
    ${computerInput}`
  );
};
var getWinLossMessage = function () {
  return (
    ` <br> ${userName} ` +
    numPlayerWins +
    " times | Computer won: " +
    numComputerWins +
    " times | Draws: " +
    numDraws
  );
};
var main = function (input) {
  if (!userName) {
    if (!input) {
      return "Please input a username!";
    }
    userName = input;
    return `Welcome ${userName}! To start playing, please enter "scissors", "paper" or "stone"`;
  }

  //input validation to let user know there are only 3 input options and ask them to try again
  if (input != SCISSORS && input != PAPER && input != STONE) {
    myOutputValue =
      'Please input either "scissors", "paper", or "stone" to play.';
    return myOutputValue;
  }

  var computerInput = sps();
  console.log("computer input" + computerInput);
  var playerInput = input;
  console.log("player input" + playerInput);
  var genericOutput = getGenericOutput(playerInput, computerInput);
  var winLossMessage = "";
  var myOutputValue = genericOutput;
  var winOutput = " You win! ";
  var loseOutput = " Computer won! ";
  var drawOutput = " Its a draw! ";

  //scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object its a draw.
  if (
    (playerInput == SCISSORS && computerInput == PAPER) ||
    (playerInput == PAPER && computerInput == STONE) ||
    (playerInput == STONE && computerInput == SCISSORS)
  ) {
    numPlayerWins += 1;
    winLossMessage = getWinLossMessage();
    myOutputValue = myOutputValue + winOutput + winLossMessage;
    return myOutputValue;
  }
  if (
    (playerInput == PAPER && computerInput == SCISSORS) ||
    (playerInput == STONE && computerInput == PAPER) ||
    (playerInput == SCISSORS && computerInput == STONE)
  ) {
    numComputerWins += 1;
    winLossMessage = getWinLossMessage();
    myOutputValue = myOutputValue + loseOutput + winLossMessage;
    return myOutputValue;
  }
  if (playerInput == computerInput) {
    numDraws += 1;
    winLossMessage = getWinLossMessage();
    myOutputValue = myOutputValue + "<br>" + drawOutput + winLossMessage;
    return myOutputValue;
  }
};
