var HAND_SCISSORS = "scissors";
var HAND_PAPER = "paper";
var HAND_STONE = "stone";

// GENERATE RANDOM INTEGER (0-2) FOR COMPUTER
var randComp = function () {
  var randNum = Math.random() * 3;
  var randInt = Math.floor(randNum);
  return randInt;
};

var main = function (input) {
  var myOutputValue = "you lose!";
  var compHand = randComp();
  console.log(compHand);
  // ASSIGN INPUT TO INTEGER (0 SCI, 1 PAP, 2 STO)
  var playerHand;
  if (input == HAND_SCISSORS) {
    playerHand = 0;
  }
  if (input == HAND_PAPER) {
    playerHand = 1;
  }
  if (input == HAND_STONE) {
    playerHand = 2;
  }
  // COMPARE PLAYER AND COMPUTER HANDS (WIN)
  if (playerHand - compHand == -1 || playerHand - compHand == 2) {
    myOutputValue = "you win!";
  }
  // COMPARE PLAYER AND COMPUTER HANDS (DRAW)
  if (playerHand == compHand) {
    myOutputValue = "it's a draw!";
  }
  return myOutputValue;
};
