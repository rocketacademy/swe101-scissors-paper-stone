var currentGameMode = `waiting for user name`;
var userName = ``;
var totalTries = 0;
var winRecord = 0;
var drawRecord = 0;
var SCISSORS = `scissors`;
var PAPER = `paper`;
var STONE = `stone`;
var defaultIntroMessage = `Scissors<br>. <br>. <br>.<br> Paper<br>. <br>. <br>.<br> Stone <br>. <br>. <br>.<br> `;
var defaultClosingMessage = `Pls input: scissors, paper or stone for next round<br><br><br> Alternatively, pls key in normal, korean, reverse, secret to change game mode!`;

var mostRecentWinner = ``;
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
// refactor SPS
var playSPS = function (userName, input) {
  var myOutputValue = ``;
  var computerChoice = sPS();
  // validation to inform user can only input SPS
  if (!(input == SCISSORS || input == PAPER || input == STONE))
    return `Pls enter scissors, paper or stone!`;

  totalTries = totalTries + 1;

  // defining win conditions for usual SPS
  if (
    (input == SCISSORS && computerChoice == PAPER) ||
    (input == PAPER && computerChoice == STONE) ||
    (input == STONE && computerChoice == SCISSORS)
  ) {
    winRecord = winRecord += 1;
    return `${defaultIntroMessage} Congrats ${userName}, you won!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You won ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br>Cheers! <br><br> ${defaultClosingMessage}`;
  }

  // defining lose conditions for usual SPS
  if (
    (input == SCISSORS && computerChoice == STONE) ||
    (input == PAPER && computerChoice == SCISSORS) ||
    (input == STONE && computerChoice == PAPER)
  ) {
    return `${defaultIntroMessage} Oops ${userName}, you lost! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice}<br> You won ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br> Better luck next time!<br><br> ${defaultClosingMessage}`;
  }

  // defining draw condition for usual SPS
  if (input == computerChoice) {
    drawRecord = drawRecord += 1;
    return `${defaultIntroMessage}It's a DRAW, ${userName}! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You won ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br>Pls try again <br><br> ${defaultClosingMessage}`;
  }

  return myOutputValue;
};

// refactor reversed SPS
var playReversedSPS = function (userName, input) {
  var myOutputValue = ``;
  var computerChoice = sPS();
  // validation to inform user can only input SPS
  if (!(input == SCISSORS || input == PAPER || input == STONE))
    return `Pls enter scissors, paper or stone!`;

  totalTries = totalTries + 1;

  // defining lose conditions for revered SPS
  if (
    (input == SCISSORS && computerChoice == PAPER) ||
    (input == PAPER && computerChoice == STONE) ||
    (input == STONE && computerChoice == SCISSORS)
  ) {
    return `X<br>${defaultIntroMessage}<br>X<br> Oops ${userName}, you lost! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice}<br> You won ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br> Its different this time! HEHEHE <br><br> ${defaultClosingMessage}`;
  }

  // defining win conditions for reversed SPS
  if (
    (input == SCISSORS && computerChoice == STONE) ||
    (input == PAPER && computerChoice == SCISSORS) ||
    (input == STONE && computerChoice == PAPER)
  ) {
    winRecord = winRecord += 1;
    return `X<br>${defaultIntroMessage}<br>X<br>Congrats ${userName}, you won!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You won ${winRecord}/${totalTries} turns and you have ${drawRecord} draws so far<br><br><br>You got lucky! Its different this time! <br><br> ${defaultClosingMessage} `;
  }

  // defining draw condition for reversed SPS
  if (
    (input == SCISSORS && computerChoice == SCISSORS) ||
    (input == PAPER && computerChoice == PAPER) ||
    (input == STONE && computerChoice == STONE)
  ) {
    drawRecord = drawRecord += 1;
    return `X<br>${defaultIntroMessage}<br>X<br>It's a DRAW, ${userName}! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br> You won ${winRecord}/${totalTries} turns and you have ${drawRecord}  draws so far<br><br><br>Pls try again <br><br> ${defaultClosingMessage}`;
  }

  return myOutputValue;
};

