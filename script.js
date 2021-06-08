var currentGameMode = 'waiting for player User Name'
var totalGamesPlayed = 0
var playerScore = 0
var compScore = 0
var totalDraw = 0
var userName = ''
var chosenGameMode = ''
var winningPlayer = ''
var currentWinner = ''

var SCISSORS = 'scissors'
var PAPER = 'paper'
var STONE = 'stone'

var winMessage = 'You won! 💪💪💪 '
var playAgainMessage = 'Have a go again? type "scissors", "paper", "stone" and click submit'
var loseMessage = 'You lose! 👎 '

var main = function (playerInput) {
  if (currentGameMode == 'waiting for player User Name'){
    userName = playerInput;
    currentGameMode = 'waiting for player to choose Game Mode'
    var myOutputValue = `Hi ${userName}! Let's play!<br> Please choose a Game Mode:<br><br>normal<br>reverse<br>korean<br>computer`
  }
  else if (currentGameMode == 'waiting for player to choose Game Mode'){
    if (playerInput == 'normal'|| playerInput == 'reverse' || playerInput == 'korean' || playerInput == 'computer'){
      //set mode to now playing if you get valid Game Mode
      currentGameMode = 'now playing'
      chosenGameMode = playerInput
      var myOutputValue = `You chose ${chosenGameMode}.<br>Let's begin!<br> Please type your choice above: 'scissors', 'paper', 'stone' `
    }
    else {
      //Player will not be able to exit currentGameMode if the input is invalid or not in the Game Mode choices
      var myOutputValue = `You chose ${chosenGameMode}.<br> Please input a valid game mode: <br><br>normal, reverse, korean, computer`
    }

  }
  //Player chose to play normal mode
  else if (currentGameMode=='now playing' && chosenGameMode == 'normal'){
    var compChoice = compRandomChoice()
    var playerChoice = playerInput
    //check if input is valid
    if (checkValidInput(playerChoice) == true){
      var myOutputValue= normalGameMode(playerChoice, compChoice, formatToObject(playerChoice), formatToObject(compChoice))
    }
    else{
      var myOutputValue = `You chose ${playerChoice}, that is invalid input! Please type: 'scissors', 'paper' or 'stone'`
    }
  }
  //Player chose to play reverse
   else if (currentGameMode=='now playing' && chosenGameMode == 'reverse'){
    var compChoice = compRandomChoice()
    var playerChoice = playerInput
    //check if input is valid
    if (checkValidInput(playerChoice) == true){
      var myOutputValue= reverseGameMode(playerChoice, compChoice, formatToObject(playerChoice), formatToObject(compChoice))
    }
    else{
      var myOutputValue = `You chose ${playerChoice}, that is invalid input! Please type: 'scissors', 'paper' or 'stone'`
    }
  }
  //player chose to play korean
    else if (currentGameMode=='now playing' && chosenGameMode == 'korean'){
    var compChoice = compRandomChoice()
    var playerChoice = playerInput
    //check if input is valid
      if (checkValidInput(playerChoice) == true){
        var myOutputValue= koreanGameMode(playerChoice, compChoice, formatToObject(playerChoice), formatToObject(compChoice))
    }
      else{
        var myOutputValue = `You chose ${playerChoice}, that is invalid input! Please type: 'scissors', 'paper' or 'stone'`
    }
  }
  //player chose to play computer vs computer
    else if (currentGameMode=='now playing' && chosenGameMode == 'computer'){
    var compChoice = compRandomChoice()
    var playerChoice = compRandomChoice()
    //check if input is valid
      if (checkValidInput(playerChoice) == true){
        var myOutputValue= computerGameMode(playerChoice, compChoice, formatToObject(playerChoice), formatToObject(compChoice))
    }
      else{
        var myOutputValue = `You chose ${playerChoice}, that is invalid input! Please type: 'scissors', 'paper' or 'stone'`
    }
  }
  return myOutputValue;
};

//Function for Normal Game Mode
var normalGameMode = function (playerChoice, compChoice, playerChoiceFormatted, compChoiceFormatted){
  totalGamesPlayed = totalGamesPlayed+1
//   var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed)
if (playerChoice == compChoice){
  totalDraw = totalDraw+1
  var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed,totalDraw)
  var outputMessage = `It's a draw! 😃 <br> You chose ${playerChoiceFormatted} <br> The Computer chose ${compChoiceFormatted}<br><br> ${gameStatus}`
  return outputMessage
  }

if ((playerChoice == SCISSORS && compChoice == PAPER) || (playerChoice == PAPER && compChoice == STONE) || (playerChoice == STONE && compChoice == SCISSORS )){
  playerScore = playerScore+1;
  var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed,totalDraw)
  var outputMessage = `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${winMessage}<br><br> ${gameStatus}`
  return outputMessage
  }
