var inputScissors = "scissors";
var inputPaper = "paper";
var inputStone = "stone";
var inputReversedScissors = "reversed scissors";
var inputReversedPaper = "reversed paper";
var inputReversedStone = "reversed stone";
// modes of games
var currentGameMode = "user to input username";
var userName = " ";
var playerOrComputerMode = " ";
var normalOrKoreanVersion = "";
// score board
var draw = 0;
var playerWinCount = 0;
var programWinCount = 0;
var computerWinCount = 0;
var totalCount = 0;
// korean version
var mukJjiPpaState = "play again";
var tempWinner = " ";

var randomNumber1to3 = function () {
  var randomDecimal = Math.random() * 3; // >= 0 to < 3
  var randomInteger = Math.floor(randomDecimal); // 0,1,2
  var randomNumber = randomInteger + 1; // 1,2,3
  return randomNumber;
};

// computer generates "scissors" "paper" "stone"
var outputByComputer = function () {
  var randomNumber = randomNumber1to3();
  var programOutput = "scissors";
  if (randomNumber == "1") {
    var programOutput = "paper";
  }
  if (randomNumber == "2") {
    var programOutput = "stone";
  }
  return programOutput;
};

// random number to be generated for "reversed" function
var randomNumber1to6 = function () {
  var randomDecimal = Math.random() * 6; // >= 0 to < 6
  var randomInteger = Math.floor(randomDecimal); // 0,1,2,3,4,5
  var randomNumber = randomInteger + 1; // 1,2,3,4,5,6
  return randomNumber;
};

// program generates "scissors" "paper" "stone" "reversed scissors" "reversed paper" "reversed stone"
var outputByProgram = function () {
  // computer VS computer mode
  var randomNumber = randomNumber1to6();
  var programOutput = "scissors";
  if (randomNumber == "1") {
    var programOutput = "paper";
  }
  if (randomNumber == "2") {
    var programOutput = "stone";
  }
  if (randomNumber == "3") {
    var programOutput = "reversed scissors";
  }
  if (randomNumber == "4") {
    var programOutput = "reversed paper";
  }
  if (randomNumber == "5") {
    var programOutput = "reversed stone";
  }
  return programOutput;
};

var winLoseBoard = function (playerToComputer) {
  if (
    playerToComputer == ["scissors" + "scissors"] ||
    playerToComputer == ["paper" + "paper"] ||
    playerToComputer == ["stone" + "stone"] ||
    playerToComputer == ["reversed scissors" + "scissors"] ||
    playerToComputer == ["reversed paper" + "paper"] ||
    playerToComputer == ["reversed stone" + "stone"]
  ) {
    draw = draw + 1;
    var myOutputValue = `It's a draw!<br><br>Player Win Count: ${playerWinCount}.<br>Player Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}.`;
  }
  if (
    playerToComputer == ["scissors" + "paper"] ||
    playerToComputer == ["paper" + "stone"] ||
    playerToComputer == ["stone" + "scissors"] ||
    playerToComputer == ["reversed stone" + "paper"] ||
    playerToComputer == ["reversed scissors" + "stone"] ||
    playerToComputer == ["reversed paper" + "scissors"]
  ) {
    playerWinCount = playerWinCount + 1;
    myOutputValue = `You win!<br><br>Player Win Count: ${playerWinCount}.<br>Player Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}.`;
  }
  if (
    playerToComputer == ["stone" + "paper"] ||
    playerToComputer == ["scissors" + "stone"] ||
    playerToComputer == ["paper" + "scissors"] ||
    playerToComputer == ["reversed scissors" + "paper"] ||
    playerToComputer == ["reversed paper" + "stone"] ||
    playerToComputer == ["reversed stone" + "scissors"]
  ) {
    computerWinCount = computerWinCount + 1;
    myOutputValue = `You lose!<br><br>Player Win Count: ${playerWinCount}.<br>Player Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}.`;
  }
  return myOutputValue;
};

var winningPercentageOutput = function (totalCount) {
  var winningPercentage = (playerWinCount / totalCount) * 100;
  if (winningPercentage > 50) {
    var winningPercentageOutput = `So far ${userName}, you have been winning ${playerWinCount}/${totalCount} turns. Pretty good!`;
  } else {
    winningPercentageOutput = `<br><br>So far ${userName}, you have been winning ${playerWinCount}/${totalCount} turns!`;
  }
  return winningPercentageOutput;
};

