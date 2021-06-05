var ROCK = 'rock'
var PAPER = 'paper';
var SCISSORS = 'scissors';


//To do: need to check how to print the number of wins (sth to do with global variables)
// var numPlayerWins = 0;
// var numComputerWins = 0;
// var numDraws = 0;



var main = function (input) {
  var playerChoice = input;
   var computerChoice = getComputerChoice();
   var myOutputValue = 'You lost! You chose: ' +input+  '<br> The computer chose: ' +computerChoice;
   console.log('Your choice')
   console.log(input)
   console.log('Computer choice')
   console.log(computerChoice)
  if (input != (ROCK || PAPER || SCISSORS)) {
    return 'Please input "rock", "paper" or "scissors" only'
  }
  if (playerChoice == computerChoice) {
    numDraws = numDraws +1;
    myOutputValue = 'It is a draw!' 
  }
  if (didPlayerBeatComputer(playerChoice, computerChoice)){
    numPlayerWins = numPlayerWins + 1;
    myOutputValue = 'You won! You chose: ' +input+ '<br> The computer chose: ' +computerChoice
  }
  numComputerWins = numComputerWins + 1;
  return myOutputValue;
 };


var getComputerChoice = function() {
  var randomNumber = Math.floor(Math.random() *3);
  if (randomNumber == 0) {
    return ROCK;
  }
  if (randomNumber == 1) {
    return PAPER;
  }
  return SCISSORS;  
};

var didPlayerBeatComputer = function(playerChoice, computerChoice) {
  return (playerChoice == ROCK && computerChoice == SCISSORS) ||
  (playerChoice == SCISSORS && computerChoice == PAPER) ||
  (playerChoice == PAPER && computerChoice == ROCK)
};