if ((playerChoice == SCISSORS && compChoice == STONE)|| (playerChoice == PAPER && compChoice == SCISSORS) || (playerChoice == STONE && compChoice == PAPER) ){
  compScore =compScore+1;
   var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed,totalDraw)
  var outputMessage= `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${loseMessage}<br><br> ${gameStatus}`
  return outputMessage
  }
};
//Function for Reverse Game mode
var reverseGameMode = function (playerChoice, compChoice, playerChoiceFormatted, compChoiceFormatted){
  totalGamesPlayed = totalGamesPlayed+1
if (playerChoice == compChoice){
  totalDraw = totalDraw+1
  var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed,totalDraw)
  var outputMessage = `It's a draw! 😃 <br> You chose ${playerChoiceFormatted} <br> The Computer chose ${compChoiceFormatted}<br><br> ${gameStatus}`
  return outputMessage
  }
if ((playerChoice == SCISSORS && compChoice == PAPER) || (playerChoice == PAPER && compChoice == STONE) || (playerChoice == STONE && compChoice == SCISSORS )){
  compScore =compScore+1;
  var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed,totalDraw)
  var outputMessage= `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${loseMessage}<br><br> ${gameStatus}`
  return outputMessage
  }
if ((playerChoice == SCISSORS && compChoice == STONE)|| (playerChoice == PAPER && compChoice == SCISSORS) || (playerChoice == STONE && compChoice == PAPER) ){
 playerScore = playerScore+1;
 var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed,totalDraw)
 var outputMessage = `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${winMessage}<br><br> ${gameStatus}`
  }
};
//Function for Korean Game mode
var koreanGameMode = function (playerChoice, compChoice, playerChoiceFormatted, compChoiceFormatted){
if (playerChoice == compChoice){
  winningPlayer = currentWinner
  var outputMessage = `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br> It's a Draw<br> Current Winner is: ${winningPlayer}<br>${winningPlayer} wins!`
  return outputMessage
  }
if ((playerChoice == SCISSORS && compChoice == PAPER) || (playerChoice == PAPER && compChoice == STONE) || (playerChoice == STONE && compChoice == SCISSORS )){
  currentWinner = userName
  var outputMessage = `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${winMessage}<br>${currentWinner}: "muk-jji-ppa!`
  return outputMessage
  }
if ((playerChoice == SCISSORS && compChoice == STONE)|| (playerChoice == PAPER && compChoice == SCISSORS) || (playerChoice == STONE && compChoice == PAPER) ){
  currentWinner = 'Computer';
  var outputMessage= `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${loseMessage}<br>${currentWinner}: "muk-jji-ppa!"`
  return outputMessage
  }
};
//Function for Computer Game Mode
var computerGameMode = function (playerChoice, compChoice, playerChoiceFormatted, compChoiceFormatted){
  totalGamesPlayed = totalGamesPlayed+1
if (playerChoice == compChoice){
  totalDraw = totalDraw+1
  var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed,totalDraw)
  var outputMessage = `It's a draw! 😃 <br> You chose ${playerChoiceFormatted} <br> The Computer chose ${compChoiceFormatted}<br><br> ${gameStatus}}`
  return outputMessage
  }

if ((playerChoice == SCISSORS && compChoice == PAPER) || (playerChoice == PAPER && compChoice == STONE) || (playerChoice == STONE && compChoice == SCISSORS )){
  playerScore = playerScore+1;
  var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed,totalDraw)
  var outputMessage = `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${winMessage}<br><br> ${gameStatus}`
  return outputMessage
  }
if ((playerChoice == SCISSORS && compChoice == STONE)|| (playerChoice == PAPER && compChoice == SCISSORS) || (playerChoice == STONE && compChoice == PAPER) ){
  compScore =compScore+1;
  var gameStatus = scoreBoard(userName, playerScore, compScore, totalGamesPlayed,totalDraw)
  var outputMessage= `The computer chose ${compChoiceFormatted}<br> You chose ${playerChoiceFormatted}<br><br>${loseMessage}<br><br> ${gameStatus}`
  return outputMessage
  }
}
//Function for Random number for the computer generated choice
var compRandomChoice = function(){
  var randomInt = Math.random() * 3;
  var randomNum = Math.floor(randomInt);
  if (randomNum == 0){
    return 'scissors'
  }
  if (randomNum == 1){
    return 'paper'
  };
  if (randomNum == 2){
    return 'stone'
  }
};

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
//Function for valid inputs
var checkValidInput = function(playerChoice){
  if (playerChoice== SCISSORS|| playerChoice==PAPER || playerChoice == STONE){
    return true
  }
  else{
    return false
  }
};
//Function for Score Boards
var scoreBoard = function(userName, playerScore, compScore, totalGamesPlayed, totalDraw){
  if (playerScore>compScore){
    var gameStatus = `Nice! Doing Great! `
  }
  else{
    var gameStatus = 'You can do better than that!'
  }
  var playPercentage = (playerScore/totalGamesPlayed)*100
  
  if (playerScore == 0 && compScore == 0){
    var outputMessage = `Draws: ${totalDraw}`
  }
  else{
    var outputMessage = `${userName}'s Score: ${playerScore}<br> Computers Score: ${compScore}<br>Draws: ${totalDraw}<br><br>Yow ${userName}! You are winning ${playPercentage.toFixed(2)}%  of the Game, ${gameStatus}<br><br>${playAgainMessage}`
  }
  return outputMessage
}