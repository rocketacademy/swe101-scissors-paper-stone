var scissors = "scissors ✌️";
var paper = "paper ✋";
var stone = "stone 👊 ";
var yourWins = 0;
var comWins = 0;
var drawCounts = 0;
var totalCounts = 0;
var gameState = "waiting for username";
var gameMode = "normal SPS";
var userName = "";

var compGeneratedWord = function () {
  var randomInteger = Math.floor(Math.random() * 3) + 1; // 1,2,3
  if (randomInteger == 1) {
    var selectedWord = scissors;
  }
  if (randomInteger == 2) {
    var selectedWord = paper;
  }
  if (randomInteger == 3) {
    var selectedWord = stone;
  }
  return selectedWord;
};

var outcome = function (input, computerInput, gameMode) {
  if (gameMode == "normal SPS") {
    if (
      (input == "scissors" && computerInput == paper) ||
      (input == "paper" && computerInput == stone) ||
      (input == "stone" && computerInput == scissors)
    ) {
      return `win`;
    }
    if (
      (input == "scissors" && computerInput == scissors) ||
      (input == "paper" && computerInput == paper) ||
      (input == "stone" && computerInput == stone)
    ) {
      return `draw`;
    }
    return `lose`;
  } else if (gameMode == "reverse SPS") {
    if (
      (input == "scissors" && computerInput == stone) ||
      (input == "paper" && computerInput == scissors) ||
      (input == "stone" && computerInput == paper)
    ) {
      return `win`;
    }

    if (
      (input == "scissors" && computerInput == scissors) ||
      (input == "paper" && computerInput == paper) ||
      (input == "stone" && computerInput == stone)
    ) {
      return `draw`;
    }
    return `lose`;
  }
};

var main = function (input) {
  if (gameState == "waiting for username") {
    userName = input;
    gameState = "set game mode";
    return `Welcome to the game ${userName} muahahaha ☠️, please set the game mode by entering "normal" or "reverse"`;
  } else if (gameState == "set game mode") {
    if (input == "reverse") {
      gameMode = "reverse SPS";
      gameState = "ready to play";
      return ` You are now playing reverse SPS, please key in scissors, paper or stone`;
    } else {
      gameMode = "normal SPS";
      gameState = "ready to play";
      return ` You are now playing normal SPS, please key in scissors, paper or stone`;
    }
    // TODO: tell them if invalid game mode. also write logic for normal SPS
  } else if (gameState == "ready to play") {
    var comInput = compGeneratedWord();
    var userInput = input;
    if (input !== "scissors" && input !== "paper" && input !== "stone") {
      return `Please try again ${userName}.😈 <br> Input only 'scissors', 'paper' or 'stone' to play! `;
    }
    var gameOutcome = outcome(userInput, comInput, gameMode);

    totalCounts = totalCounts + 1;
    if (gameOutcome == "win") {
      yourWins = yourWins + 1;
      return `You win ${userName}!👏👏 <br><br> you chose ${userInput}, the computer chose ${comInput}. <br><br> You have won ${yourWins} times out of ${totalCounts} total tries `;
    }
    if (gameOutcome == "draw") {
      drawCounts = drawCounts + 1;
      return `its a draw ${userName}. <br><br> You chose ${userInput}, the computer chose ${comInput}. <br><br> Draw Counts: ${drawCounts}`;
    }
    if (gameOutcome != "win" && gameOutcome != "draw") {
      comWins = comWins + 1;
      return `Boohoo ${userName}. you lost! Computer wins!🤪 <br><br> you chose ${userInput}, the computer chose ${comInput}. <br> <br> You have lost ${comWins} times out of ${totalCounts} total tries`;
    }
  }
};
