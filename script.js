var main = function (choice) {
  compChoice = randomNumber()
  playerChoice = userChoice(choice)
//0 = scissors, , 1 = paper , 2 = stone
  console.log(compChoice);
  console.log(playerChoice);

  var myOutputValue = 'Please type only the following: "scissors", "paper", "stone"';
  // Default messages to avoid retyping 
  var defaultWinMessage = 'You won! 💪💪💪 '
  var defaultPlayAgainMessage = 'Have a go again? type "scissors", "paper", "stone" and click submit'
  var defaultLoseMessage = 'You lose! 👎 '

  if (playerChoice == compChoice){
    var myOutputValue = `It's a draw! 😃 <br> ${defaultPlayAgainMessage}`
  }
  if (playerChoice == 0 && compChoice == 1){
    var myOutputValue = `The computer chose 📄 <br> You chose ✂ <br><br> ${defaultWinMessage} <br><br>${defaultPlayAgainMessage}`;
  }
  if (playerChoice == 0 && compChoice == 2){
    var myOutputValue = `The computer chose 🗿 <br> You chose ✂ <br><br> ${defaultLoseMessage} <br><br>${defaultPlayAgainMessage}`;
  }
  if (playerChoice == 1 && compChoice == 0 ){
    var myOutputValue = `The computer chose ✂ <br> You chose 📄  <br><br> ${defaultLoseMessage} <br><br>${defaultPlayAgainMessage}`;
  }
  if (playerChoice == 1 && compChoice == 2 ){
    var myOutputValue = `The computer chose 🗿 <br> You chose 📄  <br><br> ${defaultWinMessage} <br><br>${defaultPlayAgainMessage}`;
  }
  if (playerChoice == 2 && compChoice == 0 ){
    var myOutputValue = `The computer chose ✂ <br> You chose 🗿 <br><br> ${defaultWinMessage}  <br><br>${defaultPlayAgainMessage}`;
  }
  if (playerChoice == 2 && compChoice == 1 ){
    var myOutputValue = `The computer chose 📄  <br> You chose 🗿 <br><br> ${defaultLoseMessage} <br><br>${defaultPlayAgainMessage}`;  
  }

  //Reverse default messages, win to lose and vise versa, 3 = reversed scissors, 4 = reversed paper, 5= reversed stone
  if (playerChoice == 3){
    var playerChoice = 0
    if (playerChoice == compChoice){
      var myOutputValue = `It's a draw! 😃 <br> ${defaultPlayAgainMessage}`
    }
    if (playerChoice == 0 && compChoice == 1){
      var myOutputValue = `The computer chose 📄 <br> You chose ✂ <br><br> ${defaultLoseMessage} <br><br>${defaultPlayAgainMessage}`;
    }
    if (playerChoice == 0 && compChoice == 2){
      var myOutputValue = `The computer chose 🗿 <br> You chose ✂ <br><br> ${defaultWinMessage} <br><br>${defaultPlayAgainMessage}`;
    }
  }

  if (playerChoice == 4){
    var playerChoice = 1;
    if (playerChoice == compChoice){
      var myOutputValue = `It's a draw! 😃 <br> ${defaultPlayAgainMessage}`
    }
    if (playerChoice == 1 && compChoice == 0 ){
      var myOutputValue = `The computer chose ✂ <br> You chose 📄  <br><br> ${defaultWinMessage} <br><br>${defaultPlayAgainMessage}`;
    }
    if (playerChoice == 1 && compChoice == 2 ){
      var myOutputValue = `The computer chose 🗿 <br> You chose 📄  <br><br> ${defaultLoseMessage} <br><br>${defaultPlayAgainMessage}`;
    }
  }
    
  if (playerChoice == 5){
    var playerChoice = 2;
    if (playerChoice == compChoice){
      var myOutputValue = `It's a draw! 😃 <br> ${defaultPlayAgainMessage}`
    }
    if (playerChoice == 2 && compChoice == 0 ){
      var myOutputValue = `The computer chose ✂ <br> You chose 🗿 <br><br> ${defaultLoseMessage}  <br><br>${defaultPlayAgainMessage}`;
    }
    if (playerChoice == 2 && compChoice == 1){
      var myOutputValue = `The computer chose 📄  <br> You chose 🗿 <br><br> ${defaultWinMessage} <br><br>${defaultPlayAgainMessage}`;  
    }
  }
  return myOutputValue;
};
//Random number for the computer generated choice
var randomNumber = function(){
  var randomInt = Math.random() * 3
  var randomNum = Math.floor(randomInt)
  return randomNum
}

// Assigning user choice to number 0= scissors , 1 = paper , 2 = stone, reversed will be from 3 to 5
var userChoice = function(userInput){
  if (userInput == 'scissors'){
    return 0
  }
  if (userInput =='paper'){
    return 1
  } 
  if (userInput == 'stone'){
    return 2
  }
  if (userInput == 'reversed scissors'){
    return 3
  }
  if (userInput =='reversed paper'){
    return 4
  }
  if (userInput == 'reversed stone'){
  return 5
  }
};