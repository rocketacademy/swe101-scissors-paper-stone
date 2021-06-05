var getProgramOutcome = function () {
  // randomly assigns 1, 2, or 3 to variable 'randomNumber'. function returns one of these strings: 'scissors', 'paper', 'stone'.
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    return `scissors`;
  }
  if (randomNumber == 2) {
    return `paper`;
  }
  if (randomNumber == 3) {
    return `stone`;
  }
};

var displayGameOutcome = function (programOutcome, userInput) {
  // outcome: draw
  if (programOutcome == userInput) {
    return `It's a draw.`;
  }
  // outcome: user loses
  if (
    (programOutcome == `scissors` && userInput == `paper`) ||
    (programOutcome == `stone` && userInput == `scissors`) ||
    (programOutcome == `paper` && userInput == `stone`)
  ) {
    return `You lose.`;
  }
  // outcome: user wins
  if (
    (programOutcome == `paper` && userInput == `scissors`) ||
    (programOutcome == `scissors` && userInput == `stone`) ||
    (programOutcome == `stone` && userInput == `paper`)
  ) {
    return `You win.`;
  }
};

var main = function (input) {
  programOutcome = getProgramOutcome();
  console.log(`You chose: ${input}`);
  console.log(`The computer chose: ${programOutcome}`);
  gameOutcome = displayGameOutcome(programOutcome, input);
  myOutputValue = `${gameOutcome} You chose ${input} and the computer chose ${programOutcome}.`;
  return myOutputValue;
};
