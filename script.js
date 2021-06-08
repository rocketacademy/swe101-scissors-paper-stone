var userName = '';
var currentGameMode = 'waiting for user name';

var ROCK = 'rock'
var PAPER = 'paper';
var SCISSORS = 'scissors';

var numPlayerWins = 0;
var numComputerWins = 0;
var numDraws = 0;
var numTotalRounds = 0;



var main = function (input) {

  var  myOutputValue = '';
  if (currentGameMode == 'waiting for user name')  {
    userName = input;
    // now that we have the name, switch the mode
    currentGameMode = 'RPS game';
    myOutputValue = `Hello ${userName}, let's play rock-paper-scissors!`    
  
    //only run the next block of code if we are in dice game mode
  } else if ( currentGameMode == 'RPS game' ) { 
    myOutputValue = playRPSGame(userName, input);
  }
  return myOutputValue;
}
 

var playRPSGame = function(userName, userChoice) {
  var message = '';
   
  // first, check if userChoice is not Rock, Paper or Scissors
  if (userChoice != (ROCK || PAPER || SCISSORS)) {
    message = `Please input "rock", "paper" or "scissors" only`
    return message
  }

   var computerChoice = getComputerChoice();
   console.log('Your hand')
   console.log(userChoice)
   console.log('Computer hand')
   console.log(computerChoice)

   var winPercentage = calcWinPercentage(numPlayerWins, numTotalRounds)
   console.log('win percentage')
   console.log(winPercentage)
  
  if (userChoice == computerChoice) {
    numDraws = numDraws +1;
    numTotalRounds = numTotalRounds +1;
    message = `${userName} It is a draw! <br><br> You played: ${userChoice} <br><br> The computer played: ${computerChoice}. <br><br> Total rounds: ${numTotalRounds}. <br> ${userName}'s win rate: ${winPercentage}`
    return message
  }

  if (didPlayerBeatComputer(userChoice, computerChoice)){
    numPlayerWins = numPlayerWins + 1;
    numTotalRounds = numTotalRounds +1;
    message = `${userName}, you won! <br><br> You played: ${userChoice} <br><br> The computer played: ${computerChoice}. <br><br> Total rounds: ${numTotalRounds}. <br> ${userName}'s win rate: ${winPercentage}`
    return message
  }

  if (!didPlayerBeatComputer(userChoice, computerChoice)){
    numComputerWins = numComputerWins + 1;
    numTotalRounds = numTotalRounds +1;
    message = `${userName}, you lost! <br><br> You played: ${userChoice} <br><br> The computer played: ${computerChoice}. <br><br> Total rounds: ${numTotalRounds}. <br> ${userName}'s win rate: ${winPercentage}`
    return message
  }
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


var calcWinPercentage = function(wins, rounds) {
  return wins/rounds * 100;
};