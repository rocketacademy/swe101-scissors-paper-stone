var attempts = 0;
var wins = 0;



var main = function (input) {
  attempts = attempts + 1;
  var computerChoice = randomChoice();
  var myOutputValue = 'You lost... You played ' + input + ' and the computer played ' + computerChoice + '. You tried ' + attempts + ' time(s). Your win rate is ' + (wins / attempts * 100).toFixed(2) + '%.';
  console.log(computerChoice);

  if (input == computerChoice) {
    console.log('draw');
    wins = wins + 0.5;
    myOutputValue = 'Draw! You played ' + input + ' and the computer played ' + computerChoice + '. You tried ' + attempts + ' time(s). Your win rate is ' + (wins / attempts * 100).toFixed(2) + '%.';
  }

  if (input == 'stone' && computerChoice == 'scissors' || input == 'paper' && computerChoice == 'stone' || input == 'scissors' && computerChoice == 'paper') {
    console.log('win');
    wins = wins + 1;
    myOutputValue = 'You won! You played ' + input + ' and the computer played ' + computerChoice + '. You tried ' + attempts + ' time(s). Your win rate is ' + (wins / attempts * 100).toFixed(2) + '%.';
  }

  return myOutputValue;

};



var randomChoice = function () {
  var choices = ["stone", "paper", "scissors"];
  var randomNumber = choices[Math.floor(Math.random() * 3)];
  return randomNumber;
};

