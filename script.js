var HAND_SCISSORS = "scissors";
var HAND_PAPER = "paper";
var HAND_STONE = "stone";

// GENERATE RANDOM INTEGER (0-2) FOR COMPUTER
var randComp = function () {
  var randNum = Math.random() * 3;
  var randInt = Math.floor(randNum);
  return randInt;
};

// COMPARE PLAYER AND COMPUTER HANDS
var compareHands = function (player, comp) {
  var result = "you lose";
  if (player - comp == -1 || player - comp == 2) {
    result = "you win!";
  }
  if (player == comp) {
    result = "it's a draw!";
  }
  return result;
};

var main = function (input) {
  // VALIDATE INPUT
  if (input != HAND_SCISSORS && input != HAND_PAPER && input != HAND_STONE) {
    return "Invalid input. Please type 'scissors', 'paper', or 'stone' only.";
  }
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
  var myOutputValue = compareHands(playerHand, compHand);
  return myOutputValue;
};
