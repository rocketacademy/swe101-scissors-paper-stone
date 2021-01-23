
var round=0;
var playerWinCount=0; 
var computerWinsCount = 0;

var main = function (input, player_name) {

var inputValid = validateInput(input);
if (inputValid){
    var player2Moves =makePlayer2Moves();
    
    var win = winOrLoseOrDraw(input,player2Moves);
    
    round = round+1;
    
    var myOutputValue = "ROUND : "+round+ 
    " The computer chose "+player2Moves+". "+
    player_name+" chose "
    +input +",  "
    + player_name+" "+win +"! "+ "Computer Wins : "+computerWinsCount+ " Player Wins : "+ playerWinCount;
    
    return myOutputValue;
} else {
  
  return "You have entered an invalid input "+ input +  ", please enter scissor, paper or stone.";

}

};

// validate inputs
var validateInput =function(input){
  if (input=="scissor" || input=="paper" ||input=="stone"){
    return true;
  } else {
    return false;
  }
  
 
}

// computer moves
var makePlayer2Moves=function(){
  var choice =  parseInt(Math.random() * 3);

  if (choice==0){
    return 'scissor';
  }
  if (choice==1){
    return 'paper';
  }
  if (choice==2){
    return 'stone';
  }

}
// check win, lose or draw
var winOrLoseOrDraw=function(player1move, player2move){

  ///player1 scissor
  
  // player 2 scissor
  if (player1move=='scissor' && player2move=='scissor'){
    return 'DRAW';
  }
  // player 2 paper
  if (player1move=='scissor' && player2move=='paper'){
    playerWinCount=playerWinCount+1;
    return 'WINS';
  }
  // player 2 stone
  if (player1move=='scissor' && player2move=='stone'){
    computerWinsCount = computerWinsCount+1;
    return 'LOSE';
  }

  ///player 1 paper

  // player 2 scissor
  if (player1move=='paper' && player2move=='scissor'){
    computerWinsCount = computerWinsCount+1;
    return 'LOSE';
  }
  // player 2 paper
  if (player1move=='paper' && player2move=='paper'){
    return 'DRAW';
  }
  // player 2 stone
  if (player1move=='paper' && player2move=='stone'){
    playerWinCount=playerWinCount+1;
    return 'WIN';
  }

  ///player 1 stone

  // player 2 scissor
  if (player1move=='stone' && player2move=='scissor'){
    playerWinCount=playerWinCount+1;
    return 'WIN';
  }
  // player 2 paper
  if (player1move=='stone' && player2move=='paper'){
    computerWinsCount = computerWinsCount+1;
    return 'LOSE';
  }
  // player 2 stone
  if (player1move=='stone' && player2move=='stone'){
    return 'DRAW';
  }
}