var winLoseBoardForComputerVSComputer = function (programToComputer) {
  if (
    programToComputer == ["scissors" + "scissors"] ||
    programToComputer == ["paper" + "paper"] ||
    programToComputer == ["stone" + "stone"] ||
    programToComputer == ["reversed scissors" + "scissors"] ||
    programToComputer == ["reversed paper" + "paper"] ||
    programToComputer == ["reversed stone" + "stone"]
  ) {
    draw = draw + 1;
    var myOutputValue = `It's a draw!<br><br>Program Win Count: ${programWinCount}.<br>Program Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}.`;
  }

  if (
    programToComputer == ["scissors" + "paper"] ||
    programToComputer == ["paper" + "stone"] ||
    programToComputer == ["stone" + "scissors"] ||
    programToComputer == ["reversed stone" + "paper"] ||
    programToComputer == ["reversed scissors" + "stone"] ||
    programToComputer == ["reversed paper" + "scissors"]
  ) {
    programWinCount = programWinCount + 1;
    myOutputValue = `Program wins!<br><br>Program Win Count: ${programWinCount}.<br>Program Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}.`;
  }

  if (
    programToComputer == ["stone" + "paper"] ||
    programToComputer == ["scissors" + "stone"] ||
    programToComputer == ["paper" + "scissors"] ||
    programToComputer == ["reversed scissors" + "paper"] ||
    programToComputer == ["reversed paper" + "stone"] ||
    programToComputer == ["reversed stone" + "scissors"]
  ) {
    computerWinCount = computerWinCount + 1;
    myOutputValue = `Program loses!<br><br>Program Win Count: ${programWinCount}.<br>Program Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}.`;
  }
  return myOutputValue;
};

var winningPercentageOutputForComputerVSComputer = function (totalCount) {
  var winningPercentage = (programWinCount / totalCount) * 100;
  if (winningPercentage > 50) {
    var winningPercentageOutput = `So far program has been winning ${programWinCount}/${totalCount} turns. Pretty good!`;
  } else {
    winningPercentageOutput = `<br><br>So far program has been winning ${programWinCount}/${totalCount} turns!`;
  }
  return winningPercentageOutput;
};

var mukJjiPpaWinLoseBoard = function (playerToComputer) {
  mukJjiPpaState = "play again";
  if (mukJjiPpaState == "play again") {
    if (
      playerToComputer == ["scissors" + "scissors"] ||
      playerToComputer == ["paper" + "paper"] ||
      playerToComputer == ["stone" + "stone"] ||
      playerToComputer == ["reversed scissors" + "scissors"] ||
      playerToComputer == ["reversed paper" + "paper"] ||
      playerToComputer == ["reversed stone" + "stone"]
    ) {
      mukJjiPpaState = "winner wins";
      totalCount = totalCount + 1;
    }

    if (
      playerToComputer == ["scissors" + "paper"] ||
      playerToComputer == ["paper" + "stone"] ||
      playerToComputer == ["stone" + "scissors"] ||
      playerToComputer == ["reversed stone" + "paper"] ||
      playerToComputer == ["reversed scissors" + "stone"] ||
      playerToComputer == ["reversed paper" + "scissors"]
    ) {
      tempWinner = "player";
      return `You shouted: muk-jji-ppa!`;
    }

    if (
      playerToComputer == ["stone" + "paper"] ||
      playerToComputer == ["scissors" + "stone"] ||
      playerToComputer == ["paper" + "scissors"] ||
      playerToComputer == ["reversed scissors" + "paper"] ||
      playerToComputer == ["reversed paper" + "stone"] ||
      playerToComputer == ["reversed stone" + "scissors"]
    ) {
      tempWinner = "computer";
      return `Computer shouted: muk-jji-ppa!`;
    }
    if (mukJjiPpaState == "winner wins") {
      var outputOne = `It is a draw!<br><br>Program Win Count: ${programWinCount}.<br>Program Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}`;
      if (tempWinner == "player") {
        playerWinCount = playerWinCount + 1;
        return `You win!<br><br>Player Win Count: ${playerWinCount}.<br>Player Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}`;
      }
      if (tempWinner == "computer") {
        computerWinCount = computerWinCount + 1;
        return `You lose!<br><br>Player Win Count: ${playerWinCount}.<br>Player Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}`;
      }
      return outputOne;
    }
  }
};

