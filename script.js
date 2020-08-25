var win = 0;
var loss = 0 ;
var draw  = 0;
var main = function (input) {
  myOutputValue = 'empty';
  var HandRef = diceRoll;
  var autohand = 'empty'
  if (input !== 'stone' || input !== 'scissors'|| input !== 'paper'){myOutputValue = 'Invalid'}

  if(HandRef = 1){autohand = 'paper'};
  if(HandRef = 2){autohand = 'scissors'};
  if(HandRef = 3){autohand = 'stone'};
  var result = 'Empty';
  //draw outcome
  if (input == autohand){draw = draw + 1; result = 'draw'};
  // loss outcome
  if (input =='paper' && autohand == 'scissors'){result = 'lose'};
  if (input =='stone' && autohand == 'paper'){result = 'lose'};
  if (input =='scissors' && autohand == 'stone'){result = 'lose'};
  //win outcome
  if (input =='paper' && autohand == 'stone'){result = 'win' };
  if (input =='stone' && autohand == 'scissors'){result = 'win'};
  if (input =='scissors' && autohand == 'paper'){result = 'win'};
  if (result == 'loss') {loss = loss+1};
  if (result == 'draw') {draw = draw +1};
  if (result == 'win') {win = win +1};
//  var myOutputValue = 'You chose '+ input + ' and the computer chose ' + autohand + '. You '+ result + '! Your current tally is ' + win + '- wins, ' + loss + '- loss, ' + win + '- draws.';
var myOutputValue = result;
//  var myOutputValue =  win;
  return myOutputValue;
};
//random selection of paper scissors stone hand
// 1 = paper, 2 = scissors, 3 = stone
var diceRoll = function() {
//  var autohand = 'stuff';
  var randomDecimal = Math.random() * 3;
  var diceNum = Math.floor(randomDecimal) + 1;
  //if(diceNum = 1){autohand = 'paper'};
  //if(diceNum = 2){autohand = 'scissors'};
  //if(diceNum = 3){autohand = 'stone'};
  return diceNum;
  //return 1;
};