// Super Game MODE
var playSuperGame = function (userName, input) {
  var myOutputValue = ``;
  var computerChoice = sPS();
  // validation to inform user can only input SPS
  if (!(input == SCISSORS || input == PAPER || input == STONE)) {
    return `Pls enter scissors, paper or stone!`;
  }
  if (input == computerChoice) {
    return `Congrats ${userName}, You Won! You chose ${input}, secret word is ${computerChoice}<br><br>${defaultClosingMessage}`;
  }

  if (!(input == computerChoice)) {
    return `Sorry! ${userName}, You Lost! You chose ${input}, secret word is ${computerChoice}<br><br>${defaultClosingMessage}`;
  }
  return myOutputValue;
};

// refactor korean SPS
var playKoreanSPS = function (userName, input) {
  var myOutputValue = ``;
  var computerChoice = sPS();
  // var winnerOfThisRound = ``;
  // validation to inform user can only input SPS
  if (!(input == SCISSORS || input == PAPER || input == STONE))
    return `Pls enter scissors, paper or stone!`;

  // defining win conditions for Korean SPS
  if (
    (input == SCISSORS && computerChoice == PAPER) ||
    (input == PAPER && computerChoice == STONE) ||
    (input == STONE && computerChoice == SCISSORS)
  ) {
    winnerOfThisRound = userName;
    return `K<br>${defaultIntroMessage}K <br>Congrats ${userName}, you won this turn!<br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br><br><br>Cheers! <br>Most recent winner is ${winnerOfThisRound}<br> ${defaultClosingMessage}`;
  }

  // defining lose conditions for Korean SPS
  if (
    (input == SCISSORS && computerChoice == STONE) ||
    (input == PAPER && computerChoice == SCISSORS) ||
    (input == STONE && computerChoice == PAPER)
  ) {
    winnerOfThisRound = `computer`;
    return `K<br>${defaultIntroMessage}K<br> Oops ${userName}, you lost this turn! <br> <br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice}<br><br><br> Better luck next time!<br> Most recent winner is ${winnerOfThisRound}<br> ${defaultClosingMessage}
    `;
  }
  mostRecentWinner = winnerOfThisRound;
  // defining draw condition for Korean SPS
  if (input == computerChoice) {
    return `K<br>${defaultIntroMessage}K<br>It's a DRAW, ${userName}! <br><br> Your choice: ${input} <br> vs <br> Computer choice: ${computerChoice} <br><br><br>Pls try again <br> Ultimate winner of the round is +++${mostRecentWinner}+++<br> ${defaultClosingMessage}`;
  }

  return myOutputValue;
};

var main = function (input) {
  var myOutputValue = ``;

  // set initial stage for user to input name
  if (currentGameMode == `waiting for user name`) {
    // set user name
    userName = input;
    currentGameMode = `SPS`;
    return `Hello ${userName}! Good luck! <br><br>Input scissors, paper or stone to start normal SPS. <br><br>Alternatively input any of the following to change game mode: korean, reverse, secret`;
  }
  if (currentGameMode == `SPS`) {
    myOutputValue = playSPS(userName, input);
  }

  if (input == `normal`) {
    totalTries = 0;
    winRecord = 0;
    drawRecord = 0;
    currentGameMode = `SPS`;
    return `Welome to normal mode! Input scissors, paper or stone to start`;
  }

  if (input == `reverse`) {
    totalTries = 0;
    winRecord = 0;
    drawRecord = 0;
    currentGameMode = `reversed SPS`;
    return `Welome to reversed mode! Input scissors, paper or stone to start`;
  }
  if (currentGameMode == `reversed SPS`) {
    myOutputValue = playReversedSPS(userName, input);
  }
  if (input == `korean`) {
    currentGameMode = `korean SPS`;
    return `Welome to korean mode! Input scissors, paper or stone to start`;
  }
  if (currentGameMode == `korean SPS`) {
    myOutputValue = playKoreanSPS(userName, input);
  }

  if (input == `secret`) {
    currentGameMode = `Super Game Mode`;
    return `Welome to secret mode! Input scissors, paper or stone to start`;
  }

  if (currentGameMode == `Super Game Mode`) {
    myOutputValue = playSuperGame(userName, input);
  }

  return myOutputValue;
};
