var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
var totalGamePlayed = 0;
var totalWin = 0;
var totalLose = 0;
var totalDraw = 0;
var generateRandomPlay = function () {
  number = generateRandomInteger();
  if (number == 1) play = "stone";
  if (number == 2) play = "paper";
  if (number == 3) play = "scissor";
  console.log(play);
  return play;
};
var paperScissorStone = function (input) {
  if (input !== "stone" && input !== "scissor" && input !== "paper") {
    return `please input "scissor","paper", or "stone"`;
  } else {
    totalGamePlayed += 1;
    console.log(`total game played`);
    console.log(totalGamePlayed);

    if (input == "stone") return stonePlay();
    else if (input == "paper") return paperPlay();
    else if (input == "scissor") return scissorPlay();
  }
};
var stonePlay = function (input) {
  var randomPlay = generateRandomPlay();
  if (randomPlay == "paper") {
    totalLose += 1;
    var robotWinPercentage = Math.floor((totalLose / totalGamePlayed) * 100);
    return `The computer chose ${randomPlay}.<br>You chose stone.<br>You lose!<br>Now you can type "scissors" "paper" or "stone" to play another round!<br>Total computer win:${totalLose}<br>Total you win:${totalWin}<br>Total draw:${totalDraw}<br>Robot win percentage:${robotWinPercentage}%`;
  }
  if (randomPlay == "scissor") {
    totalWin += 1;
    var yourWinPercentage = Math.floor((totalWin / totalGamePlayed) * 100);
    return `The computer chose ${randomPlay}.<br>You chose stone.<br>You win!<br>Now you can type "scissors" "paper" or "stone" to play another round!<br>Total computer win:${totalLose}<br>Total you win:${totalWin}<br>Total draw:${totalDraw}<br>Your win percentage:${yourWinPercentage}%`;
  }
  if (randomPlay == "stone") {
    totalDraw += 1;
    return `The computer choose ${randomPlay}.<br>You chose stone.<br>draw!<br>Now you can type "scissors" "paper" or "stone" to play another round!<br>Total computer win:${totalLose}<br>Total you win:${totalWin}<br>Total draw:${totalDraw}`;
  }
  console.log(randomPlay);
};

var paperPlay = function () {
  var randomPlay = generateRandomPlay();
  if (randomPlay == "paper") {
    totalDraw += 1;
    return `The computer chose ${randomPlay}.<br>You chose paper.<br>draw<br>Now you can type "scissors" "paper" or "stone" to play another round!<br>Total computer win:${totalLose}<br>Total you win:${totalWin}<br>Total draw:${totalDraw}`;
  }
  if (randomPlay == "scissor") {
    totalLose += 1;
    var robotWinPercentage = Math.floor((totalLose / totalGamePlayed) * 100);
    return `The computer chose ${randomPlay}.<br>You chose paper.<br>You lose!<br>Now you can type "scissors" "paper" or "stone" to play another round!<br>Total computer win:${totalLose}<br>Total you win:${totalWin}<br>Total draw:${totalDraw}<br>Robot win percentage:${robotWinPercentage}%`;
  }
  if (randomPlay == "stone") {
    totalWin += 1;
    var yourWinPercentage = Math.floor((totalWin / totalGamePlayed) * 100);
    return `The computer chose ${randomPlay}.<br>You chose paper.<br>You Win!<br>Now you can type "scissors" "paper" or "stone" to play another round!<br>Total computer win:${totalLose}<br>Total you win:${totalWin}<br>Total draw:${totalDraw}<br>Your win percentage:${yourWinPercentage}%`;
  }
  console.log(randomPlay);
};

var scissorPlay = function () {
  var randomPlay = generateRandomPlay();
  if (randomPlay == "paper") {
    totalWin += 1;
    var yourWinPercentage = Math.floor((totalWin / totalGamePlayed) * 100);
    return `The computer chose ${randomPlay}.<br>You chose scissor.<br>You Win!<br>Now you can type "scissors" "paper" or "stone" to play another round!<br>Total computer win:${totalLose}<br>Total you win:${totalWin}<br>Total draw:${totalDraw}<br>Your win percentage:${yourWinPercentage}%`;
  }
  if (randomPlay == "scissor") {
    totalDraw += 1;
    return `The computer chose ${randomPlay}.<br>You chose scissor.<br>draw!<br>Now you can type "scissors" "paper" or "stone" to play another round!<br>Total computer win:${totalLose}<br>Total you win:${totalWin}<br>Total draw:${totalDraw}`;
  }
  if (randomPlay == "stone") {
    totalLose += 1;
    var robotWinPercentage = Math.floor((totalLose / totalGamePlayed) * 100);
    return `The computer chose ${randomPlay}.<br>You chose scissor.<br>You lose!<br>Now you can type "scissors" "paper" or "stone" to play another round!<br>Total computer win:${totalLose}<br>Total you win:${totalWin}<br>Total draw:${totalDraw}<br>Robot win percentage:${robotWinPercentage}%`;
  }
  console.log(randomPlay);
};
var gameStatus = "waiting for username";
var username = ``;
var main = function (input) {
  if (gameStatus == `waiting for username`) {
    username = input;
    gameStatus = `scissor paper stone`;
    return `hello ${username}, please input "scissor, "paper", or "stone"`;
  } else if (gameStatus == `scissor paper stone`)
    return paperScissorStone(input);
};
