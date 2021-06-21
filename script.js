var winCount = 0;
var gameCount = 0;
var draw = 0;
var recentWinner = "";

var gamemode = "input";
var username = "";

var getRandomChoice = function () {
  var randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice == 0) return "paper";
  else if (randomChoice == 1) return "rock";
  else if (randomChoice == 2) return "scissors";
};

var validateInput = function (input) {
  if (input == "paper" || input == "rock" || input == "scissors") return 1;
  else return 0;
};
var getWinnerNormalMode = function (playerChoice) {
  var computerChoice = getRandomChoice();
  var outputMessage = "";
  if (playerChoice == "rock" && computerChoice == "scissors") {
    outputMessage = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    recentWinner = username;
    winCount += 1;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    outputMessage = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    recentWinner = username;
    winCount += 1;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    outputMessage = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    recentWinner = username;
    winCount += 1;
  } else if (playerChoice == computerChoice) {
    gameCount += 1;
    outputMessage = `It's a draw! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    if (recentWinner == username) {
      outputMessage += `<br>You won in the last round, so you are the winner! Muk-jji-ppa!`;
      winCount += 1;
    } else if (recentWinner == "bot") {
      outputMessage += `<br> Sorry, the bot won in the last round so it is the winner. Muk-jji-ppa!`;
    }
    outputMessage += `<br><br>So far ${username}, you have won ${winCount} out of ${gameCount} games.<br>Try playing again by typing 'scissors', 'rock', or 'paper'. Good luck!`;
  } else {
    outputMessage = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    recentWinner = "bot";
  }
  return outputMessage;
};

var getWinnerReverseMode = function (playerChoice) {
  var computerChoice = getRandomChoice();
  var outputMessage = "";
  if (playerChoice == "rock" && computerChoice == "scissors") {
    outputMessage = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    recentWinner = "bot";
    winCount += 1;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    outputMessage = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    recentWinner = "bot";
    winCount += 1;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    outputMessage = `You lose! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    recentWinner = "bot";
    winCount += 1;
  } else if (playerChoice == computerChoice) {
    gameCount += 1;
    outputMessage = `It's a draw! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    if (recentWinner == username) {
      outputMessage += `<br>You won in the last round, so you are the winner! Muk-jji-ppa!`;
      winCount += 1;
    }
  } else {
    outputMessage = `You win! You chose ${playerChoice} and the computer chose ${computerChoice}`;
    recentWinner = username;
  }
  outputMessage += `<br><br>Reversed, haha!<br><br>So far ${username}, you have won ${winCount} out of ${gameCount} games.<br>Try playing again by typing 'scissors', 'rock', or 'paper'. Good luck!`;
  return outputMessage;
};

var doPaperRockScissors = function (input) {
  if (input == "normal") {
    gamemode = "normal";
    return "You are now in Normal mode.";
  }
  if (input == "reverse") {
    gamemode = "reverse";
    return "You are now in Reverse mode.";
  }
  if (gamemode == "input") {
    username = input;
    gamemode = "normal";
    return `Hi! ${input}, play Paper,Rock, Scissors game! Good luck and have fun.`;
  }
  if (gamemode == "normal") {
    if (validateInput(input)) return getWinnerNormalMode(input);
    else return "Please input either paper, rock, scissors only. Try again :)";
  }
  if (gamemode == "reverse") {
    if (validateInput(input)) return getWinnerReverseMode(input);
    else return "Please input either paper, rock, scissors only. Try again :)";
  }
};
var main = function (input) {
  return doPaperRockScissors(input);
};
