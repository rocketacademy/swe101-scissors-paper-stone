// PROJECT 1: Scissors Paper Stone - Part 1 & 2

// 2 game modes: "waiting for user name" and "SPS game" (part 2)
var currentGameMode = "waiting for user name";
var userName = " ";
// win-loss record (part 2)
var playCount = 0;
var userWinCount = 0;
var computerWinCount = 0;
var drawCount = 0;

// create a function to generate Scissors Paper Stone
var generateSPS = function () {
  // produces a decimal between 0 and 2
  var randomDecimal = Math.random() * 3;
  // take off the decimal to get a number 0 - 2 ... add 1
  var randomInteger = Math.floor(randomDecimal) + 1;
  // assign 1, 2, and 3 to "scissors", "paper", and "stone" respectively.
  if (randomInteger == 1) {
    var randomItem = "scissors";
  } else if (randomInteger == 2) {
    randomItem = "paper";
  } else if (randomInteger == 3) {
    randomItem = "stone";
  }
  return randomItem;
};

var playSPSGame = function (userName, userGuess) {
  var message = " ";

  // input validation: first check if input is a string (part 1 - more comfortable)
  if (isNaN(Number(userGuess)) == false) {
    message = `Sorry ${userName}, please enter a word.`;
    return message;
  }

  // input validation: then check if input is scissors, paper, stone, reversed scissors, reversed paper or reversed stone (part 1 - more comfortable)
  if (
    userGuess !== "scissors" &&
    userGuess !== "paper" &&
    userGuess !== "stone" &&
    userGuess !== "reversed scissors" &&
    userGuess !== "reversed paper" &&
    userGuess !== "reversed stone"
  ) {
    message = `Sorry ${userName}, there are only 6 input options available: "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone". <br> <br> Please use lowercase letters only and try again.`;
    return message;
  }

  // SPS game logic
  // Basic Scissors Paper Stone
  // 1. scissors beats paper
  // 2. paper beats stone
  // 3. stone beats scissors
  // Reverse Scissors Paper Stone where the rules are reversed:
  // 1. scissors beats stone
  // 2. stone beats paper
  // 3. paper beats scissors
  var itemName = generateSPS();
  var endingMessage = `Now you can type "scissors", "paper", "stone", "reversed scissors", reversed paper" or "reversed stone" to play another round!`;
  if (
    (userGuess == "scissors" && itemName == "paper") ||
    (userGuess == "paper" && itemName == "stone") ||
    (userGuess == "stone" && itemName == "scissors") ||
    (userGuess == "reversed scissors" && itemName == "stone") ||
    (userGuess == "reversed stone" && itemName == "paper") ||
    (userGuess == "reversed paper" && itemName == "scissors")
  ) {
    playCount = playCount + 1;
    userWinCount = userWinCount + 1;
    var winningRate = (userWinCount / playCount) * 100;
    var outcomeMessage = `You win!`;
  }

  // 4. if both parties choose the same object, it's a draw.
  else if (
    itemName == userGuess ||
    (itemName == "scissors" && userGuess == "reversed scissors") ||
    (itemName == "paper" && userGuess == "reversed paper") ||
    (itemName == "stone" && userGuess == "reversed stone")
  ) {
    playCount = playCount + 1;
    drawCount = drawCount + 1;
    winningRate = (userWinCount / playCount) * 100;
    outcomeMessage = `It's a draw!`;
  }

  // if the above two statements are false then the user has lost
  else {
    playCount = playCount + 1;
    computerWinCount = computerWinCount + 1;
    winningRate = (userWinCount / playCount) * 100;
    outcomeMessage = `You lose!`;
  }
  var beginningMessage = `${userName}, the computer chose ${itemName}.<br> You chose ${userGuess}. <br> <br> ${outcomeMessage} <br> <br> Games played: ${playCount} <br> Games won: ${userWinCount} <br> Games lost: ${computerWinCount} <br> Number of draws: ${drawCount} <br> Win rate: ${winningRate}%.`;

  if (winningRate >= 50) {
    message = `${beginningMessage} <br> You're doing well, ${userName}! <br> <br> ${endingMessage}`;
  } else {
    message = `${beginningMessage} <br> You're not doing so well, ${userName}! <br> <br> ${endingMessage}`;
  }
  return message;
};

var main = function (input) {
  var myOutputValue = " ";
  // collect user's name as the first input after the page loads
  if (currentGameMode == "waiting for user name") {
    userName = input;
    // now that we have the user's name
    currentGameMode = "SPS game";
    myOutputValue = `Hello, ${userName}! Now you can type in "scissors", "paper", "stone" (or "reversed scissors", "reversed paper", "reversed stone") to start playing the SPS game!`;
  } else if (currentGameMode == "SPS game") {
    myOutputValue = playSPSGame(userName, input);
    return myOutputValue;
  }
  return myOutputValue;
};

var getTitleText = function () {
  if (currentGameMode == "waiting for user name") {
    return "What is your name?";
  } else {
    return "What are you feeling like? Scissors, Paper or Stone?";
  }
};
