var win = 0;
var loss = 0 ;
var draw  = 0;
var name = 'name';
var main = function (input) {
  var pcHand = diceRoll;
  var result = 'stuff';
  //draw outcome
  if (input == pcHand){draw = draw + 1 ; result = 'draw'};
  // loss outcome
  if (input =='paper' && pcHand == 'scissors'){loss = loss + 1 ; result = 'lose'};
  if (input =='stone' && pcHand == 'paper'){loss = loss + 1 ; result = 'lose'};
  if (input =='scissors' && pcHand == 'stone'){loss = loss + 1 ; result = 'lose'};
  //win outcome
  if (input =='paper' && pcHand == 'stone'){win = win + 1 ; result = 'win'};
  if (input =='stone' && pcHand == 'scissors'){win = win + 1 ; result = 'win'};
  if (input =='scissors' && pcHand == 'paper'){win = win + 1 ; result = 'win'};
  var myOutputValue = 'You chose '+ input + ' and the computer chose ' + pcHand + '. You '+ result + '! Your current tally is ' + win + '- wins, ' + loss + '- loss, ' + win + '- draws.';
//  var myOutputValue =  win;
  return myOutputValue;
};
//random selection of paper scissors stone hand
// 1 = paper, 2 = scissors, 3 = stone
var diceRoll = function() {
  var autohand = 'stuff';
  var randomDecimal = Math.random() * 3;
  var diceNum = Math.floor(randomDecimal) + 1;
  if(diceNum = 1){autohand = 'paper'};
  if(diceNum = 2){autohand = 'scissors'};
  if(diceNum = 3){autohand = 'stone'};
  //return autohand;
  return 'stone';
};
