// Rock Paper Scissor Game (Project 1)

var currentGameMode = 'waiting for user name mode';
var userName = '';

var scoreUserWin = 0;
var scoreCpuWin = 0;
var scoreDraw = 0;

// get random CPU pick from an array
var cpuPick = function () {
  var pickList = ['rock', 'scissor', 'paper'];
  var randPick = pickList[Math.floor(Math.random() * pickList.length)];
  console.log('computer picked ' + randPick + '!!!');
  return randPick;
};

var main = function (input) {
  var myOutputValue = '';
  // do this if game mode is waiting for user...
  if (currentGameMode == 'waiting for user name mode') {
    // set the user name
    userName = input;
    // if user does not type anything
    if (userName == '') {
      return 'not a valid user name';
    }
    // now that we have user name, switch the mode
    currentGameMode = 'game mode';
    myOutputValue = 'Hello ' + userName + " let's play RSP";
    return myOutputValue;
  } if (currentGameMode == 'game mode') {
    // game logic here
    var userInput = input;
    var randomCpuPick = cpuPick();
    myOutputValue = 'Your pick is ' + input + '. CPU pick is ' + randomCpuPick + '!';
    console.log(input);
    console.log((input != 'rock' && input != 'paper' && input != 'scissor'));

    // input not equal to rock, and not to paper, and not to scissor
    if (input != 'rock' && input != 'paper' && input != 'scissor') {
      return 'This is not a valid input, please enter only the word "rock", "paper", "scissor"';
    }

    // var compareGame = function (randomCpuPick, userInput) {}
    if (randomCpuPick == userInput) {
      scoreDraw = scoreDraw + 1;
      console.log(scoreDraw);
      return myOutputValue + " it's a tie. Scoreboard: " + 'D:' + scoreDraw + ' W:' + scoreUserWin + ' L:' + scoreCpuWin;
    } if (randomCpuPick == 'rock' && userInput == 'paper') {
      scoreUserWin = scoreUserWin + 1;
      return myOutputValue + ' You win! Scoreboard:' + 'D:' + scoreDraw + ' W:' + scoreUserWin + ' L:' + scoreCpuWin;
    }
    if (randomCpuPick == 'rock' && userInput == 'scissor') {
      scoreCpuWin = scoreCpuWin + 1;
      return myOutputValue + ' You lose! Scoreboard: ' + 'D:' + scoreDraw + ' W:' + scoreUserWin + ' L:' + scoreCpuWin;
    }
    if (randomCpuPick == 'paper' && userInput == 'scissor') {
      scoreUserWin = scoreUserWin + 1;
      return myOutputValue + ' You win! Scoreboard: ' + 'D:' + scoreDraw + ' W:' + scoreUserWin + ' L:' + scoreCpuWin;
    }
    if (randomCpuPick == 'paper' && userInput == 'rock') {
      scoreCpuWin = scoreCpuWin + 1;
      return myOutputValue + ' You lose! Scoreboard: ' + 'D:' + scoreDraw + ' W:' + scoreUserWin + ' L:' + scoreCpuWin;
    }
    if (randomCpuPick == 'scissor' && userInput == 'rock') {
      scoreUserWin = scoreUserWin + 1;
      return myOutputValue + ' You win! Scoreboard: ' + 'D:' + scoreDraw + ' W:' + scoreUserWin + ' L:' + scoreCpuWin;
    }
    if (randomCpuPick == 'scissor' && userInput == 'paper') {
      scoreCpuWin = scoreCpuWin + 1;
      return myOutputValue + ' You lose! Scoreboard: ' + 'D:' + scoreDraw + ' W:' + scoreUserWin + ' L:' + scoreCpuWin;
    }
    return myOutputValue;
  }
};
