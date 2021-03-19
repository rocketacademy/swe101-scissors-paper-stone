var winCount = 0;
var lossCount = 0;
var tieCount = 0;
var mode = 'waiting for player to input his username';
console.log(mode);
var userName = '';
var startingMessage = 'hello! what is your name!';
var main = function (input) {
  if (input == '' || isNaN(Number(input)) == false) {
    console.log('a');
    return 'please input a proper username';
  }
  if (mode == 'game mode' && input != 'scissors' && input != 'paper' && input != 'stone') {
    console.log('c');
    return 'please enter either scissors, paper or stone';
  }

  if (mode == 'waiting for player to input his username') {
    userName = input;
    mode = 'game mode';
    console.log('b');
    return 'hi ' + userName + ' lets play the game!';
  }
  var words = computerGenResult();
  if (input == 'scissors' && words == 2) {
    console.log('scissors vs paper');
    console.log('scissors win');
    winCount = winCount + 1;
    return 'you won!! W:' + winCount + ' L:' + lossCount + ' D:' + tieCount;
  }
  if (input == 'scissors' && words == 3) {
    console.log('scissors v stone');
    console.log('stone wins');
    lossCount = lossCount + 1;
    return 'you lost W:' + winCount + ' L:' + lossCount + ' D:' + tieCount;
  }
  if (input == 'scissors' && words == 1) {
    console.log('both words are the same, its a draw');
    tieCount = tieCount + 1;
    return 'It is a draw!! Both words are the same! W:' + winCount + ' L:' + lossCount + ' D:' + tieCount;
  }
  if (input == 'paper' && words == 1) {
    console.log('paper vs scissors');
    console.log('paper loses');
    lossCount = lossCount + 1;
    return 'you lost!! W:' + winCount + ' L:' + lossCount + ' D:' + tieCount;
  }
  if (input == 'paper' && words == 3) {
    console.log('paper v stone');
    console.log('paper wins');
    winCount = winCount + 1;
    return 'you won!! W:' + winCount + ' L:' + lossCount + ' D:' + tieCount;
  }
  if (input == 'paper' && words == 2) {
    console.log('It is a draw both words are the same');
    tieCount = tieCount + 1;
    return ' it is a draw! both words are the same W:' + winCount + ' L:' + lossCount + ' D:' + tieCount;
  }

  if (input == 'stone' && words == 1) {
    console.log('stone v scissors');
    console.log('stone wins');
    winCount = winCount + 1;
    return 'you won!! W:' + winCount + ' L:' + lossCount + ' D:' + tieCount;
  }
  if (input == 'stone' && words == 2) {
    console.log('stone v paper');
    console.log(' paper wins, stone loses');
    lossCount = lossCount + 1;
    return ' you lose W:' + winCount + ' L:' + lossCount + ' D:' + tieCount;
  }
  if (input == 'stone' && words == 3) {
    console.log('both words are the same');
    console.log('its a draw');
    tieCount = tieCount + 1;
    return 'it is a draw!! Both words guessed are the same W:' + winCount + ' L:' + lossCount + ' D:' + tieCount;
  }
};

var computerGenResult = function () {
  var randomNumber = Math.random() * 3;
  var randomNumberROff = Math.floor(randomNumber);
  var finalNumber = randomNumberROff + 1;
  return finalNumber;
};
