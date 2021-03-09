// Unfinished Project 1

var currentGameMode = 'waiting for user name mode';
// var userScore = 0;
var userName = '';

// Score Keeping, intial score is 0 (Global State).
// var scoreUserWin = 0;
// var scoreCpuWin = 0;
// var scoreDraws = 0;
// var scoreKeep = function () {
//   return ''
// };

// Get random CPU pick from an array
var cpuPick = function () {
  var pickList = ['rock', 'scissors', 'paper'];
  var cpuPick = pickList[Math.floor(Math.random() * pickList.length)];
  console.log('computer picked ' + cpuPick + '!!!');
  return cpuPick;
};

var main = function (input) {
  var myOutputValue = '';

  // do this if game mode is waiting for user...
  if (currentGameMode == 'waiting for user name mode') {
    // set the user name
    userName = input;

    // now that we have user name, switch the mode
    currentGameMode = 'dice game mode';

    myOutputValue = 'Hello ' + userName;
  } else if (currentGameMode == 'dice game mode') {
    // game logic here
    var userInput = input;
    var randomCpuPick = cpuPick();
    var myOutputValue = 'Your pick is ' + input + '. CPU pick is ' + randomCpuPick + '!';
    if (input != 'rock' || 'paper' || 'scissor') {
      return 'This is not a valid input, please enter only the word "rock", "paper", "scissor"';
    }
    if (randomCpuPick == userInput) {
      return myOutputValue + " it's a tie";
    } if (randomCpuPick == 'rock' && userInput == 'paper') {
      return myOutputValue + ' You win!';
    }
    if (randomCpuPick == 'rock' && userInput == 'scissors') {
      return myOutputValue + ' You lose!';
    }
    if (randomCpuPick == 'paper' && userInput == 'scissors') {
      return myOutputValue + ' You win!';
    }
    if (randomCpuPick == 'paper' && userInput == 'rock') {
      return myOutputValue + ' You lose!';
    }
    if (randomCpuPick == 'scissors' && userInput == 'rock') {
      return myOutputValue + ' You win!';
    }
    if (randomCpuPick == 'scissors' && userInput == 'paper') {
      return myOutputValue + ' You lose!';
    }
    return myOutputValue;
  }
};

//  if (userName == input) {
//   var validUserName = 'Your username is ' + userName + ". Let's play the game!";
//   return validUserName;
// }
// if (userName != 1) {
//   var invalidUserName = 'Your username can not be empty, please enter your username again';
//   return invalidUserName;
// }
