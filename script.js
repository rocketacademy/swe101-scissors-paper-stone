var timesUserWon = 0;
var timesComputerWon = 0;
var currentGameMode = "waiting for username";
var username = "";
var userWinningPercentage = -1;

var userWinningOrLosingMessage = function () {
  if (timesUserWon != 0 && timesComputerWon == 0) {
    return `Your winning percentage is 100%. Keep is up!`;
  } else if (timesUserWon == 0 && timesComputerWon != 0) {
    return `Your winning percentage is 0%. You are not doing so well.`;
  } else if (userWinningPercentage < 50) {
    return `Your winning percentage is ${userWinningPercentage}%. You are not doing so well.`;
  } else {
    return `Your winning percentage is ${userWinningPercentage}%. Keep is up!`;
  }
};

var checkValidInput = function (input) {
  if (
    input != `scissors` &&
    input != `paper` &&
    input != `stone` &&
    input != `reversed scissors` &&
    input != `reversed paper` &&
    input != `reversed stone`
  ) {
    myOutputValue = `There are only 3 options. Try again.`;
  }
  return myOutputValue;
};

var getComputerOutcome = function () {
  // randomly assigns 1, 2, or 3 to variable 'randomNumber'. function returns one of these strings: 'scissors', 'paper', 'stone'.
  var randomInteger = Math.floor(Math.random() * 3);
  randomScissorsPaperStone = ["scissors", "paper", "stone"];
  return randomScissorsPaperStone[randomInteger];
};

var displayGameOutcome = function (computerOutcome, userInput) {
  // outcome: draw
  if (
    userInput == computerOutcome ||
    userInput == `reversed ${computerOutcome}`
  ) {
    return `It's a draw.`;
  } else if (
    (computerOutcome == `scissors` && userInput == `paper`) ||
    (computerOutcome == `stone` && userInput == `scissors`) ||
    (computerOutcome == `paper` && userInput == `stone`) ||
    (computerOutcome == `paper` && userInput == `reversed scissors`) ||
    (computerOutcome == `scissors` && userInput == `reversed stone`) ||
    (computerOutcome == `stone` && userInput == `reversed paper`)
  ) {
    timesComputerWon = timesComputerWon + 1;
    return `You lose.`;
  } else {
    timesUserWon = timesUserWon + 1;
    return `You win.`;
  }
};

var getObjectIcon = function (object) {
  if (object == `scissors` || object == `reversed scissors`) {
    return ` ✂️`;
  } else if (object == `paper` || object == `reversed paper`) {
    return ` 🧻`;
  } else {
    return ` 🗿`;
  }
};

var main = function (input) {
  // do this if game mode is "waiting for username"
  if (currentGameMode == "waiting for username") {
    //set the name
    username = input;

    //now that we have the name, switch the mode
    currentGameMode = "dice game";
    myOutputValue = `Hello ${username}, you have entered the game. Start playing by entering either "scissors", "paper", or "stone".`;
  }
  // do this if game mode is "dice game"
  else if ((currentGameMode = `dice game`)) {
    computerOutcome = getComputerOutcome();
    console.log(`You chose: ${input}`);
    console.log(`The computer chose: ${computerOutcome}`);
    userIcon = getObjectIcon(input);
    computerIcon = getObjectIcon(computerOutcome);
    gameOutcome = displayGameOutcome(computerOutcome, input);
    winningLosingMessage = userWinningOrLosingMessage();
    console.log(
      `User wins: ${timesUserWon} Computer wins: ${timesComputerWon}`
    );
    userWinningPercentage =
      (timesUserWon / (timesUserWon + timesComputerWon)) * 100;
    console.log(`User winning/losing percentage is ${userWinningPercentage}`);
    myOutputValue = `${gameOutcome} <br> You chose ${input}${userIcon} and the computer chose ${computerOutcome}${computerIcon}. <br><br>${username}'s wins: ${timesUserWon}<br>
    Computer's wins: ${timesComputerWon}<br>
    ${winningLosingMessage}<br><br>
    Now you can type "scissors", "paper", or "stone" to play another round!`;
    checkValidInput(input);
  }

  return myOutputValue;
};
