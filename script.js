// username personalization
var currentGameMode = 'waiting for user name';
var username = '';


// Win and Lose - keep track of wins of both, draws and total games
var userWin = 0;
var compWin = 0;
var drawRounds = 0;
var gamesRounds = 0;

// Computer player - create function to generate numbers and the random word
var stonePaperScissors = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var rpsResult = randomInteger;
  if (rpsResult == 0) {
    console.log(rpsResult == 0)
    console.log('if output = 0 = stone')
    var rpsGameOutput = 'stone';
  }
  else if (rpsResult == 1) {
    console.log(rpsResult == 1)
    console.log('if output = 1 = paper')
    var rpsGameOutput = 'paper';
  }
  else if (rpsResult == 2) {
    console.log(rpsResult == 2)
    console.log('if output = 2 = scissors')
    var rpsGameOutput = 'scissors';
  }
  console.log(rpsGameOutput)
  console.log('the systen choose')
  return rpsGameOutput;
}
// RPS game
var main = function (input) {
  var myOutputValue = "";
  console.log(input)
  console.log('you choose')
  var rpsGameOutput = stonePaperScissors();
  if (currentGameMode == 'waiting for user name') {
    // set the name
    username = input;

    // now that we have the name, switch the mode
    currentGameMode = 'RPS';
    myOutputValue = 'Hello ' + username;
  } else if (currentGameMode == 'RPS') {
    // RPS logic starts here
    // Draw scenario
    if (input == rpsGameOutput) {
      console.log(input == rpsGameOutput);
      console.log('input = output');
      gamesRounds = gamesRounds + 1;
      drawRounds = drawRounds + 1;
      myOutputValue = `its a draw! ${username} are` + input + '. I am ' + rpsGameOutput + `User wins ${userWin}rounds, Computer has won ${compWin} rounds  and there has  been a total of ${gamesRounds}`;
    }
    // User loses scenario
    else if ((input == 'paper' && rpsGameOutput == 'scissors')
      || (input == 'stone' && rpsGameOutput == 'paper')
      || (input == 'scissors' && rpsGameOutput == 'stone')) {
      console.log(input == 'paper' && rpsGameOutput == 'scissors');
      console.log('input = paper & output = scissors');
      console.log(input == 'stone' && rpsGameOutput == 'paper');
      console.log('input = stone & output = paper');
      console.log(input == 'scissors' && rpsGameOutput == 'stone');
      console.log('input = scissors & output = stone');
      gamesRounds = gamesRounds + 1;
      compWin = compWin + 1;
      myOutputValue = 'lose!' + username + 'are ' + input + '. I am ' + rpsGameOutput + `User wins ${userWin}rounds, Computer has won ${compWin} rounds  and there has  been a total of ${gamesRounds}`;
    }
    // userwin scenario
    else if ((input == 'scissors' && rpsGameOutput == 'paper')
      || (input == 'paper' && rpsGameOutput == 'stone')
      || (input == 'stone' && rpsGameOutput == 'scissors')) {
      console.log(input == 'scissors' && rpsGameOutput == 'paper');
      console.log('input = scissors && output = paper');
      console.log(input == 'paper' && rpsGameOutput == 'stone');
      console.log('input = paper & output = stone');
      console.log(input == 'stone' && rpsGameOutput == 'scissors');
      console.log('input = stone && out put = scissors');
      gamesRounds = gamesRounds + 1;
      userWin = userWin + 1

      myOutputValue = `win!! ${username} are ` + input + '. I am ' + rpsGameOutput + `User wins ${userWin}rounds, Computer has won ${compWin} rounds  and there has  been a total of ${gamesRounds}`
    }
  }
  return myOutputValue;
}

