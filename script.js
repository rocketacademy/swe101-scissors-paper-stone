// Script to Run DiceRoll
// Script to take input to dictate which mode starts.
// 3 modes = nameMode, normalMode, reversedMode. If user were to type in any of their names, the corresponding mode will take its place. Each mode is set up in the main function.
var nameMode = 1;
var normalMode = 0;
var reversedMode = 0;
var artifMode = 0;
var playerWins = 0;
var playerLoss = 0;
var playerTries = 0;
var myGloriousHand = "";

var scoringPercentage = function () {
  var playerDecimal = playerWins / playerTries;
  var playerPercentage = Math.ceil(playerDecimal * 100);
  return playerPercentage;
};

//______________________________________________;
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var reversedScissors = "reversed scissors";
var reversedPaper = "reversed paper";
var reversedStone = "reversed stone";
//_____________________________________________________
// Let 1 be scissors/reversed scissors, 2 be paper/reversed paper, 3 be stone/reversed stone

var diceRoll = function () {
  randomMathNumber = Math.random() * 3;
  var basicDiceRoll = Math.ceil(randomMathNumber);
  return basicDiceRoll;
};
//Outcome Functions__________________________________
var drawOutcome = function () {
  playerTries = playerTries + 1;
  myGloriousHand =
    "Draw! You have a score of : " +
    playerWins +
    " wins and " +
    playerLoss +
    " losses" +
    "<br><br> That gives you a win percentage of : " +
    scoringPercentage() +
    "% <br><br> 👊 (❛̃ ⏥❛̃) 👊";
  return myGloriousHand;
};
var loseOutcome = function () {
  playerLoss = playerLoss + 1;
  playerTries = playerTries + 1;
  myGloriousHand =
    "Lose! You have a score of : " +
    playerWins +
    " wins and " +
    playerLoss +
    " losses" +
    "<br><br> That gives you a win percentage of : " +
    scoringPercentage() +
    "% <br><br> (❛̃ 👅❛̃)";
  return myGloriousHand;
};
var winOutcome = function () {
  playerWins = playerWins + 1;
  playerTries = playerTries + 1;
  myGloriousHand =
    "Win! You have a score of : " +
    playerWins +
    " wins and " +
    playerLoss +
    " losses" +
    "<br><br> That gives you a win percentage of : " +
    scoringPercentage() +
    "% <br><br> (❛̃ ᴗ❛̃)✌";
  return myGloriousHand;
};

//_______________________>> MAIN FUNCTION <<__________________________
var main = function (input) {
  myGloriousHand = " Please follow the instructions";
  if (nameMode || normalMode || reversedMode || artifMode == 0) {
    myGloriousHand =
      "please enter either normalMode, artifMode, reversedMode, or nameMode to re-enter your name";
  }
  // Naming Mode conditions_______________________________
  if (nameMode == 1) {
    var userName = input;
    myGloriousHand =
      "Hello Player " +
      userName +
      " <br> <br>Please enter normalMode, artifMode, reversedMode, or nameMode to re-enter your name";
    nameMode = 0;
  }

  if (input == "nameMode" && nameMode == 0) {
    nameMode = 1;
    myGloriousHand =
      "Please input your name. <br><br>Followed by either normalMode, artifMode, reversedMode, or nameMode to re-enter username";
  }
  // Normal Mode conditions_______________________________
  if (input == "normalMode") {
    nameMode = 0;
    reversedMode = 0;
    normalMode = 1;
    artifMode = 1;
    myGloriousHand =
      "In normalMode, please enter either scissors, paper, or stone to play";
  }

  if (normalMode == 1 && (input == "scissors" || "paper" || "stone")) {
    var computerAnswer = diceRoll();

    //___Draw Outcome____
    if (input == "scissors" && computerAnswer == 1) {
      drawOutcome();
    }
    if (input == "paper" && computerAnswer == 2) {
      drawOutcome();
    }
    if (input == "stone" && computerAnswer == 3) {
      drawOutcome();
    }
    //____Win Outcome____
    if (input == "scissors" && computerAnswer == 2) {
      winOutcome();
    }
    if (input == "paper" && computerAnswer == 3) {
      winOutcome();
    }
    if (input == "stone" && computerAnswer == 1) {
      winOutcome();
    }
    //___Loss Outcome____
    if (input == "scissors" && computerAnswer == 3) {
      loseOutcome();
    }
    if (input == "paper" && computerAnswer == 1) {
      loseOutcome();
    }
    if (input == "stone" && computerAnswer == 2) {
      loseOutcome();
    }
  }

  // Reversed Mode conditions_______________________________
  if (input == "reversedMode") {
    nameMode = 0;
    reversedMode = 1;
    normalMode = 0;
    artifMode = 1;
    myGloriousHand =
      "In reversedMode, please enter either reverse scissors, reverse paper, or reverse stone to play";
  }

  if (
    reversedMode == 1 &&
    (input == "reverse scissors" || "reverse paper" || "reverse stone")
  ) {
    var computerAnswer = diceRoll();

    //___Draw Outcome____
    if (input == "reverse scissors" && computerAnswer == 1) {
      drawOutcome();
    }
    if (input == "reverse paper" && computerAnswer == 2) {
      drawOutcome();
    }
    if (input == "reverse stone" && computerAnswer == 3) {
      drawOutcome();
    }
    //____Win Outcome____
    if (input == "reverse scissors" && computerAnswer == 3) {
      winOutcome();
    }
    if (input == "reverse paper" && computerAnswer == 1) {
      winOutcome();
    }
    if (input == "reverse stone" && computerAnswer == 2) {
      winOutcome();
    }
    //___Loss Outcome____
    if (input == "reverse scissors" && computerAnswer == 2) {
      loseOutcome();
    }
    if (input == "reverse paper" && computerAnswer == 3) {
      loseOutcome();
    }
    if (input == "reverse stone" && computerAnswer == 1) {
      loseOutcome();
    }
  }
  // Artificial Mode conditions_______________________________
  if (input == "artifMode") {
    artifMode = 1;
    normalMode = 0;
    nameMode = 0;
    reversedMode = 0;
    myGloriousHand = "You may click to have the computer roll for you";
  }
  if (artifMode == 1) {
    diceRoll();
    if (diceRoll() == 1) {
      drawOutcome();
    }
    if (diceRoll() == 2) {
      winOutcome();
    }
    if (diceRoll() == 3) {
      loseOutcome();
    }
    console.log(diceRoll());
  }
  // Reset Mode_______________________________
  if (input == "reset") {
    nameMode = 1;
    normalMode = 0;
    reversedMode = 0;
    playerTries = 0;
    playerWins = 0;
    playerLoss = 0;
    myGloriousHand =
      "Please re-enter your name, followed by the mode of play. Your scores have been reset.";
  }
  return myGloriousHand;
};
//_______________________>> MAIN FUNCTION END <<__________________________
