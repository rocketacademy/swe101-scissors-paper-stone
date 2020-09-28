var userWin = 0;
var comWin = 0;
var draw = 0;
var totalGame = 0;
// keep record of wins in the past and output win-loss record
// create function to generate numbers and the random word

var stonePaperScissors = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var rpsResult = randomInteger;
  if (rpsResult == 0) {
    console.log(rpsResult == 0);
    console.log('if output = 0 = stone');
    var rpsGameOutput = 'stone';
  } else if (rpsResult == 1) {
    console.log(rpsResult == 1);
    console.log('if output = 1 = paper');
    var rpsGameOutput = 'paper';
  } else if (rpsResult == 2) {
    console.log(rpsResult == 2);
    console.log('if output = 2 = scissors');
    var rpsGameOutput = 'scissors';
  }
  console.log(rpsGameOutput);
  console.log('the systen choose');
  return rpsGameOutput;
};
var main = function (input) {
  console.log(input);
  console.log('you choose');
  var rpsGameOutput = stonePaperScissors();
  var myOutputValue = '';
  // dwaw
  if (input == rpsGameOutput) {
    console.log(input == rpsGameOutput);
    console.log('input = output');
    draw = draw + 1;
    totalGame = totalGame + 1;
    myOutputValue = 'its a draw! You are' + input + '. I am ' + rpsGameOutput
      + `You win ${draw} times, computer wins ${comWin} There has been total ${totalGame} games`;
    // the computer winning
  } else if ((input == 'paper' && rpsGameOutput == 'scissors')
    || (input == 'stone' && rpsGameOutput == 'paper')
    || (input == 'scissors' && rpsGameOutput == 'stone')) {
    console.log(input == 'paper' && rpsGameOutput == 'scissors');
    console.log('input = paper & output = scissors');
    console.log(input == 'stone' && rpsGameOutput == 'paper');
    console.log('input = stone & output = paper');
    console.log(input == 'scissors' && rpsGameOutput == 'stone');
    console.log('input = scissors & output = stone');
    comWin = comWin + 1;
    totalGame = totalGame + 1;
    myOutputValue = 'lose! You are ' + input + '. I am '
      + rpsGameOutput + `You win ${userWin} times, computer wins ${comWin}. There has been
    total ${totalGame} games`;
    // the user winning
  } else if ((input == 'scissors' && rpsGameOutput == 'paper')
    || (input == 'paper' && rpsGameOutput == 'stone')
    || (input == 'stone' && rpsGameOutput == 'scissors')) {
    console.log(input == 'scissors' && rpsGameOutput == 'paper');
    console.log('input = scissors && output = paper');
    console.log(input == 'paper' && rpsGameOutput == 'stone');
    console.log('input = paper & output = stone');
    console.log(input == 'stone' && rpsGameOutput == 'scissors');
    console.log('input = stone && out put = scissors');
    totalGame = totalGame + 1;
    userWin = userWin + 1;
    myOutputValue = 'win!! You are ' + input + '. I am '
      + rpsGameOutput`You win ${userWin} times, computer win ${comWin} There has been total ${totalGame} games.`;
  }
  return myOutputValue;
};
