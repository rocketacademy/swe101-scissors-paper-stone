var main = function (input) {
  var myOutputValue;
  var programPlays = playScissorsPaperStone();

  // logic of scissors paper stone game
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
    gameOutcomeOutput = `You win! Congratulations ✨`;
  } else if (
    (input == "scissors" && programPlays == "stone") ||
    (input == "paper" && programPlays == "scissors") ||
    (input == "stone" && programPlays == "paper")
  ) {
    gameOutcomeOutput = `You lose！ Bummer.`;

    // logic of reversed scissors paper stone game
  } else if (
    (input == "reversed scissors" && programPlays == "scissors") ||
    (input == "paper" && programPlays == "paper") ||
    (input == "stone" && programPlays == "stone")
  ) {
    gameOutcomeOutput = `It's a draw. `;
  } else if (
    (input == "reversed scissors" && programPlays == "paper") ||
    (input == "reversed paper" && programPlays == "stone") ||
    (input == "reversed stone" && programPlays == "scissors")
  ) {
    gameOutcomeOutput = `You lose！ Bummer.`;
  } else if (
    (input == "reversed scissors" && programPlays == "stone") ||
    (input == "reversed paper" && programPlays == "scissors") ||
    (input == "reversed stone" && programPlays == "paper")
  ) {
    gameOutcomeOutput = `You win! Congratulations ✨`;
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

  // format of output to be displayed
  if (
    input == "scissors" ||
    input == "paper" ||
    input == "stone" ||
    input == "reversed scissors" ||
    input == "reversed paper" ||
    input == "reversed stone"
  ) {
    myOutputValue = `The computer played ${programPlays} ${programEmoji}. 
  <br>You played ${input} ${inputEmoji}. 
  <br>${gameOutcomeOutput}
  <br>Play again by typing "scissors", "paper",  "stone" or ... if you know you know 😉🙃.`;
  } else {
    myOutputValue = `Please only type "scissors", "paper", or "stone" into the input box, we apologise for the limited literacy of this program.`;
  }
  return myOutputValue;
};

function playScissorsPaperStone() {
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
