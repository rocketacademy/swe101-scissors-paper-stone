//global variables
var win = 0;
var loss = 0;
var draw = 0;
var gameMode = 'start input';
var userName = '';

var main = function (input){
  var rpsResult = '';
  // if game mode is start input then input = name
  if (gameMode == 'start input'){
    userName = input;
    gameMode = 'Its on'
    rpsResult = 'Welcome, ' + userName + '. Enter stone, paper, or scissors and see if you can beat the machine'
  } else {
    rpsResult = RockPaperScissors(input)
  } 
  return rpsResult
};

var RockPaperScissors = function (input) {

  myOutputValue = 'empty';
  var HandRef = diceRoll();
  console.log("HandRef!!");
  console.log(HandRef);
  var autohand = 'empty'
  var result = 'empty';

  // input validation
  if (input !== 'stone' && input !== 'scissors' && input !== 'paper') {
     result = 'Failed'; 
     return 'You put in an invalid hand. ' + input + " just doesn't work"
  }

  // gets number & assigns value
  // takes random value and translates into paper/scissors/stone string
  if (HandRef == 1) {
    autohand = 'paper';
  } else if (HandRef == 2) {
    autohand = 'scissors';
  } else if (HandRef == 3) {
    autohand = 'stone';
  }

  //draw outcome
  if (input == autohand) {
    //draw = draw + 1;
    result = 'draw';
  }

  // loss outcome
  if (input == 'paper' && autohand == 'scissors') {
    result = 'lose';
  }

  if (input == 'stone' && autohand == 'paper') { result = 'lose'; }
  if (input == 'scissors' && autohand == 'stone') { result = 'lose'; }

  //win outcome
  if (input == 'paper' && autohand == 'stone') { result = 'win'; }
  if (input == 'stone' && autohand == 'scissors') { result = 'win'; }
  if (input == 'scissors' && autohand == 'paper') { result = 'win'; }

  // add to win/loss/draw
  if (result == 'lose') {
    console.log("adding one to lose")
    loss = loss + 1;
  } else if (result == 'draw') {
    console.log("adding one to draw")
    draw = draw + 1;
  } else if (result == 'win') {
    console.log("adding one to win")
    win = win + 1;
  }

  var myOutputValue = userName + ', you chose ' + input + ' and the computer chose ' + autohand + '. You ' + result + '! Your current tally is ' + win + '- wins, ' + loss + '- loss, ' + draw + '- draws.';
  return myOutputValue;
};
//random selection of paper scissors stone hand
// 1 = paper, 2 = scissors, 3 = stone
var diceRoll = function () {
  //var autohand = 'stuff';
  var randomDecimal = Math.random() * 3;
  var diceNum = Math.floor(randomDecimal) + 1;
  //if(diceNum = 1){autohand = 'paper'};
  //if(diceNum = 2){autohand = 'scissors'};
  //if(diceNum = 3){autohand = 'stone'};
  console.log("DICE ROLLLL" + diceNum)
  return diceNum;
  //return 1;
};
