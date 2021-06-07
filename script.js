var currentGameMode = `waiting for user name`;
var userName = ``;
var totalTries = 0;
var winRecord = 0;
var drawRecord = 0;
var SCISSORS = `scissors`;
var PAPER = `paper`;
var STONE = `stone`;
var XSCISSORSX = "xscissorsx";
var XPAPERX = `xpaperx`;
var XSTONEX = `xstonex`;
var defaultIntroMessage = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> `;
var defaultClosingMessage = `Pls input: scissors, paper or stone for next round<br><br><br> ===  Alternatively, you can input xscissorsx, xpaperx or xstonex for a special round!  ===`;

// creating random numbers from 1 to 3 for tagging to SPS
var sPS = function () {
  // generate random num from 0 to 2.99
  var randomDecimal = Math.random() * 3;
  // round down random decimal to integer and plus 1 for 1 to 3

  var diceNum = Math.floor(randomDecimal) + 1;

  // allocating a number to each SPS and showing the object as output
  if (diceNum == 1) {
    return SCISSORS;
  }

  if (diceNum == 2) {
    return PAPER;
  }

  if (diceNum == 3) {
    return STONE;
  }
};

var main = function (input) {
  var myOutputValue = ``;

  // set initial stage for user to input name
  if (currentGameMode == `waiting for user name`) {
    // set user name
    userName = input;
    currentGameMode = "SPS";
    return `Hello ${userName}! Good luck!`;
  }
  if (currentGameMode == `SPS`) {
    var computerChoice = sPS();
  }

  // validation to inform user can only input SPS
  if (
    !(
      input == SCISSORS ||
      input == PAPER ||
      input == STONE ||
      input == XSCISSORSX ||
      input == XPAPERX ||
      input == XSTONEX
    )
  )
    return `Pls enter scissors, paper or stone!`;

  totalTries = totalTries + 1;

  // defining win conditions for usual SPS
  if (
    (input == SCISSORS && computerChoice == PAPER) ||
    (input == PAPER && computerChoice == STONE) ||
    (input == STONE && computerChoice == SCISSORS)
  ) {
    winRecord = winRecord += 1;
    return `${defaultIntroMessage} Congrats ${userName}, you won!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You are right ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br>Cheers! <br><br> ${defaultClosingMessage}`;
  }

  // defining lose conditions for usual SPS
  if (
    (input == SCISSORS && computerChoice == STONE) ||
    (input == PAPER && computerChoice == SCISSORS) ||
    (input == STONE && computerChoice == PAPER)
  ) {
    return `${defaultIntroMessage} Oops ${userName}, you lost! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice}<br> You are right ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br> Better luck next time!<br><br> ${defaultClosingMessage}`;
  }

  // defining draw condition for usual SPS
  if (input == computerChoice) {
    drawRecord = drawRecord += 1;
    return `${defaultIntroMessage}It's a DRAW, ${userName}! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You are right ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br>Pls try again <br><br> ${defaultClosingMessage}`;
  }

  // defining lose conditions for revered SPS
  if (
    (input == XSCISSORSX && computerChoice == PAPER) ||
    (input == XPAPERX && computerChoice == STONE) ||
    (input == XSTONEX && computerChoice == SCISSORS)
  ) {
    return `${defaultIntroMessage} Oops ${userName}, you lost! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice}<br> You are right ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br> Its different this time! HEHEHE <br><br> ${defaultClosingMessage}`;
  }

  // defining win conditions for reversed SPS
  if (
    (input == XSCISSORSX && computerChoice == STONE) ||
    (input == XPAPERX && computerChoice == SCISSORS) ||
    (input == XSTONEX && computerChoice == PAPER)
  ) {
    winRecord = winRecord += 1;
    return `${defaultIntroMessage} Congrats ${userName}, you won!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You are right ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br>You got lucky! <br><br> ${defaultClosingMessage} `;
  }

  // defining draw condition for reversed SPS
  if (
    (input == XSCISSORSX && computerChoice == SCISSORS) ||
    (input == XPAPERX && computerChoice == PAPER) ||
    (input == XSTONEX && computerChoice == STONE)
  ) {
    drawRecord = drawRecord += 1;
    return `${defaultIntroMessage}It's a DRAW, ${userName}! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You are right ${winRecord}/${totalTries} turns and you have ${drawRecord}  draws so far<br><br><br>Pls try again <br><br> ${defaultClosingMessage}`;
  }

  return myOutputValue;
};
