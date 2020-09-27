//create function to generate numbers and the random word
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
var main = function (input) {
  console.log(input)
  console.log('you choose')
  var rpsGameOutput = stonePaperScissors();
  var myOutputValue = "";
  if (input == rpsGameOutput) {
    console.log(input == rpsGameOutput)
    console.log('input = output')
    myOutputValue = 'its a draw! You are' + input + '. I am ' + rpsGameOutput;
  }
  else if ((input == 'paper' && rpsGameOutput == 'scissors')
    || (input == 'stone' && rpsGameOutput == 'paper')
    || (input == 'scissors' && rpsGameOutput == 'stone')) {
    console.log(input == 'paper' && rpsGameOutput == 'scissors')
    console.log('input = paper & output = scissors')
    console.log(input == 'stone' && rpsGameOutput == 'paper')
    console.log('input = stone & output = paper')
    console.log(input == 'scissors' && rpsGameOutput == 'stone')
    console.log('input = scissors & output = stone')
    myOutputValue = 'lose! You are ' + input + '. I am ' + rpsGameOutput;
  }
  else if ((input == 'scissors' && rpsGameOutput == 'paper')
    || (input == 'paper' && rpsGameOutput == 'stone')
    || (input == 'stone' && rpsGameOutput == 'scissors')) {
    console.log(input == 'scissors' && rpsGameOutput == 'paper')
    console.log('input = scissors && output = paper')
    console.log(input == 'paper' && rpsGameOutput == 'stone')
    console.log('input = paper & output = stone')
    console.log(input == 'stone' && rpsGameOutput == 'scissors')
    console.log('input = stone && out put = scissors')
    myOutputValue = 'win!! You are ' + input + '. I am ' + rpsGameOutput
  }
  return myOutputValue;
}
