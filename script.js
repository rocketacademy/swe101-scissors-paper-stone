// creating random numbers for tagging to SPS
var sPS = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNum = randomInteger + 1;

  // allocating a number to each SPS and showing the object as output
  if (diceNum == 1) {
    return `scissors`;
  }

  if (diceNum == 2) {
    return `paper`;
  }

  if (diceNum == 3) {
    return `stone`;
  }
};

var main = function (input) {
  // validation to inform user can only choose SPS
  var myOutputValue = `pls select: scissors, paper or stone!`;
  var progChoice = sPS();
  // defining win conditions
  if (
    (input == `scissors` && progChoice == `paper`) ||
    (input == `paper` && progChoice == `stone`) ||
    (input == `stone` && progChoice == `scissors`)
  ) {
    myOutputValue = `Congrats, you won! You chose ${input} vs ${progChoice}!`;
  }
  // defining lose conditions
  if (
    (input == `scissors` && progChoice == `stone`) ||
    (input == `paper` && progChoice == `scissors`) ||
    (input == `stone` && progChoice == `paper`)
  ) {
    myOutputValue = `Oops, you lost! You chose ${input} vs ${progChoice}!`;
  }
  // defining draw condition
  if (input == progChoice) {
    myOutputValue = `It's a DRAW! ${input} vs ${progChoice}! Pls try again`;
  }

  return myOutputValue;
};
