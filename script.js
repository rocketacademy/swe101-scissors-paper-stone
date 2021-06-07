var main = function (choice) {
  compChoice = compRandomChoice()
  playerChoice = choice

  console.log(compChoice);
  console.log(playerChoice);

  var myOutputValue = 'Please type only the following: "scissors", "paper", "stone"';
  // Default messages
  var winMessage = 'You won! 💪💪💪 '
  var playAgainMessage = 'Have a go again? type "scissors", "paper", "stone" and click submit'
  var loseMessage = 'You lose! 👎 '

  var SCISSORS = 'scissors'
  var PAPER = 'paper'
  var STONE = 'stone'
  var REVERSED_SCISSORS = 'reversed scissors'
  var REVERSED_PAPER = 'reversed paper'
  var REVERSED_STONE = 'reversed stone'

  if (playerChoice == compChoice){
    playerChoiceFormatted = formatToObject(playerChoice)
    compChoiceFormatted = formatToObject(compChoice)
    var myOutputValue = `It's a draw! 😃 <br> You chose ${playerChoiceFormatted} <br> The Computer chose ${compChoiceFormatted}<br>${defaultPlayAgainMessage}`
  }

  if ((playerChoice == SCISSORS && compChoice == PAPER) || (playerChoice == PAPER && compChoice == STONE) || (playerChoice == STONE && compChoice == SCISSORS )){
    //win
    playerChoiceFormatted = formatToObject(playerChoice)
    compChoiceFormatted = formatToObject(compChoice)
    var myOutputValue = `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${winMessage}<br><br>${playAgainMessage}`
  }
  if ((playerChoice == SCISSORS && compChoice == STONE)|| (playerChoice == PAPER && compChoice == SCISSORS) || (playerChoice == STONE && compChoice == PAPER) ){
    playerChoiceFormatted = formatToObject(playerChoice)
    compChoiceFormatted = formatToObject(compChoice)
    var myOutputValue = `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${loseMessage}<br><br>${playAgainMessage}`
  }

  //Reverse game mode

  if ((playerChoice == REVERSED_SCISSORS && compChoice == PAPER) || (playerChoice == REVERSED_PAPER && compChoice == STONE) || (playerChoice == REVERSED_STONE && compChoice == SCISSORS )){
    //win
    playerChoiceFormatted = formatToObject(playerChoice)
    compChoiceFormatted = formatToObject(compChoice)
    var myOutputValue = `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${loseMessage}<br><br>${playAgainMessage}`
  }
  if ((playerChoice == REVERSED_SCISSORS && compChoice == STONE)|| (playerChoice == REVERSED_PAPER && compChoice == SCISSORS) || (playerChoice == REVERSED_STONE && compChoice == PAPER) ){
    playerChoiceFormatted = formatToObject(playerChoice)
    compChoiceFormatted = formatToObject(compChoice)
    var myOutputValue = `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${winMessage}<br><br>${playAgainMessage}`
  }
  return myOutputValue;
};


//Function for Random number for the computer generated choice
var compRandomChoice = function(){
  var randomInt = Math.random() * 3;
  var randomNum = Math.floor(randomInt);
  if (randomNum == 0){
    return 'scissors'
  }
  if (randomNum == 1){
    return 'paper'
  }

  if (randomNum == 2){
    return 'stone'
  }
}

// function to format the choices to emoji
var formatToObject = function(userInput){
  if (userInput == 'scissors' || userInput == 'reversed scissors'){
    return '✂'
  };
  if (userInput =='paper' || userInput == 'reversed paper'){
    return '📃'
  };
  if (userInput == 'stone' || 'reversed stone'){
    return '🪨'
  };
};