var mukJjiPpaWinLoseBoardForComputerVSComputer = function (programToComputer) {
  mukJjiPpaState = "play again";
  if (mukJjiPpaState == "play again") {
    if (
      programToComputer == ["scissors" + "scissors"] ||
      programToComputer == ["paper" + "paper"] ||
      programToComputer == ["stone" + "stone"] ||
      programToComputer == ["reversed scissors" + "scissors"] ||
      programToComputer == ["reversed paper" + "paper"] ||
      programToComputer == ["reversed stone" + "stone"]
    ) {
      mukJjiPpaState = "winner wins";
      totalCount = totalCount + 1;
    }

    if (
      programToComputer == ["scissors" + "paper"] ||
      programToComputer == ["paper" + "stone"] ||
      programToComputer == ["stone" + "scissors"] ||
      programToComputer == ["reversed stone" + "paper"] ||
      programToComputer == ["reversed scissors" + "stone"] ||
      programToComputer == ["reversed paper" + "scissors"]
    ) {
      tempWinner = "program";
      return `Program shouted: muk-jji-ppa!`;
    }

    if (
      programToComputer == ["stone" + "paper"] ||
      programToComputer == ["scissors" + "stone"] ||
      programToComputer == ["paper" + "scissors"] ||
      programToComputer == ["reversed scissors" + "paper"] ||
      programToComputer == ["reversed paper" + "stone"] ||
      programToComputer == ["reversed stone" + "scissors"]
    ) {
      tempWinner = "computer";
      return `Computer shouted: muk-jji-ppa!`;
    }
    if (mukJjiPpaState == "winner wins") {
      var outputOne = `It is a draw!<br><br>Program Win Count: ${programWinCount}.<br>Program Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}`;
      if (tempWinner == "program") {
        programWinCount = programWinCount + 1;
        return `The program won!<br><br>Program Win Count: ${programWinCount}.<br>Program Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}`;
      }
      if (tempWinner == "computer") {
        computerWinCount = computerWinCount + 1;
        return `The program lost!<br><br>Program Win Count: ${programWinCount}.<br>Program Lose Count: ${computerWinCount}.<br>Draw Count: ${draw}`;
      }
      return outputOne;
    }
  }
};

// normal version of "scissors" "paper" "stone" (with reversed)
//inputChoice = "scissors" "paper" "stone" "reversed scissors" "reversed paper" "reversed stone"
var normalVersion = function (mode, inputChoice) {
  if (mode == "Mode 1: Player VS Computer") {
    var playerChoice = inputChoice;
    var computerChoice = outputByComputer();
    totalCount = totalCount + 1;
    var standardOutput = `Hi ${userName}:<br>You chose: ${playerChoice}.<br>Computer chose: ${computerChoice}.<br><br>`;
    var playerToComputer = playerChoice + computerChoice; // return a string
    var myFirstOutputValue = winLoseBoard(playerToComputer);
    var mySecondOutputValue = winningPercentageOutput(totalCount);
    return `${standardOutput} ${myFirstOutputValue}<br>${mySecondOutputValue}`;
  }
  if (mode == "Mode 2: Computer VS Computer") {
    var programChoice = outputByProgram();
    var computerChoice = outputByComputer();
    totalCount = totalCount + 1;
    var standardOutput = `Hi ${userName}, here is the score card for Program VS Computer.<br><br>Program chose: ${programChoice}.<br>Computer chose: ${computerChoice}.<br><br>`;
    var programToComputer = programChoice + computerChoice;
    var myFirstOutputValue =
      winLoseBoardForComputerVSComputer(programToComputer);
    var mySecondOutputValue =
      winningPercentageOutputForComputerVSComputer(totalCount);
    return `${standardOutput} ${myFirstOutputValue}<br>${mySecondOutputValue}`;
  }
};

