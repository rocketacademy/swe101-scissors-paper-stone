var getComputerOutcome = function () {
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

var displayGameOutcome = function (computerOutcome, userInput) {
  // outcome: draw
  if (computerOutcome == userInput) {
    return `It's a draw.`;
  }
  // outcome: user loses
  if (
    (computerOutcome == `scissors` && userInput == `paper`) ||
    (computerOutcome == `stone` && userInput == `scissors`) ||
    (computerOutcome == `paper` && userInput == `stone`)
  ) {
    return `You lose.`;
  }
  // outcome: user wins
  if (
    (computerOutcome == `paper` && userInput == `scissors`) ||
    (computerOutcome == `scissors` && userInput == `stone`) ||
    (computerOutcome == `stone` && userInput == `paper`)
  ) {
    return `You win.`;
  }
};

var main = function (input) {
  computerOutcome = getComputerOutcome();
  console.log(`You chose: ${input}`);
  console.log(`The computer chose: ${computerOutcome}`);

  if (input != `scissors` && input != `paper` && input != `stone`) {
    return `There are only 3 options. Try again. `;
  }

  gameOutcome = displayGameOutcome(computerOutcome, input);
  myOutputValue = `${gameOutcome} You chose ${input} and the computer chose ${computerOutcome}.`;
  return myOutputValue;
};
