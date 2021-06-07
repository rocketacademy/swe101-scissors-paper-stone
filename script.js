// creating random numbers from 1 to 3 for tagging to SPS
var sPS = function () {
  // generate random num from 0 to 2.99
  var randomDecimal = Math.random() * 3;
  // round up random decimal to integer
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
  var myOutputValue = ``;

  // validation to inform user can only input SPS
  if (
    !(
      input == `scissors` ||
      input == `paper` ||
      input == `stone` ||
      input == `xscissorsx` ||
      input == `xpaperx` ||
      input == `xstonex`
    )
  )
    return `Pls enter scissors, paper or stone!`;

  var progChoice = sPS();

  // defining win conditions for usual SPS
  if (
    (input == `scissors` && progChoice == `paper`) ||
    (input == `paper` && progChoice == `stone`) ||
    (input == `stone` && progChoice == `scissors`)
  ) {
    myOutputValue = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Congrats, you won!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${progChoice} <br><br><br>Cheers! <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  === `;
  }

  // defining lose conditions for usual SPS
  if (
    (input == `scissors` && progChoice == `stone`) ||
    (input == `paper` && progChoice == `scissors`) ||
    (input == `stone` && progChoice == `paper`)
  ) {
    myOutputValue = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Oops, you lost! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${progChoice} <br><br><br> Better luck next time!<br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  ===`;
  }

  // defining draw condition for usual SPS
  if (input == progChoice) {
    myOutputValue = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br>It's a DRAW! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${progChoice} <br><br><br>Pls try again <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  ===`;
  }

  // defining lose conditions for revered SPS
  if (
    (input == `xscissorsx` && progChoice == `paper`) ||
    (input == `xpaperx` && progChoice == `stone`) ||
    (input == `xstonex` && progChoice == `scissors`)
  ) {
    myOutputValue = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Oops, you lost! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${progChoice} <br><br><br> Its different this time! HEHEHE <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  ===`;
  }

  // defining win conditions for reversed SPS
  if (
    (input == `xscissorsx` && progChoice == `stone`) ||
    (input == `xpaperx` && progChoice == `scissors`) ||
    (input == `xstonex` && progChoice == `paper`)
  ) {
    myOutputValue = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Congrats, you won!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${progChoice} <br><br><br>You got lucky! <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  === `;
  }

  // defining draw condition for reversed SPS
  if (
    (input == `xscissorsx` && progChoice == `scissors`) ||
    (input == `xpaperx` && progChoice == `paper`) ||
    (input == `xstonex` && progChoice == `stone`)
  ) {
    myOutputValue = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br>It's a DRAW! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${progChoice} <br><br><br>Pls try again <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  ===`;
  }

  return myOutputValue;
};
