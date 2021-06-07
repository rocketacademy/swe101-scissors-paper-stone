// in order to simplify our code, we assume that once the game mode has been selected, it cannot be switched.
// also assume that the user knows the rules of each mode so we don't have to add explanation text.

// constants
var NUMBER_OF_CHOICES = 3;
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var PENDING_USER_NAME = "waiting for user name";
var PENDING_GAME_MODE = "pending game mode";
var NORMAL = "normal";
var REVERSE = "reverse";
var COM_VS_COM = "computer vs computer";
var KOREAN = "korean";
var WINNING_PCT_THRESHOLD = 33;
var USER_WIN = "you";
var DRAW = "draw";
var COM_WIN = "the computer";
var NO_WINNER_YET = "no winner yet";
var PENDING_DRAW = "pending draw";

// global variables
var numUserWins = 0;
var numComWins = 0;
var numDraws = 0;
var numGames = 0;
var gameMode = PENDING_USER_NAME; // initial game mode
var userName;
var userChoice;
var progChoice;
var gameResult;
var latestWinner = NO_WINNER_YET;

var generateRandomChoice = function () {
  var randomDecimal = Math.random() * NUMBER_OF_CHOICES;
  var randomInteger = Math.floor(randomDecimal) + 1; // possible values = 1,2,3
  var randomChoice = SCISSORS;
  if (randomInteger == 1) {
    randomChoice = PAPER;
  }
  if (randomInteger == 2) {
    randomChoice = STONE;
  }
  return randomChoice;
};

var createEmoji = function (choice) {
  var emoji;
  if (choice == SCISSORS) {
    emoji = "✂️";
  } else if (choice == PAPER) {
    emoji = "📄";
  } else if (choice == STONE) {
    emoji = "🗿";
  }
  return emoji;
};

var basicSPS = function (userMove) {
  progChoice = generateRandomChoice();
  if (gameMode == COM_VS_COM) {
    userChoice = generateRandomChoice();
  } else {
    userChoice = userMove;
  }
  if (userChoice == progChoice) {
    gameResult = DRAW;
  } else if (
    (userChoice == SCISSORS && progChoice == STONE) ||
    (userChoice == PAPER && progChoice == SCISSORS) ||
    (userChoice == STONE && progChoice == PAPER)
  ) {
    gameResult = COM_WIN;
  } else {
    gameResult = USER_WIN;
  }
  return gameResult;
};

var reverseSPS = function (userMove) {
  userChoice = userMove;
  progChoice = generateRandomChoice();
  if (userChoice == progChoice) {
    gameResult = DRAW;
  } else if (
    (userChoice == STONE && progChoice == SCISSORS) ||
    (userChoice == SCISSORS && progChoice == PAPER) ||
    (userChoice == PAPER && progChoice == STONE)
  ) {
    gameResult = COM_WIN;
  } else {
    gameResult = USER_WIN;
  }
  return gameResult;
};

var koreanSPS = function (userMove) {
  var currentResult = basicSPS(userMove);
  if (currentResult == DRAW) {
    gameResult = latestWinner;
    latestWinner = NO_WINNER_YET;
  } else {
    latestWinner = currentResult;
    gameResult = PENDING_DRAW;
  }
  console.log(`current result ${currentResult}`);
  console.log(`game result ${gameResult}`);
  console.log(`user win ${USER_WIN}`);
  return gameResult;
};

var interpretResult = function (gameResult) {
  var choiceMsg = `The program chose ${progChoice} ${createEmoji(progChoice)}.<br>
  You chose ${userChoice} ${createEmoji(userChoice)}.`;
  if (gameResult == DRAW) {
    numGames += 1;
    numDraws += 1;
    choiceMsg += `<br><br>Oops, it's a draw!`;
  } else if (gameResult == COM_WIN) {
    numGames += 1;
    numComWins += 1;
    choiceMsg += `<br><br>Shucks, you lost!`;
  } else if (gameResult == USER_WIN) {
    numGames += 1;
    numUserWins += 1;
    choiceMsg += `<br><br>Beginner's luck - you somehow managed to win!`;
  } else if (gameResult == NO_WINNER_YET) {
    choiceMsg += `<br><br>No one has won a round yet - please continue playing. Muk...jji...ppa!`;
  } else if (gameResult == PENDING_DRAW) {
    choiceMsg += `<br><br>The latest winner is: ${latestWinner}. If the next round is a draw, then ${latestWinner} will be the winner! Muk...jji...ppa!`;
  }
  var userWinPct = (numUserWins / numGames) * 100;
  var numWinsMsg = `So far ${userName}, out of the ${numGames} game(s) played, you have won ${numUserWins} game(s), the computer has won ${numComWins} game(s) and there have also been ${numDraws} draw(s). You therefore have a winning percentage of ${userWinPct.toFixed(
    2
  )}%.`;
  if (userWinPct >= WINNING_PCT_THRESHOLD) {
    numWinsMsg += ` Well done so far! 👏`;
  } else {
    numWinsMsg += ` Disappointing, try harder! 🤦`;
  }
  var finalMsg = `${choiceMsg}<br><br>
  ${numWinsMsg}`;
  return finalMsg;
};

var main = function (input) {
  var myOutputValue;
  if (gameMode == PENDING_USER_NAME) {
    userName = input;
    gameMode = PENDING_GAME_MODE;
    myOutputValue = `Hello, ${input}. Type "${NORMAL}", "${REVERSE}", "${COM_VS_COM}" or "${KOREAN}" to select the game mode.`;
  } else if (gameMode == PENDING_GAME_MODE) {
    if (input == REVERSE) {
      gameMode = REVERSE;
      myOutputValue = `You have selected ${REVERSE} mode! Type "${SCISSORS}", "${PAPER}" or "${STONE}" to play.`;
    } else if (input == NORMAL) {
      gameMode = NORMAL;
      myOutputValue = `You have selected ${NORMAL} mode! Type "${SCISSORS}", "${PAPER}" or "${STONE}" to play.`;
    } else if (input == COM_VS_COM) {
      gameMode = COM_VS_COM;
      myOutputValue = `You have selected ${COM_VS_COM} mode! Click on "Submit" to play.`;
    } else if (input == KOREAN) {
      gameMode = KOREAN;
      myOutputValue = `You have selected ${KOREAN} mode! Type "${SCISSORS}", "${PAPER}" or "${STONE}" to play.`;
    } else {
      myOutputValue = `Please type "${NORMAL}", "${REVERSE}", "${COM_VS_COM}" or "${KOREAN}" to select the game mode.`;
    }
  } else if (gameMode == NORMAL) {
    if (input != SCISSORS && input != PAPER && input != STONE) {
      myOutputValue = `Please type "${SCISSORS}", "${PAPER}" or "${STONE}" to play normal mode.`;
    } else {
      myOutputValue = interpretResult(basicSPS(input));
    }
  } else if (gameMode == REVERSE) {
    if (input != SCISSORS && input != PAPER && input != STONE) {
      myOutputValue = `Please type "${SCISSORS}", "${PAPER}" or "${STONE}" to play reverse mode.`;
    } else {
      myOutputValue = interpretResult(reverseSPS(input));
    }
  } else if (gameMode == COM_VS_COM) {
    myOutputValue = interpretResult(basicSPS());
  } else if (gameMode == KOREAN) {
    if (input != SCISSORS && input != PAPER && input != STONE) {
      myOutputValue = `Please type "${SCISSORS}", "${PAPER}" or "${STONE}" to play korean mode.`;
    } else {
      myOutputValue = interpretResult(koreanSPS(input));
    }
  }
  return myOutputValue;
};
