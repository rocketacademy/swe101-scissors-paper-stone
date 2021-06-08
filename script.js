var winCount = 0;
var lossCount = 0;
var drawCount = 0;
var totalNonDrawRounds = 0;
var userName = "";
var mode = "start mode";

var main = function (input) {
  var displayOutputValue;

  // modes
  if (mode == "start mode") {
    userName = input;
    mode = "game mode";
    displayOutputValue = `Hello ${userName}, let's play scissors, paper, stone!`;
  } else if (input == "reverse") {
    mode = "reverse mode";
    displayOutputValue = `You have entered an upside down world 🙃`;
  } else if (mode == "reverse mode") {
    displayOutputValue = playReverseScissorsPaperStone(input);
  } else {
    displayOutputValue = playScissorsPaperStone(input);
  }

  return displayOutputValue;
};

// regular game mode
function playScissorsPaperStone(input) {
  var programPlays = chooseScissorsPaperStone();
  // logic of regular scissors paper stone game
  if (
    (input == "scissors" && programPlays == "scissors") ||
    (input == "paper" && programPlays == "paper") ||
    (input == "stone" && programPlays == "stone")
  ) {
    winCount = winCount;
    lossCount = lossCount;
    drawCount = drawCount + 1;
    gameOutcomeOutput = `It's a draw. You have drawed with the computer ${drawCount} time(s) `;
  } else if (
    (input == "scissors" && programPlays == "paper") ||
    (input == "paper" && programPlays == "stone") ||
    (input == "stone" && programPlays == "scissors")
  ) {
    winCount = winCount + 1;
    lossCount = lossCount;
    drawCount = drawCount;
    gameOutcomeOutput = `You win! Congratulations ✨
    <br> You've won ${winCount} time(s), the computer has won ${lossCount} time(s)`;
  } else if (
    (input == "scissors" && programPlays == "stone") ||
    (input == "paper" && programPlays == "scissors") ||
    (input == "stone" && programPlays == "paper")
  ) {
    winCount = winCount;
    lossCount = lossCount + 1;
    drawCount = drawCount;
    gameOutcomeOutput = `You lose！ Bummer.You've won ${winCount} time(s), the computer has won ${lossCount} time(s)`;
  }

  // assigning emojis for display purpose
  var inputEmoji;
  if (input == "scissors" || input == "reversed scissors") {
    inputEmoji = "✌️";
  } else if (input == "paper" || input == "reversed paper") {
    inputEmoji = "✋";
  } else if (input == "stone" || input == "reversed stone") {
    inputEmoji = "✊";
  }

  var programEmoji;
  if (programPlays == "scissors") {
    programEmoji = "✌️";
  } else if (programPlays == "paper") {
    programEmoji = "✋";
  } else if (programPlays == "stone") {
    programEmoji = "✊";
  }

  // performance metrics
  totalNonDrawRounds = winCount + lossCount;
  if (winCount > lossCount) {
    var playerPerformance = `So far ${userName}, you've won ${winCount}/${totalNonDrawRounds} rounds that are not draws, keep it up!`;
  } else if (winCount < lossCount) {
    playerPerformance = `So far ${userName}, you've won ${winCount}/${totalNonDrawRounds} rounds that are not draws, don't be too disheartened.`;
  } else if ((winCount = lossCount)) {
    playerPerformance = `So, ${userName}, you've been winning the same number of times as the computer, see if you can tip the scales in your favour.`;
  }

  console.log("win " + winCount);
  console.log("lose " + lossCount);
  console.log("draw " + drawCount);
  console.log("total non-draw rounds " + totalNonDrawRounds);

  // format of output to be displayed in game mode
  if (input == "scissors" || input == "paper" || input == "stone") {
    gameModeOutputValue = `The computer played ${programPlays} ${programEmoji}. 
  <br>You played ${input} ${inputEmoji}. 
  <br>${gameOutcomeOutput}
  <br> ${playerPerformance}
  <br>Play again by typing "scissors", "paper",  "stone".`;
  } else {
    gameModeOutputValue = `Please only type "scissors", "paper", or "stone" into the input box, we apologise for the limited literacy of this program.`;
  }
  return gameModeOutputValue;
}

// reverse game mode
function playReverseScissorsPaperStone(input) {
  var programPlays = chooseScissorsPaperStone();
  if (
    (input == "scissors" && programPlays == "scissors") ||
    (input == "paper" && programPlays == "paper") ||
    (input == "stone" && programPlays == "stone")
  ) {
    gameOutcomeOutput = `It's a draw. `;
  } else if (
    (input == "scissors" && programPlays == "paper") ||
    (input == "paper" && programPlays == "stone") ||
    (input == "stone" && programPlays == "scissors")
  ) {
    gameOutcomeOutput = `You lose！ Bummer. 
    <br> You've won ${winCount} time(s), the computer has won ${lossCount} time(s)`;
  } else if (
    (input == "scissors" && programPlays == "stone") ||
    (input == "paper" && programPlays == "scissors") ||
    (input == "stone" && programPlays == "paper")
  ) {
    gameOutcomeOutput = `You win! Congratulations ✨
    <br> You've won ${winCount} time(s), the computer has won ${lossCount} time(s)`;
  }
  // assigning emojis for display purpose
  var inputEmoji;
  if (input == "scissors") {
    inputEmoji = "✌️";
  } else if (input == "paper") {
    inputEmoji = "✋";
  } else if (input == "stone") {
    inputEmoji = "✊";
  }

  var programEmoji;
  if (programPlays == "scissors") {
    programEmoji = "✌️";
  } else if (programPlays == "paper") {
    programEmoji = "✋";
  } else if (programPlays == "stone") {
    programEmoji = "✊";
  }
  // performance metrics
  totalNonDrawRounds = winCount + lossCount;
  if (winCount > lossCount) {
    var playerPerformance = `So far ${userName}, you've won ${winCount}/${totalNonDrawRounds} rounds that are not draws, keep it up!`;
  } else if (winCount < lossCount) {
    playerPerformance = `So far ${userName}, you've won ${winCount}/${totalNonDrawRounds} rounds that are not draws, don't be too disheartened.`;
  } else if ((winCount = lossCount)) {
    playerPerformance = `So, ${userName}, you've been winning the same number of times as the computer, see if you can tip the scales in your favour.`;
  }

  console.log("win " + winCount);
  console.log("lose " + lossCount);
  console.log("draw " + drawCount);
  console.log("total non-draw rounds " + totalNonDrawRounds);

  // format of output to be displayed in game mode
  if (input == "scissors" || input == "paper" || input == "stone") {
    gameModeOutputValue = `🙃 <br>The computer played ${programPlays} ${programEmoji}. 
  <br>You played ${input} ${inputEmoji}. 
  <br>${gameOutcomeOutput}
  <br> ${playerPerformance}
  <br>Play again by typing "scissors", "paper",  "stone".`;
  } else {
    gameModeOutputValue = `🙃 <br>Please only type "scissors", "paper", or "stone" into the input box, we apologise for the limited literacy of this program.`;
  }
  return gameModeOutputValue;
}

function chooseScissorsPaperStone() {
  var integerSelected = getRandomInteger(3);
  var programPlays;
  if (integerSelected == 0) {
    programPlays = "scissors";
  } else if (integerSelected == 1) {
    programPlays = "paper";
  } else if (integerSelected == 2) {
    programPlays = "stone";
  }
  return programPlays;
}
function getRandomInteger(max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
}
