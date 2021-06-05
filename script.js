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
  if (
    computerOutcome == userInput ||
    (computerOutcome == `scissors` && userInput == `reversed scissors`) ||
    (computerOutcome == `paper` && userInput == `reversed paper`) ||
    (computerOutcome == `stone` && userInput == `reversed stone`)
  ) {
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

  // REVERSE OUTCOMES
  // user loses
  if (
    (computerOutcome == `paper` && userInput == `reversed scissors`) ||
    (computerOutcome == `scissors` && userInput == `reversed stone`) ||
    (computerOutcome == `stone` && userInput == `reversed paper`)
  ) {
    return `You lose.`;
  }

  // user wins
  if (
    (computerOutcome == `scissors` && userInput == `reversed paper`) ||
    (computerOutcome == `stone` && userInput == `reversed scissors`) ||
    (computerOutcome == `paper` && userInput == `reversed stone`)
  ) {
    return `You win.`;
  }
};

var main = function (input) {
  computerOutcome = getComputerOutcome();
  console.log(`You chose: ${input}`);
  console.log(`The computer chose: ${computerOutcome}`);

  if (
    input != `scissors` &&
    input != `paper` &&
    input != `stone` &&
    input != `reversed scissors` &&
    input != `reversed paper` &&
    input != `reversed stone`
  ) {
    return `There are only 3 options. Try again. `;
  }

  gameOutcome = displayGameOutcome(computerOutcome, input);

  // putting emojis after 'scissors', 'paper', and 'stone
  if (input == `scissors` || input == `reversed scissors`) {
    var input = `scissors ✂️`;
  }

  if (input == `paper` || input == `reversed paper`) {
    var input = `paper 🧻`;
  }

  if (input == `stone` || input == `reversed stone`) {
    var input = `stone 🗿`;
  }

  if (computerOutcome == `scissors`) {
    var computerOutcome = `scissors ✂️`;
  }

  if (computerOutcome == `paper`) {
    var computerOutcome = `paper 🧻`;
  }

  if (computerOutcome == `stone`) {
    var computerOutcome = `stone 🗿`;
  }

  myOutputValue = `${gameOutcome} <br> You chose ${input} and the computer chose ${computerOutcome}. <br><br> Now you can type "scissors", "paper", or "stone" to play another round!`;
  return myOutputValue;
};
