var getRandomInteger = function () {
  // return value between 0 to 2.99999
  var randomFloat = Math.random() * 3;
  // return value between 1 to 3
  var randomInteger = Math.floor(randomFloat) + 1;
  return randomInteger;
};

var getScissorsPaperOrStone = function (){
  var ScissorsPaperOrStoneInteger = getRandomInteger();
  var randomScissorsPaperOrStone;

//If integer is 1, return 'scissor'
if (ScissorsPaperOrStoneInteger == 1){
  randomScissorsPaperOrStone = 'scissor';
}

//If integer is 2, return 'paper'
if (ScissorsPaperOrStoneInteger == 2){
  randomScissorsPaperOrStone = 'paper';
}

//If integer is 3, return 'ston'
if (ScissorsPaperOrStoneInteger == 3){
  randomScissorsPaperOrStone = 'stone';
}
return randomScissorsPaperOrStone;
};

var countloss = 0;
var countwin = 0;
var countdraw = 0; 
var currentGameMode = 'waiting..';
var userName = '';


var main = function (input) {
  var myOutputValue = '';

  if (currentGameMode == 'waiting..') {
    // set the name
    userName = input;

  // now that we have the name, switch the mode
  currentGameMode = 'start game';

    var myOutputValue = 'Hello ' + userName;
  } 
  else if (currentGameMode == 'start game'){
    var ScissorsPaperStoneResult = getScissorsPaperOrStone();
    //if input is equal to getScissorPaperStoneResult, it's a draw

  if (input != 'stone' || 'paper' || 'scissor'){
    myOutputValue = 'Try stone, paper or scissor'
  }
  if (input == ScissorsPaperStoneResult) {
    myOutputValue = userName + 'Its a draw, try again ' + ScissorsPaperStoneResult;
    countdraw = countdraw + 1;
  }
  //if getScissorsPaperOrStone is SCISSORS and user input is PAPER, user LOSES
  if (input == 'scissor' && ScissorsPaperStoneResult == 'stone') {
    myOutputValue = userName + ' YOU LOSE: ' + ScissorsPaperStoneResult;
    countloss = countloss + 1;
  }
  //if getScissorsPaperOrStone is SCISSORS and user input is stone, user WINS
  if (input == 'scissor' && ScissorsPaperStoneResult == 'paper') {
    myOutputValue = userName + ' YOU WIN:' + ScissorsPaperStoneResult;
    countwin = countwin + 1;
  }
  //if getScissorsPaperOrStone is PAPER and user input is SCISSORS, user WINS
  if (input == 'paper' && ScissorsPaperStoneResult == 'stone') {
    myOutputValue = userName + ' YOU WIN:' + ScissorsPaperStoneResult;
    countwin = countwin + 1;
  }
  //if getScissorsPaperOrStone is PAPER and user input is stone, user LOSES
  if (input == 'paper' && ScissorsPaperStoneResult == 'scissor') {
    myOutputValue = userName + ' YOU LOSE:' + ScissorsPaperStoneResult;
    countloss = countloss + 1;
  }
  //if getScissorsPaperOrStone is stone and user input is SCISSORS, user LOSES
  if (input == 'stone' && ScissorsPaperStoneResult == 'scissor') {
    myOutputValue = userName + ' YOU LOSE:' + '<br>The computer chose ' + ScissorsPaperStoneResult;
    countloss = countloss + 1;
  }
  //if getScissorsPaperOrStone is stone and user input is PAPER, user WINS
  if (input == 'stone' && ScissorsPaperStoneResult == 'paper') {
    myOutputValue = userName + ' YOU WIN:' + '<br>The computer chose ' + ScissorsPaperStoneResult;
    countwin = countwin + 1;
  }
 }
return myOutputValue + '<br> Lose: ' + countloss + '<br> Win: ' + countwin + '<br> Draw: ' + countdraw ;
};
