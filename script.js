// creating random numbers from 1 to 3 for tagging to SPS
var sPS = function () {
  // generate random num from 0 to 2.99
  var randomDecimal = Math.random() * 3;
  // round down random decimal to integer and plus 1 for 1 to 3

  var diceNum = Math.floor(randomDecimal) + 1;

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
var totalTries = 0;
var winRecord = 0;
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

  totalTries = totalTries + 1;

  var computerChoice = sPS();

  // defining win conditions for usual SPS
  if (
    (input == `scissors` && computerChoice == `paper`) ||
    (input == `paper` && computerChoice == `stone`) ||
    (input == `stone` && computerChoice == `scissors`)
  ) {
    winRecord = winRecord + 1;
    return `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Congrats, you won!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You are right ${winRecord}/${totalTries} turns<br><br><br>Cheers! <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  === `;
  }

  // defining lose conditions for usual SPS
  if (
    (input == `scissors` && computerChoice == `stone`) ||
    (input == `paper` && computerChoice == `scissors`) ||
    (input == `stone` && computerChoice == `paper`)
  ) {
    return `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Oops, you lost! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice}<br> You are right ${winRecord}/${totalTries} turns <br><br><br> Better luck next time!<br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  ===`;
  }

  // defining draw condition for usual SPS
  if (input == computerChoice) {
    return `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br>It's a DRAW! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You are right ${winRecord}/${totalTries} turns<br><br><br>Pls try again <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  ===`;
  }

  // defining lose conditions for revered SPS
  if (
    (input == `xscissorsx` && computerChoice == `paper`) ||
    (input == `xpaperx` && computerChoice == `stone`) ||
    (input == `xstonex` && computerChoice == `scissors`)
  ) {
    return `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Oops, you lost! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice}<br> You are right ${winRecord}/${totalTries} turns <br><br><br> Its different this time! HEHEHE <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  ===`;
  }

  // defining win conditions for reversed SPS
  if (
    (input == `xscissorsx` && computerChoice == `stone`) ||
    (input == `xpaperx` && computerChoice == `scissors`) ||
    (input == `xstonex` && computerChoice == `paper`)
  ) {
    winRecord = winRecord + 1;
    return `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> Congrats, you won!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You are right ${winRecord}/${totalTries} turns<br><br><br>You got lucky! <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  === `;
  }

  // defining draw condition for reversed SPS
  if (
    (input == `xscissorsx` && computerChoice == `scissors`) ||
    (input == `xpaperx` && computerChoice == `paper`) ||
    (input == `xstonex` && computerChoice == `stone`)
  ) {
    return `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br>It's a DRAW! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You are right ${winRecord}/${totalTries} turns<br><br><br>Pls try again <br><br> Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  ===`;
  }

  return myOutputValue;
};
