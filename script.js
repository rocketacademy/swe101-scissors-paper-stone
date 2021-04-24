var numUserWins = 0;
var numComputerWins = 0;
var numDraw = 0;

var currentGameMode = "waiting for username";
var userName = "";
var lastWinner = "";

var main = function (userChoice) {
  //game modes
  if (currentGameMode == "waiting for username") {
    userName = userChoice;
    currentGameMode = "Scissors paper stone";
    return `Hello ${userName}`;
  }
  if (userChoice == "reverse") {
    currentGameMode = "reverse";
    return `Reverse game started, please input`;
  }
  if (userChoice == "cvc") {
    currentGameMode = "cvc";
    userName = `${userName}'s 🖥️ friend`;
    return `Ok 🖥️ shall play for you the basic game of ✂️🧻🥌`;
  }

  if (currentGameMode == "cvc") {
    userChoice = ComputerChoice();
  }
  //default
  var output = "lost👻";
  var computerChoice = ComputerChoice();
  if (
    !(
      userChoice == "scissors" ||
      userChoice == "paper" ||
      userChoice == "stone"
    )
  ) {
    return "this is not a valid input.<br> The three input for ✂️🧻🥌 are: <br>scissors<br>paper<br>stone ";
  }
  //draw condition applies for both normal game and reversed game
  if (computerChoice == userChoice) {
    output = "draw😱";
    numDraw++;
    if (lastWinner != "") {
      return `${lastWinner} is the winner of muk-jji-ppa!`;
    }
  }
  //normal game
  if (currentGameMode == "Scissors paper stone" || "cvc") {
    if (
      (computerChoice == "scissors" && userChoice == "stone") ||
      (computerChoice == "stone" && userChoice == "paper") ||
      (computerChoice == "paper" && userChoice == "scissors")
    ) {
      output = "win👾";
      numUserWins++;
    } else {
      numComputerWins++;
    }
  }
  //reversed modes
  else if (currentGameMode == "reverse") {
    if (
      (computerChoice == "scissors" && userChoice == "paper") ||
      (computerChoice == "stone" && userChoice == "scissors") ||
      (computerChoice == "paper" && userChoice == "stone")
    ) {
      output = "win🙃";
      numUserWins++;
    } else {
      numComputerWins++;
    }
  }
  var totalGames = numUserWins + numComputerWins;
  var specialMessage = `So far you've been winning ${numUserWins}/${totalGames}. Not bad!`;
  if (numUserWins < numComputerWins) {
    var specialMessage = `So far you've been winning ${numUserWins}/${totalGames}. 🖥️ is luckier than you! `;
  }

  //set last winner
  if (output == "lost👻") {
    lastWinner = "🖥️";
  } else if (output == "win🙃" || output == "win👾") {
    lastWinner = userName;
  }
  return `${userName} ${output} with ${userChoice} against ${computerChoice}<br>${userName} has ${numUserWins} wins vs the 🖥️ with ${numComputerWins} wins! With ${numDraw} draws <br>${specialMessage} `;
};

var ComputerChoice = function () {
  var output = "scissors";
  var randomNum = Math.random() * 3;
  var randomInt = Math.floor(randomNum) + 1;

  if (randomInt == 2) {
    output = "paper";
  } else if (randomInt == 3) {
    output = "stone";
  }
  return output;
};
