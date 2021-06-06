var scissors = "scissors ✌️";
var paper = "paper ✋";
var stone = "stone 👊 ";

var compGeneratedWord = function () {
  var randomInteger = Math.floor(Math.random() * 3) + 1; // 1,2,3
  if (randomInteger == 1) {
    var selectedWord = scissors;
  }
  if (randomInteger == 2) {
    var selectedWord = paper;
  }
  if (randomInteger == 3) {
    var selectedWord = stone;
  }
  return selectedWord;
};
var winOutcome = function (input, computerInput) {
  var winResults;
  if (
    (input == "scissors" && computerInput == paper) ||
    (input == "paper" && computerInput == stone) ||
    (input == "stone" && computerInput == scissors)
  ) {
    winResults = true;
  }
  if (
    (input == "reverse scissors" && computerInput == stone) ||
    (input == "reverse paper" && computerInput == scissors) ||
    (input == "reverse stone" && computerInput == paper)
  ) {
    winResults = true;
  }
  return winResults;
};

var drawOutcome = function (input, computerInput) {
  var drawResults;
  if (
    (input == "scissors" && computerInput == scissors) ||
    (input == "paper" && computerInput == paper) ||
    (input == "stone" && computerInput == stone)
  ) {
    drawResults = true;
  }
  if (
    (input == "reverse scissors" && computerInput == scissors) ||
    (input == "reverse paper" && computerInput == paper) ||
    (input == "reverse stone" && computerInput == stone)
  ) {
    drawResults = true;
  }
  return drawResults;
};

var main = function (input) {
  var computerInput = compGeneratedWord();

  var outcome = `Sorry you lost!Computer wins!🤪 <br> you chose ${input}, the computer chose ${computerInput}`;
  //outcome will be overwritten
  if (
    input !== "scissors" &&
    input !== "paper" &&
    input !== "stone" &&
    input !== "reverse scissors" &&
    input !== "reverse paper" &&
    input !== "reverse stone"
  ) {
    outcome = `Please try again😈 <br> Input only 'scissors/reverse scissors', 'paper/reverse paper' or 'stone/reverse stone' to play! `;
  }
  var draw = drawOutcome(input, computerInput);
  if (draw) {
    outcome = `its a draw, you chose ${input}, the computer chose ${computerInput}`;
  }
  var win = winOutcome(input, computerInput);
  if (win) {
    outcome = `You win!👏👏 <br> you chose ${input}, the computer chose ${computerInput}`;
  }
  return outcome;
};
