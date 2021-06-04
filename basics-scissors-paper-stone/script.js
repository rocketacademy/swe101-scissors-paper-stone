//Variables for SPS

var scissors = "scissors";
var paper = "paper";
var stone = "stone";

//Logic for computer pick

var getRandomNumber = function () {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return scissors;
  }
  if (randomNumber == 1) {
    return paper;
  }
  return stone;
};

//Input validation for playerPick

var main = function (playerPick) {
  var inputValidation = "";
  if (playerPick == scissors || playerPick == paper || playerPick == stone) {
    //Get computer pick

    var computerPick = getRandomNumber();

    //Logic for game result
    var spsResult =
      `Your Pick: ` + playerPick + `. Computer Pick: ` + computerPick;
    if (
      (playerPick == scissors && computerPick == paper) ||
      (playerPick == paper && computerPick == stone) ||
      (playerPick == stone && computerPick == scissors)
    ) {
      return `You Win. :) ` + spsResult;
    }

    if (playerPick == computerPick) {
      return `It's a draw. -_- ` + spsResult;
    }

    return `You Lose. :( ` + spsResult;
  } else {
    return `Please enter either scissors, paper or stone to play the game!`;
  }
};
