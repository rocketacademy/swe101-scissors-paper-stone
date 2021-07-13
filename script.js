var HAND_SCI = "scissors";
var HAND_PAP = "paper";
var HAND_STO = "stone";
var EMJ_SCI = "✂️";
var EMJ_PAP = "📄";
var EMJ_STO = "🗿";

// GENERATE RANDOM INTEGER (0-2) FOR COMPUTER
var randComp = function () {
  var randNum = Math.random() * 3;
  var randInt = Math.floor(randNum);
  return randInt;
};

// COMPARE PLAYER AND COMPUTER HANDS
var compareHands = function (player, comp) {
  var result = "You lose! Bummer.";
  if (player - comp == -1 || player - comp == 2) {
    result = "You win! Hooray!";
  }
  if (player == comp) {
    result = "Jinx! It's a draw!";
  }
  return result;
};

var main = function (input) {
  // VALIDATE INPUT
  if (input != HAND_SCI && input != HAND_PAP && input != HAND_STO) {
    return "Invalid input. Please type 'scissors', 'paper', or 'stone' only.";
  }
  var compNum = randComp();
  // ASSIGN COMPHAND AND COMPEMJ (0 SCI, 1 PAP, 2 STO)
  var compHand;
  var compEmj;
  if (compNum == 0) {
    compHand = HAND_SCI;
    compEmj = EMJ_SCI;
  }
  if (compNum == 1) {
    compHand = HAND_PAP;
    compEmj = EMJ_PAP;
  }
  if (compNum == 2) {
    compHand = HAND_STO;
    compEmj = EMJ_STO;
  }
  // ASSIGN PLAYERNUM AND PLAYEREMJ(0 SCI, 1 PAP, 2 STO)
  var playerNum;
  var playerEmj;
  if (input == HAND_SCI) {
    playerNum = 0;
    playerEmj = EMJ_SCI;
  }
  if (input == HAND_PAP) {
    playerNum = 1;
    playerEmj = EMJ_PAP;
  }
  if (input == HAND_STO) {
    playerNum = 2;
    playerEmj = EMJ_STO;
  }
  // FORMAT OUTPUT
  var myOutputValue =
    "The computer chose " +
    compHand +
    " " +
    compEmj +
    ". <br>" +
    "You chose " +
    input +
    " " +
    playerEmj +
    ". <br>" +
    "<br>" +
    compareHands(playerNum, compNum) +
    "<br>" +
    "<br>" +
    "Now you can type 'scissors', 'paper', or 'stone' to play another round!";
  return myOutputValue;
};
