var currentGameMode = "waiting for username";

var userName = "";
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var winPercent = 0;

var main = function (input) {
  if (currentGameMode == "waiting for username") {
    userName = input;

    currentGameMode = "sps";

    return `Hello ${userName}, let's begin playing SPS!`;
  }

  if (input == "autoplay") {
    input = randomSPS();
  }

  if (input == "sps") {
    currentGameMode = "sps";

    return `Hello ${userName}, let's begin playing SPS!`;
  }

  if (input == "reverse") {
    currentGameMode = "reverse sps";

    return `Hello ${userName}, let's begin playing reverse SPS!`;
  }

  var computerHand = randomSPS();
  var gameResult = "draw";

  // var myOutputValue = `You chose ${input}, the computer chose ${computerHand}. It's a tie!`;

  if (
    (input == "scissors" && computerHand == "stone") ||
    (input == "paper" && computerHand == "scissors") ||
    (input == "stone" && computerHand == "paper")
  ) {
    gameResult = "lose";
  }

  if (
    (input == "scissors" && computerHand == "paper") ||
    (input == "paper" && computerHand == "stone") ||
    (input == "stone" && computerHand == "scissors")
  ) {
    gameResult = "win";
  }

  if (
    !(
      (input == "scissors" || input == "paper" || input == "stone")
      // input == "reversed scissors" ||
      // input == "reversed paper" ||
      // input == "reversed stone"
    )
  ) {
    return "Please select between scissors, paper or stone.";
  }

  if (input == computerHand) {
    drawCount = drawCount + 1;

    myOutputValue = `The computer chose ${computerHand}. <br> You chose ${input}. <br> <br> It's a draw!
    Player ${userName} has a W-L-D record of ${winCount}/${loseCount}/${drawCount}, with a win percentage of ${winPercent}%.`;
  }

  // if (
  //   (input == "reversed scissors" && computerHand == "paper") ||
  //   (input == "reversed paper" && computerHand == "stone") ||
  //   (input == "reversed stone" && computerHand == "scissors")
  // ) {
  //   myOutputValue = `You chose ${input}, the computer chose ${computerHand}. You lose!`;
  // }

  // if (
  //   (input == "reversed scissors" && computerHand == "stone") ||
  //   (input == "reversed paper" && computerHand == "scissors") ||
  //   (input == "reversed stone" && computerHand == "paper")
  // ) {
  //   myOutputValue = `You chose ${input}, the computer chose ${computerHand}. You win!`;
  // }

  if (
    (currentGameMode == "sps" && gameResult == "win") ||
    (currentGameMode == "reverse sps" && gameResult == "lose")
  ) {
    winCount = winCount + 1;
    winPercent = (winCount / (winCount + loseCount)) * 100;
    myOutputValue = `The computer chose ${computerHand}. <br> You chose ${input}. <br> <br> You win!   
    Player ${userName} has a W-L-D record of ${winCount}/${loseCount}/${drawCount}, with a win percentage of ${winPercent}%.`;
  }

  if (
    (currentGameMode == "sps" && gameResult == "lose") ||
    (currentGameMode == "reverse sps" && gameResult == "win")
  ) {
    loseCount = loseCount + 1;
    winPercent = (winCount / (winCount + loseCount)) * 100;
    myOutputValue = `The computer chose ${computerHand}. <br> You chose ${input}. <br> <br> You lose!   
    Player ${userName} has a W-L-D record of ${winCount}/${loseCount}/${drawCount}, with a win percentage of ${winPercent}%.`;
  }

  if (winPercent > 50) {
    myOutputValue = myOutputValue + " Nice job!";
  }
  if (winPercent < 50) {
    myOutputValue = myOutputValue + " You can do it!";
  }

  return myOutputValue;
};

var randomSPS = function () {
  var randomFloat = Math.random() * 3;
  var resultInteger = Math.floor(randomFloat);

  if (resultInteger == 1) {
    return "scissors";
  }
  if (resultInteger == 2) {
    return "paper";
  }
  return "stone";
};
