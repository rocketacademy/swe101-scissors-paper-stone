// creating random numbers for tagging to SPS
var sPS = function () {
  var randomDecimal = Math.random() * 3;
  var diceNum = Math.ceil(randomDecimal);

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
  // validation to inform user can only input SPS
  var myOutputValue = `pls input: scissors, paper or stone!`;

  var progChoice = sPS();
  // defining win conditions
  if (
    (input == `scissors` && progChoice == `paper`) ||
    (input == `paper` && progChoice == `stone`) ||
    (input == `stone` && progChoice == `scissors`)
  ) {
    myOutputValue = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Congrats, you won!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${progChoice} <br><br>Cheers! <br><br> Pls input: scissors, paper or stone for next roll`;
  }
  // defining lose conditions
  if (
    (input == `scissors` && progChoice == `stone`) ||
    (input == `paper` && progChoice == `scissors`) ||
    (input == `stone` && progChoice == `paper`)
  ) {
    myOutputValue = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Oops, you lost! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${progChoice} <br><br> Better luck next time!<br><br> Pls input: scissors, paper or stone for next roll`;
  }
  // defining draw condition
  if (input == progChoice) {
    myOutputValue = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br>It's a DRAW! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${progChoice} <br><br><br>Pls try again <br><br> Pls input: scissors, paper or stone for next roll`;
  }

  return myOutputValue;
};
