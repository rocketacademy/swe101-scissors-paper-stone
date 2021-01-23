var main = function (input, player_name) {

  /*
Win-Loss Record
Add state to your program such that it keeps track of the number of times the user has won 
and the number of times the computer has won. Output this win-loss record in a format you like 
in the program output. 
You can also output the number of draws and/or each party's winning percentage if you'd like.



Input Validation
Sometimes the user types bad and types something other than "scissors", "paper", or "stone" 
during gameplay. Add input validation to kindly let the user know that there are only 3 
input options, and ask them to try again.
  */


  var player2Moves =makePlayer2Moves();
  
  var win = winOrLoseOrDraw(input,player2Moves);
  round = round+1;
  var myOutputValue = "The computer chose "+player2Moves+".\n" +
  player_name+" chose "+input +",\n "+ player_name+" "+win +"!" + " round "+round;
  return myOutputValue;
};


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
// 
var winOrLoseOrDraw=function(player1move, player2move){

  
  ///player1 scissor
  
  // player 2 scissor
  if (player1move=='scissor' && player2move=='scissor'){
    return 'draw';
  }
  // player 2 paper
  if (player1move=='scissor' && player2move=='paper'){
    return 'win';
  }
  // player 2 stone
  if (player1move=='scissor' && player2move=='stone'){
    return 'lose';
  }

  ///player 1 paper

  // player 2 scissor
  if (player1move=='paper' && player2move=='scissor'){
    return 'lose';
  }
  // player 2 paper
  if (player1move=='paper' && player2move=='paper'){
    return 'draw';
  }
  // player 2 stone
  if (player1move=='paper' && player2move=='stone'){
    return 'win';
  }

  ///player 1 stone
///The computer chose stone. You chose paper You undefined!
  // player 2 scissor
  if (player1move=='stone' && player2move=='scissor'){
    return 'win';
  }
  // player 2 paper
  if (player1move=='stone' && player2move=='paper'){
    return 'lose';
  }
  // player 2 stone
  if (player1move=='stone' && player2move=='stone'){
    return 'draw';
  }
}

// var calcNumIceCubesNeeded = function (numGuests) {
//   var numDrinksPerGuest = 2;
//   var numIceCubesPerDrink = 4;
//   return numGuests * numDrinksPerGuest * numIceCubesPerDrink;
// };

// var calcNumPoundsOfIceFromCubes = function (numCubes) {
//   var numGramsPerCube = 1.5;
//   var numPoundsPerGram = 1 / 454;
//   return numCubes * numGramsPerCube * numPoundsPerGram;
// };

// var calcNumHoursNeededToProduceIce = function (numPoundsOfIce) {
//   var numPoundsOfIceProducedPerHour = 5;
//   return numPoundsOfIce / numPoundsOfIceProducedPerHour;
// };

// var main = function (numGuests) {
//   var numIceCubesNeeded = calcNumIceCubesNeeded(numGuests);
//   var numPoundsOfIceNeeded = calcNumPoundsOfIceFromCubes(numIceCubesNeeded);
//   var numHoursNeededToProduceIce = calcNumHoursNeededToProduceIce(numPoundsOfIceNeeded);
//   return `The hotel would need to run the ice machine for ${numHoursNeededToProduceIce} hours to produce enough ice for ${numGuests} guests.`;
// };