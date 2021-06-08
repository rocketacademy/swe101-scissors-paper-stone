var timesUserWon = 0;
var timesComputerWon = 0;
var currentGameMode = "waiting for username";
var username = "";
var userWinningPercentage = -1;
var mostRecentWinner = ``;
var mostRecentWinnerMessage = ``;

var userWinningOrLosingMessage = function () {
  if (timesUserWon != 0 && timesComputerWon == 0) {
    return `Your winning percentage is 100%. Keep is up!`;
  } else if (timesUserWon == 0 && timesComputerWon == 0) {
    return `Both have no wins yet.`;
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
    input != `reverse`
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
  if (userInput == computerOutcome) {
    return `It's a draw.`;
  } else if (
    (computerOutcome == `scissors` && userInput == `paper`) ||
    (computerOutcome == `stone` && userInput == `scissors`) ||
    (computerOutcome == `paper` && userInput == `stone`)
  ) {
    timesComputerWon = timesComputerWon + 1;
    mostRecentWinner = `computer`;
    return `You lose.`;
  } else if (
    (computerOutcome == `scissors` && userInput == `stone`) ||
    (computerOutcome == `stone` && userInput == `paper`) ||
    (computerOutcome == `paper` && userInput == `scissors`)
  ) {
    timesUserWon = timesUserWon + 1;
    mostRecentWinner = `user`;
    return `You win.`;
  }
};

var displayReversedGameOutcome = function (computerOutcome, userInput) {
  // outcome: draw
  if (userInput == computerOutcome) {
    return `It's a draw.`;
  } else if (
    (computerOutcome == `paper` && userInput == `scissors`) ||
    (computerOutcome == `scissors` && userInput == `stone`) ||
    (computerOutcome == `stone` && userInput == `paper`)
  ) {
    timesComputerWon = timesComputerWon + 1;
    return `You lose.`;
  } else if (
    (computerOutcome == `scissors` && userInput == `paper`) ||
    (computerOutcome == `stone` && userInput == `scissors`) ||
    (computerOutcome == `paper` && userInput == `stone`)
  ) {
    timesUserWon = timesUserWon + 1;
    return `You win.`;
  }
};

var displayKoreanGameOutcome = function (computerOutcome, userInput) {
  // outcome: draw
  if (userInput == computerOutcome) {
    if (mostRecentWinner == `user`) {
      return (mostRecentWinnerMessage = `You are the ultimate winner of Korean Scissors-Paper-Stone!`);
    } else if (mostRecentWinner == `computer`) {
      return (mostRecentWinnerMessage = `You lost. The computer is the ultimate winner of Korean Scissors-Paper-Stone!`);
    }
    return `It's a draw for this round.`;
  } else if (
    (computerOutcome == `scissors` && userInput == `paper`) ||
    (computerOutcome == `stone` && userInput == `scissors`) ||
    (computerOutcome == `paper` && userInput == `stone`)
  ) {
    timesComputerWon = timesComputerWon + 1;
    mostRecentWinner = `computer`;
    return `The game is not yet decided although you lose this round.`;
  } else if (
    (computerOutcome == `scissors` && userInput == `stone`) ||
    (computerOutcome == `stone` && userInput == `paper`) ||
    (computerOutcome == `paper` && userInput == `scissors`)
  ) {
    timesUserWon = timesUserWon + 1;
    mostRecentWinner = `user`;
    return `The game is not yet decided although you win this round.`;
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
  } else if (currentGameMode == `dice game`) {
    if (input == `reverse`) {
      currentGameMode = `reversed`;
      return (myOutputValue = `Hello ${username}, you have entered the REVERSED game. Start playing by entering either "scissors", "paper", or "stone".`);
    } else if (input == `korean` || input == `Korean`) {
      {
        currentGameMode = `korean`;
        return (myOutputValue = `Hello ${username}, you have entered the Korean SPS (Muk-Jji-Ppa) game. Start playing by entering either "scissors", "paper", or "stone".`);
      }
    }
    computerOutcome = getComputerOutcome();
    console.log(`You chose: ${input}`);
    console.log(`The computer chose: ${computerOutcome}`);
    userIcon = getObjectIcon(input);
    computerIcon = getObjectIcon(computerOutcome);
    gameOutcome = displayGameOutcome(computerOutcome, input);
    console.log(
      `User wins: ${timesUserWon} Computer wins: ${timesComputerWon}`
    );
    console.log(`Most recent winner is ${mostRecentWinner}`);
    userWinningPercentage = Math.round(
      (timesUserWon / (timesUserWon + timesComputerWon)) * 100
    );
    winningLosingMessage = userWinningOrLosingMessage();
    console.log(`User winning/losing percentage is ${userWinningPercentage}%`);
    myOutputValue = `${gameOutcome} <br> You chose ${input}${userIcon} and the computer chose ${computerOutcome}${computerIcon}. <br><br>${username}'s wins: ${timesUserWon}<br>
    Computer's wins: ${timesComputerWon}<br>
    ${winningLosingMessage}<br><br>
    ${mostRecentWinnerMessage}<br><br>
    Now you can type "scissors", "paper", or "stone" to play another round!`;
    checkValidInput(input);
  } else if (currentGameMode == `reversed`) {
    computerOutcome = getComputerOutcome();
    console.log(`You chose: ${input}`);
    console.log(`The computer chose: ${computerOutcome}`);
    userIcon = getObjectIcon(input);
    computerIcon = getObjectIcon(computerOutcome);
    gameOutcome = displayReversedGameOutcome(computerOutcome, input);
    console.log(
      `User wins: ${timesUserWon} Computer wins: ${timesComputerWon}`
    );
    console.log(`Most recent winner is ${mostRecentWinner}`);
    userWinningPercentage = Math.round(
      (timesUserWon / (timesUserWon + timesComputerWon)) * 100
    );
    winningLosingMessage = userWinningOrLosingMessage();
    console.log(`User winning/losing percentage is ${userWinningPercentage}%`);
    myOutputValue = `${gameOutcome} <br> You chose ${input}${userIcon} and the computer chose ${computerOutcome}${computerIcon}. <br><br>${username}'s wins: ${timesUserWon}<br>
    Computer's wins: ${timesComputerWon}<br>
    ${winningLosingMessage}<br><br>
    ${mostRecentWinnerMessage}<br><br>
    Now you can type "scissors", "paper", or "stone" to play another round!`;
    checkValidInput(input);
  } else if (currentGameMode == `korean`) {
    computerOutcome = getComputerOutcome();
    console.log(`You chose: ${input}`);
    console.log(`The computer chose: ${computerOutcome}`);
    userIcon = getObjectIcon(input);
    computerIcon = getObjectIcon(computerOutcome);
    gameOutcome = displayKoreanGameOutcome(computerOutcome, input);
    console.log(
      `User wins: ${timesUserWon} Computer wins: ${timesComputerWon}`
    );
    console.log(`Most recent winner is ${mostRecentWinner}`);
    userWinningPercentage = Math.round(
      (timesUserWon / (timesUserWon + timesComputerWon)) * 100
    );
    winningLosingMessage = userWinningOrLosingMessage();
    console.log(`User winning/losing percentage is ${userWinningPercentage}%`);
    myOutputValue = `${gameOutcome} <br> You chose ${input}${userIcon} and the computer chose ${computerOutcome}${computerIcon}. <br><br>${username}'s wins: ${timesUserWon}<br>
    Computer's wins: ${timesComputerWon}<br>
    ${winningLosingMessage}<br><br>
    ${mostRecentWinnerMessage}<br><br>
    Now you can type "scissors", "paper", or "stone" to play another round!`;
    checkValidInput(input);
  }

  return myOutputValue;
};