var koreanVersion = function (mode, inputChoice) {
  if (mode == "Mode 1: Player VS Computer") {
    var playerChoice = inputChoice;
    var computerChoice = outputByComputer();
    var standardOutput = `Hi ${userName}:<br>You chose: ${playerChoice}.<br>Computer chose: ${computerChoice}.<br><br>`;
    var playerToComputer = playerChoice + computerChoice; // return a string
    var myFirstOutputValue = mukJjiPpaWinLoseBoard(playerToComputer);
    if (
      myFirstOutputValue == "You shouted: muk-jji-ppa!" ||
      myFirstOutputValue == "Computer shouted: muk-jji-ppa!"
    ) {
      return myFirstOutputValue;
    }
    var mySecondOutputValue = winningPercentageOutput(totalCount);
    return `${standardOutput} ${myFirstOutputValue}<br>${mySecondOutputValue}`;
  }
  if (mode == "Mode 2: Computer VS Computer") {
    var programChoice = outputByProgram();
    var computerChoice = outputByComputer();
    var standardOutput = `Hi ${userName}, here is the score card for Program VS Computer.<br><br>Program chose: ${programChoice}.<br>Computer chose: ${computerChoice}.<br><br>`;
    var programToComputer = programChoice + computerChoice;
    var myFirstOutputValue =
      mukJjiPpaWinLoseBoardForComputerVSComputer(programToComputer);
    if (
      myFirstOutputValue == "You shouted: muk-jji-ppa!" ||
      myFirstOutputValue == "Computer shouted: muk-jji-ppa!"
    ) {
      return myFirstOutputValue;
    }
    var mySecondOutputValue =
      winningPercentageOutputForComputerVSComputer(totalCount);
    return `${standardOutput} ${myFirstOutputValue}<br>${mySecondOutputValue}`;
  }
};

var main = function (input) {
  if (currentGameMode == "user to input username") {
    userName = input;
    currentGameMode = "choose player mode";
    return `Welcome ${userName}!<br><br>This is a game of "Scissors, Paper, Stone"!<br><br>Please enter "Mode 1: Player VS Computer" or "Mode 2: Computer VS Computer". Thank you!`;
  }
  if (currentGameMode == "choose player mode") {
    playerOrComputerMode = input; // input: "Mode 1: Player VS Computer" or "Mode 2: Computer VS Computer"
    currentGameMode = "choose normal or korean version";
    return `Hi ${userName}, you have chosen ${playerOrComputerMode}.<br><br>Please enter "Normal Version" or "Korean Version".`;
  }
  if (
    currentGameMode == "choose normal or korean version" &&
    playerOrComputerMode == "Mode 1: Player VS Computer"
  ) {
    normalOrKoreanVersion = input; // input: "Normal Version" or "Korean Version"
    currentGameMode = "game start";
    return `Hi ${userName}, you have chosen the ${normalOrKoreanVersion}.<br><br>Please enter "scissors" "paper" or "stone"!<br>You may add a "reversed" infront of your choice too! e.g. "reversed scissors"`;
  }
  if (
    currentGameMode == "choose normal or korean version" &&
    playerOrComputerMode == "Mode 2: Computer VS Computer"
  ) {
    normalOrKoreanVersion = input; // input: "Normal Version" or "Korean Version"
    currentGameMode = "game start";
    return `Hi ${userName}, you have chosen the ${normalOrKoreanVersion}.<br><br>Please click "Submit" so as to start the Computer VS Computer mode!`;
  }
  if (
    playerOrComputerMode == "Mode 1: Player VS Computer" &&
    normalOrKoreanVersion == "Normal Version"
  ) {
    var mode = "Mode 1: Player VS Computer";
    var output = normalVersion(mode, input);
    return output;
  }
  if (
    playerOrComputerMode == "Mode 2: Computer VS Computer" &&
    normalOrKoreanVersion == "Normal Version"
  ) {
    var mode = "Mode 2: Computer VS Computer";
    input = "null";
    var output = normalVersion(mode, input);
    return output;
  }
  if (
    playerOrComputerMode == "Mode 1: Player VS Computer" &&
    normalOrKoreanVersion == "Korean Version"
  ) {
    var mode = "Mode 1: Player VS Computer";
    var output = koreanVersion(mode, input);
    return output;
  }
  if (
    playerOrComputerMode == "Mode 2: Computer VS Computer" &&
    normalOrKoreanVersion == "Korean Version"
  ) {
    var mode = "Mode 2: Computer VS Computer";
    input = "null";
    var output = koreanVersion(mode, input);
    return output;
  }
};
